import Card, { CardVariant } from "./components/Card"
import UserList from "./components/UserList"
import { IUser } from "./types/types"

const App = () => {

  const users: IUser[] = [
    {
      id: 1, name: 'Nik', email: 'email@mail.ru', address: {
        city: 'Moscow', street: 'Vesennaya'
      }
    },
    {
      id: 2, name: 'Sem', email: 'email@mail.ru', address: {
        city: 'Kiev', street: 'Mira'
      }
    }
  ]
  return (
    <div>
      <h1>СТАРТ</h1>
      <Card onClick={(num) => console.log('click', num)} width={'150px'} height={'150px'} variant={CardVariant.primary}>
        <button>ЖМИ</button>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App
