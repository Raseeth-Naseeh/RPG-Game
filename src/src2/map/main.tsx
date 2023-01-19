import React from 'react'
import * as Context from 'src/src2/context'

const TileDesign = (type: any) => {
  switch (type) {
    case 0:
      return 'ground'
    case 5:
      return 'leftChair'
    case 6:
      return 'rightChair'
    case 7:
      return 'iceCream'
    case 8:
      return 'fridge'
  }
}
const MapTile = (props: any) => {
  return <div className={`tile ${TileDesign(props.tile)}`} />
}

const MapRow = (props: any) => {
  return (
    <div className="row">
      {props.tile.map((tile: any, index: any) => (
        <MapTile tile={tile} key={index} />
      ))}
    </div>
  )
}
export const Main = () => {
  const { Tiles } = React.useContext(Context.DataContext)
  return (
    <div className="map">
      {Tiles.map((item: any, index: any) => {
        return <MapRow tile={item} key={index} />
      })}
    </div>
  )
}
