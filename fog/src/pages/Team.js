import React from 'react'

export const Team = () => {
  const team = [
    {
      "name" : "AINA ADEYEMI",
      "title" : "Sales and Marketting Manager",
      "text" : "An experienced animal health technologist passionate about agric business",
      "image": "./images/teams/tecno.jpg",
      "ml": "mailto:ainaadeyemi7@gmail.com",
      "ln": "https://www.linkedin.com/in/aina-adeyemi-6ab98ba3",
      "tw": "https://twitter.com/adeyemiaina5",
      "wa": "https://wa.me/+2348062929576"
    },
    {
      "name" : "AKODOGBO OLORUNWA",
      "title" : "Head of operations",
      "text" : "Certified animal health technologist with vast experience in agric business, farm management and human management",
      "image": "./images/teams/ako.jpg",
      "ml": "mailto:olorunwaakodogbo@gmail.com",
      "ln": "https://www.linkedin.com/in/olorunwa-akodogbo-7575bb161",
      "tw": "https://twitter.com/olorunwa_",
      "wa": "https://wa.me/+2348139326554"
    },
    {
      "name" : "OBILADE OLUWATOBI",
      "title" : "Field Manager",
      "text" : "Animal scientist with huge experience in farm development, management and marketting",
      "image": "./images/teams/tobi.jpg",
      "ml": "mailto:obiladeoluwatobi@gmail.com",
      "ln": "#",
      "tw": "https://twitter.com/ObiladeOluwato2",
      "wa": "https://wa.me/+2348164742664"
    },
    {
      "name" : "AKINOLA SAMSON",
      "title" : "Software Engineer",
      "text" : "An experienced Fullstack software enginner with many software skills in his arsenal, A certified Animal scientist",
      "image": "./images/teams/pop.jpg",
      "fb": "mailto:akinolasamson1234@gmail.com",
      "ln": "https://www.linkedin.com/in/akinola-samson-438458124",
      "tw": "https://twitter.com/Samson_Akinola1",
      "wa": "https://wa.me/+2348069482021"
    }
  ]
  return (
    <section className="main-Team">
      <div className='container'>
        <h1 className="text-center oA"><b>MEET THE TEAM</b></h1>
        <p className="text-center text-muted oA">THE BRAINS BEHIND FOG</p>
			  <br/><br/>
        <div className='row'>
          {team.map((staff) => (
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={staff.name}>
              <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
                 <div className="profile-card_image">
                  <img src={staff.image} alt="User" className="mb-4 shadow"/>
                </div>
                <div className="profile-card_details">
                  <h3 className="mb-0 text-dark">{staff.name}</h3>
                  <p className="text-muted">{staff.title}</p>
                  <p className="text-muted">{staff.text}</p>
                </div>
                <div className="social-icons small profile-card_social text-center p-4">
													<a href={staff.tw} target="_blank" className="rectangle"
														rel="noopener noreferrer"
                            ><i className="fa fa-twitter"></i
													></a>
													<a href={staff.ln} target="_blank"
														rel="noopener noreferrer"
                            ><i className="fa fa-linkedin"></i
													></a>
													<a href={staff.ml} target="_blank" className="rectangle"
														rel="noopener noreferrer"
                            ><i className="fa fa-envelope"></i
													></a>
                          <a href={staff.wa} target="_blank" className="rectangle"
														rel="noopener noreferrer"
                            ><i className="fa fa-whatsapp"></i
													></a>
												</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
