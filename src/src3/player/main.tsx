import React from 'react'
import * as Context from 'src/src3/context'
import * as Constant from 'src/src3/constant'
import * as Listner from 'src/game/useEvent'

export const Main = () => {
  const { position, setPosition, Tiles } = React.useContext(Context.DataContext)
  const Offset = {
    bottom: 1200,
    left: 10,
  }
  const MAX_STEP = 4

  const Directions = {
    DOWN: 150 * 1,
    LEFT: 150 * 2,
    RIGHT: 0,
    UP: 150 * 1,
  }
  const [step, setStep] = React.useState(0)
  const [facing, setFacing] = React.useState({
    current: Directions.LEFT,
    previous: Directions.LEFT,
  })
  const directionMove = (oldPos: any, direction: any) => {
    // const oldPos = position
    console.log(position)
    switch (direction) {
      case 'left':
        return [oldPos[0] - 50, oldPos[1]]
      case 'right':
        return [oldPos[0] + 50, oldPos[1]]
      case 'top':
        return [oldPos[0], oldPos[1] - 190]
      case 'bottom':
        return [oldPos[0], oldPos[1] + 190]
    }
  }
  const observeBoundaries = (oldPos: any, newPos: any) => {
    console.log(newPos, 'pos')
    return (
      newPos[0] >= 0 &&
      newPos[0] <= Constant.WIDTH - 50 &&
      newPos[1] >= 0 &&
      newPos[1] <= Constant.HEIGHT - 50
    )
  }
  const DispatchMove = (newPos: any) => {
    setPosition(newPos)
  }
  const attemptMove = (direction: any) => {
    const oldPos = position
    const newPos = directionMove(oldPos, direction)

    if (observeBoundaries(oldPos, newPos)) {
      DispatchMove(newPos)
    }
  }

  const HandleKeyDown = (key: any) => {
    key.preventDefault()
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
      setStep((prev) => (prev < MAX_STEP - 1 ? prev + 1 : 0))
    }
  }, [facing, position])
  return (
    <div
      style={{
        position: 'absolute',
        left: position[0],
        top: position[1],
        width: 150,
        height: 150,
        background: `url("src/assets/capboyog.png") -${
          Offset.left + step * 150
        }px -${Offset.bottom + facing.current}px`,
      }}
    ></div>
  )
}
