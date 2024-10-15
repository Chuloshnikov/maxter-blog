import React from 'react'

const Author = ({ user }: any) => {
  return (
    <div>
        {user?.displayName}
        {user?.username}
        {user?.email}
    </div>
  )
}

export default Author;