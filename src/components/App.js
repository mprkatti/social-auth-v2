import React from 'react';
import Header from './Header';
import Content from './Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Company from './Company';
import Careers from './Careers';
import Feedback from './Feedback';

class App extends React.Component {

  render() {
    return (
      <div className="">
        <Router>
          <div className="" >
            <Header />
            <Route path="/" exact component={Content} />
            <Route path="/about" exact component={About} />
            <Route path="/company" exact component={Company} />
            <Route path="/careers" exact component={Careers} />
            <Route path="/feedback" exact component={Feedback} />
          </div >
        </Router>
      </div>
    );
  }


}

export default App;