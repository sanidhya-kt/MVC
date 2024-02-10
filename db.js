const mongoose = require("mongoose");

async function connectDatabase() {
  mongoose.connect("mongodb://localhost:27017/Rest_API")
  .then((data) => {
    console.log(`mongodb connected with server: ${data.connection.host}`)
  });
}

module.exports = { connectDatabase };
