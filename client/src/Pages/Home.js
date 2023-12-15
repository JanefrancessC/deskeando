import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added new features
import Header from "../NavBar/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Feature from "../Feature/Feature";
<<<<<<< HEAD
=======
import logo from "./logo.svg";
<<<<<<< HEAD
import Hero from './HomePage/Hero';
>>>>>>> image and logo added
=======
>>>>>>> navbar, footer added
=======
>>>>>>> added new features

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
<<<<<<< HEAD
=======
>>>>>>> added new features
				<Header />
				<Hero />
				<Feature />
				<Footer />
<<<<<<< HEAD
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
<<<<<<< HEAD
				<Link to="/Navbar">NavBar</Link>
				<Link to="/Hero">Hero</Link>
>>>>>>> image and logo added
=======
				<Link to="/navbar">NavBar</Link>
				<Link to="/footer">Footer</Link>
>>>>>>> navbar, footer added
=======
>>>>>>> added new features
			</div>
		</main>
	);
}

export default Home;
