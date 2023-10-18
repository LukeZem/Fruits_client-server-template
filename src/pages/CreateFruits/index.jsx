import { useState } from 'react'
import axios from 'axios';
const CreateFruits = () => {
    // fruit creation app
    const [fruitData, setFruitData] = useState({
        name: "",
        color: "",
        age: "",
        readyToEat: false
    })
    const [err, setErr] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fruitData.name || !fruitData.color) {
            setErr("invalid input")
            return;
        }
        console.log(fruitData);
        axios({
            method: "POST",
            url: "/server/fruits", // vite will handle finding server URL/URI
            data: fruitData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
        }).then((res) => {
            console.log(res);
            setFruitData({
                name: "",
                color: "",
                age: "",
                readyToEat: false
            })
            setErr("");
        })
    }
    return (
        <div>
            <h1>New Fruit page</h1>
            {err && <div>{err}</div>}
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={fruitData.name} onChange={(e) => setFruitData({ ...fruitData, name: e.target.value })} />
                <br />
                Color: <input type="text" name="color" value={fruitData.color} onChange={(e) => setFruitData({ ...fruitData, color: e.target.value })} />
                <br />
                Age: <input type="number" name="age" value={fruitData.age}
                    onChange={(e) => setFruitData({ ...fruitData, age: parseInt(e.target.value, 10) })} />

                <br />
                Is Ready To Eat: <input type="checkbox" name="readyToEat" value={fruitData.readyToEat}
                    onChange={(e) => setFruitData({ ...fruitData, readyToEat: !fruitData.readyToEat })} />
                <br />
                <button>Create Fruit</button>
            </form>
        </div>);
}
export default CreateFruits