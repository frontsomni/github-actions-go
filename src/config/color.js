import React from 'react'

// 主题色
const color = {
  light: {
    foregroud: '#000',
    backgroud: '#eee'
  },
  dark: {
    foregroud: '#fff',
    backgroud: '#222'
  }
}

const ThemeContext = React.createContext(color.light)
export {
  ThemeContext,
  color
}