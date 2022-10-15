import React, { useState } from "react";

const MenuButton = ({ filterItemFunPass, catArray }) => {
  console.log(catArray);
  const [ArrayCatData, setArrayCatData] = useState(catArray);
  return (
    <div>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {ArrayCatData.map((val, index) => {
            return (
              <button
                key={index}
                className="btn btn-warning"
                onClick={() => filterItemFunPass(val)}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
