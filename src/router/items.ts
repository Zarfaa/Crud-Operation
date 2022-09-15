import { Router }    from "express";
import createItems   from "../controller/items/createitem";
import getAllItems   from "../controller/items/getallitems";
import getoneItem    from "../controller/items/getoneitem";
import UpdateOneItem from "../controller/items/Updateoneitem";
import RemoveOneItem from "../controller/items/removeoneitem";
import DeleteOneItem from "../controller/items/deleteitem";
const Itemsrouter = Router();

Itemsrouter.post("/createitems", createItems);
Itemsrouter.get("/allitems", getAllItems);
Itemsrouter.get("/:id", getoneItem);
Itemsrouter.put("/updateitem/:id", UpdateOneItem);
Itemsrouter.delete("/removeitem/:id", RemoveOneItem);
Itemsrouter.delete("/deleteitem", DeleteOneItem);
export default Itemsrouter;