import { useEffect, useState } from 'react';
import './App.css';
 const usersArray = [
  {name: 'User1'},
  {name: 'User2'},
  {name: 'User3'},
  {name: 'User4'},
  {name: 'User5'},
  {name: 'User6'},
  {name: 'User7'},
  {name: 'User8'},
  {name: 'User9'},
  {name: 'User10'},
 ];
 const GenerateUsers = () =>{
  return usersArray.map((user)=>{
    return user.name
  })
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  
  
  const [users,setUsers] = useState(GenerateUsers());
  
  const clickHandler = () =>{
    const element = users[getRandomInt(users.length)];
    setUsers(users.filter(function(e) { return e !== element }));
  };

  useEffect(()=>{  
    document.title = users.length + ' users left'; 
    },[users]);
  
  return (
    <div className="App">
     <div className='header'>users left:</div>
     <div className='userslist'>
        {users.map((user) => (
            <p>{user}</p>
        ))}
     </div>
     <button onClick={clickHandler}>click</button>
    </div>
  );
}

export default App;
