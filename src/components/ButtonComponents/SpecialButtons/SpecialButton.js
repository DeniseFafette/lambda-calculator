import React from "react";

const SpecialButton = () => {
  return (
    <div>
      {SpecialButton.map((b, index) => (
        <SpecialButton key={index} button = {b} />/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};
