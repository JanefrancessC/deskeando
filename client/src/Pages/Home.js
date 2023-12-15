import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../NavBar/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Feature from "../Feature/Feature";

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
				<Header />
				<Hero />
				<Feature />
				<Footer />
			</div>
		</main>
	);
}

export default Home;
