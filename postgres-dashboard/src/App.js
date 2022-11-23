import React from "react";
import { Header } from "semantic-ui-react";

import DashboardGrid from "./components/DashboardGrid";
import DashboardTable from "./components/DashboardTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header as="h3">Analytics Dashboard connected with Postgres</Header>
      </header>
      <div className="App-main">
        <DashboardGrid />
        <DashboardTable />
      </div>
    </div>
  );
}

export default App;