import React from 'react'
import useEventListener from '@use-it/event-listener'
import * as Listner from 'src/game/useEvent'

const MAX_STEP = 3
const SIZE = 32
const Directions = {
  DOWN: 0,
  LEFT: SIZE * 1,
  RIGHT: SIZE * 2,
  UP: SIZE * 3,
}

export const Main = ({ charectorImg }: any) => {
  const [facing, setFacing] = React.useState({
    current: Directions.DOWN,
    previous: Directions.DOWN,
  })
  const [step, setStep] = React.useState(0)
  const [position, setPosition] = React.useState({
    l: 100,
    r: 0,
    t: 100,
    d: 0,
  })
  const Offset = {
    top: 0,
    left: 96,
  }

  Listner.useEventListener('keydown', ({ code }: any) => {
    const direction = Directions[code.replace('Arrow', '').toUpperCase()]
    // preventDefault()
    setFacing((prev) => ({ current: direction, previous: prev.current }))
    if (direction === 64) {
      setPosition((prev) => ({
        l: prev.l + 1,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    } else if (direction === 0) {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t + 1,
        d: prev.d,
      }))
    } else if (direction === 32) {
      setPosition((prev) => ({
        l: prev.l - 1,
        r: prev.r + 1,
        t: prev.t,
        d: prev.d,
      }))
    } else if (direction === 96) {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t - 1,
        d: prev.d + 1,
      }))
    }
  })

  React.useEffect(() => {
    if (facing.current === facing.previous) {
      setStep((prev) => (prev < MAX_STEP - 1 ? prev + 1 : 0))
    } else {
      setStep(0)
    }
  }, [facing, position])
  return (
    <div
      style={{
        background: '#131235',
        height: '80vh',
        width: '100%',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'grey' }}>RPG Game</h1>
      <div
        style={{
          position: 'absolute',
          right: position.r,
          left: position.l,
          top: position.t,
          bottom: position.d,
          width: SIZE,
          height: SIZE,
          background: `url("${charectorImg}") -${
            Offset.left + step * SIZE
          }px -${Offset.top + facing.current}px`,
        }}
      />
      <div />
    </div>
  )
}
