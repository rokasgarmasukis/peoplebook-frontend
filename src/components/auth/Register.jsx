import { useState, useEffect, useRef } from 'react';
import axios from '../../api/axios';
// add regex password confirmation

const USER_REGEX = /^[A-z][A-z0-9-_]{4,21}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    // console.log(result)
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'register',
        JSON.stringify({
          username,
          password: pwd,
          passwordConfirmation: matchPwd,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      console.log(response);
      setSuccess(true);
      // clear input?
    } catch (err) {
      if (!err?.response) {
        setErrMsg('Server does not respond');
      } else if (err.reponse?.status === 409) {
        setErrMsg('Username already taken');
      } else {
        setErrMsg('Registration failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto flex flex-col items-center">
        <div className="my-6">
          <h1 className="text-5xl font-bold">Register</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div
              ref={errRef}
              className={errMsg ? 'form-control mt-2' : 'hidden'}
            >
              <div className="alert alert-warning">
                <span>{errMsg}</span>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                id="username"
                type="text"
                placeholder="username"
                className="input input-bordered"
                autoComplete="off"
                required
                ref={userRef}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password confirmation</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
              />
            </div>

            <div className="form-control mt-2">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
