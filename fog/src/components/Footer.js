import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const Footer = () => {
  const [email, setEmail] = useState("")
  const inform = () => toast.success("Thank you for Subscribing to our newsletter", {
    position:"top-right"
  })
  const subForm =(e) => {
    e.preventDefault()
    const data = {email}
    console.log(data)
    setEmail("")
    inform()
  }
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
<footer className="bg-dark text-center text-white">

  <div className="container p-4">

    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/FogAgricServices/"
						target="_blank" role="button"
            rel="noopener noreferrer"
        ><i className="fa fa-facebook-f"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" 
            href="https://twitter.com/fogagric"
						target="_blank"
            rel="noopener noreferrer"
            role="button"
        ><i className="fa fa-twitter"></i
      ></a>


      <a className="btn btn-outline-light btn-floating m-1"
            href="mailto:Fog.agricservices@gmail.com"
						target="_blank"
            rel="noopener noreferrer"
            role="button"
        ><i className="fa fa-google"></i
      ></a>


      <a className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/p/CefgUy_K70K/?igshid=YmMyMTA2M2Y="
						target="_blank" role="button"
            rel="noopener noreferrer"
        ><i className="fa fa-instagram"></i
      ></a>


      <a className="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/fog-agric-services-0ab7aa241/"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        ><i className="fa fa-linkedin"></i
      ></a>


      <a className="btn btn-outline-light btn-floating m-1"
            href="https://wa.me/message/LV26DZO7RWCFE1"
						target="_blank"
            rel="noopener noreferrer"
            role="button"
        ><i className="fa fa-whatsapp"></i
      ></a>
    </section>

    <section className="">
      <form onSubmit={subForm}>

        <div className="row d-flex justify-content-center">

          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" required placeholder='Email address' className="form-control" />
            </div>
          </div>

          <div className="col-auto">

            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>

      </form>
    </section>

    <section className="mb-4">
      <p>
        Our Offices are open by 9am-5pm on Business days, 10am-2pm on saturdays
      </p>
    </section>

    <section className="">

      <div className="row">

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Head office</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <p className="text-white">House 6, Onile aro Goshen Estate, Ajibode, U.I Ibadan.</p>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Farm Address 1</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <p className="text-white">Edun village, lalupon, Iwo road, Ibadan.</p>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Farm address 2</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <p className="text-white">Iyalode road 7, olohunda akobo Ibadan.</p>
            </li>
          </ul>
        </div>

      </div>

    </section>

  </div>

  <div className="text-center p-3">
    © {year} Copyright  
    <span className="text-white" href="https://mdbootstrap.com/">    FOG Agricultural Services. All Rights Reserved.</span>
  </div>

</footer>

    </>
  )
}
