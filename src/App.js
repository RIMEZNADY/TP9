import React from 'react';
import CompteForm from './components/CompteForm';
import CompteList from './components/CompteList';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', padding: '20px', color: '#333'}}>
        Gestion des Comptes
      </h1>
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;