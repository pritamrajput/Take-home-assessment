import './App.css';
import React, { useState } from 'react';
import Data from './data/users.json';

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("");
  

  return (
    <div className="App">
    <input type="text" placeholder = "Search..." className="search" onChange={e=>setQuery(e.target.value)}/>
     <table className='table_style'>
     <tbody>
        <tr>
            <th>ID</th>
            <th>Username<div className='btngroup'><button onClick={sortByUsername}>↑</button><button>↓</button></div></th>
            <th>Firstname<div className='btngroup'><button>↑</button><button>↓</button></div></th>
            <th>Lastname<div className='btngroup'><button>↑</button><button>↓</button></div></th>
            <th>Email<div className='btngroup'><button>↑</button><button>↓</button></div></th>
            <th>Gender<div className='btngroup'><button>↑</button><button>↓</button></div></th>
            <th>DOB<div className='btngroup'><button>↑</button><button>↓</button></div></th>
            <th>Country<div className='btngroup'><button>↑</button><button>↓</button></div></th>
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
      <span onClick={()=>selectPageHandler(page-1)}>⬅️</span>
      <span onClick={()=>selectPageHandler(page)}>{(page)}</span>
      <span onClick={()=>selectPageHandler(page+1)}>➡️</span>
     </div>

    </div>
  );
}
export default App;