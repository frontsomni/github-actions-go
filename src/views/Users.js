import { useState } from "react"

export default function Users() {
  const [users, setUsers] = useState([])
  async function fetchData() {
    let data = await fetch('https://api.codermore.com/api/list')
    let res = await data.json()
    setUsers(res.data.list)
  }
  return (
    <>
      <h3>Users</h3>
      <button onClick={fetchData}>获取用户列表</button>
      <ul>
        {
          users.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </>
  )
}