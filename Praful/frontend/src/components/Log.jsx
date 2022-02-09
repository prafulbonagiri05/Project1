import React, { useState } from 'react';
import {useHistory} from "react-router-dom";


function Log() {

const [userInput, setUserInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

const history = useHistory();

const handleUserChange = (e) => {
    setUserInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        user: 'owner',
        password: 'own'
    }
    if ((userInput === hardcodedCred.user) && (passwordInput === hardcodedCred.password)) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
        history.push('/owner');
    } else {
        //bad combination
        alert('wrong email or password combination');
    }
}
return (
    <div className="login-page" >
        <div className="card-body">
        <h2>Login In</h2>
        <form autoComplete="off" onSubmit={handleLoginSubmit}>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                value={userInput}
                onChange={handleUserChange}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Login
            </button>
      </form>
      </div>
    </div>
  );
}
export default Log;