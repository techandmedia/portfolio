import React from "react";

export default function Tes({ data }) {
  // console.log(data);
  let dataOpen = Object.keys(data)
  // console.log('dataopen',dataOpen)
  // return <h1>{data.open}</h1>
  const forTes = data.map(dataY => {
    // return console.log(dataY.close)
    return <h1 key={dataY.close}>{dataY.close}</h1>;
  });
  return forTes;
}
