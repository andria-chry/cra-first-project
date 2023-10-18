import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Health from "./components/health/Health";
import SapOrders from "./components/sap_orders/SapOrders";
import Login from "./components/GoogleLogin/GoogleLogin";
import Dashboard from "./components/dashboard/Dashboard";

const RoutesConfig: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element = {<Login onLogin={() => false} setUser={()=>null} />} />
                <Route path="/v1/health" element = { <Health />} />
                <Route path="/sap-orders" element = { <SapOrders />} />
            </Routes>

    );
};

export default RoutesConfig;
