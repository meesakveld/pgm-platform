import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Helmet } from 'react-helmet';

const client = new ApolloClient({
	uri: process.env.REACT_APP_HYGRAPH_CONTENT_API,
	cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ApolloProvider client={client}>
		<Helmet>
			<title>Graduaat Programmeren</title>
			<meta name="description" content="A platform for Graduaat Programmeren" />
		</Helmet>
		<App />
	</ApolloProvider>
);
