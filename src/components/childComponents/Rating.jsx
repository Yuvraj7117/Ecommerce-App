import React from 'react';
import { BsStar , BsStarFill , BsStarHalf} from 'react-icons/bs'

const Rating = (props) => {
    const {Rating}=props;
  return (
    <>
         <div className='ratings'>
          <div >
          { Rating >= "1" ? <BsStarFill /> : Rating >= "0.5"?<BsStarHalf/>:<BsStar/>}
          </div>
          <div>
          { Rating >= "2" ? <BsStarFill /> : Rating >= "1.5"?<BsStarHalf/>:<BsStar/>}
          </div>
          <div>
          { Rating >= "3" ? <BsStarFill /> : Rating >= "2.5"?<BsStarHalf/>:<BsStar/>}
          </div>
          <div>
          { Rating >= "4" ? <BsStarFill /> : Rating >= "3.5"?<BsStarHalf/>:<BsStar/>}
          </div>
          <div>
          { Rating >= "5" ? <BsStarFill /> : Rating >= "4.5"?<BsStarHalf/>:<BsStar/>}   
      </div>
      </div>
    </>
  )
}

export default Rating