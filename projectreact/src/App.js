import React ,{useState} from 'react';
import Tweet from './Tweet';

function App()
{
  const [isRed,setRed] = useState(false);
  var [count,setCount] = useState(0);

  const [users,setUsers] = useState([
     {name : "Hissam" ,image :'./images/Hissam.jpeg'},
    {name:'Usman' , image:'./images/Usman.jpeg'},
    {name:'aaqib'  ,image:'./images/aaqib.jpeg'},
    {name:'Faraz'  ,image:'./images/faraz.jpeg'},
    {name:'Hamza' , image:'./images/hamza.jpeg'}
  ])

  const increment = () =>
  {
    setCount(count+1);
    setRed(!isRed);
  }
  
  
  return(
      <div className='app'>
        {users.map(user =>(
          <Tweet name = {user.name} image = {user.image}/>))
        }        
        <h1 className={isRed ? 'red' : ''}>Change my color</h1>

         <button onClick={increment}>increment</button>
        <h1 className={isRed ? 'red' : ''} >{count}</h1>
      </div>

  );
}

export default App;