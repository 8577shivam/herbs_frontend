import React from "react";
import { BestSellerSectiondata } from "../data/Bestsellerdata";

const BestSellerSection = () => {
  return (
    <div className="grid px-2">
      {BestSellerSectiondata.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`flex ${
              item.id % 2 !== 1 ? "flex-row-reverse" : "flex-row"
            } justify-between`}
          >
            <div className="left">Left {item.id}</div>
            <div className="right">Right Section</div>
          </div>
        );
      })}
    </div>
  );
};

export default BestSellerSection;
// bestseller section must be like a card of buying .....leftside ->img...rightside->price..desc..review
// and the whole parent div of the cards must be scrollable in fixed screen...
