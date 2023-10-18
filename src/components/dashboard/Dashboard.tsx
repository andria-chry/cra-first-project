import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="dashboard-title">
                    Welcome to FinCat
                </h1>
                <a
                    className="app-link"
                    href="https://jira.deliveryhero.com/secure/RapidBoard.jspa?rapidView=5055"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fintech sprint board
                </a>
            </header>
        </div>
    );
}
