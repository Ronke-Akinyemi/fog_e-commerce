import React from 'react'

export const Team = () => {
  const team = [
    {
      "name" : "AINA ADEYEMI",
      "title" : "Sales and Marketting Manager",
      "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab eum magni nobis autem dolorum!",
      "image": "./images/tecno1.jpg",
      "fb": "https://www.facebook.com",
      "ln": "https://www.facebook.com",
      "tw": "https://www.facebook.com"
    },
    {
      "name" : "AKODOGBO OLORUNWA",
      "title" : "Head of operations",
      "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab eum magni nobis autem dolorum!",
      "image": "./images/tecno1.jpg",
      "fb": "https://www.facebook.com",
      "ln": "https://www.facebook.com",
      "tw": "https://www.facebook.com"
    },
    {
      "name" : "OBILADE OLUWATOBI",
      "title" : "Field Manager",
      "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab eum magni nobis autem dolorum!",
      "image": "./images/tecno1.jpg",
      "fb": "https://www.facebook.com",
      "ln": "https://www.facebook.com",
      "tw": "https://www.facebook.com",
      "wa": "http://+23470686859"
    },
    {
      "name" : "AKINOLA SAMSON",
      "title" : "Senior Software Engineer",
      "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab eum magni nobis autem dolorum!",
      "image": "./images/tecno1.jpg",
      "fb": "https://www.facebook.com",
      "ln": "https://www.facebook.com",
      "tw": "https://www.facebook.com"
    }
  ]
  return (
    <section className="main-Team">
      <div className='container'>
        <h1 className="text-center text-dark"><b>MEET THE TEAM</b></h1>
        <p className="text-center text-muted">THE BRAINS BEHIND FOG</p>
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
                <div className="profile-card_social text-center p-4">
                  <a href={staff.ln} className="d-inline-block">
                    <img src="./images/social/linkedin.png" alt="Linkedin"/>
                  </a>
                  <a href={staff.tw} className="d-inline-block">
                    <img src="./images/social/twitter.png" alt="Twitter"/>
                  </a>
                  <a href={staff.fb} className="d-inline-block">
                    <img src="./images/social/facebook.png" alt="Facebook"/>
                  </a>
                  <a href={staff.wa} className="d-inline-block">
                    <img src="./images/social/whatsapp.png" alt="whatsapp"/>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
