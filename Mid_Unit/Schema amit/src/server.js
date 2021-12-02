const express = require("express");
const mongoose = require("mongoose");



const bookSchema = new mongoose.Schema(
  {
    book_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

const sectionSchema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
    book_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Section = mongoose.model("section", sectionSchema);

const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    book_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema);

const checkoutSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },

    book_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Checkout = mongoose.model("checkout", checkoutSchema);

const app = express();

app.use(express.json());

app.post("/checkout", async (req, res) => {
  const user = await Checkout.create(req.body);
  return res.status(201).send(user);
});

app.get("/checkout", async (req, res) => {
  const user = await Checkout.find().populate({
    path: "book_ids",
    select: "book_name",
  });
  return res.status(201).send(user);
});

app.post("/section", async (req, res) => {
  const user = await Section.create(req.body);
  return res.status(201).send(user);
});
app.get("/section", async (req, res) => {
  const user = await Section.find();
  return res.status(201).send(user);
});

app.post("/book", async (req, res) => {
  const user = await Book.create(req.body);
  return res.status(201).send(user);
});

app.get("/book", async (req, res) => {
  const user = await Book.find();
  return res.status(201).send(user);
});

app.post("/author", async (req, res) => {
  const user = await Author.create(req.body);
  return res.status(201).send(user);
});

app.get("/author", async (req, res) => {
  const user = await Author.find();
  return res.status(201).send(user);
});

app.listen(3000, async function () {
  await connect();
  console.log("port is again running");
});
