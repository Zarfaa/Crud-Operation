import { Request, Response } from "express";
import Items from "../../models/items"

const UpdateOneItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {name , quantity , price , avaliablity} = req.body;
    const newItem = {
      name ,
      quantity ,
      price , 
      avaliablity
 }
  try {

const UpdatedItem = await Items.findByIdAndUpdate(id, {$set :newItem },{new : true})
if (!UpdatedItem ) {
  return res.status(404).json({
    message: "Item not found"
  })
}

console.log(UpdatedItem);

return res.json({
  message : "Item Updated successfully",
  data : UpdatedItem
})
}
catch (error) {
  return res.status(500).json(error);
}
} 

export default UpdateOneItem;