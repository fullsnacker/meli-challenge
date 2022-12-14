import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

import Swal from "sweetalert2";

import "./App.css";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode(prevState => !prevState);

	useEffect(() => {
		Swal.fire({
			title: "¡Atención!",
			text: "Esta web NO es el sitio oficial de Mercado Libre, se trata de un challenge de Frontend, no es un intento de phishing hacia los usuarios que la visitan.",
			icon: "warning",
			confirmButtonText: "¡Entendido!",
			confirmButtonColor: "#3484fa",
			backdrop: "rgba(0, 0, 0, 0.8)",
		});
	}, []);

	return (
		<>
			<header className={darkMode ? "dark-mode" : ""}>
				<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			</header>

			<main className={darkMode ? "dark-mode" : ""}>
				<Breadcrumbs />
				<ProductDetails />
				<ProductCarousel />
			</main>

			<footer className={darkMode ? "dark-mode" : ""}>
				Desarrollado por&nbsp;
				<a
					href="https://fullsnacker.github.io/"
					target="_blank"
					rel="noreferrer"
				>
					fullsnacker
				</a>
				<p>
					ATENCIÓN: Esta web se trata de un&nbsp;
					<a
						href="https://github.com/goncy/mercadolibre-details-challenge"
						target="_blank"
						rel="noreferrer"
					>
						challenge
					</a>
					, no es un intento de phishing hacia los usuarios que la
					visitan.
				</p>
			</footer>
		</>
	);
};

export default App;
