import { Request, Response } from "express";
import Items from "../../models/items"

const getOneItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Item = await Items.findById(id);

    if (!Item) {
      return res.status(404).json({
        message: "Item not found"
      })
    }

    return res.json({
      message: "Item retreived successfully",
      data: Item
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default getOneItem