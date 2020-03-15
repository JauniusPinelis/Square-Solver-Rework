import React from "react";
import Container from "react-bootstrap/Container";

import PointsTable from "./components/PointsTable";

function App() {
  return (
    <div className="App">
      <Container>
        <PointsTable />
      </Container>
    </div>
  );
}

export default App;
