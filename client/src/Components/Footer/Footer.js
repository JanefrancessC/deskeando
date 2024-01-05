import React, { useState } from "react";
import "./Footer.css";
import logo from "../../images/SVG/darkBG-logo-02.svg";

const Footer = () => (
	<footer className="footer">
		<div className="d-flex flex-column flex-md-row p-4 gap-5 py-md-5 align-items-center justify-content-center">
			<div
				className="position-static d-flex flex-column flex-lg-row align-items-stretch
        justify-content-start p-3 rounded-3 "
			>
				<div className="">
					<ul className="list-unstyled d-flex flex-column ">
						<li>
							<img src={logo} alt="Logo" height="40" weight="60" />
							<p className="contact py-4">Contact Us</p>
							<small className="small">
								Deskeando is a workplace experience platform <br />
								that brings your hybrid team together.
							</small>
						</li>
					</ul>
				</div>
			</div>
			<div className="d-flex flex-column flex-md-row p-4 gap-5 py-md-5 align-items-center justify-content-center">
				&nbsp; &nbsp;
			</div>
			<div className="position-static d-flex flex-column flex-lg-row align-items-stretch">
				<label className="d-flex flex-column">
					<div className="col">
						<div className="logo"></div>
						&nbsp; &nbsp;
						<div>
							<div className="contact">Follow Us</div>
							<div className="col item social py-2 me-2 mt-2">
								<a href="#">
									<i class="bi bi-facebook h2 icon-white"></i>
								</a>
								&nbsp; &nbsp;&nbsp; &nbsp;
								<a href="#">
									<i class="bi h2 bi-twitter-x icon-white"></i>
								</a>
								&nbsp; &nbsp;&nbsp; &nbsp;
								<a href="#">
									<i class="bi h2 bi-linkedin icon-white"></i>
								</a>
								&nbsp; &nbsp;&nbsp; &nbsp;
								<a href="#">
									<i className="bi h2 bi-instagram icon-white"></i>
								</a>
							</div>
							&nbsp; &nbsp;
						</div>
						<small className="py-2 ">
							<small className="cookie small">Privacy Policy | Cookie Notice</small>
							©Copyright 2024 All Right Reserved
						</small>
					</div>
				</label>
			</div>
		</div>
	</footer>
);
export default Footer;
