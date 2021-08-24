const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("Base de datos online")
  } catch (error) {
      console.log(error.message)
      throw new Error("Error, vea los logs para mas información");
  }
};

module.exports = connectDatabase;
