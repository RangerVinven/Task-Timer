import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user!.email} <br />
        <button className="bg-slate-300" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="bg-slate-300" onClick={() => signIn()}>Sign in</button>
    </>
  )
}