import { useCallback, useEffect, useState } from 'react'


function App() {
  const [length , setlength ]= useState(8)
  const [numberAllo, setnumAllo] = useState(false);
  const [charAllo , setcharAllo] = useState(false);
  const [password , setpassword] = useState("")

 const passwordgenretor = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZXabcdefghijklmnopqrstuvwxyz"
  
  if (numberAllo) str += "0123456789"
  if (charAllo) str += "!@#$%^&*+_~`|?:"

  for (let i = 1; i<= length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char)   
  }
  setpassword(pass)
} , [length , numberAllo ,charAllo,setpassword])

  useEffect(() => {
    passwordgenretor
  },[length, numberAllo, charAllo, passwordgenretor])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-3'>password genretor</h1>
        <div className='flex shadow rounded-lg overflow-hidden 
        mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button className='outline-none bg-blue-800 text-white
          px-3 py-0.5 shrink-0'
          >copy</button>
        
        </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min = {6}
          max = {20}
          value={length}
          className='cursor-pointer'
           onChange={(e) => {setlength(e.target.value)}}
          />
          <label>  length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
           <input type="checkbox" 
            defaultChecked={numberAllo}
            id='numberInput'
            onChange={()  => {
              setnumAllo((prev) => {!prev})
             }}
           />
           <label htmlFor="numberInput">NUMBER</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
            defaultChecked={charAllo}
            id='charInput'
            onChange={()  => {
              setcharAllo((prev) => {!prev})
             }}
           />
           <label htmlFor="charInput">CHAR</label>
        </div>
      </div>  
</div>
    </>
  )
} 

export default App
