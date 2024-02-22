import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Product from './components/product/Product';
import Detail from './components/productdetail/Detail';


function App() {
  // filter

const[filter,setfilter]=useState('');



  // showcart
const[visible,setvisible]=useState(false);

function showcart(){
  setvisible(!visible);
}


// search
const[search,setsearch]=useState('');

const handlechange=(e)=>{
  setsearch(e.target.value);
  console.log(search);
}

// setsearch()

// addtocart

const[cart,setcart]=useState([]);

  const addtocart = (detail) => {
    setcart([...cart, detail]);
    console.log(detail);
  };

  const [item, setitem] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      setitem(response.data.products);
    });
  }, []);

  return (
    <div className="App">
           <Nav showcart={showcart} search={search} handlechange={handlechange}  count={cart.length} />
<Hero item={item} setfilter={setfilter}  />
<div className="feed" style={{display:'flex', gap:'50px'}} >
<Product search={search} item={item} addtocart={addtocart}  /> 
<Detail visible={visible} cart={cart}/>
</div>
       
    </div>
  );
}

export default App;
