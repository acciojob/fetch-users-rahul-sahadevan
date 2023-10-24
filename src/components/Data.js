import React,{useState} from 'react'
import axios from 'axios'

function Userdata(){
   let [isClicked,setClicked] = useState(false)
    let [datas,setDatas] = useState([]);

    function handleUser(){
        axios.get("https://reqres.in/api/users")
        .then((data)=>{
            console.log(data.data.data)
            setDatas(data.data.data);
            if(isClicked === false){
                setClicked(true)
            }
            else{
                setClicked(false)
            }
        })
        .catch((error)=>{
            alert(error)
        })
        
    }

    return (
        <div>
            <div className='btn-head'>
                <h2>Blue Whales</h2>
                <button onClick={handleUser}  className='btn'>Get User List</button>
            </div>
            
                <table >
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </thead>
               {

                isClicked ? (
                        <tbody>

                            {
                                datas.map((data)=>{
                                    return (
                                        <tr>
                                            <td>{data.first_name}</td>
                                            <td>{data.last_name}</td>
                                            <td>{data.email}</td>
                                            <td><img src={data.avatar}></img></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>  

                    )
                    :
                    (
                        <p className='no-data'>No data found to display.</p>
                    )
               } 
            </table>
            
        </div>
    )
}
export default Userdata