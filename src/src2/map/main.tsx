import React from 'react'
import * as Context from 'src/src2/context'

const TileDesign = (type: any) => {
  switch (type) {
    case 0:
      return 'ground'
    case 1:
      return 'blue'
    case 5:
      return 'cupboard'
    case 51:
      return 'heartdrawer'
    case 6:
      return 'window'
    case 7:
      return 'heartcupboard'
    case 8:
      return 'fridge'
    case 9:
      return 'window2'
    case 10:
      return 'table'
    case 11:
      return 'leftchair'
    case 12:
      return 'rightchair'
    case 13:
      return 'browntable'
    case 14:
      return 'browntable2'
    case 15:
      return 'hearttable1'
    case 16:
      return 'hearttable2'
    case 17:
      return 'table1'
    case 18:
      return 'table2'
    case 19:
      return 'singlechair'
    case 20:
      return 'greenpot'
    case 21:
      return 'door1'
    case 22:
      return 'door2'
    case 23:
      return 'door1top'
    case 24:
      return 'icecream'
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
