import express from 'express'
import multer from 'multer'
import {jwtCheck , jwtParse} from '../middlewares/auth'
import MyRestaurantContoller from '../controllers/MyRestaurantController'
import { validateMyRestaurantRequest } from '../middlewares/validation'

const router = express.Router()


const storage = multer.memoryStorage()

const upload = multer({
    storage : storage,
    limits:{
        fileSize : 5*1024*1024
    }
})

router.get(
    "/",
    jwtCheck,
    jwtParse,
    MyRestaurantContoller.getMyRestaurant
)

router.post(
    "/",
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,  
    MyRestaurantContoller.createMyRestaurant
  );

router.put(
    "/",
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse, 
    MyRestaurantContoller.updateMyRestaurant
)

export default router