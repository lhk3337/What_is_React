import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
    doub: 2
  };
  add = () => {
    this.setState(current => ({
      count: current.count + 1,
      doub: current.doub + 2
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
      doub: current.doub - 2
    }));
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <h1>The double number is :{this.state.doub}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
// https://mtops.hmc.co.kr/e.jsp?P=FmsU5P-ILWjqnvmp73fim I-blnJp38hZnTDqPJUDMLh L9GXCD5yv0A
// https://mtops.hmc.co.kr/e.jsp?P=FmsU5P-ILWjqnvmp73fim NSs7Gont8ruH3X0HZyhACt L9GXCD5yv0A
