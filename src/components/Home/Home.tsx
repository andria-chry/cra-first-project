import React from 'react';
import Header from "../header/Header";
import Toolbar from "../Toolbar/Toolbar";
import RoutesConfig from "../../Routes";
import {useNavigate} from "react-router-dom";

const tabs = [
    {label: 'Dashboard', route: '/'},
    {label: 'Health', route: '/v1/health'},
    {label: 'Sap Orders', route: '/sap-orders', innerTabs: [
            {label: 'All', route: '/sap-orders'},
            {label: 'Weekly', route: '/sap-orders/weekly'},
            {label: 'Monthly', route: '/sap-orders/monthly'},
            {label: 'Stats', route: '/sap-orders/stats'},
        ]},

];
interface HomeProps{
    userData: { name: string; email: string } | null;
    isLoggedIn: (value: boolean) => void;
}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();
    const handleToolbarClick = (label:string) => {
        console.log(`button "${label}" clicked`);
    }
    const handleLogout = () =>{
        props.isLoggedIn(false);
        navigate('/login')
    }
    const actions = ["button1", "download"];


    return (
        <div className="home">
            <Header tabs={tabs} user={props} onLogout={handleLogout}></Header>
            <Toolbar buttons={actions} onClick={handleToolbarClick}></Toolbar>
            <RoutesConfig />
        </div>

    );
};

export default Home;
