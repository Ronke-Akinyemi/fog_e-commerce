import React from 'react'

export const OurProducts = () => {
  return (
    <section className="site-section section-skills">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<h2>Our Products</h2>
							<iframe
							title='bird'
								src="../images/birds.mp4"
								width="100%"
								height="280"
								// mozallowfullscreen = {true}
								// allowFullScreen = {true}
								loop = {true}
							></iframe>
						</div>
						<div className="col-sm-6">
							<h2>What we supply</h2>
							<div className="progress-group">
								<p>Point of lay birds</p>
								<div className="progress bg-success">
									<div
										className="progress-bar"
										role="progressbar"
										data-transitiongoal="100"
									></div>
								</div>

							</div>


							<div className="progress-group">
								<p>Point of cage birds</p>
								<div className="progress bg-success">
									<div
										className="progress-bar"
										role="progressbar"
										data-transitiongoal="100"
									></div>
								</div>
							</div>


							<div className="progress-group">
								<p>Day old chicks</p>
								<div className="progress bg-success">
									<div
										className="progress-bar"
										role="progressbar"
										data-transitiongoal="100"
									></div>
								</div>

							</div>


							<div className="progress-group">
								<p>Agricultural inputs</p>
								<div className="progress bg-success">
									<div
										className="progress-bar"
										role="progressbar"
										data-transitiongoal="100"
									></div>
								</div>

							</div>


							<div className="progress-group">
								<p>Consultancy services</p>
								<div className="progress bg-success">
									<div
										className="progress-bar"
										role="progressbar"
										data-transitiongoal="100"
									></div>
								</div>

							</div>

						</div>
					</div>
				</div>
			</section>
  )
}
