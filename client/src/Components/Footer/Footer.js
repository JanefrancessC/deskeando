import React, { useState } from "react";
import "./Footer.css";
import logo from "../../images/SVG/darkBG-logo-02.svg";

const Footer = () => (
	<footer className="footer">
		<div className="d-flex flex-column flex-md-row  py-md-5 align-items-center justify-content-center" style={{height: "10rem"}}>
			<div className="position-static d-flex flex-column flex-lg-row align-items-stretch">
				<label className="d-flex flex-column">
					<div className="col">
						<div className="logo"></div>
						&nbsp; &nbsp;
						<div className="h-50">
							<p className="contact text-center fs-5">Follow Us</p>
							<div className="col item social mx-auto">
								<a href="#">
									<i className="bi bi-facebook h4 icon-white"></i>
								</a>
								&nbsp; &nbsp;&nbsp; &nbsp;
								<a href="#">
									<i className="bi h4 bi-twitter-x icon-white"></i>
								</a>
								&nbsp; &nbsp;&nbsp; &nbsp;
								<a href="#">
									<i className="bi h4 bi-linkedin icon-white"></i>
								</a>
								&nbsp; &nbsp;&nbsp; &nbsp;
								<a href="#">
									<i className="bi h4 bi-instagram icon-white"></i>
								</a>
							</div>
							&nbsp; &nbsp;
						</div>
						<small >
							©Copyright 2024 All Right Reserved
						</small>
					</div>
				</label>
			</div>
		</div>
	</footer>
);
export default Footer;
