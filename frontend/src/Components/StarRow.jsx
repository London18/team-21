import React from "react";

class StarRow extends React.Component {
  render() {
    if (this.props.goalSet) {
      let starValues = [];
      for (let i = 0; i < this.props.totalStars; i++) {
        starValues[i] = false;
      }
      for (let i = 0; i < this.props.filledStars; i++) {
        starValues[i] = true;
      }
      return (
        <div>
          {starValues.map(item => {
            if (item) {
              return <img src="../images/filledStar.png" alt="filled star" />;
            } else {
              return <img src="../images/star.png" alt="unfilled star" />;
            }
          })}
        </div>
      );
    } else {
      return <p>Set a goal</p>;
    }
  }
}
StarRow.defaultProps = { goalSet: true };
export default StarRow;
