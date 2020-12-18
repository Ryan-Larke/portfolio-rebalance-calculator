import './App.css';
import { Button } from '@material-ui/core';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState([]);

  return (
    <div className="App" style={{ margin: "50px" }}>
      <div>
        {count.map(() => (
          <><input />
            <br /></>
        ))}
      </div>

      <Button variant="contained" color="primary" onClick={() => { setCount([...count, {}]) }}>
        Add security
      </Button>

    </div>
  );
}

export default App;
