import React, {useEffect, useState} from 'react';
import './App.css';
import { subscribeToOpen, connectToPeer } from "./peer";

export default () => {
    const [peerId, setPeerId] = useState(null);
    const [connection, setPeerConnection] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const subscribeToOpenCb = (id) => {
        console.log('Setting peer: ', id)
        setPeerId(id);
    };

    useEffect(() => {
        if (!peerId) subscribeToOpen(subscribeToOpenCb);
    });

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    const onClick = () => {
        connectToPeer(inputValue)
    };

    return (
        <div className="App">
            peerjs demo with react
            User peerId: {peerId}
            <br />
            <input value={inputValue} onChange={onChangeInput} type="text" />
            <button onClick={onClick}>connect</button>
        </div>
    );
}
