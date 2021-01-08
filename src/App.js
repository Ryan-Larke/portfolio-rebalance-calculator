import './App.css';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {

  const classes = useStyles();

  const [count, setCount] = useState([]);

  return (
    <div className="App" style={{ margin: "50px" }}>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic" label="Current portfolio value" />
            <TextField id="standard-basic" label="Amount to invest" />
          </div>
          {count.map(() => (
            <>
              <TextField id="standard-basic" label="Security" />
              <TextField id="standard-basic" label="Target allocation %" />

              <br /></>
          ))}
        </form>
      </div>

      <Button variant="contained" color="primary" onClick={() => { setCount([...count, {}]) }}>
        Add security
      </Button>



    </div>
  );
}

export default App;
