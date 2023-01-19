import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import * as Game from 'src/game'
import * as Game from 'src/src2/game'
import * as Context from 'src/src2/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context.GlobalProvider>
      <Game.Main />
    </Context.GlobalProvider>
  </React.StrictMode>,
)
