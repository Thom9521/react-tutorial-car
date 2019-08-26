import React from 'react';
import ReactDOM from 'react-dom';
import './Car.css';
import styles from './styles.module.css';
import logo from './logo.svg';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Car? ",
      model: "Mustang ",
      color: "red ",
      year: 1964,
      className: styles.bigred,
      carClassName: "Car-logo-slow",
    };
  }
  changeColor = () => {
    if (this.state.color === "red ") {
      this.setState({ color: "blue ", model: "Cedang ", className: styles.bigblue, year: 2019, carClassName: "Car-logo-medium" });
    }
    else if (this.state.color === "blue ") {
      this.setState({ color: "green ", model: "Stationcar ", className: styles.biggreen, year: 1999, carClassName: "Car-logo-fast" });
    }
    else {
      this.setState({ color: "red ", model: "Mustang ", className: styles.bigred, year: 1964, carClassName: "Car-logo-insane" });
    }
  }
  render() {
    return (
      <div>
        <h1 className={styles.bigyellow}>What {this.state.brand}</h1>
        <p className={this.state.className}>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
          </p>
        <button id="Nice-button"
          type="button"
          onClick={this.changeColor}
        >Next</button>
        <br />
        <br />
        <br />
        <br />
        <header className="Car-header">
          <img src={logo} className={this.state.carClassName} alt="logo" />

        </header>
      </div>
    );
  }
}

export default Car;