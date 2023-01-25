import React from 'react'
import useEventListener from '@use-it/event-listener'
import * as Listner from 'src/game/useEvent'
import * as Context from 'src/src2/context'
import * as Constant from 'src/src2/constant'

const MAX_STEP = 3
const SIZE = Constant.SIZE
const Directions = {
  DOWN: 0,
  LEFT: SIZE * 1,
  RIGHT: SIZE * 2,
  UP: SIZE * 3,
}
const Map_Height = Constant.HEIGHT
const Map_Width = Constant.WIDTH
console.log(Constant.HEIGHT)
export const Main = ({ charectorImg }: any) => {
  const { position, setPosition, Tiles } = React.useContext(Context.DataContext)
  const [facing, setFacing] = React.useState({
    current: Directions.DOWN,
    previous: Directions.DOWN,
  })
  const [step, setStep] = React.useState(0)
  const Offset = {
    top: 0,
    left: 96,
  }

  const directionMove = (oldPos: any, direction: any) => {
    switch (direction) {
      case 'left':
        return [oldPos[0] - SIZE, oldPos[1]]
      case 'top':
        return [oldPos[0], oldPos[1] - SIZE]
      case 'right':
        return [oldPos[0] + SIZE, oldPos[1]]
      case 'bottom':
        return [oldPos[0], oldPos[1] + SIZE]
    }
  }
  const observeBoundaries = (oldPos: any, newPos: any) => {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= Map_Width - SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= Map_Height - SIZE
    )
  }
  const observeImpassible = (oldPos: any, newPos: any) => {
    const y = newPos[1] / SIZE
    const x = newPos[0] / SIZE
    const nextTile = Tiles[y][x]
    return nextTile < 5
  }
  const DispatchMove = (newPos: any) => {
    setPosition(newPos)
  }
  const attemptMove = (direction: any) => {
    const oldPos = position
    const newPos = directionMove(oldPos, direction)

    if (
      observeBoundaries(oldPos, newPos) &&
      observeImpassible(oldPos, newPos)
    ) {
      DispatchMove(newPos)
    }
  }
  const HandleKeyDown = (key: any) => {
    key.preventDefault()
    console.log(position)
    switch (key.keyCode) {
      case 37:
        return attemptMove('left')
      case 38:
        return attemptMove('top')
      case 39:
        return attemptMove('right')
      case 40:
        return attemptMove('bottom')
    }
  }
  Listner.useEventListener('keydown', (code: any) => {
    const direction = Directions[code?.code.replace('Arrow', '').toUpperCase()]
    setFacing((prev) => ({ current: direction, previous: prev.current }))
    HandleKeyDown(code)
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
        // right: position.r,
        left: position[0],
        top: position[1],
        // bottom: position.d,
        width: SIZE,
        height: SIZE,
        background: `url("src/assets/skin4.png") -${
          Offset.left + step * SIZE
        }px -${Offset.top + facing.current}px`,
      }}
    />
  )
}
