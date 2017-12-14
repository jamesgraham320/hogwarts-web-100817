import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend> Pig Sorting! </legend>
          <form>
            Sort By:
            <select onChange={this.props.handleChange} value={this.props.sort}>
              <option value="Weight">Weight</option>
              <option value="Name">Name</option>
            </select>
            <label>
              Greasy bacon?
              <input
                type="checkbox"
                onChange={this.props.onFilter}
                name="Greased?"
                value={this.props.isFiltered}
              />
            </label>
          </form>
        </fieldset>

        <br />
        <br />
      </div>
    );
  }
}

export default Filter;
