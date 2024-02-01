const mongoose = require('mongoose');
const URL = 'mongodb://SiangWebPS:SiangWebPS@ac-5ekbler-shard-00-00.undoepn.mongodb.net:27017,ac-5ekbler-shard-00-01.undoepn.mongodb.net:27017,ac-5ekbler-shard-00-02.undoepn.mongodb.net:27017/siangDatabase?ssl=true&replicaSet=atlas-n3oced-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB = async () => {

  mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = mongoDB;