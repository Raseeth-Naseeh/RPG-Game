import React from 'react'

export const DataContext = React.createContext({})

export const GlobalProvider = ({ children }: any) => {
  const Tiles = [
    [1, 1, 1, 6, 9, 9, 6, 1, 1, 1, 1],
    [23, 23, 5, 23, 9, 9, 23, 5, 51, 8, 23],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0],
    [13, 14, 7, 15, 16, 7, 15, 16, 17, 18, 0],
    [24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 11, 10, 12, 0, 0, 0, 11, 10, 12, 0],
    [0, 11, 10, 12, 0, 0, 0, 11, 10, 12, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 20, 21, 21, 21, 20, 0, 0, 0],
  ]

  const [position, setPosition] = React.useState<any>([0, 64])
  return (
    <DataContext.Provider value={{ position, setPosition, Tiles }}>
      {children}
    </DataContext.Provider>
  )
}
