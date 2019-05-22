import React from 'react';
import icon from './icon.png';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
	<Router>
		<div className="App">
			<header className="App-header">
				<img src={icon} className="App-logo" alt="icon" />
				<h1 className="App-title">Welcome to the push-notification demo !</h1>
				<Header />

			</header>
			<br /><br /><br />
			<button onClick={askForPermissioToReceiveNotifications} >
				Click here to receive notifications
			</button>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/topics" component={Topics} />
		</div>
  </Router>
);

function Home() {
	return <h2>Home</h2>;
  }

function About() {
	return <h2>About</h2>;
  }
  
  function Topics() {
	return <h3>Requested Param:</h3>;
  }

  function Header() {
	return (
		<div>
			<ul>
				<li>
				<Link to="/">Home</Link>
				</li>
				<li>
				<Link to="/about">About</Link>
				</li>
				<li>
				<Link to="/topics">Topics</Link>
				</li>
			</ul>
	  </div>
	);
  }

export default App;
