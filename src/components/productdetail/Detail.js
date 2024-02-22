import React from 'react'


const Detail = ({visible,cart}) => {
  return (
    <div className='detail'>
{
  cart.map(({images,price,title})=>{
    return(
      <div className='detail' style={{display:'flex', gap:'10px', border:'1px solid black', padding:'5px'}}>
     <div className="img">
     <img src={images[0]} style={{height:'100px',width:'100px'}} alt="" />
     </div>
   <div className="title" style={{color:'green', display:'flex'}}>
   <span style={{color:'blue', fontSize:'16px'}}> {title}</span>
   ${price}
      </div>

      <button className='add' style={{height:'30px', border:'none'}}>Buy Now</button>

      
     
      </div>
    )
    })
  }
    </div>
  )
  }

export default Detail
