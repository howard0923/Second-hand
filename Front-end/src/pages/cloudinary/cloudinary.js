import React, { useState, useEffect } from 'react';
import Layout from 'Layout';
import axios from '../../commons/axios';
import CloudinaryUpload from './cloudinaryUpload';

export default function Cloudinary () {
    const [file,setFile] = useState();
    const [url,setUrl] = useState();

    const imageHandler = (event) => {
        setFile(event.target.files[0]);
     }
    
    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("file",file);
        CloudinaryUpload(uploadData).then((res) =>{
            setUrl(res.secure_url);
        });
    }
    return(
        <Layout>
            <div>
                <label>Cloudinary:</label>
                <input type="file" name="file" onChange={imageHandler}></input>
                <button onClick={handleFileUpload}>upload</button>
                {url && <img src={url} /> // 3. Display the image 
      } 
            </div>
        </Layout>
    )
   
}
