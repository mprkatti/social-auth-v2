import React from 'react'
import QrCodeDisplay from './qrcode/QrCodeDisplay';
import SubmitToken from './qrcode/SubmitToken';


export const Settings = (props) => {

  return (
    <div style={{ width: '400px', display: 'block', margin: 'auto' }}>
      <QrCodeDisplay />
      <SubmitToken />
    </div>
  )
}

export default Settings;