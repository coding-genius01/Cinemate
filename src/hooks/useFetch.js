import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
		async function fetchMovies() {
			const reponse = await fetch(url);
			const json = await reponse.json();
			setData(json.results);		//accessing the results attribute only in the object that is fetched
		}

		fetchMovies();
	}, [url])

  return { data }
}
