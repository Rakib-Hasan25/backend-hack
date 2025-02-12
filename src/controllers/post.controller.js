import { asyncHandler } from "../utils/AsyncHandler.js"
import {ApiError } from "../utils/ApiError.js"
import {Post} from "../models/post.model.js"
import { supabase } from "../../lib/supabase_config.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import fs from "fs"


const uploadpost = asyncHandler(async(req,res)=>{
    
    const {title ,crimetype,date,crimetime,division,district,description,images,anonymous} = req.body
    
    console.log(title ,crimetype,date,crimetime,division,district,description,images,anonymous)
 
    //3rd 
  console.log(req.user._id)
    
    const post = await Post.create({
        title,
        description,
        crimetime,
        division,
        district,
        anonymous,
        PostUploader:req.user._id
    })
    
    const uploadedPost = await Post.findById(post.id)
    
    
    if(!uploadedPost){
        throw new ApiError(500,"post is not uploaded ")
    }
    
    return res.status(201).json(
        new ApiResponse(201,{post}, "Post uploaded ") 
     )
    
    })


   
export {uploadpost}