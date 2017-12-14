import React, { Component } from "react";

class HogTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureUrl: `./hog-imgs/${props.name
        .replace(/ /g, "_")
        .toLowerCase()}.jpg`,
      isClicked: false,
      isHidden: false,
      visibility: "true",
      buttonVisible: "hidden"
    };

    this.handleClick = this.handleClick.bind(this);
    this.hideMe = this.hideMe.bind(this);
    this.showMe = this.showMe.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => {
      return { isClicked: !prevState.isClicked };
    });
  }

  hideMe(event) {
    this.setState(prevState => {
      return {
        isHidden: !prevState.isHidden,
        visibility: "hidden",
        buttonVisible: true
      };
    });
  }

  showMe(event) {
    this.setState(prevState => {
      return {
        isHidden: !prevState.isHidden,
        visibility: true,
        buttonVisible: "hidden"
      };
    });
  }

  render() {
    const pigInfo = (
      <div>
        <h1>{this.props.name} </h1>
        <h2>{this.props.specialty}</h2>
        <p>Greased: {this.props.greased + ""}</p>
        <p>Weight: {this.props.weight} </p>
        <p>Highest Award: {this.props.medal}</p>
        <button onClick={this.handleClick}>Less Info!</button>
      </div>
    );

    const infoButton = <button onClick={this.handleClick}>More Info!</button>;

    return (
      <div className="four wide column">
        <div style={{ visibility: this.state.visibility }}>
          <div className="ui card">
            <div className="image">
              <img
                alt={this.props.name}
                onClick={this.handleClick}
                src={this.state.pictureUrl}
              />
            </div>
            <div className="content">
              <div>{this.state.isClicked ? pigInfo : infoButton}</div>
              <button onClick={this.hideMe}>Hide Me!</button>
            </div>
          </div>
        </div>
        <button
          onClick={this.showMe}
          style={{ visibility: this.state.buttonVisible }}
        >
          See me!
        </button>
      </div>
    );
  }
}

export default HogTile;
