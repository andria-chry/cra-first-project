import React, {useState} from 'react';
import './App.css';
import Login from "./components/GoogleLogin/GoogleLogin";
import Home from "./components/Home/Home";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[userData, setUserData] = useState<{name:string; email:string} | null>(null);
    const handleLoginSuccess = (name: string, email: string) => {
        setUserData({ name, email });
    };

    const
        handleLogout = (value:boolean) =>{
        setIsLoggedIn(value);
        }

    return (
        <div className="App">
            {isLoggedIn ? (
                <Home userData={userData} isLoggedIn={handleLogout}/>
            ) : (
                <Login onLogin={() => setIsLoggedIn(true)} setUser={handleLoginSuccess}/>
            )}
        </div>
    );
};

export default App;
