import { useGithubAuthRedirect } from 'react-tinacms-github'
import Head from 'next/head'

// Our GitHub app redirects back to this page with auth code
export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect()

  return (
    <div className="container">
      <Head>
        <title>Authorizing...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Authorizing with GitHub, please wait...</h2>
      </main>
    </div>
  )
}