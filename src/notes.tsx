// Functions in TS
// function convertCurrency(amount: number, currency:string) {
//   //...
// }
// convertCurrency(10,"USD" )

import { useState } from "react"

// Props in TS
// type BackgroundProps = {
//   backgroundColor: string
//   backgroundHex: number
// }
// function props({backgroundColor, backgroundHex}: BackgroundProps) {
//   const bgHex = backgroundHex
//   const bgColor = backgroundColor
//   console.log(bgColor, bgHex)
// }

// Union type in TS
// type BackgroundProps = {
//   backgroundColor: "red" | "green" | "yellow"
//   backgroundHex: number
// }

// Typing Arrays in TS
// type ButtonProps = {
//   padding: number[]
// }

// Tuples in TS
// type ButtonProps = {
//   padding: [number, number, number, number]
// }

// Records in TS
// type ButtonProps = {
//   borderRadius: Record<string, number> // eg: borderRadius[string]: 40[number]
// }

// Callback functions for props in TS
// type ButtonProps = {
//   onClick: () => void
// }

// Children in TS
// type ButtonProps = {
//   children: React.ReactNode
//? If you want the children to be a JSX element then;
// children: JSX.Element
// }

// Interface extends in TS
// interface ButtonProps {
//   onClick: () => void
// }

// interface SuperButtonProps extends ButtonProps {
//   size: "sm" | "md"
// }

// Event handler type in TS
// const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   console.log(event.target.dispatchEvent)
// }

// Generics in TS
// const convertToArray = <T,> (value: T): T[] => {
//   return [value]
// }
//? AND WITH function
// function convertToArray<T>(value: T) : T[] {
//   return [value]
// }

// Generics in React
// type ButtonProps<T> = {
//   countValue: T
//   countHistory: T
// }

// export function Button<T>({countValue, countHistory}: ButtonProps<T>) {
//   return [countValue, countHistory]
// }

// useState hook type
type User = {
  name: string
  age: number
}

// useEffect example type for [ as ] type assertion
// type BackgroundColor = "red" | "green" | "yellow"

const Notes = () => {
  // Typing useState hook in TS
  // const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)
  function handleSetUser () {
    setUser({
      name: "Prathamesh",
      age: 20,
    })
  }
  console.log(user) // I know this doesn't make sense lol

  // Typing useRef hook in TS
  // const ref = useRef<HTMLButtonElement>(null)

  // [ as ] type assertion in TS
  // useEffect(() => {
  //   const prevBackgroundColor = localStorage.getItem("backgroundColor") as BackgroundColor
  // }, [])

  return (
    <div>
      <button onClick={handleSetUser}>This is notes.ts</button>
    </div>
  )
}

export default Notes
