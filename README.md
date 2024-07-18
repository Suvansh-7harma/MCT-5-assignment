# Geekster Quiz App

## Introduction
The Geekster Quiz App is a simple React-based quiz application. It allows users to answer multiple-choice questions and receive their scores at the end of the quiz. The application features randomized questions, score tracking, and a reset functionality.

## Features
- Randomly scrambles the order of questions on reset
- Automatic transition to the next question after a delay
- Score tracking for correct answers
- Display of the final score

## Installation
To install and run the Geekster Quiz App locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Suvansh-7harma/MCT-5-assignment.git
   Install dependencies:
npm install
Start the development server:

npm start
Usage
Once the development server is running, you can access the application in your web browser at http://localhost:3000.

The application will present a series of multiple-choice questions.
Click on an option to select your answer.
After a brief delay, the application will automatically transition to the next question.
At the end of the quiz, your score will be displayed.
**Project Structure**

├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Data/
│   │   └── QuizData.js
│   ├── components/
│   │   ├── Quiz.js
│   │   └── QuizResult.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md

public/: Contains the HTML template and static assets.
src/: Contains the source code for the application.
Data/: Contains the quiz data.
components/: Contains the React components.
index.css: Contains the global styles.
index.js: The entry point of the application.
Contributing
Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

