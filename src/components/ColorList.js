import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  //With Objects
  const users = [
    {id: 1, id: 1, firstName: "Duane", lastName: "Watson" },
    {id: 2, id: 1, firstName: "Duane", lastName: "Watson" }
  ]

  //With Non-unique Arrays
  const fib = [0, 1, 1, 2, 3, 5];
  const fibList = fib.map((number, index) => {
    return <div key={index}>{number}</div>
  })

  const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName}</h1>
  })

  //The Key prop
  // const colorElements = colors.map(() => {


  return (
    <div>
       {/* <li key={color} style={{ color: color }}>
      {color}
    </li> */}
    {/* <ColorItem key={color} color={color} /> */}
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
      </ol>
    </div>
  );
  // });
}

export default ColorList;
