import {  useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Register() {
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [resPassword, setResPassword] = useState("");
  const [errCopyPass, setErrCopyPass] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  function validPass() {
    return resPassword === password;
  }

  async function createUser(event) {
    event.preventDefault();
    if (!validPass()) {
      setErrCopyPass(true);
      return;
    }

    setErrCopyPass(false);
    createUserWithEmailAndPassword(auth, email, password)
      .catch(() => navigate("*"))
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: lastName + "" + firstName,
        })
          .then(() => navigate("/Cabinet"))
          .catch(() => navigate("*"));
      });
  }
  return (
    <main>
    <div className="bookPage">
      <img src="/header.png" alt="" className="header-img" />
      <div className="empty-div"></div>

      <div className="center-mid-div">
        <div className="BgMaskMid"></div>
        <div className="wrapper-h3">
          <h3 className="div-3-h3">Registration</h3>
        </div>
        <div className="Cards-div-3">
          <div className="left-cards-3">
            <div className="card-itemm">
              <div className="card-p-button">
              </div>
            </div>
            <div className="swrv">
    <div className="empty-div"></div>
    </div>
    <div>
      <form action="" className="ui-form" onSubmit={createUser}>
        <h3>Registrate</h3>
        <div className="form-row">
          <input
            type="text"
            id="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="lastName"
            required
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="firstName"
            required
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        {errCopyPass && <h3 className="err-text">Not the same passwords</h3>}
        <div className="form-row">
          <input
            type="password"
            id="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-row">
          <input
            type="password"
            id="resPassword"
            required
            autoComplete="off"
            value={resPassword}
            onChange={(e) => setResPassword(e.target.value)}
          />
          <label htmlFor="resPassword">Copy password </label>
        </div>
        <p>
          <input type="submit" value="Войти" />
          <Link to="/login" className="linkText">
          Authorization
          </Link>
        </p>
      </form>
    </div>
           
          </div> 
          </div>
        </div>
      </div>
  </main>

   
  );
}
