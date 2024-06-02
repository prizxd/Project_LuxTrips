import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

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
    <main>
      <div className="bookPage">
        <img src="/header.png" alt="" className="header-img" />
        <div className="empty-div"></div>

        <div className="center-mid-div">
          <div className="BgMaskMid"></div>
          <div className="wrapper-h3">
            <h3 className="div-3-h3">Authorization</h3>
          </div>
          <div className="Cards-div-3">
            <div className="left-cards-3">
              <div className="card-itemm">
              </div>
              <div className="swrv">
      <div className="empty-div"></div>
      </div>
    <div className="login-change">
      {errorText &&<h2 className="err_text">Wrong email or password</h2>}
    <form action="" className="ui-form" onSubmit={loginUser}>
<h3>Login to the site</h3>
<div className="form-row">
<input type="text" id="email" required autoComplete="off"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
<label htmlFor="email">Email</label>
</div>
<div className="form-row">
<input type="password" id="password" required autoComplete="off"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
<label htmlFor="password">Password</label>
</div>
<p>
<input type="submit" value="Войти"/>
<Link to="/register"  className="linkText">Registration</Link>
</p>
</form>
  </div>
             
            </div> 
            </div>
          </div>
        </div>
    </main>
  
)}
