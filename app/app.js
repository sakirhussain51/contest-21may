import React from 'react'
import '../styles/App.css';
import like from '../like.svg';

const App = () => {
  const [count,setCount] = React.useState(0);
  const handleclick=()=>{
    setCount(count+1);
    
  }
  return (
    <div id="main">
      <img id="like-btn-img" src='../like.svg' onClick={handleclick}
       style={{fill:'white',width:'100px',backgroundColor:`rgba(255,0,0,${count/10})`}} />
      <h3>Likes: <span id="like-counter">{count}</span></h3>
    </div>
  )
}


export default App;
