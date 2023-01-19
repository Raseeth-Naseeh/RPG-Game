import React from 'react'

export const DataContext = React.createContext({})

export const GlobalProvider = ({ children }: any) => {
  const Tiles = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 7, 0, 7, 7, 0, 0, 7, 7, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 7, 7, 0, 0, 7, 7, 0, 7, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 8, 6, 0, 0, 0, 0, 5, 8, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0],
    [0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0],
  ]

  const [position, setPosition] = React.useState<any>([0, 0])
  return (
    <DataContext.Provider value={{ position, setPosition, Tiles }}>
      {children}
    </DataContext.Provider>
  )
}
