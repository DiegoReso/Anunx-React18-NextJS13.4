import mongoose from "mongoose";


const schema = new mongoose.Schema({
  name: {
    type: String,
    required : [true, 'O campo "nome" é obrigatório']
  },
  email: {
    type: String,
    required : [true, 'O campo "e-mail" é obrigatório']
  },
  password: {
    type: String,
    required : [true, 'O campo "sennha" é obrigatório']
  },
})


export default mongoose.model.users || mongoose.model('users', schema)