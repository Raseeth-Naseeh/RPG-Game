import React from 'react'
import * as SRC2 from 'src/src2'
export const Main = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '384px',
        width: '384px',
        margin: '10px auto',
        background: 'grey',
      }}
    >
      <SRC2.Map.Main />
      <SRC2.Player.Main />
    </div>
  )
}
