# Would you rather

 A web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

 This project is the Would Your Rather application for the Udacity Nanodegree. The project uses the following technologies:
- React for rendering UI
- Redux for state management
- semantic-ui-react  for presentation components.


## How to

Install project's required file with `npm install`

Run project locally with `yarn start`

## Where the data comes from

The Data for this application comes from a static set up api's provided by Udacity. These api's can be found in the _Data.js file and contain the following methods:

1) `_getUsers()`: Returns an object containing all of the users registered to use the application

2) `_getQuestions()`: Returns an object containing all of the questions stored in the database.

3) `_saveQuestion(question)`: Saves a question to the database.

4) `_saveQuestionAnswer`: Saves each user's answer for a given question to the database.
