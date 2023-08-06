"use client";
import { UserButton } from '@clerk/clerk-react'

export default function Home() {
  return (
    <div>
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
