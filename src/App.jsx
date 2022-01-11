import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import { TokenProvider } from './context/UserContext';

import { GlobalStyle } from './styles/Global';

import Home from './pages/Home';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Contact from './pages/Contact';
import Creator from './pages/Creator';
import Login from './pages/Login'

export default function App() {
	const [cookies] = useCookies();

	return (
		<TokenProvider userToken={cookies.idUser ? cookies.idUser : null}>
			<GlobalStyle/>
				<BrowserRouter>
					<Switch>
						<Route path="/about" render={() => <About />} />
						<Route path="/contact" render={() => <Contact />} />
						<Route path="/creator" render={() => <Creator />} />	
						<Route path="/login" render={() => <Login/>}/>
						<Route path="/register" render={() => <Welcome/>}/>					
						{
							!cookies.idUser
								? <Route path="/" render={() => <Welcome />} />
								: <Route path="/" render={() => <Home />} />
						}
					</Switch>
				</BrowserRouter>
		</TokenProvider>
	)
};

