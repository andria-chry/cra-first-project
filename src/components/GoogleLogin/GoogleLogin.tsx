import React, {useState} from 'react';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'
import './Login.css';
import Logo from '../../fincat-logo.png';
import axios from 'axios';
import cookie from 'react-cookies';

const brand= process.env.REACT_APP_BRAND;
const env = process.env.REACT_APP_ENV;
const config = require(`../../config/profiles/${brand}.${env}.json`);

const serverUrl = config.SAPUrl ;

interface LoginPageProps {
    onLogin: () => void;
    setUser: (name: string, email: string) => void;
}
const handleGoogleError : () => void =() =>{
    console.log("in google login button error");
}
const Login: React.FC<LoginPageProps> = (props)=>{
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    const handleGoogleSuccess = async (token: any) => {
        cookie.save('token',token, { path: '/' });

        console.log(token.credential)

        if(token){
            const googleJWT = { GoogleJWT : token.credential}
            const data = await axios.post(`${serverUrl}/auth`,JSON.stringify(googleJWT)).then((response) => {
                const token = response.data.token;
                const user = jwt_decode(token) as { name: string, email: string };
                cookie.save('token', token, { path: '/' });
                props.setUser(user.name,user.email)
                navigate('/');
                props.onLogin();
            })
                .catch((error) => console.log(error));

        } else {
                alert('Access Denied. You are not authorized to use this application.');
                console.error("Failed to retrieve user information.");
        }

        const jwtToken = localStorage.getItem('token');
        if(jwtToken){
            setAuthenticated(true);
        } else{
            setAuthenticated(false);
        }


    };
    return (
        <div className="wrapper">
            <div className="card">
                <div className="card-wrapper">
                    <div className="card-logo">
                        <img src={Logo} alt="fincat-logo img"/>
                    </div>
                    <div className="card-title">
                        <div className="title">Sign in to <br/><span className="text-brand">Fincat</span> tool </div>
                        <div className="subtitle">Press the button below to continue</div>
                    </div>
                    <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError}></GoogleLogin>

                </div>

            </div>

        </div>
    );
}
export default Login;
