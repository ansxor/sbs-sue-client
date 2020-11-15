import React, { useState } from 'react';

function UploadTab(props) {
    const [uploadedImage, setUploadedImage] = useState('');

    function handleChange(event) {
        const file = event.target.files[0]
        if (file)
            setUploadedImage(URL.createObjectURL(file))
    }

    return (
        <div>
            <input
             style={{
             }} 
             onChange={handleChange} type="file" accept="image/*">
            </input> 
            <img 
             src={uploadedImage}
             alt="Pasted content"
             style={{
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "auto",
                display: "block",
             }} />
        </div>
    );
}

export default UploadTab;