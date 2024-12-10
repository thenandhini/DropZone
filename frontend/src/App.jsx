



import { use } from 'react';
import './App.css'
import {useEffect, useRef,useState} from 'react';
import uploadFile from './service/api.js'



function App() {

  const [file,setFile]=useState('');
  console.log(file);

  //re render only when file is upload
  useEffect( ()=>{
    const getImage=async()=>{
      const data =new FormData();
      //create data object with the same name and value
      data.append("name",file.name);
      data.append("file",file);
      const response =await uploadFile(data);
      console.log(response);


    };

  getImage();},
  [file]);

    const fileInputRef= useRef();

    const onUploadClick=()=>{
      fileInputRef.current.click();
    };
 
   

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="wrapper">
            <h1>File Sharing App</h1>
            <p>Upload and share downloadable link</p>

            <button onClick={()=>onUploadClick()}>Upload</button>

            <input type="file" 
            ref={fileInputRef}
             style={{display:"none"}} 
             onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
