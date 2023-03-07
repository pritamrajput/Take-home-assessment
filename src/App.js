
import './App.css';
import Data from './data/users.json';

function App() {
  return (
    <div className="App">
     <table className='table_style'>
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
            Data.map((val,key) =>{
               return (
                <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td>{val.dob}</td>
                    <td>{val.gender}</td>
                    <td>{val.country}</td>
                </tr>
               )
            })
         }
        
     </table>

    </div>
  );
}



export default App;