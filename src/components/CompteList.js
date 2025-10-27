import React from 'react';

function CompteList() {
  const comptes = [
    { id: 1, solde: 5000, dateCreation: '2024-01-15', type: 'COURANT' },
    { id: 2, solde: 12000, dateCreation: '2024-02-20', type: 'EPARGNE' },
    { id: 3, solde: 3500, dateCreation: '2024-03-10', type: 'COURANT' }
  ];

  return (
    <div className="container mt-4">
      <h2>Liste des Comptes</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Solde</th>
            <th>Date de Création</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {comptes.map(compte => (
            <tr key={compte.id}>
              <td>{compte.id}</td>
              <td>{compte.solde}</td>
              <td>{compte.dateCreation}</td>
              <td>{compte.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompteList;