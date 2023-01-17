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
    l: 0,
    r: 0,
    t: 0,
    d: 0,
  })
  const Offset = {
    top: 0,
    left: 96,
  }

  const GoRight = () => {
    if (position.l >= 352) {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    } else {
      setPosition((prev) => ({
        l: prev.l + 32,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    }
  }
  const GoLeft = () => {
    if (position.l <= 0) {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    } else {
      setPosition((prev) => ({
        l: prev.l - 32,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    }
  }
  const GoDown = () => {
    if (position.t >= 352) {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    } else {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t + 32,
        d: prev.d,
      }))
    }
  }
  const GoTop = () => {
    if (position.t <= 0) {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t,
        d: prev.d,
      }))
    } else {
      setPosition((prev) => ({
        l: prev.l,
        r: prev.r,
        t: prev.t - 32,
        d: prev.d,
      }))
    }
  }
  Listner.useEventListener('keydown', ({ code }: any) => {
    const direction = Directions[code.replace('Arrow', '').toUpperCase()]
    // preventDefault()
    setFacing((prev) => ({ current: direction, previous: prev.current }))
    if (direction === 64) {
      GoRight()
    } else if (direction === 0) {
      GoDown()
    } else if (direction === 32) {
      GoLeft()
    } else if (direction === 96) {
      GoTop()
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
        position: 'absolute',
        right: position.r,
        left: position.l,
        top: position.t,
        bottom: position.d,
        width: SIZE,
        height: SIZE,
        background: `url("src/assets/skin4.png") -${
          Offset.left + step * SIZE
        }px -${Offset.top + facing.current}px`,
      }}
    />
  )
}
