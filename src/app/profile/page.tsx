"use client"

import { signOut } from "next-auth/react"

export default function Profile() {
  return (
    <div>
        <div onClick={() => signOut()}>
        page
        </div>
    </div>
  )
}
