import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import Header from "../../components/Header/Header"
export default function Login() {
  const [email, setEmail] = useState('')
  const [errorText, setErrorText] = useState()
  const [password, setPassword] = useState('')
  const auth = getAuth()
  const navigate = useNavigate()

function loginUser(event){
  event.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setErrorText(false);
    console.log(user);
    navigate('/Cabinet', { state: { user } });
  })
  .catch((error) => {
    setErrorText(true);
  });}


  return (
    <div className="login-change">
      {errorText &&<h2 className="err_text">Wrong email or password</h2>}
    <form action="" className="ui-form" onSubmit={loginUser}>
<h3>Войти на сайт</h3>
<div className="form-row">
<input type="text" id="email" required autoComplete="off"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
<label htmlFor="email">Email</label>
</div>
<div className="form-row">
<input type="password" id="password" required autoComplete="off"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
<label htmlFor="password">Пароль</label>
</div>
<p>
<input type="submit" value="Войти"/>
<Link to="/register"  className="linkText">Регистрация</Link>
</p>
</form>
  </div>
  )
}
