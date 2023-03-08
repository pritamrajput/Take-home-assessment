import './App.css';
import React, { useState } from 'react';
import Data from './data/users.json';

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage)=>{
    setPage(selectedPage);
  };

 

  return (
    <div className="App">
    <input type="text" placeholder = "Search..." className="search" onChange={e=>setQuery(e.target.value)}/>
     <table className='table_style'>
     <tbody>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Country</th>
        </tr>
         {
            Data.filter(user=>user.first_name.toLowerCase().includes(query)).slice(page*10-10,page*10).map((val,key) =>{
               return (
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td>{val.gender}</td>
                    <td>{val.dob}</td>
                    <td>{val.country}</td>
                </tr>
               )
            })
         }
         </tbody>
        
     </table>
     
     <div className="pagination">
      <span>⬅️</span>
      {
        [...Array(Data.length / 50)].map((_,i) =>{
          return <span onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
        })
      }
      <span onClick={()=>nextTenEntries}>➡️</span>
     </div>

    </div>
  );
}
export default App;