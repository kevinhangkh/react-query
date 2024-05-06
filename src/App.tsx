import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Demo from './components/Demo';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>react-query tutorial</h1>
      <QueryClientProvider client={queryClient}>
        <Demo />
      </QueryClientProvider>
    </div>
  );
}

export default App;
