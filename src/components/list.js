import { listContext } from "../App";
import React, { useContext } from "react";

export default function List() {
  const val = useContext(listContext).el;
  return (
    <>
      {val.map((value) => (
        <li>{value}</li>
      ))}
    </>
  );
}
