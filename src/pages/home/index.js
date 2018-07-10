import React, { Component } from 'react';

import Benner from '../../components/benner';
import Article from '../../components/article';
import Tags from '../../components/tags';
class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
          <Benner></Benner>
          <div className="container page">
            <div className="row">
              <Article></Article>
              <Tags></Tags>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
