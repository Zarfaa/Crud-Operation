import { RequestHandler, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const verifyAccessToken : RequestHandler = (req, res , next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decodedClaims = jwt.verify(accessToken!, process.env.ACCESS_SECRET!);
    res.locals.user = decodedClaims;
    return next();    
  } catch (error) {
    return res.status(500).json(error)    
  }
};


export default verifyAccessToken;