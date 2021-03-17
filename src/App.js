import React from 'react'
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import {ChatContext} from './context/ChatProvider'

function App() {

  const {usuario} = React.useContext(ChatContext)
  return usuario !== null ? (
    <div>
      <Navbar/>
      <h2 className="text-center m-4">Chat de mensajes</h2>
      {
        usuario.estado === true ? <Chat/> : (
          <div className="lead text-center mt-5">
            Debes Iniciar sesión con una cuenta Google para entrar al chat.
          </div>
        )
      }
    </div>
  ): ( <div>Cargando...</div> )
}

export default App;
