import React from 'react'
import * as SRC3 from 'src/src3'
export const Main = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '650px',
        width: '1400px',
      }}
    >
      <SRC3.Map.Main />
      <SRC3.Player.Main />
    </div>
  )
}
