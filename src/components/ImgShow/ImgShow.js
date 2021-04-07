import React from 'react'
import img1 from '../../assets/img/asd.jpg'
import img2 from '../../assets/img/chri.jpg'
import img3 from '../../assets/img/eber.jpg'
import img4 from '../../assets/img/john.jpg'
import css from './imgShow.module.css'


const ImgShow = () => {

  let imgList = [img1, img2, img3, img4];

  return (
    <div className={css.ImgShow}>
      <img className={css.Img} alt='asdf' src={imgList[2]}></img>
    </div>
  )
}

export default ImgShow;
