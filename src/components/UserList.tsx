import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(u =>
        <div key={u.id} style={{ padding: 15, border: ' 2px solid lightgray' }}>
          {u.id}.{u.name} проживает в городе {u.address.city} на улице {u.address.street}
        </div>

      )}
    </div>
  )
}

export default UserList
