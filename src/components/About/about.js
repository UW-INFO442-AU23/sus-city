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
					<h1>Did You Know?</h1>
					<p>
						According to the UN, "Cities occupy just 3% of the Earth’s land, but account for 75% of carbon
						emissions” (<a href="https://www.un.org/sustainabledevelopment/cities/ " target="_blank">UN SDG</a>).
						Additionally the US EPA states that, "Greenhouse gas (GHG) emissions from transportation account
						for about 29% of total U.S. greenhouse gas emissions, making it the largest contributor of U.S. GHG emissions”
						(<a href="https://www.epa.gov/transportation-air-pollution-and-climate-change/carbon-pollution-transportation#:~:text=%E2%80%8BGreenhouse%20gas%20(GHG)%20emissions,contributor%20of%20U.S.%20GHG%20emissions"
							target="_blank">US EPA</a>).
					</p>

					<h1>Our Mission</h1>
					<p>
						Our goal is to inform young adult car buyers about carbon emissions from cars to help minimize the environmental
						impact of their commutes.
					</p>
					<p>We are driven to make a difference by encouraging young adults to make better informed decisions about purchasing cars in favor of the environment.
					</p>
				</div>
			</div>
			<div className="meet-team-title">
				<h1>Meet Our Team</h1>
				<h2>
					Meet the faces of the Informatics students at the University
					of Washington who created X-Scape.
				</h2>
			</div>
			<div className="image-row">
				<div className="image-container">
					<div className="image-name">Arianna Khan</div>
					<img src="/imgs/ethan.png" alt="Image 1" />
				</div>
				<div className="image-container">
					<div className="image-name">Ethan Wang</div>
					<img src="/imgs/ethan.png" alt="Image 2" />
				</div>
				<div className="image-container">
					<div className="image-name">Stephanie Wang</div>
					<img src="/imgs/ethan.png" alt="Image 3" />
				</div>
			</div>
			<div className="image-row-2">
				<div className="image-container">
					<div className="image-name">Ella Tao</div>
					<img src="/imgs/ethan.png" alt="Image 1" />
				</div>
				<div className="image-container">
					<div className="image-name">Cici Zhao</div>
					<img src="/imgs/ethan.png" alt="Image 2" />
				</div>
			</div>
		</div>
	);
}
