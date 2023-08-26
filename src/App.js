import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [ip, setIp] = useState('');

  async function getIp() {
    const res = await axios.get('https://api.ipify.org/?format=json')
    console.log(res);
    setIp(res.data.ip)
  };

  useEffect(() => {
    getIp()
  })

  return (
    <>
      <div>
        <h1>{ip}</h1>
        <p>{ip}( This is your IP address...probably :P )</p>
      </div>
    </>
  );
}

export default App;
