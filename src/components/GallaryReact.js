import React, { useState } from "react";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import MenuButton from "./MenuButton";


// catagaryArray data convert into array and find the unique data.
const catagaryArray = [...new Set(Menu.map(val => val.category)), "All"];
console.log(catagaryArray);

const GallaryReact = () => {
  const [item, setItem] = useState(Menu);

  const [catArray, SetCatArray] = useState(catagaryArray);

  const filterItem = cataga => {
    if (cataga === "All") {
      setItem(Menu);
      return;
    }
    const UpdatedItem = Menu.filter(val => {
      return cataga === val.category;
    });
    setItem(UpdatedItem);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">order now</h1>
      <hr />
      <MenuButton filterItemFunPass={filterItem} catArray={catArray} />
      <MenuItems item={item} />
    </>
  );
};

export default GallaryReact;
