import React, {useState} from 'react';
import { ApolloClient, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import './App.css';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';


const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});


const App = () => {

  const [id, setId] = useState(1);
  const onClickHandler = (newId:number) => {
    setId(newId);
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LaunchList onClickHandler={onClickHandler} />
        <LaunchProfile id={id} />
      </div>
  </ApolloProvider>  
  );
};

export default App;