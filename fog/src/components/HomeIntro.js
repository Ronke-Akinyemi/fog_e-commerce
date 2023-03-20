import React from 'react'

export const HomeIntro = () => {
  return (
    <div >
        <div className='row p-5 g-4 align-items-center justify-content-center mt-3'>
            <div className="col-lg-3 col-md-5 col-sm-11 m-1 mb-4 bg-success p-5 inT">
                <h2 className='text-center p-4'>ABOUT US</h2>
                <p className='text-white'>
                    FOG Agricultural Services is an agricultural organization established in 2019 by a young 
                    passionate Agripreneur named Aina Adeyemi, on a mission to bridge the gap in shortage of 
                    food distribution, connecting farmers to customers, sourcing for quality agricultural 
                    products to intending and practicing farmers, providing a lasting solution to farmers 
                    and enlightening them on modern agricultural practices, in order to ensure continuous 
                    availability of safe and wholesome agricultural outputs for the nation.
                </p>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 m-1 mb-4 bg-white p-5 abT inT">
                <h2 className='text-center oA p-4'>WHAT WE DO</h2>
                <p style={{"fontWeight": 500, "color": "#000"}}>
                    We supply properly vaccinated point of lay and point of cage birds nationwide
                    We Supply healthy Day old chicks such as broilers, turkey, noiler, Pullet and guinea fowl
                    Supply of all forms of livestock equipments
                    We provide professional advice on farm planning and development to new and existing farms
                    We provide consultation service and agricultural Training for young and developing farms
                </p>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-11 m-1 mb-4 bg-success p-5 inT">
                <h2 className='text-center p-4'>OUR HISTORY</h2>
                <p className='text-white'>
                    FOG AGRICULTURAL SERVICES was established in 2019 under the Corporate Affairs Commission (CAC) 
                    with Reg No: 3003509. Since our establishment, we've contributed actively towards reducing the 
                    massively food insufficiency and also contributed massively towards increasing agricultural products 
                    circulation in Nigeria.<br/>We boast of a record of supplying quality products worth over 50 million naira to our respective customers accross the federation.
                </p>
            </div>
        </div>

    </div>
  )
}
