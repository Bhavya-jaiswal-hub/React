import {getPosts,getRandomUser}  from './api'
import {useState,useEffect}  from 'react';
import UserCard  from './components/UserCard';
import './App.css'
import PostCard from   './components/PostCard';
// import Board from "./TicTacToeGame/Board";
const App = () => {
  
  const [data,setData] = useState(null);
  const [userdata,setUserdata] = useState(null);
  
  useEffect(() => {
     getPosts().then((posts) => setData(posts));
  },[]);

  useEffect(() => {
     getRandomUser().then((user) => setUserdata(user.results[0])); 
  },[]);

  const refresh = () => {
      getRandomUser().then((user) => setUserdata(user.results[0])); 
  };
 
  return (
    <div className="App">
      {userdata &&  <UserCard data={userdata} /> }
      <button onClick={refresh}>Refresh User</button>
      {data ? data.map((e) => <div className='box-cover'><PostCard title={e.title} body={e.body}/></div>) : <h1> </h1>}
     {/* <Board / > */}
    </div>
  );
};

export default App;
