import Footer from './componentes/layout/footer/Footer';
import Header from './componentes/layout/header/Header';
import About from './componentes/pages/about/About';
import Review from './componentes/pages/review/Review';
import Home from './componentes/pages/home/Home';
import Contact from './componentes/pages/contact/Contact';
import Produto from './componentes/components/produto/Produto';
import React from 'react';

function App() {

	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch("/api")
		.then((res) => res.json())
		.then((data) => setData(data.message));
	}, []);

	return (
		<div className="App">
    		<p>Hello World</p>
			<p>{!data ? "Loading..." : data}</p>
		</div>
	);
}

export default App;
