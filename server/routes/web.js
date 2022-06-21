import express from "express";
import Webcontroller  from "../controllers/webcontroller.js";

const router=express.Router();
router.get("/getTimeStories",Webcontroller.getTimeStories);

export default router;