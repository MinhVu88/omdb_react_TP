import React, {useState} from 'react';
import axios from 'axios';
import Search from './components/Search'
import ShowMovies from './components/Movies';
import Select from './components/SelectedMovie'

const api_url = 'https://www.omdbapi.com/?apikey=5e985476';

let search_results = [];

let user_search = '';

let selected_movie = {};

export default function App() {
	const[state, setState] = useState({
		searchQuery: '',
		results: [],
		selected: {}
	});

	const handleInput = e => {
		user_search = e.target.value;

		setState(previousState => {return {...previousState, searchQuery: user_search}});

		console.log(state.searchQuery);
	};

	const openSelected = movieID => {
		axios(api_url + '&i=' + movieID).then(({data}) => {
			selected_movie = data;

			console.log(selected_movie);

			setState(previousState => {return {...previousState, selected: selected_movie}});
		});
	};

	const closeSelected = () => {setState(previousState => {return {...previousState, selected: {}}});};

	const search4Movies = e => {
		if(e.key === 'Enter') {
			axios(api_url + '&s=' + state.searchQuery).then(({data}) => {
				search_results = data.Search;

				setState(previousState => {return {...previousState, results: search_results}});
			});
		}
	};

	return (
		<div className="App">
			<header>
				<h1>Movie React App 2020</h1>
			</header>
			<main>
				<Search handleInput={handleInput} look4Movies={search4Movies}/>

				<ShowMovies movies={state.results} openSelectedFilm={openSelected}/>
				
				{(typeof state.selected.Title !== 'undefined') ? <Select selectedMovie={state.selected} closeSelectedFilm={closeSelected}/> : false}
			</main>
		</div>
	);
};
