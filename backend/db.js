const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://aryan-server:aryan_server_cluster_192.168.0.0.1@react.pi9pmgy.mongodb.net/test";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo successfully");
  });
};
module.exports = connectToMongo;
