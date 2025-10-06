import React from 'react';

interface buttonProps{
    label: string,
    onClick: () => void;
}

function CallBackButton({label, onClick} : buttonProps){
    return (<button onClick={onClick}>{label}</button>);
}

export default CallBackButton;