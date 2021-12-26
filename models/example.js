// import mongoose 
import mongoose from "mongoose";

// Create Schema
const DataSchema = mongoose.Schema({
  name: String
});

// export model
export default mongoose.model('Data', DataSchema);