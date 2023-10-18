import React from 'react';
import './Toolbar.css';

interface ButtonActions {
    buttons: string[];
    onClick: (label:string)=> void;
}

const Toolbar: React.FC<ButtonActions> = ({buttons, onClick}) =>{
    return (
        <div className="toolbar">
            {buttons.map((label,index)=> (
                <button className="buttonAction"
                    key = {index}
                    onClick={()=> onClick(label)}>
                    {label}
                </button>
            ))}
        </div>
    )
}
export default Toolbar;
