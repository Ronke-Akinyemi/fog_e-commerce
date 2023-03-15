import React from 'react'
import Carousel from 'react-multi-carousel';


export const Reviews = () => {
    const reviews = [
        {
            "name":""
        }
    ]
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
    <Carousel responsive={responsive}>
        {reviews.map((rev) => (
            <div key={rev.nam}>
                <div><image src ={rev.image}/></div>
                <div>
                    <p>{rev.words}</p>
                    <hr className='hr'></hr>
                    <p>{rev.words}</p>
                    <p>{rev.title}</p>
                </div>
            </div>
        ))}
    </Carousel>
  )
}
