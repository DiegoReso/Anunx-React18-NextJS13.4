

import dbConnect from '../../src/utils/dbConnect'
import UsersModel from '../../src/models/users'
import { crypto } from '../../src/utils/password'


const users = async (req,res) =>{
  const {method} = req
  switch(method){
    case 'GET':
      await dbConnect()
      const users = await UsersModel.find()
      res.status(200).json(users)
      break

      case 'POST':
        const {
          name,
          email,
          password,
        } = req.body
        
      await dbConnect()

      const passwordCrypto = await crypto(password)

      const user = new UsersModel({
        name,
        email,
        password: passwordCrypto
      })

      user.save()
      res.status(200).json({success: true})
  }

}

export default users