import React from 'react'
import Carousel from 'react-multi-carousel';
// import tecno from '../images/tecno1.jpg'


export const Reviews = () => {
    const reviews = [
        {
            "name":"Mr Jerry",
            "image": "../images/reviews/rev2.jpg",
            "words": "Fog Agric services is a reliable source I do get my agricultural needs. Their service is top notch with fast and excellent delivery",
            "title": "CEO Jerryjo Farms"
        },
        {
            "name":"Mr Ernest Uzebo",
            "image": "../images/reviews/rev4.jpg",
            "words": "When it comes to Fast, reliable, trustworthy and efficient delivery, I give it to FOG agricultural services",
            "title": "CEO Beta Agro and Allied Services"
        },
        {
            "name":"Mr Zaccheus",
            "image": "../images/reviews/rev5.jpg",
            "words": "In terms of Agricultural inputs, Crops and animal, FOG stand out in term of quality, affordability and fast delivery",
            "title": "Manager, Hirstville Farms"
        },
        {
            "name":"Mr UZOMA",
            "image": "../images/reviews/rev1.jpg",
            "words": "FOG is my eveyday go to company. No better reliable and trustworthy source than FOG",
            "title": "CEO Simdis Farms"
        },
    ]
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <Carousel responsive={responsive}>
        {reviews.map((rev) => (
            <div key={rev.name} className="align-item-center justify-content-center m-5 p-5 row hiS">
                <div className='col-md-5' ><img src={rev.image} alt="client" className='rounded-circle rImage'/></div>
                <div className='col-md-7 mt-5'>
                    <p>{rev.words}</p>
                    <hr className='hr'></hr>
                    <p>{rev.title}</p>
                </div>
            </div>
        ))}
    </Carousel>
  )
}
