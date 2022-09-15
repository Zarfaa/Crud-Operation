import {Request , Response} from "express"
import Items from "../../models/items"

const createitem = async (req : Request , res : Response) => {
    const {name , quantity , price , avaliablity} = req.body;
    console.log(req.body)
try {
    const newItem = await Items.create({
         name ,
         quantity ,
         price , 
         avaliablity
    });
    return res.json({
        message: "Product created successfully",
        data: newItem
      });
    } catch (error) {
    return res.status(500).json(error)
  }
}
export default createitem