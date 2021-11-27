import React, { useEffect } from 'react'
import logo from '../../logo.svg'
import { useQueryUser } from '../../lib/hooks'

const App: React.FC = () => {
  const { user, setUser } = useQueryUser()

  useEffect(() => {
    setTimeout(() => {
      setUser({ firstName: 'Ini' })
    }, 2000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {user.firstName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
