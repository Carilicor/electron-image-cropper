import { useState } from 'react'
import { readFile } from '../../main/helpers'

export default function PhotoCrop() {
  const [imageSrc, setImageSrc] = useState(null)
  const [filename, setFilename] = useState(null)
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
    <img src={imageSrc} alt="" />
    </>
  )
}

