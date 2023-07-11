import React, {useState, useEffect} from "react"
import axios from 'axios'
import './App.css';

function App() {
        const [title, setTitle] = useState("");
        const [price, setPrice] = useState(0);
        const [description, setDescription] = useState("");
        // useEffect ( () => {
        //   axios.get("http://localhost:8000/api/product")
        //   .then((response) =>{
        //     console.log(response.data.results)
        //     setTitle(response.data.results)
        //     setPrice(response.data.results)
        //     setDescription(response.data.results)
        //   })
        //   .catch((err)=> console.log(err))
        
        // }, []);
    
        const formHandler = (event) => {
              event.preventDefault();
              axios.post("http://localhost:8000/api/product", {
                title,
                price,
                description
              })
                .then(res =>{
                  console.log(res);
                  console.log(res.data)
                })
                .catch(err=>console.log(err))
              }
        return (
            <form onSubmit={formHandler}>
              <h1>Product Manager</h1>
              <p>Please input and submit your Product</p>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={(event)=>setTitle(event.target.value)} />
                <label htmlFor="price">Price</label>
                <input type="text" onChange={(event)=>setPrice(event.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" onChange={(event)=>setDescription(event.target.value)} />
                <input type="submit" />
            </form>

        )


        }


    



export default App;
