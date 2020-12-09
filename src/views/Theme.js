import { useContext } from "react"
import {
  ThemeContext
} from '../config/color'

export default function Theme() {
  const {theme, onChangeTheme} = useContext(ThemeContext)
  return (
    <>
      <h3>theme</h3>
      <p style={{
        color: theme.foregroud,
        backgroundColor: theme.backgroud
      }}>theme.js</p>
      <button onClick={onChangeTheme}>change theme</button>
    </>
  )
}