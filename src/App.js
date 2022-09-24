import React from 'react'
import './App.css';
import MultipleReducers from './components/MultipleReducers';

export const UsernameContext = React.createContext()

function App() {
  return (
    <div className="App">
     <MultipleReducers />
    </div>
         
  );
}

export default App;
