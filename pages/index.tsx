import { useSession } from "next-auth/react"
import Navbar from "../components/Navbar";

export default function Component() {
  const { data: session } = useSession();

  return(
    <Navbar />
  )
  
}