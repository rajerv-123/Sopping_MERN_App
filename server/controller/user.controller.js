import UserModel from "../modles/user.model.js";

export async function registerUserController(req, res) {
    
  try {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
      return res.status(400).json({message:"All fields are required",error:true,success:false});
    }
    const user = await UserModel.findOne({email});
    if(user){
      return res.status(400).json({message:"User already exists",error:true,success:false});
    }

    

  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}
