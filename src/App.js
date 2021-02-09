import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'

import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    displayName: "Karin Deutsch",
    email: "karin@deutsch.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh4.googleusercontent.com/-HxSlDPTL1J4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnGt3DNO6L5sFIzfPXtXEPUMRREIA/s96-c-rg-br100/photo.jpg"
  })
  //authentication

  return (
    <div className="App">
      <header className="App-header">
        <Header userPhoto={user.photoURL} />
        <Sidebar />
        {/*auth = true 
          sidebar
          filesview
          sideicon  */ }
      </header>
    </div>
  );
}

export default App;
