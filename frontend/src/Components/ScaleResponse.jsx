import React, { Component } from "react";

class ScaleResponse extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" id="na" name="na" value="na" />
          <label htmlFor="na">Did not apply to me at all</label>
        </div>
        <div>
          <input type="checkbox" id="some" name="some" value="some" />
          <label htmlFor="some">
            Applied to me to some degree, or some of the time
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="considerable"
            name="considerable"
            value="considerable"
          />
          <label htmlFor="considerable">
            Applied to me a considerable degree or a good part of time
          </label>
        </div>
        <div>
          <input type="checkbox" id="most" name="most" value="most" />
          <label htmlFor="most">
            Applied to me very much or most of the time
          </label>
        </div>
      </div>
    );
  }
}

export default ScaleResponse;
