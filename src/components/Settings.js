import React, { useState } from 'react'
import QrCodeDisplay from './qrcode/QrCodeDisplay';
import SubmitToken from './qrcode/SubmitToken';


export const Settings = (props) => {

  const [token, setToken] = useState('');

  return (
    <div style={{ width: '400px', display: 'block', margin: 'auto' }}>
      <QrCodeDisplay />
      <SubmitToken />
    </div>
  )
}

export default Settings;