// user route

import { Router } from "express";
import { signup } from "../controllers/userController.js";

const router = Router()

 const signupRouter =  router.post("/signup", signup);

export default signupRouter;