import express from 'express'
import { updateCategoryController, categoryController, createCategoryController, deleteCategoryController, singleCategoryController } from '../controllers/categoryController.js'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';


const router=express.Router()

router.post("/create-category",requireSignIn,isAdmin,createCategoryController)

router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)

router.get("/get-category",categoryController)

router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)

router.get("/single-category/:slug",singleCategoryController)

export default router
