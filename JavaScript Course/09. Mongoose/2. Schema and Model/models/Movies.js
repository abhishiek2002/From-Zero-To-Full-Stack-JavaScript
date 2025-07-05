import mongoose from "mongoose";

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  // ratings: Number,
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model (that is collection in specified database)

const movieModal = mongoose.model("Movie", movieSchema); // convert "Movie" into "movies"

// inserting document in modal

const createDoc = async () => {
  try {
    // creating new document
    const m1 = new movieModal({
      name: "Dhoom",
      ratings: 4,
      money: 600035005,
      genre: ["action", "adventure"],
      isActive: false,
      comments: [{ value: "That was a amazing movie." }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// inserting many documents

const insertManyDoc = async () => {
  try {
    const m2 = new movieModal({
      name: "Tumbaad",
      ratings: 4.9,
      money: 700045001,
      genre: ["horror", "adventure"],
      isActive: true,
      comments: [{ value: "That was a amazing movie ever create in India." }],
    });
    const m3 = new movieModal({
      name: "Pink",
      ratings: 4.5,
      money: 600035005,
      genre: ["drama"],
      isActive: false,
      comments: [{ value: "Good movie for family." }],
    });
    const m4 = new movieModal({
      name: "Hindi Medium",
      ratings: 4.7,
      money: 600035005,
      genre: ["comedy", "drama"],
      isActive: true,
      comments: [{ value: "That was a amazing movie." }],
    });
    const m5 = new movieModal({
      name: "RRR",
      ratings: 5,
      money: 600035005,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was a amazing movie." }],
    });
    const result = await movieModal.insertMany([m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// retrieving documents

const allDoc = async () => {
  try {
    const result = await movieModal.find(); // All documentation
    // console.log(result);

    console.clear();

    // Iterating over document
    result.forEach((movie) => {
      console.log(`Name: ${movie.name} , Ratings: ${movie.ratings}`);
    });
  } catch (error) {
    console.log(error);
  }
};

const singleDoc = async () => {
  try {
    // const result = await movieModal.findById('671210d88c1a29ec3f5c499d'); // single documentation using unique _id

    const result = await movieModal.findById(
      "671210d88c1a29ec3f5c499d",
      "name"
    ); // single documentation using uniqur _id specific field
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const docWithField = async () => {
  try {
    // const result = await movieModal.find({ name: "RRR"});

    // const result = await movieModal.find().limit(2);

    // const result = await movieModal.find().skip(2);

    // const result = await movieModal.find({ ratings: { $gt: 4.5 } }).limit(2);

    // const result = await movieModal.find({ratings: { $ne: 4.5 }});  // ne 👉 not equal

    // const result = await movieModal.find().countDocuments();

    // const result = await movieModal.find().sort({ name: 1});

    // const result = await movieModal.find({ $and : [{money: 600035005 }, {ratings: 4.7 }]});

    // const result = await movieModal.find({ $or : [{ratings: 4.5 }, {ratings: 4.7 }]});

    const result = await movieModal.find({
      $nor: [{ money: 600035005 }, { ratings: 4.7 }],
    });

    console.clear();

    console.log();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// updateOne

const updateById = async (id) => {
  try {
    // updateOne(filter, what to change)
    const result = await movieModal.updateOne({ _id: id }, { ratings: 5 });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// updateMany

const updateMany = async () => {
  try {
    // updateOne(filter, what to change)
    const result = await movieModal.updateMany({ ratings: 5}, { ratings: 4.9 })
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// deletion

const deleteDoc = async () => {
  try {
    // (filter, what to change)
    const result = await movieModal.findByIdAndDelete('67120b38ba317e44c3d96308');
    // const result = await movieModal.deleteOne({ name: "Dhoom" });
    // const result = await movieModal.deleteMany({ ratings: 4 });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export {
  createDoc,
  insertManyDoc,
  allDoc,
  singleDoc,
  docWithField,
  updateById,
  updateMany,
  deleteDoc
};
