import { Request, Response } from "express";
import Items from "../../models/items"

const RemoveOneItem = async (req: Request, res: Response) => {
    const { id } = req.params;
  try {

const removeItem = await Items.findByIdAndRemove(id)
if (!removeItem) {
  return res.status(404).json({
    message: "Item not found"
  })
}
return res.json({
  message : "Item Removed successfully",
  data : removeItem
})
}
catch (error) {
  return res.status(500).json(error);
}
} 
export default RemoveOneItem