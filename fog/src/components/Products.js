import React from 'react'
import Carousel from 'react-multi-carousel';




export const Products = (props) => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <>
    <Carousel responsive={responsive}>
        {props.prod.map((item) =>(
            <div className="card" key={item.id}>
                <img className="product--image" src={item.image ? item.image : "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/birds/IMG_20210513_084704_717_transcpr_rlqldv.jpg"} alt="product" />
                <h2 >{item.name}</h2>
                <p className="price ">Price: N {item.price}</p>
                {item.age && <p className='price'>Age: {item.age}</p>}
                <p className='price '>Quantity: {item.quantity}</p>
                <p>
                    <button type='button' onClick={() => {props.updateModel(item)}}>Add to Cart</button>
                </p>
            </div>
      ))}

    </Carousel>
    </>
  )
}
