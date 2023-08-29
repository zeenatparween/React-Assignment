import { useState } from 'react'
import './Gallary.css'
import CloseIcon from '@mui/icons-material/Close';

const Gallary = () => {

  let data = [
    {
      id:1,
      imgSrc: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
    },
    {
      id:2,
      imgSrc: 'https://cdn.pixabay.com/photo/2019/05/31/09/15/fantasy-4241786_640.jpg',
      
    },
    {
      id:3,
      imgSrc: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg',
    },
    {
      id:4,
      imgSrc: 'https://cdn.pixabay.com/photo/2016/07/23/23/02/lavenders-1537694_640.jpg',
    },
    {
      id:5,
      imgSrc:'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_640.jpg'
      
    },
    {
      id:6,
      imgSrc: 'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_640.jpg',
    },
    {
      id:7,
      imgSrc: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    },
    {
      id:8,
      imgSrc: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228_640.jpg',
    },
    {
      id:9,
      imgSrc: 'https://cdn.pixabay.com/photo/2012/10/25/23/52/wolf-62898_640.jpg'
    },
    {
      id:10,
      imgSrc: 'https://cdn.pixabay.com/photo/2016/10/09/23/43/owl-1727370_640.jpg'
    }
    
    

  ]
  
  const[model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState('' )
  const getImg =(imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true)

  }
  return (
    <>
     <div className = {model ? "model open": 'model'}>
     <img   src = {tempimgSrc}  />
     <CloseIcon  onClick = { () => setModel(false)}/>
     </div>

     <div className="gallary">
     {data.map((item, index) => {
      return(
        <div className="pics" key ={index} onClick={() => getImg(item.imgSrc)}>
        <img src= {item.imgSrc}  style= {{width:'100%'}} alt="" />
        </div>
      )
     })}
     </div>
    </> 
  )
}

export default Gallary


