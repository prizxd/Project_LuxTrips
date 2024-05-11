import './Cabinet.scss'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"

export default function Cabinet() {
  const [user, setUser] = useState(false)
    const navigate = useNavigate()
    const auth = getAuth()

useEffect(()=>{
 onAuthStateChanged(auth,(userServ)=>{
  if(userServ){
    setUser(userServ)
  }
  else{
    navigate('/login')
  }
 })
}, [])


function signOutBtn(){
signOut(auth)
navigate('/login')
}
if(!user){
  return
}
  return (
    <div><div className="k"></div> 
    <h1>Данные пользователя</h1>
    <p>Email: {user.email}</p>
    <p>UID: {user.uid}</p>
    <button onClick={signOutBtn}>sign out</button></div>

  )
}
