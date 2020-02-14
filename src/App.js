import React, {useEffect, useState} from 'react';
import Loading from './components/Loading';
import Form from "./components/Form";
import './App.css';




const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			<Loading loading={loading}/>

			<Form />
			</>
	);
};

export default App;
