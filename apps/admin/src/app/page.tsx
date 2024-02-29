import { Avatar, AvatarFallback, AvatarImage } from "@deroy/components/src/ui/avatar"
import { FunctionComponent } from "react"

const HomePage: FunctionComponent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      Hello this is a test.
    </div>
  )
}

export default HomePage
