import React, { useState } from 'react'

export default function Enterdetails() {

    // for counting number of characters in bio .
    const [limit, setlimit] = useState(0);
    const change = (event)=>{
        const len = event.target.value.length;
        setlimit(len);
    }

    // profile picture stored in the usestate . to be upload 
    const [imgPreview, setimgPreview] = useState(null);
    const [error, seterror] = useState(false);
    const onImageChange = (e) =>{
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png" , "image/jpeg" , "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () => {
                setimgPreview(reader.result);
                console.log(selected);
            }
            reader.readAsDataURL(selected);
        }

        else{
            seterror(true);
            setTimeout(() => {
                seterror(false);
            }, 3000);
            console.log("file format not supported");
        }
    }

    return (
        <>
        <div className="enterDetails-container">
            <div className="greeting">
                <p>Enter your details</p>  
            </div>
            <div className="wrapper">
                <div className="upload-profile-pic">
                    <div className="profile-pic" style={{background:`url("${imgPreview}") no-repeat center/cover`}}></div>
                    <input type="file" id="fileUpload" className="custom-file-input" onChange={onImageChange}/>
                </div>
            </div>

            {
                error ? <p style={{color:'red', paddingLeft:'3%', fontSize:'16px', fontWeight:'300'}}>File Format not supported</p> : ''
            }

            {/* 2 text feilds for name and short bio */}
            <div className="wrapper">
                <div className="text-feild">
                    <input className="text-feild-input" type="text" placeholder="Mama Yadav"/>
                </div>
            </div>
    
            <div className="wrapper">
                <div className="text-feild">
                    <input className="text-feild-input" type="text" placeholder="Add a short bio about yourself" onChange={change} maxlength="30"/>
                </div>
            </div>
            <p style={{color:'#9D9D9D', paddingLeft:'3%'}} value={limit}>{limit}/30</p>
            {/* 'save' and 'skip for later' button container */}
            <div className="save-button-container">
                <div className="wrapper">
                    <button className="default-button">Save</button>
                </div>
            </div>
        </div>
        </>
    )
}
