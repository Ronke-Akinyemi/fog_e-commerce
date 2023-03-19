import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../App'
import { NavLink} from 'react-router-dom'
import ReactSwitch from "react-switch"


const Navigation = () => {
	const cart = useContext(CartContext)
  return (
    <>
    <nav className="navbar navbar-expand-lg p-3 text-white" style={{"backgroundColor" : "rgb(2,149,71)"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">FOG</NavLink>
		<div className='navbar-nav switch'>
			{/* {cart.theme === "light" ? "Light mode" : "Dark mode"} */}
		<ReactSwitch
		 onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
		onChange={cart.changeTheme} checked={cart.theme === "light"}/>
		</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									aria-current="page"
									to="/"
									>Home</
								NavLink>
							</li>
              <li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									aria-current="page"
									to="/shop"
									>Shop</
								NavLink>
							</li>
              <li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									aria-current="page"
									to="/team"
									>Team</
								NavLink>
							</li>
							{cart.user &&
								<li className="nav-item">
									<NavLink
										className="nav-link mx-2"

										aria-current="page"
										to="/admin"
										>Admin</
									NavLink>
								</li>
							}
							{cart.cart.length > 0 && <li className="nav-item nav-bag">
								<NavLink
									className="nav-link mx-2"
									aria-current="page"
									to="/cart"
									><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
										<span className='bag-quantity'>{cart.cart.length} </span></
								NavLink>
							</li>}
							{cart.user &&
							<li className="nav-item">
								<NavLink
									className="nav-link mx-2" onClick={() => {
										localStorage.removeItem("fogUser")
									}}
									>Logout</
								NavLink>
							</li>
							}
            </ul>
          </div>
      </div>
    </nav>
    </>

  )
}

export default Navigation