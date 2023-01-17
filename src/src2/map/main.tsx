import React from 'react'
import { Tile } from './tile'

const TileDesign = (type: any) => {
  switch (type) {
    case 0:
      return 'grass'
    case 5:
      return 'tree'
    case 6:
      return 'rock'
  }
}
const MapTile = (props: any) => {
  return <div className={`tile ${TileDesign(props.tile)}`} />
}

const MapRow = (props: any) => {
  return (
    <div className="row">
      {props.tile.map((tile: any) => (
        <MapTile tile={tile} />
      ))}
    </div>
  )
}
export const Main = () => {
  return (
    <div className="map">
      {Tile.map((item) => {
        return <MapRow tile={item} />
      })}
    </div>
  )
}
