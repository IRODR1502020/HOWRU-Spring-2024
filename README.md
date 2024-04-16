# HOWRU-Spring-2024
This repo is for CIS 4951 - Capstone II, Project: HOWRU.life app. Group work will be placed here. Good luck!

# Stress and Anxiety Management - HOWRU.Life Documentation
This is the README for the web application ONLY please refer to the Android app to view that applications README.

## File Structure

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**
```bash
howru
├── public
	|	├── audio
	|	|	├── ...
	|	├── ...
├── server
	|	├── src/
	|	|	├── utilities/
	|	|	├── firebase.js
	|	|	├── main.js
	|	├── .env
├── src
│   ├── Assets/
	| 	├── ...
	├── Components/
	|	├── componentName/		
    	├── componentNameStyling/
		|	|	├── componentNameStyling.css
		|	├── componentName.js
	├── Styling/
	|	├── ...
```

## File Structure Organization Rules
The Stress and Anxiety Management web app is quite large. Therefore a structure must be kept in order to maintain readability and to easily find everything.
The <b>public folder</b> is to be able to easily access a document from anywhere in the application. Things like audio/images and other files that would be posted on the web app. 
* <b>server folder</b>
	* The server folder is meant for anything that will be communicating with the database/APIs ect. The information for the database is stored in a .env file that your team would create and reference throughout the folder. This was not added to the project due to security. 
	* All API endpoints are created in the main.js
* <b>src folder</b>
	* Assets/ is for the images/audio 
*Components
When creating pages in the components folder here are some things to keep in mind:
    * Each page has its own folder within the components/
    * Specific components for a page should be in a folder within the page's folder.
    * Components that are in many pages i.e. navigation menu should be within the GeneralComponents folder.
* <b>Styling folder</b>
	* Used for any global commonly used styling throughout the whole web app.

## How to Start web app
* Prerequisites: Node JS, React JS, Express JS
	* First start client app by opening up the terminal in howru/ and type the following:
		* <b>npm install</b>
		* <b>npm start</b>
	* Opening up a separate terminal in howru/server/ and leaving the client app terminal open in the background type the following:
		* <b>npm install</b>
		* <b>npm run dev</b>

## License

This project is licensed under the [BSD-Clause 3](LICENSE).
