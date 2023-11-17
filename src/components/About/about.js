import React from "react";

export default function About(props) {
	return (
		<div className="about-page">
			<div className="about-container">
				<div className="image-column">
					<img
						src="/imgs/earth.png"
						alt="About"
						className="about-img"
					/>
				</div>
				<div className="about-column">
					{/* Text content goes here */}
					<h2>Our Mission</h2>
					<p>
						Our goal is to inform young adults about the impact of
						carbon emissions related to transportation in cities.
						More specifically, how might we inform young adult car
						buyers in King County about carbon emissions from
						various types of cars to help them minimize the
						environmental impact of their commutes? Sustainable
						cities and communities Cities occupy just 3% of the
						Earth’s land, but account for 60-80% of energy
						consumption and 75% of carbon emissions
					</p>
				</div>
			</div>
			<div className="main-title">
				<h1>Meet Our Team</h1>
				<h2>
					Meet the faces of the Informatics students at the University
					of Washington who created X-Scape.
				</h2>
			</div>
			<div class="circle-container">
				<div class="circle">
					<img src="/imgs/ethan.png" alt="Image 1" />
					<div class="circle-name">Name 1</div>
				</div>

				<div class="circle">
					<img src="/imgs/ethan.png" alt="Image 4" />
					<div class="circle-name">Name 4</div>
				</div>

				<div class="circle">
					<img src="/imgs/ethan.png" alt="Image 5" />
					<div class="circle-name">Name 5</div>
				</div>
			</div>
		</div>
	);
}
