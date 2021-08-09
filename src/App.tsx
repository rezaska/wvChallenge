import React from 'react';
import Insights from './components/Insights';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <><p>
      Your local Wave UX Challenge is running! Edit src/App.tsx and save to
      reload.
    </p>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/invoice" render={() => { return (<Insights page={'invoice'} />) }} />
        <Route path="/payout" render={() => { return (<Insights page={'payout'} />) }} />
      </Router></>
  );
}

export default App;
