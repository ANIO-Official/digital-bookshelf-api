# Digital Bookshelf API 📚 | Backend

A lab study focused on simulating building a backend for a new “Digital Bookshelf” application. The maint task is to create a RESTful API that allows librarians to manage their book inventory. (Full CRUD)

## Module 13: Lab 2 

## Overview
The core focus of this lab is to:

- Define a Mongoose schema with appropriate data types and validation.
- Compile a schema into a Mongoose model.
- Build a full CRUD (Create, Read, Update, Delete) API using Express.
- Implement separate, modular routes for your API endpoints.
- Use Mongoose model methods to interact with a MongoDB database.
- Handle request data from req.body and req.params.

### GitHub Link
https://github.com/ANIO-Official/digital-bookshelf-api

## How to Use
1.  Clone the repository or Download the ZIP file and extract the files.
2.  Open the file in Visual Studio Code.
3.  Open the Terminal using Ctrl + ~
4.  `cd` into the directory 'digital-bookshelf-api' in the terminal. Like so: 
    `cd digital-bookshelf-api`

    **Ensure NPM is is installed for the project to run:** 

      inside the terminal window run `npm i` to install npm
5.  Create a `.env` file in the root directory/folder ( digital-bookshelf-api ). And add in your personal connection string from [MongoDB]( https://www.mongodb.com) in the following format `MONGO_URI=your_connection_string_goes_here/digital_bookshelf` *(It will work, the ping will occur to your admin database)*
6.  (Once NPM is indeed installed in the project file directory, you'll see a node modules folder) Run the project using `node server.js` in the terminal. *(No nodemon this time)*

7.  You should see a message appear. Follow the link: "http://localhost:3000/"

There will be a button to direct you to the main bookshelf directory with a list of all endpoints from that url to use with Thunderclient / Postman / Equivalent tester. You may also test specifically viewing 

## My process

 1. Initialized repo and npm. Installed all necessary & personally preferenced dev packages (mongoose, express, dotenv, nodemon). Added server.js, .gitignore, and .env files.
 2. Added .env and node_modules to .gitignore
 3. Created basic File Structure.
 4. Created Database Connection inside `db` directory via Mongoose & MongoDB URI
 5. Imported dotEnv, Express, and Mongoose connection function. Created a basic server setup with an express instance and port number.
 6. Established connection with MongoDB via calling the imported conenction function. Added a root route `'/'` and listener. Tested base route and connection via console log, thunderclient, and browser. 
 7. Created Book Schema & compiled schema into model for export. 
 8. Created Book Routes and Book Controllers for route functional logic. Ensured use of `async/await` and `try...catch` for accessing (creating/viewing/editing/deleting books) in the MongoDB database `digital_bookshelf`.
 9. Added middleware and mounted the book router at the base path '/bookshelf'
 10. Final testing with Thunderclient and the browser. Touch ups.

### Built with

- Node.js
- Express
- MongoDB / Mongoose
- Javascript
- dotenv
- Nodemon

### Reflection

**Why is it beneficial to separate your routes, models, and database connection into different directories?**

---

**What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?**

---

**In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?**

---

### Useful resources

**PerScholas** | MongoDB Fundamentals | Lessons 1-4


## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)