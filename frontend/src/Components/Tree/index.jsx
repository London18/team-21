import React from "react";
import { parse } from "querystring";
const pad = size => {
  if (size < 10) {
    return "00" + size;
  } else if (size < 100) {
    return "0" + size;
  } else {
    return size;
  }
};
const axios = require("axios");

class Tree extends React.Component {
  constructor(props) {
    super(props);
  }

  /*componentDidMount() {
    axios
      .post("http://localhost:8000/questionCount")
      .then(response => {
        this.setState({
          questionCount: response,
        });
      })
      .catch(error => {});
  }*/
  render() {
    console.log(
      "./images/tree/frame_" +
        pad(localStorage.getItem("numberOfQuestions")) +
        "_delay-0.05s.png",
    );
    return (
      <div>
        <div>
          <img
            src={
              "./images/tree/frame_" +
              pad(
                Math.min(
                  4 * parseInt(localStorage.getItem("numberOfQuestions")),
                  100,
                ),
              ) +
              "_delay-0.05s.png"
            }
            alt="Progress tree"
          />
          <br />
          <br />
          <i style={{ fontSize: "18px" }}>
            Someone is sitting in the shade today because someone planted a tree
            a long time ago.
          </i>
        </div>
      </div>
    );
  }
}

Tree.defaultProps = { questionCount: 0 };
export default Tree;
