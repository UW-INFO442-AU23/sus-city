import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav className="nav-bar fixed-top navbar navbar-expand-sm navbar-dark">
				<div className="container-fluid">
					<NavLink to="/" className="web-logo navbar-brand">
						<img src="/imgs/logo.png" alt="X scape logo" className="logo-img" />
					</NavLink>

					{/* Hamburger Menu Button */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Collapsible Menu */}
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink to="/" className="nav-link" activeClassName="active">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Search" className="nav-link" activeClassName="active">
									Search
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Quiz" className="nav-link" activeClassName="active">
									Quiz
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Compare" className="nav-link" activeClassName="active">
									Compare
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/About" className="nav-link" activeClassName="active">
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<main>
				<Outlet />
			</main>

			<footer class="footer">
				<div class="footer-logo">
					<img src="/imgs/logo.png" alt="Logo" />
				</div>
				<div class="footer-info">
					<span>&copy; 2023 INFO 442 X-Scape</span>
				</div>
			</footer>
		</div>
	);
}

export default Navbar;
