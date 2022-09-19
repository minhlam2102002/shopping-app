// export default function Login() {
//   const handleSubmit =async (event: React.SyntheticEvent) => {
//     event.preventDefault();
//     console.log('submit');

//     const data = {
//       email: event.target.email.value,
//       password: event.target.password.value,
//     }
//     const JSONdata = JSON.stringify(data)
//     console.log(event);
//     const endpoint = '/api/login'

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSONdata,
//     }

//     const response = await fetch(endpoint, options)
//     const result = await response.json()
//     alert(`Is this your full name: ${JSON.stringify(result)}`)
//   }
//   return (
//     <>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type="text" id="email" name="email" required />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" required />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }

import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}