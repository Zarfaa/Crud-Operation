import { Request, Response } from "express";
import Items from "../../models/items"

const getAllItems = async (req: Request, res: Response) => {
  try {
    const Item = await Items.find()
    return res.json({
      message: "All items retreived succesffuly",
      data: Item
    })
  } catch (error) {
    return res.status(500).json(error)
  }
};

export default getAllItems;