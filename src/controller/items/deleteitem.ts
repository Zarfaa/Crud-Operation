import { Request, Response } from "express";
import Items from "../../models/items"

const DeleteOneItem = async (req: Request, res: Response) => {
  try {

const DeleteItem = await Items.findOneAndDelete({"name" : "shoes"})
if (!DeleteItem) {
  return res.status(404).json({
    message: "Item not found"
  })
}
return res.json({
  message : "Item deleted successfully",
  data : DeleteItem
})
}
catch (error) {
  return res.status(500).json(error);
}
} 
export default DeleteOneItem