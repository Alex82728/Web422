const mongoose = require("mongoose");

const connectionString = "mongodb+srv://alexsandumd:349566695@cluster0.qcpkk.mongodb.net/myDatabase";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Connection error:", err);
  });
