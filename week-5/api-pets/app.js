/*const express = require("express");
const app = express();

const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("./petHandlers"); 

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /pets
app.get("/pets", getAllPets);

// POST /pets
app.post("/pets", createPet);

// GET /pets/:petId
app.get("/pets/:petId", getPetById);

// PUT /pets/:petId
app.put("/pets/:petId", updatePet);

// DELETE /pets/:petId
app.delete("/pets/:petId", deletePet);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

// app.js

/*const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const blog = {
  title: 'New Blog',
  body: 'This is the content of the new blog.',
  userId: 1,
};

const addBlog = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(blog),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  console.log('New Blog added:', json);
};

// Example Usage
addBlog();*/
// app.js
/*const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const fetchBlogs = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log('All Blogs:', data);
};

// Example Usage
fetchBlogs();*/
// app.js
/*const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogId = 1; // Replace with the desired blog ID for testing

const fetchBlog = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  console.log('Single Blog:', data);
};

// Example Usage
fetchBlog(blogId);*/
