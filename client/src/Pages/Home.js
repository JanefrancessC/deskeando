import Header from "../Components/NavBar/Header";
import Hero from "../Components/Hero/Hero";
import Feature from "../Components/Feature/Feature";
import Footer from "../Components/Footer/Footer";

export function Home() {
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
