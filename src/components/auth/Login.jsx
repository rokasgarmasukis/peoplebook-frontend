import { useState, useRef, useEffect } from 'react';
import axios from '../../api/axios';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'login',
        JSON.stringify({
          username,
          password: pwd,
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
          <h1 className="text-5xl font-bold">Login</h1>
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
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
