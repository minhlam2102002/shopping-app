import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
  // return (
  //   <>
  //     <h1>Home page</h1>
  //   </>
  // )
}
