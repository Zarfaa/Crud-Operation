import { RequestHandler } from "express";
import Users from "../../models/user";
import jwt from 'jsonwebtoken';

const RefreshController : RequestHandler = async (req , res) => {
 const refreshToken = req.headers.authorization?.split(" ")[1]
 try{
    const decodedclaims : any = jwt.verify(refreshToken! , process.env.REFRESH_SECRET!)
    console.log(decodedclaims)
    const user = await Users.findById(decodedclaims.id).select("+refreshToken")

    if (!user) {
      return res.status(404).json({
        message: "User with given ID does not exist"
      })
    }

    console.log("Refresh Token", user.refreshToken);

    if (user.refreshToken != refreshToken) {
      return res.status(403).json({
        message: "invalid refresh token"
      });
    }

    const accessToken = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.ACCESS_SECRET!, {
      expiresIn: "5m",
      issuer: "http://localhost:4000",
      subject: user._id.toString(),
    });

    return res.json({
      message: "Access Token regenerated successfully",
      data: accessToken
    })
  } catch (error) {
    return res.status(500).json(error);    
  }
}

export default RefreshController