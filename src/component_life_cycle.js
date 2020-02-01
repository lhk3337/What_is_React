import React from "react";

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <img src="https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        ) : (
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        )}
      </div>
    );
  }
}

export default App;
