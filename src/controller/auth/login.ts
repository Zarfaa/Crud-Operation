import { Request, Response } from "express"
import Users from "../../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Users.findOne({
      email
    });

    console.log(existingUser);

    if (!existingUser) {
      return res.status(403).send("Invalid Credentials");
    }

    const passwordMatched = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatched) {
      return res.status(403).send("Invalid Credentials");
    }

    const accessToken = jwt.sign({
      id: existingUser._id,
      email: existingUser.email
    }, process.env.ACCESS_SECRET!, {
      expiresIn: "5m",
      issuer: "http://localhost:4000",
      subject: existingUser._id.toString(),
    });

    const refreshToken = jwt.sign({
    id: existingUser._id,
    email: existingUser.email,
    metadata: "apsiodjapsodjpaosjd"
     }, process.env.REFRESH_SECRET!, {
       expiresIn: "30d",
      issuer: "http://localhost:4000",
      subject: existingUser._id.toString(),
    });

    
    const updatedUser = await Users.findByIdAndUpdate(existingUser._id, {
     $set: {
        refreshToken,
      }
     }, { new: true });

     console.log(updatedUser);

    return res.json({
      message : "login successful",
      data : {
        user: updatedUser,
        token: accessToken,
      }
    })
  }
catch (error) {
    console.log(error);
  }
} 
export default loginController;