import axios from 'axios';

export const load = async () => {
	const response = await axios.get(
		`https://newsapi.org/v2/everything?q=tesla&apiKey=41fe10ca82d24eb88fe16ff10a8307c0`
	);

	return response.data;
};
