// import React from "react";

// export default function Home(props) {
// 	const scrollToTarget = () => {
// 		const targetElement = document.getElementById("target-element");
// 		if (targetElement) {
// 			const offset = 120; // Adjust this value to your preference
// 			const elementPosition =
// 				targetElement.getBoundingClientRect().top + window.pageYOffset;
// 			const offsetPosition = elementPosition - offset;

// 			window.scrollTo({
// 				top: offsetPosition,
// 				behavior: "smooth",
// 			});
// 		}
// 	};
// 	return (
// 		<div className="homepage">
// 			<div className="div">
// 				<div className="drive-reduce">
// 					Drive &amp; <br />
// 					Reduce
// 					<br />
// 					Emissions
// 				</div>
// 				<p className="why-should-you-care">
// 					Why should you
// 					<br />
// 					care about
// 					<br />
// 					carbon emissions?
// 				</p>
// 				<p className="why-buy-a-fuel">
// 					Why buy a Fuel-
// 					<br />
// 					Efficient or
// 					<br />
// 					Electric Cars?
// 				</p>
// 				<p className="text-wrapper">
// 					How Do I Know What Vehicle to Buy?
// 				</p>
// 				<div className="overlap">
// 					<img
// 						className="tree-SVG"
// 						alt="Tree SVG"
// 						src="/imgs/tree-SVG.svg"
// 					/>
// 					<p className="of-all-emissions">
// 						of all CO2 emissions in cities&nbsp;&nbsp;come from
// 						motor vehicle exhaust
// 					</p>
// 					<p className="p">
// 						is the average savings that ev drivers tend to save on
// 						fuel costs compared to gas cars
// 					</p>
// 					<div className="text-wrapper-2">95%</div>
// 					<div className="text-wrapper-3">60%</div>
// 					<img className="group" alt="Group" src="group-2.png" />
// 					<p className="text-wrapper-4">
// 						of CO2 is emitted on average for every passenger vehicle
// 						per year
// 					</p>
// 					<p className="text-wrapper-5">
// 						premature deaths worldwide each year are a result of
// 						poor air quality from carbon emissions
// 					</p>
// 					<p className="element-metric-tons">
// 						<span className="span">4.6</span>
// 						<span className="text-wrapper-6"> metric tons</span>
// 					</p>
// 					<p className="element-million">
// 						<span className="span">4.2</span>
// 						<span className="text-wrapper-6"> million </span>
// 					</p>
// 				</div>
// 				<p className="text-wrapper-7">
// 					Carbon emissions are a critical issue because they are the
// 					primary drivers of climate change. The excess carbon dioxide
// 					in our atmosphere traps heat, leading to global warming,
// 					which in turn results in more extreme weather events, rising
// 					sea levels, and threats to our ecosystems. These changes
// 					affect everything from food production to water resources
// 					and can even impact your health due to increased air
// 					pollution. By caring about carbon emissions, you can play a
// 					part in mitigating these effects, ensuring a sustainable and
// 					healthier future for yourself, your community, and the
// 					entire planet.
// 				</p>
// 				<div className="quiz-card">
// 					<div className="overlap-group">
// 						<div className="text-wrapper-8">Take a Quiz</div>
// 						<p className="text-wrapper-9">
// 							Take our quiz to discover the perfect car that suits
// 							your lifestyle and preferences
// 						</p>
// 						<img
// 							className="target-icon"
// 							alt="Target icon"
// 							src="/imgs/target-icon.png"
// 						/>
// 					</div>
// 				</div>
// 				<div className="search-card">
// 					<div className="overlap-group">
// 						<div className="text-wrapper-8">Search for Cars</div>
// 						<p className="text-wrapper-10">
// 							Easily search a diverse range of cars to discover
// 							your ideal vehicle
// 						</p>
// 						<div className="search-icon">
// 							<img className="img" alt="Group" src="/imgs/search-icon.png" />
// 						</div>
// 					</div>
// 				</div>
// 				<div className="compare-card">
// 					<div className="overlap-group">
// 						<div className="text-wrapper-8">Compare Cars</div>
// 						<p className="text-wrapper-11">
// 							Effortlessly compare features, pricing, and mileage
// 							to find your perfect car
// 						</p>
// 						<img
// 							className="compare-icon"
// 							alt="Compare icon"
// 							src="/imgs/compare-icon.png"
// 						/>
// 					</div>
// 				</div>
// 				<p className="text-wrapper-12">
// 					Purchasing a fuel-efficient or electric car is a smart
// 					choice for several reasons. Firstly, these vehicles
// 					significantly reduce carbon emissions, contributing to a
// 					cleaner environment and helping combat climate change.
// 					Fuel-efficient cars consume less gasoline, saving you money
// 					on fuel costs and reducing your carbon footprint. Electric
// 					cars, in particular, produce zero tailpipe emissions, making
// 					them an excellent choice for environmentally-conscious
// 					individuals. By choosing a fuel-efficient or electric car,
// 					you not only reduce your personal impact on the environment
// 					but also enjoy economic and environmental benefits that can
// 					positively impact your daily life.
// 				</p>
// 				<p className="text-wrapper-13">
// 					Your Guide to Sustainable Transportation Solutions for a
// 					Greener Future.
// 				</p>
// 				<div className="overlap-wrapper">
// 					<div className="overlap-2" onClick={scrollToTarget}>
// 						<div className="rectangle" />
// 						<div className="text-wrapper-14">Learn More</div>
// 						<div className="ellipse" />
// 						<div className="group-2">
// 							<div className="rectangle-2" />
// 							<div className="rectangle-3" />
// 							<div className="rectangle-4" />
// 						</div>
// 					</div>
// 				</div>

