import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import * as Game from 'src/game'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Game.Main />
  </React.StrictMode>,
)
