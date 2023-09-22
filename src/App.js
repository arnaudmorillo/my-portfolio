import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import {
	HashRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("./components/Footer"));

function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projets" element={<Projects />} />
					<Route path="/profil" element={<About />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Suspense fallback={<div>Loading...</div>}>
					<Footer />
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
