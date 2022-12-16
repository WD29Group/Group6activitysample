import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <center>
        <div className="p-3 border mt-2 mb-2 frostedglass2 xtransp">
          <h5>TIme is</h5>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
          <h5>Today is</h5>
          <h2>{this.state.date.toDateString()}.</h2>
        </div>
      </center>
    );
  }
}

export default Clock;
// <div className="p-3 border mt-2 mb-2 frostedglass2 xtransp">
//   <h2>9:00 AM</h2>
//   <h3>December 16, 2022</h3>
// </div>;
