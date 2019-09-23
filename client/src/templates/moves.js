import React from "react"
export default ({ pageContext: { data } }) => (
  <div>
    <h1>All the moves</h1>
    <ul>
      {data.map(move => (
        <li key={move.id || ""}>
          <p>{move.name}</p>
        </li>
      ))}
    </ul>
  </div>
)
