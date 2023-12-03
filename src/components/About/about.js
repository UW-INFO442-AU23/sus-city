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
					<div className="image-name">Arianna Khan
						<a href="https://www.linkedin.com/in/arianna-khan-0b0804206/" target="_blank" rel="noopener noreferrer">
							<img class="linkedin-logo" src="/imgs/linkedin.png" alt="LinkedIn" />
						</a>
					</div>
					<img class="profile-image" src="/imgs/arianna.png" alt="Image 1" />
				</div>

				<div className="image-container">
					<div className="image-name">Ethan Wang
						<a href="https://www.linkedin.com/in/ethanwang17/" target="_blank" rel="noopener noreferrer">
							<img class="linkedin-logo" src="/imgs/linkedin.png" alt="LinkedIn" />
						</a>
					</div>
					<img class="profile-image" src="/imgs/ethan.png" alt="Image 2" />
				</div>

				<div className="image-container">
					<div className="image-name">Stephanie Wang
						<a href="https://www.linkedin.com/in/stephanieliwang/" target="_blank" rel="noopener noreferrer">
							<img class="linkedin-logo" src="/imgs/linkedin.png" alt="LinkedIn" />
						</a>
					</div>
					<img class="profile-image" src="/imgs/steph.jpeg" alt="Image 3" />
				</div>
			</div>

			<div className="image-row-2">
				<div className="image-container">
					<div className="image-name">Ella Tao
						<a href="https://www.linkedin.com/in/yifei-tao-ella/" target="_blank" rel="noopener noreferrer">
							<img class="linkedin-logo" src="/imgs/linkedin.png" alt="LinkedIn" />
						</a>
					</div>
					<img class="profile-image" src="/imgs/ella.jpg" alt="Image 1" />
				</div>

				<div className="image-container">
					<div className="image-name">Cici Zhao
						<a href="https://www.linkedin.com/in/xingyuan-cici-zhao-081b86247/" target="_blank" rel="noopener noreferrer">
							<img class="linkedin-logo" src="/imgs/linkedin.png" alt="LinkedIn" />
						</a>
					</div>
					<img class="profile-image" src="/imgs/cici.png" alt="cici iamge" />
				</div>

			</div>


			<div className="about-data">
				<div className="about-data-content">
					<h1>About the Data</h1>
					<p>
						We sourced our carbon emission data from the U.S. Department of Energy.
						We cleaned this dataset to remove unnecessary measurements and added columns to include external links,
						images, and boolean values for car features (e.g. Apple CarPlay, etc.)
						Next, we converted the file into json to import to our website.
					</p>
					<h1>Learn More</h1>
					<p>
						Learn more about our project here: <a href="/imgs/X-Scape Presentation Slides.pdf" target="_blank" rel="noopener noreferrer">
							Click to View Presentation
						</a>
					</p>
					<p>
						View our Github Repo:  <a href="https://github.com/UW-INFO442-AU23/sus-city" target="_blank" rel="noopener noreferrer">
							X-Scape Repo
						</a>
					</p>
				</div>
				<div className="about-data-image-container">
					<img className="about-data-image" src="/imgs/excel-pic.png" alt="About the Data Image" />

				</div>
			</div>
		</div>
	);
}
