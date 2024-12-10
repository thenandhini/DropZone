




import axios from 'axios'
//backend on port 3333
const BACKEND_API_URL='http://localhost:3333';
const uploadFile= async(data)=>{

    try{
        const response =await axios.post(`${BACKEND_API_URL}/upload`,data);

    }
    catch(error)
    {
        console.log("error while calling upload file"+ error);
    }


};

export default uploadFile;