import React from "react";
import "./App.css";
import Products from "./Components/Products";
import Nike1 from "./Assets/shoes.avif";
import Blue from "./Assets/blue.avif";
import mango from "./Assets/mango.avif";

function App() {
	return (
		<div className='App'>
			<h1>Workshop React Props</h1>
			<h2>Products List</h2>
			<div className='cards'>
				<Products title='Nike1' image={Nike1} />
				<Products title='Blue' image={Blue} />
				<Products title='Mango' image={mango} />
			</div>
		</div>
	);
}

export default App;