// 			</div>
// 		</div>
// 	);
// }

import React from "react";

export default function Home(props) {
	const scrollToTarget = () => {
		const targetElement = document.getElementById("target-element");
		if (targetElement) {
			const offset = 120; // Adjust this value to your preference
			const elementPosition =
				targetElement.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="homepage">
			<div className="div">
				<div className="overlap">
					<div className="drive-reduce">
						Drive &amp; <br />
						Reduce
						<br />
						Emissions
					</div>
					<div className="overlap-group">
						<p className="why-should-you-care" id="target-element">
							Why should you
							<br />
							care about
							<br />
							carbon emissions?
						</p>
						<div className="overlap-2">
							<p className="of-all-emissions">
								of all CO2 emissions in cities&nbsp;&nbsp;come
								from motor vehicle exhaust
							</p>
							<p className="text-wrapper">
								is the average savings that ev drivers tend to
								save on fuel costs compared to gas cars
							</p>
							<div className="text-wrapper-2">95%</div>
							<div className="text-wrapper-3">60%</div>
							<img
								className="tree-vector"
								alt="Tree vector"
								src="/imgs/tree.svg"
							/>
							<img
								className="group"
								alt="Small Green Car"
								src="/imgs/green-car.png"
							/>
							<div className="card">
								<a href="/Search" className="button-link">
									<div className="overlap-group-2">
										<div className="text-wrapper-4">
											Search for Cars
										</div>
										<p className="p">
											Easily search a diverse range of
											cars to discover your ideal vehicle
										</p>
										<img
											className="img"
											alt="Group"
											src="/imgs/search-icon.png"
										/>
									</div>
								</a>
							</div>
							<div className="overlap-wrapper">
								<a href="/Compare" className="button-link">
									<div className="overlap-group-2">
										<div className="overlap-group-3">
											<div className="text-wrapper-5">
												Compare Cars
											</div>
											<img
												className="compare-icon"
												alt="Compare icon"
												src="imgs/compare-icon.png"
											/>
										</div>
										<p className="text-wrapper-6">
											Effortlessly compare features,
											pricing, and mileage to find your
											perfect car
										</p>
									</div>
								</a>
							</div>
							<p className="text-wrapper-7">
								of CO2 is emitted on average for every passenger
								vehicle per year
							</p>
							<p className="text-wrapper-8">
								premature deaths worldwide each year are a
								result of poor air quality from carbon emissions
							</p>
							<p className="element-metric-tons">
								<span className="span">4.6</span>
								<span className="text-wrapper-9">
									{" "}
									metric tons
								</span>
							</p>
							<p className="element-million">
								<span className="span">4.2</span>
								<span className="text-wrapper-9">
									{" "}
									million{" "}
								</span>
							</p>
						</div>
						<p className="text-wrapper-10">
							Carbon emissions are a critical issue because they
							are the primary drivers of climate change. The
							excess carbon dioxide in our atmosphere traps heat,
							leading to global warming, which in turn results in
							more extreme weather events, rising sea levels, and
							threats to our ecosystems. These changes affect
							everything from food production to water resources
							and can even impact your health due to increased air
							pollution. By caring about carbon emissions, you can
							play a part in mitigating these effects, ensuring a
							sustainable and healthier future for yourself, your
							community, and the entire planet.
						</p>
						<p className="text-wrapper-11">
							Purchasing a fuel-efficient or electric car offers
							environmental and economic benefits which lead to
							personal and environmental advantages. For more
							detailed information, consider watching a related
							video.
							<iframe
								className="video mt-5"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/J0tgtWbODXk?si=d24GCSgG9AKNJGZu"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</p>
					</div>
					<p className="why-buy-a-fuel">
						Why buy a Fuel-
						<br />
						Efficient or
						<br />
						Electric Cars?
					</p>
					<p className="text-wrapper-12">
						How Do I Know What Vehicle to Buy?
					</p>
					<a href="/Quiz" className="button-link">
						<div className="overlap-group-wrapper">
							<div className="overlap-group-2">
								<div className="text-wrapper-4">
									Take a Quiz
								</div>
								<p className="text-wrapper-13">
									Take our quiz to discover the perfect car
									that suits your lifestyle and preferences
								</p>
								<img
									className="target-icon"
									alt="Target icon"
									src="imgs/target-icon.png"
								/>
							</div>
						</div>
					</a>

					<p className="text-wrapper-14">
						Your Guide to Sustainable Transportation Solutions for a
						Greener Future.
					</p>
					<div className="overlap-3" onClick={scrollToTarget}>
						<div className="rectangle" />
						<div className="text-wrapper-15">Learn More</div>
						<div className="ellipse" />
						<div className="group-2">
							<div className="rectangle-2" />
							<div className="rectangle-3" />
							<div className="rectangle-4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
