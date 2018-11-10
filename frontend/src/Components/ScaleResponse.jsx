import React from "react";

class ScaleResponse extends React.Component {
  onSelect = () => {
    this.props.onValidInput();
  };
  get = () => {
    if (document.getElementById("na").checked) {
      return 0;
    } else if (document.getElementById("some").checked) {
      return 1;
    } else if (document.getElementById("considerable").checked) {
      return 2;
    } else {
      return 3;
    }
  };
  render() {
    return (
      <div className="left">
        <div>
          <input
            type="radio"
            id="na"
            onClick={this.onSelect}
            name="scale"
            value="na"
          />
          <label htmlFor="na">strongly disagree </label>
        </div>
        <div>
          <input
            type="radio"
            id="some"
            name="scale"
            onClick={this.onSelect}
            value="some"
          />
          <label htmlFor="some">disagree</label>
        </div>
        <div>
          <input
            type="radio"
            id="considerable"
            name="scale"
            onClick={this.onSelect}
            value="considerable"
          />
          <label htmlFor="considerable">agree</label>
        </div>
        <div>
          <input
            onClick={this.onSelect}
            type="radio"
            id="most"
            name="scale"
            value="most"
          />
          <label htmlFor="most">strongly agree</label>
        </div>
      </div>
    );
  }
}

export default ScaleResponse;
