import React from "react";
export default function Card({ id, name, email }) {
  return (
    //   here tachyons css classes are used
    <div className="pa3 ma2 br3 dib tc bg-light-green grow bw3 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="Robo Pic" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
