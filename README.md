# Interview Prep API  
## SBA 318 – Node.js & Express

This is a simple, interactive Node.js & Express app to help practice both behavioral and technical interview questions. It was built as part of a software engineering bootcamp project.. but let’s be real, it’s also my personal study buddy.

This project was inspired by the upcoming JRA interview and designed to prep me (and maybe others) for real-world technical and behavioral assessments... because why not turn anxiety into something functional? Hehe.

## Features

- Practice technical interview questions with input boxes to draft and revise answers
- Behavioral question prompts to support STAR-format responses
- Save your answers locally using browser localStorage
- Theme toggle: switch between light mode and dark mode (for the day walkers and the vampires)
- Clean and simple interface
- A space to keep your 6 go to stories that can be reshaped for any behavioral question


## SBA 318 Lab Requirements

The purpose of this lab is to demonstrate understanding of Express.js fundamentals and build a functional full-stack web application using Node.js and EJS. The project should include:

- A functional Express.js server set up in `app.js`
- Proper use of `express.Router()` for modular routing
- EJS templates for rendering views
- Static file serving (e.g., CSS or JS files from a `public` directory)
- Two or more dynamic routes that render data from a JSON file
- At least one route displaying data using `res.render()`
- A clean folder structure (with folders for routes, data, public, and views)
- Use of middleware (`express.json()`, `express.urlencoded()`, etc.)
- Git version control with frequent, descriptive commits
- Deployment to a public repository (GitHub)

## Technologies Used

- Node.js
- Express.js
- EJS templating
- HTML & CSS
- Vanilla JavaScript (no libraries/frameworks)
- LocalStorage (for saving answers)

## Note 

This app uses localStorage instead of a database, so update and delete functionality is handled entirely client side. As a result, PUT/DELETE routes weren’t required. Query parameters weren’t used since the app doesn’t require filtering or dynamic queries but if expanded with a backend, RESTful routes and query handling would be implemented accordingly.

## Getting Started

To run this project locally:

1. Clone the repository:
git clone https://github.com/eramjabeen1/SBA318.git cd SBA318

2. Install dependencies: npm install

3. Start the development server: node app.js

4. Open your browser and go to: http://localhost:3000


## Project Structure

SBA318/ ├── data/ JSON files with interview questions ├── public/ CSS files ├── routes/ Express route handlers ├── views/ EJS templates for pages ├── app.js Main Express app └── README.md Project overview

## Screenshots
![image](https://github.com/user-attachments/assets/827318a6-5ad0-4f4d-b008-0b31dd66675a)
![image](https://github.com/user-attachments/assets/68ed5db1-94cc-499e-9f34-0bc9d272477f)
![image](https://github.com/user-attachments/assets/e34278d1-dcd1-412f-aab8-44c242477c3d)
![image](https://github.com/user-attachments/assets/0d7b23fe-a2e5-4e15-8624-a537d5850f87)
![image](https://github.com/user-attachments/assets/91a1dfe5-3de4-4bf5-9832-494a322c0539)
![image](https://github.com/user-attachments/assets/a34ed1e6-e9f4-413a-a152-330b1bd8d181)
![image](https://github.com/user-attachments/assets/433501ed-bd85-4754-bac6-ac3f8b386579)
![image](https://github.com/user-attachments/assets/00345ef6-7d71-4d11-a75a-c245504a45a4)

This app is currently in development. I attempted deployment through Render to make it accessible for classmates, but ran into build issues due to the use of localStorage (no database) and directory structure. Deployment will be added soon. In the meantime, you can explore all the features through the screenshots above and the full code in this repo!

P.S. The titles on the "Technical Interview Questions" and "Behavioral Interview Questions" pages feature a fun typewriter-style animation to keep the experience engaging!



## In Development

- Building a feature to download user answers as a PDF or text file
- Planning to add clean UI screenshots to the README
- Updating CSS to better center questions and improve layout responsiveness
- Adding a dedicated section on the homepage to help users craft STAR method responses
- Creating a “6 Key Stories” worksheet area where users can draft and revise their go to behavioral examples
- Deploy the app for public use


## Future Improvements

- Add a progress tracker for completed questions
- Include timer-based practice sessions
- Option to export all answers in a bundled interview packet
- Add toggle to switch between “Beginner” and “Advanced” technical questions
- Let users tag questions as “easy,” “medium,” or “hard” for personalized review
- Create a printable “interview cheat sheet” with saved notes and tips
- Build a gentle reminder feature to revisit answers weekly and refine them
- Add a section for uploading or linking resumes, so users can tailor answers to their actual experience
- Include a motivational quote or prayer section on the homepage for interview day encouragement
- Allow users to add and manage their own custom questions for more personalized prep
- Create dedicated sections for FAANG-style and FinTech-specific interview questions

## About

Created by Eram Jabeen as part of the Per Scholas Software Engineering bootcamp.
This project reflects not just technical growth, but a deep commitment to user-centered design and purposeful learning.

Built with the intention to turn real world interview pressure into an opportunity for clarity, confidence, reflection and personal growth, because tech isn’t just about what you build, but why you build it.

