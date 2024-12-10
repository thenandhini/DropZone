





import File from "../models/file.js";
export const uploadImage= async(req,res)=>{
    const fileObj={
        path:req.file.path,
        name:req.file.originalname,
    };
    try{
        const file=await File.create(fileObj);
        res.status(200).json({path:'http://localhost:3333/file/${file._id}'});
    }
    catch(error)
    {
        console.log("Error uploading gile",error);
        res.status(500).json({error:error.message});
    }
    
};
