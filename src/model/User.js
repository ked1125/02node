// the current file is equivalent to java JPA

const mongoose = require("mongoose"); // searches for mongoose module inside node_modules folder, whereever it is

// mongoose.Schema();
// mongoose.model();

// write schemas
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      // 꼭 필요한 것
    },
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    age: Number,
    email: String,
  },
  { timestamps: true }
); // the second {} is the timestamp // mongoose.Schema({}, {timestamps:true})
const User = mongoose.model("user", UserSchema); // collection "users" will be created in mongoDB. collection "users" will contain UserSchema.

module.exports = { User };
