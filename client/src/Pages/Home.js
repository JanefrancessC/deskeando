import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../Components/NavBar/Header";
import Hero from "../Components/Hero/Hero";
import Feature from "../Components/Feature/Feature";
import Footer from "../Components/Footer/Footer";
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
