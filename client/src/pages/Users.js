import axios from "axios"
import { useEffect, useState } from "react"

function Users() {
  let [users, setUsers] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(()=>{
    getUsers()
  }, [])

  const renderUsers = ()=>{
    return users.map((user)=>{
      return (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>
      )
    })
  }

  const getUsers= async() =>{
    try{
      let res = await axios.get('/api/users')
      setUsers(res.data)
    }catch(err){
       alert('Error occured while getting users')
       console.log(err)
    }
  }


  return (
    <>
    <p>Users</p>
    {renderUsers()}
    </>
  )
}

export default Users