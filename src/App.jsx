import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { TokenProvider } from './context/UserContext';

import { GlobalStyle } from './styles/Global';

import Home from './pages/Home';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Contact from './pages/Contact';
import Creator from './pages/Creator';
import Login from './pages/Login';
import Register from './pages/Register';
import SendEmail from './pages/SendEmail';
import ResetPassword from './pages/ResetPassword';

export default function App() {
	const [cookies] = useCookies(['userID']);

	return (
		<TokenProvider userToken={cookies.userID ? cookies.userID : ''}>
			<GlobalStyle/>
				<BrowserRouter>
					<Switch>
						<Route path="/about" render={() => <About />} />
						<Route path="/contact" render={() => <Contact />} />
						<Route path="/creator" render={() => <Creator />} />	
						<Route path="/login" render={() => <Login/>}/>
						<Route path="/register" render={() => <Register/>}/>
						<Route path="/send-email" render={() => <SendEmail/>}/>
						<Route path="/reset-password" render={() => <ResetPassword/>}/>					
						{
							!cookies.userID
								? <Route path="/" render={() => <Welcome />} />
								: <Route path="/" render={() => <Home />} />
						}
					</Switch>
				</BrowserRouter>
		</TokenProvider>
	)
};

