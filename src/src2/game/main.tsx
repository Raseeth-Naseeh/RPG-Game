import React from 'react'
import * as SRC2 from 'src/src2'
export const Main = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '384px',
        top: '10px',
        left: '10px',
        // width: '384px',
        // margin: '10px auto',
      }}
    >
      <SRC2.Map.Main />
      <SRC2.Player.Main />
    </div>
  )
}
