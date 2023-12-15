import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
<<<<<<< HEAD
import Header from "../NavBar/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Feature from "../Feature/Feature";
=======
import logo from "./logo.svg";
import Hero from './HomePage/Hero';
>>>>>>> image and logo added

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
<<<<<<< HEAD
				<Header />
				<Hero />
				<Feature />
				<Footer />
=======
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/Navbar">NavBar</Link>
				<Link to="/Hero">Hero</Link>
>>>>>>> image and logo added
			</div>
		</main>
	);
}

export default Home;
