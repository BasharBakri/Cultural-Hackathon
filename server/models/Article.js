import mongoose from "mongoose";


const ArticleSchema = new mongoose.Schema({
  header: {
    type: String,
    required: [true, 'Please add a title'],
    // unique: true,
    trim: true,
  },
  picture: String,
  description: String,
  link: String,
  date: String,
  websitename: String,
  category: String,
  isInHomePage: {
    type: Boolean,
    default: false
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
},
  {
    toJSON: {
      virtuals: true,
      // Hide the __v field from the frontend
      transform: function (_, ret) {
        delete ret.__v;
      },
    },
    toObject: {
      virtuals: true,
      // Hide the __v field from the frontend
      transform: function (_, ret) {
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("Article", ArticleSchema);