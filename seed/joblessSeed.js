const Article = require('../models/Articles');

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');

    Article.deleteMany({})
      .then(() => Article.collection.insertMany(workoutSeed))
      .then((data) => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();
