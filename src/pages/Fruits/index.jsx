import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fruits = () => {

  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/fruits",
    }).then((res) => {
      console.log(res.data);
      setFruits(res.data)
    })
  }, [])

  return (
    <div>Show all fruits:
      <ul>
        {fruits.map((fruit) => {
          return <li key={fruit._id}>
            <p>Fruit: {fruit.name}</p>
            <p>Color: {fruit.color}</p>
            <p>Age: {fruit.age}</p>
            <p>{fruit.readyToEat ? "Eat it!" : "Do not eat"}</p>
            <p>{fruit.age > 10 ? "Expired" : ""}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Fruits