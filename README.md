Article on this topic on [dev.to](https://dev.to/mallikarjunht/react-todo-with-firebase-for-database-and-deploy-2cnm)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Firebase SetUp and Deploy

install firebase tools cli to continue 
# step 1: 
  `npm install -g firebase-tools`
  ---
# step 2:
  Login to firebase locally
  `firebase login`
 
  then chose the account you will be using to host and add firestore to.
  ---
# step 3: 

   go to firebase [console](https://firebase.google.com/?gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv-P7s6GIG-goXo4mNEdXAeEzkuEgdThMC-mwfFB2hkiOXN6_QcfbD8aAjm-EALw_wcB) 
    * go to console
    * Add project
    * onece project is set 
    * chose firestore and make initial setup 
      * remember chose datbase in *testmode* for biginers once app is set you can always lock the database.
    * copy the config and add in **config.js** file of the project  
    
   ---
 # step 4:
   initilise the firebase in app
   `firebase init`
   * use **spacebar** to select choose *Hosting*
   * choose build folder remember this is the folder that you will be using while deplying `! dont put in public as it already contain index.html file `
   * choose single page application 
   * if needed choose CI/CD for my case i have not  
   ---
   
# step 5: 
   build the project to install dependency before deploying
    `npm run build` this is normail npm command but this time we will be doing on the build folder we created 
    **!NOTE** this will create a mimina folder to serve app faster refer React docks for more 
    ---
    
# Step 6:
 finally we will be deploying our App 
 `firebase deploy`
 and you will get a public URL use that to view your App
 
 
 Happy Learning :books:
    
