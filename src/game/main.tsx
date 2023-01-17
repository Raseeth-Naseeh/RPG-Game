import React from 'react'
import * as Charector from 'src/charector'
import * as Mui from '@mui/material'
import * as kakashi from 'src/assets/skin1.png'
import * as Naruto from 'src/assets/skin2.png'
import * as Devil from 'src/assets/skin3.png'
import * as Carackyi from 'src/assets/skin4.png'
import * as Nataliya from 'src/assets/skin5.png'
import * as marginko from 'src/assets/skin6.png'

export const Main = () => {
  const [charector, setCharector] = React.useState('')
  const [charectorImg, setCharectorImg] = React.useState<any>(
    'src/assets/skin6.png',
  )

  const handleChange = (event: any) => {
    setCharector(event.target.value)
    event.preventDefault()
    if (event.target.value === 'Kakashi') {
      setCharectorImg('src/assets/skin1.png')
    } else if (event.target.value === 'Naruto') {
      setCharectorImg('src/assets/skin2.png')
    } else if (event.target.value === 'Devil') {
      setCharectorImg('src/assets/skin3.png')
    } else if (event.target.value === 'Carackyi') {
      setCharectorImg('src/assets/skin4.png')
    } else if (event.target.value === 'Nataliya') {
      setCharectorImg('src/assets/skin5.png')
    } else if (event.target.value === 'marginko') {
      setCharectorImg('src/assets/skin6.png')
    }
  }
  const data = [
    { name: 'Kakashi', img: kakashi },
    { name: 'Naruto', img: Naruto },
    { name: 'Devil', img: Devil },
    { name: 'Carackyi', img: Carackyi },
    { name: 'Nataliya', img: Nataliya },
    { name: 'marginko', img: marginko },
  ]
  return (
    <>
      <Charector.Main charectorImg={charectorImg} />
      <Mui.FormControl sx={{ marginTop: '10px' }} fullWidth>
        <Mui.InputLabel id="demo-simple-select-label">
          {charector === '' ? 'Select Charectors' : charector}
        </Mui.InputLabel>
        <Mui.Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={charector}
          label="Age"
          onChange={handleChange}
        >
          {data?.map((item, index) => {
            return (
              <Mui.MenuItem
                key={index}
                value={item.name}
              >
                {item.name}
              </Mui.MenuItem>
            )
          })}
        </Mui.Select>
      </Mui.FormControl>
    </>
  )
}
