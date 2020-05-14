import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';

import Jobs from './Jobs'

const mockJobs = [
    {title: 'SWE 1', company: 'Google'},
    {title: 'SWE 1', company: 'Facebook'},
    {title: 'SWE 1', company: 'Apple'}
  ]

function App() { 
  return (
    <div className="App">
        <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
