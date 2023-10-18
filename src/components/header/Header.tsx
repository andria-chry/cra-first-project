import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './Header.css';
import Logo from '../../fincat-logo.png';

import { setActiveTab, setActiveInnerTab } from '../store/tabSlice';

interface InnerTab {
    label: string;
    route: string;
}

interface Tab {
    label: string;
    route: string;
    innerTabs?: InnerTab[];
}
interface UserProfile{
    userData: { name: string; email: string } | null;
}

interface Props {
    tabs: Tab[];
    user: UserProfile;
    onLogout: () => void;
}

const Header: React.FC<Props> = ({ tabs, user , onLogout }) => {
    const activeTab = useSelector((state: RootState) => state.tabs.activeTab);
    const activeInnerTab = useSelector((state: RootState) => state.tabs.activeInnerTab);
    const dispatch = useDispatch();

    const handleTabClick = (tabRoute: string) => {
        dispatch(setActiveTab(tabRoute));
        // Reset active inner tab when switching tabs
        dispatch(setActiveInnerTab(null));
    };

    const handleInnerTabClick = (innerTabRoute: string) => {
        dispatch(setActiveInnerTab(innerTabRoute));
    };

    return (
        <div className="header">
            <img src={Logo} alt="fincat-logo img"/>

            {tabs.map((tab) => (
                <div key={tab.route}>
                    <Link
                        to={tab.route}
                        className={activeTab === tab.route ? 'active' : ''}
                        onClick={() => handleTabClick(tab.route)}
                    >
                        {tab.label}
                    </Link>
                    {activeTab === tab.route && ( // Render inner tabs only if activeTab matches
                        <div className="inner-tabs">
                            {tab.innerTabs?.map((innerTab) => (
                                <Link
                                    key={innerTab.route}
                                    to={innerTab.route}
                                    className={activeInnerTab === innerTab.route ? 'active' : ''}
                                    onClick={() => handleInnerTabClick(innerTab.route)}
                                >
                                    {innerTab.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="user">
                <span>{user.userData?.name}</span>
                <span className="user-text">{user.userData?.email}</span>
                <button className="btn-logout"  onClick={()=> onLogout()}>Log Out</button>
            </div>
        </div>
    );
};


export default Header;

