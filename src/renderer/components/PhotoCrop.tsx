import { useState } from 'react'
import Cropper from 'react-easy-crop'
import { readFile } from '../../main/helpers'

const handleSave = () => {
  // first save the cropped image
  //saveCroppedImage(filename, imageSrc, croopedAreaPixels)
  // then reset for the next photo
  setImageSrc(null);
  setZoom(1);
  setCrop({ x: 0, y: 0 })
}

export default function PhotoCrop() {
  
  const [imageSrc, setImageSrc] = useState(null);
  const [filename, setFilename] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0});
  const [zoom, setZoom] = useState(1);


  const handleFileChange = async (e: any) =>{
    if(e.target.files && e.target.files.length) {
      //we got a file
      const file = e.target.files[0]
      setFilename(file.path)
      //get the image date from a file..
      const imageData: any = await readFile(file);
      setImageSrc(imageData)
    }
  } 
   if(!imageSrc) {
    return (
      <>
    <h1>PLease Choose a photo to crop</h1>
    <input type='file' accept="image/*" onChange={handleFileChange} />
   
    </>
    )
  }
  return(
    <>
    <Cropper 
    image={imageSrc} 
    crop={crop}
    zoom={zoom}
    onCropChange={setCrop}
    onZoomChange={setZoom}
    />
    <button onClick={handleSave} className='save-btn'>Save</button>
    </>
  )
}

