import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import { auth, 
	signInWithEmailAndPassword, 
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,	
	FbApp, db, storage, collection } from './firebase.js';
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
	console.log(email, name, password);
	
	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed up 
		// Add the users name into a firestore table for retrieval later
		const user = userCredential.user;
		res.status(200).json( 'User created successfully.' );
	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		res.status(401).json({ errorCode, errorMessage });
	  });
	
});

/* This is the API endpoint for logging in with an existing account */
app.post('/api/auth/login', (req, res) => {
	const { email, password } = req.body;
	//console.log(email, password);
	
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		const token = generateToken(128);
		res.status(200).json( {token} );
	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		res.status(401).json({ errorCode, errorMessage });
	  });
  
});

/* This is the API endpoint for resetting an existing users password */
app.post('/api/auth/reset', (req, res) => {
	const { email } = req.body;
	//console.log(email);
	
	sendPasswordResetEmail(auth, email);
  
});

ViteExpress.listen(app, process.env.SERVER_PORT, () =>
  console.log("Server is listening on port:", process.env.SERVER_PORT),
);
