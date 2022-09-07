import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Search from './components/Search';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					The Graphic Dictionary <i className="fa-solid fa-book"></i>
				</h1>
			</header>
			<main>
				<Search />
			</main>
			<footer>
				<div className="App-footer">
					<div className="container-fluid p-4 pb-2 rounded-5 align-content-center">
						<p className="fw-bold text-center">
							Code with{' '}
							<span role="img" aria-label="heart-emoji">
								❤️
							</span>{' '}
							by Fabiola Suárez
						</p>
						<p className="text-center">
							<a
								href="https://github.com/fabiolasuarez11/the-graphic-dictionary-app"
								target="_blank"
								rel="noreferrer"
								className="repo"
							>
								Open-source Code
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
