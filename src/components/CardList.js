import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map((e) => {
        return <Card id={e.id} name={e.name} email={e.email} />;
      })}
    </div>
  );
}
