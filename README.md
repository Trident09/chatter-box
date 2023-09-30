# chatter-box

## Description
This is a chat application that allows users to chat with each other in real time. Users can login with their google account and chat with other users in the chat room. The chat room is public where all users can see the messages. This is mostly a front end application that uses firebase for the backend. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
To install the application, clone the repository and run `npm install` to install the dependencies.
 Create a firebase project and add the config variables to a ```.env``` file in the root directory of the project
   ``` cmd
      REACT_APP_API_KEY=
	  REACT_APP_AUTHDOMAIN=
	  REACT_APP_PROJECT_ID=
	  REACT_APP_STORAGE_BUCKET=
	  REACT_APP_MESSAGING_SENDER_ID=
	  REACT_APP_APP_ID=
   ```
Run `npm start` to start the application.
If you are hosting this application on firebase, make sure to add your domain to the authorized domains in the firebase console. Or else you won't be able to login with google. 

## Usage
The application is deployed on firebase and can be accessed at https://chatter-box-teal.vercel.app/

## License
MIT License 
