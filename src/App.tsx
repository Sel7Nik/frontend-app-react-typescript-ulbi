import { useEffect, useState } from "react"
import Card, { CardVariant } from "./components/Card"
import UserList from "./components/UserList"
import { IUser } from "./types/types"
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])



  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    } finally {

    }
  }

  return (
    <div>
      <h1>СТАРТ</h1>
      <Card onClick={(num) => console.log('click', num)} width={'150px'} height={'150px'} variant={CardVariant.outlined}>
        <button>ЖМИ</button>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App
