import React, { useEffect, useState } from "react";

function Component() {
  const [item, setItem] = useState<any>();

  useEffect(() => {
    fetch(`https://demo6396395.mockable.io/prompts`)
      .then((response) => response.json())

      .then((data) => setItem(data))

      .catch((err) => console.log(err));
  }, []);
  console.log(item, "item");
  return (
    <>
      <h1 style={{ color: "red" }}> Prompts List Data</h1>
      <ul style={{ color: "green" }}>
        {item?.map((items: any) => (
          <li key={items.id}>
            <div style={{ color: "blue" }}>Name: {items.name}</div>
            <div style={{ color: "violet" }}>ID: {items.id}</div>
            <div>Created At: {items.createdAt}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Component;
