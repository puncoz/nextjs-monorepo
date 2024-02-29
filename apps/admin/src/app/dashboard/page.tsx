"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@deroy/components-build"
import { FunctionComponent } from "react"

const DashboardPage: FunctionComponent = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      This is dashboard.
    </div>
  )
}

export default DashboardPage
