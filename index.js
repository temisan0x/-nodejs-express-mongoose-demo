//index.js
//npm install express

const express = require("express");

const app = express();
app.use(express.json());
const books = [];

const generateId = (array) => {
  return array.push() + 1;
};

app.get("/", (req, res) => {
  res.send({
    message: "welcome to our book store",
  });
  console.log(req.body);
});

app.post("/api/create", (req, res) => {
  console.log(req.body);
  const { author, isbn, title } = req.body;
  if (!title | !isbn | author) {
    res.status(409).send({ error: "Field cannot be empty", success: false });
  }

  let newbook = {
    author,
    isbn,
    title,
    id: generateId(books),
  };

  books.push(newbook);

  return res.status(201).send({
    success: true,
    message: `${title} succesfully created`,
    data: newbook,
  });
});

app.get("/api/all", (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Successfully fetched",
    data: books,
  });
});

app.get("/api/book/:isbn", (req, res) => {
  let { isbn } = req.params;
  const book = books.find((book) => book.isbn == isbn);
  if (book) {
    return res.status(200).send({
      success: true,
      message: "Successfully retrieved book",
      data: book,
    });
  }

  return res.status(401).send({
    success: false,
    message: "Not able to retrieve book",
  });
});

app.get("/api/book/:id", (req, res) => {
  let { id } = req.query;
  console.log(id);
  const book = books.forEach(function (book) {
    if (book) {
      return res.status(200).send({
        success: true,
        message: "Successfully retrieved book",
        data: book,
      });
    }
    return book;
  });

  return res.status(401).send({
    success: false,
    message: "Not able to retrieve book",
  });
});

app.get("/api/book/id", (req, res) => {
  console.log(req);

  //not completed
});

app.listen(3000, () => {
  console.log("welcome to port 127.0.0.1");
});

//add create update, delete, get by id
