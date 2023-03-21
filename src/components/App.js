import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const[loading, setLoading] = useState(false);
  const[id, setId] = useState("");
  const[item, setItem] = useState({});
  const[state, setState] = useState(false);
    const getData = async ()=>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos/"+id);
            const data = await response.json();
            setItem(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

  const handleChange = (e)=>{
    setLoading(true);
    setState(true);
    setId(e.target.value);
    getData();
  }
    return(
        <div className='app'>
            id<input type="number" onChange={handleChange}/><br />
            {state? (loading? <Loader /> : <PhotoFrame title={item.title} url={item.url} />) : null}
        </div>
    )
}


export default App;
