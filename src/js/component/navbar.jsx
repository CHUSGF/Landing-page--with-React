import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarScroll">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Contac
							</a>
						</li>
					</ul>
					<form className="d-flex"></form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
