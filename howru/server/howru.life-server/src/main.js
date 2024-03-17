import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import { auth, signInWithEmailAndPassword, FbApp, db, storage, collection } from './firebase.js';
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
	
	try {
		const newUser = {
		...req.body,
      
		}
    
		const userRef = db.collection('Users');
		const userDocRef = await userRef.add(newUser);
		
		console.log("User added successfully");
		res.json({ id: userDocRef.id, data: newUser})
	
	} catch(error) {
		res.status(400).send("An error has occurred:", error.code, error.message);
	}
	
});

/* This is the API endpoint for logging in with an existing account */
app.post('/api/auth/login', (req, res) => {
	const { email, password } = req.body;
  	
	signInWithEmailAndPassword(auth, email, password);
  
	const token = generateToken(128);

    res.status(200).json( {token} );
  
});

ViteExpress.listen(app, process.env.SERVER_PORT, () =>
  console.log("Server is listening on port:", process.env.SERVER_PORT),
);
