import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import { auth, 
	signInWithEmailAndPassword, 
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,	
	db, collection, doc, setDoc, getDoc, signOut } from './firebase.js';
import generateToken from "./Utilities/LoginToken.js";

const app = express();
app.use(cors());
app.use(express.json());

/* 
	This is the API endpoint to check if the server is awake & accepting requests.
	For debug purposes just to make sure the server is on.
	TODO: Find a way to get the health of the API using a request. 
		Ex. Tell the client the server/API is unavailable and will have reduced functionality.
*/
app.get("/api/health", (req, res) => {
	
	res.status(200).send("Server seems to be working.")
	
});

/* This is the API endpoint for registering a new user */
app.post("/api/auth/register", async (req, res) => {
	const { email, name, password } = req.body;
	//console.log(email, name, password);
	
	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed up 
		
		const userEmail = userCredential.user.email;
		const token = generateToken(128);
		const userDocRef = doc(db, "Users", userCredential.user.uid );
		setDoc(userDocRef, {"email": email, "name": name})
		  .then(() => {
			  console.log("User successfully created:", userCredential.user.uid);
		  })
		res.status(200).json({ name, userEmail, token })
	  })
	  .catch((error) => {
		if (error.code === "auth/email-already-in-use") {
			const errorMessage = "Bad request. Check if user account exists already, or check server connection."
			res.status(400).json({ errorMessage });
		}
	  });
	
});

/* This is the API endpoint for logging in with an existing account */
app.post('/api/auth/login', (req, res) => {
	const { email, password } = req.body;
	//console.log(email, password);

	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in
		//console.log(userCredential)
		
		const userDocRef = doc(db, "Users", userCredential.user.uid );
		getDoc(userDocRef)
		  .then((userDocRef) => {
			console.log("User document accessed:", userCredential.user.uid);
			return userDocRef.data().name
		  })
		  .then((name) => {
			const userName = name;
			const userEmail = userCredential.user.email;
			const token = generateToken(128);
			return res.status(200).json( { userName, userEmail, token} );
		  }).catch((error) => {
			console.log(error)
		  })
	  })
	  .catch((error) => {
		if (error.code === "auth/invalid-credential") {
			const errorMessage = "Incorrect credentials. Try again."
			res.status(401).json({ errorMessage });
		}
	  });
  
});

/* This is the API endpoint for resetting an existing users password */
app.post('/api/auth/reset', (req, res) => {
	const { email } = req.body;
	//console.log(email);
	// TODO: Check if account with email exists first
	
	sendPasswordResetEmail(auth, email);
  
});

app.post('/api/auth/logout', (req, res) => {
	//const { email } = req.body;
	
	signOut(auth)
	.then(() => {
		// Sign-out successful.
		res.status(200).json({message: "Logged out successfully."})
	}).catch((error) => {
		const errorMessage = error.message;
		res.status(400).json({ errorMessage });
	});
	

});

ViteExpress.listen(app, process.env.SERVER_PORT, () =>
  console.log("Server is listening on port:", process.env.SERVER_PORT),
);
