# FizzBuzz or String Reverse
A small react app using redux

## Commands
--You will need to run npm install to install dependencies--
To start server, run `npm start` from the top-level directory (where `package.json` is). Open browser and navigate to `localhost:8083`.

## Using the app
Upon loading the app, you will be prompted to enter a number into the FizzBuzz application. On submit (of a number between 1 and 100), you will see the output underneat the input box.

If you click the blue button, it will switch to a string-reverser app. Here you should input any string, and the output will be displayed below again.


## Notes

I did not use create-react-app to begin this application, as I wanted to start from scratch to understand completely how to upstart react applications with webpack. I dabbled with a few methodologies of React, namely, defining components as classes and using pure functions (like FizzBuzz.js). I also tried to use as much ES6 syntax as possible. 

In Toggle.js, state is managed via redux. While in UserInput.js, state is managed without redux. I went this route to try to give myself some experience in both ways of managing state. I tried as much as possible to lift state up into App.js.

Enjoy!

