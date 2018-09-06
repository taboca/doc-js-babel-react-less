import React, { Component } from 'react';
import style from "./other.less";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  className={style.testing}>Hello world</div>
    );
  }

}

export default App;
