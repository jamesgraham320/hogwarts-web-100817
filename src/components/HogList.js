import React, { Component } from "react";
import HogTile from "./HogTile";
import pigData from "../porkers_data.js";
import Filter from "./Filter";

class HogList extends Component {
  constructor(props) {
    super(props);

    let pigTiles = this.getPigTiles();
    this.state = {
      pigTiles: pigTiles,
      isFiltered: false,
      sort: "Name"
    };

    this.onFilter = this.onFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSort = this.onSort.bind(this);
    this.getPigTiles = this.getPigTiles.bind(this);
  }

  getPigTiles() {
    return pigData.map(pig => {
      return (
        <HogTile
          name={pig.name}
          specialty={pig.specialty}
          greased={pig.greased}
          weight={
            pig[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          }
          medal={pig["highest medal achieved"]}
          key={pig.name}
        />
      );
    });
  }

  onSort(sort) {
    this.setState({
      pigTiles: this.state.pigTiles.sort((pig1, pig2) => {
        return pig1.props[sort] < pig2.props[sort]
          ? -1
          : pig1.props[sort] > pig2.props[sort] ? 1 : 0;
      })
    });
  }

  onFilter(event) {
    this.setState(prevState => {
      return {
        isFiltered: !prevState.isFiltered,
        pigTiles: !prevState.isFiltered
          ? prevState.pigTiles.filter(pig => {
              return pig.props.greased === true;
            })
          : this.getPigTiles()
      };
    });
  }

  handleChange(event) {
    this.setState({ sort: event.target.value });
    this.onSort(event.target.value.toLowerCase());
  }

  render() {
    return (
      <div>
        <Filter
          sort={this.state.sort}
          handleChange={this.handleChange}
          onFilter={this.onFilter}
          isFiltered={this.state.isFiltered}
        />
        <div className="ui grid"> {this.state.pigTiles} </div>
      </div>
    );
  }
}

export default HogList;
