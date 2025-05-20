import React from 'react';
import './App.css';   

function App() {
  return (
       <div className="app-container">
      <header className="app-header">
        <h1>Dashboard de Gestion du stock </h1>
        <p>Visualisation interactive des données via Power BI</p>
      </header>
      <main className="iframe-wrapper">
        <iframe
          title="Power BI STOCK1"
          width="100%"
          height="600"
          src="https://app.powerbi.com/reportEmbed?reportId=65163ef3-5bdd-43e8-836c-9fee7351a7e1&autoAuth=true&ctid=a6b77e38-1122-40a5-8e5c-07e4aaad9743"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>

      <footer className="app-footer">
        <p>© 2025 - Projet de Gestion du stock</p>
      </footer>
    </div>
  );
}

export default App;
