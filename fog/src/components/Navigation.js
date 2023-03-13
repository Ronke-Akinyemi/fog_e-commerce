import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../App'
import { Link } from 'react-router-dom'


const Navigation = () => {
	const cart = useContext(CartContext)
  return (
    <>
    <nav className="navbar navbar-expand-lg p-3 text-white" style={{"backgroundColor" : "rgb(2,149,71)"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FOG</Link>
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
								<Link
									className="nav-link mx-2"
									id="n1"
									aria-current="page"
									to="/home"
									>Home</
								Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link mx-2"
									id="n1"
									aria-current="page"
									to="/shop"
									>Shop</
								Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link mx-2"
									id="n1"
									aria-current="page"
									to="/about"
									>About</
								Link>
							</li>
							{cart.cart.length > 0 && <li className="nav-item">
								<Link
									className="nav-link mx-2"
									id="n1"
									aria-current="page"
									to="/cart"
									>{cart.cart.length}</
								Link>
							</li>}
							
            </ul>

          </div>
      </div>
    </nav>

        {/* <NavLink to= '/'>Home</NavLink>
        <NavLink to= '/shop'>Shop</NavLink>
        <NavLink to= '/about'>About</NavLink>
        <NavLink to= '/cart'>Cart</NavLink> */}


    </>

  )
}

export default Navigation