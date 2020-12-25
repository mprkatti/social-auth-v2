import React, { useState } from 'react'
import axios from 'axios';
import { SERVER_URL } from '../../util/config';

export const SubmitToken = () => {

  const [token, setToken] = useState('');
  const [name, setName] = useState('HelloWorld');
  const [status, setStatus] = useState(false);

  const onTokenSubmit = (e) => {

    e.preventDefault();
    console.log('on way to token submit', name, token);
    axios.post(`${SERVER_URL}/verify`, {
      name, token
    }).then(response => {
      console.log(response.data.verified);
      const status = response.data.verified;
      setStatus(status);
      // status ? setVisible('visible') : setVisible('');
      setToken('');
    });

  }

  return (
    <div>
      <div className="ui inverted segment" style={{ marginTop: '100px' }}>
        <div className="ui inverted form">
          <div className="one field">
            <div className="field">
              <input autoFocus="autoFocus" placeholder="Enter token ..." type="text" value={token} onChange={(e) => { setToken(e.target.value) }} />
            </div>
          </div>
          <div className="ui submit primary button" onClick={onTokenSubmit}>Submit</div>
        </div>

      </div>
      {status ? (
        <div className={`ui  visible success message`}>
          <i className="close icon" onClick={() => setStatus(false)} />
          <div className="header">Registration Successful</div>
          <p>You're all signed up for the MFA.</p>
        </div>
      ) : ''}
    </div>
  );
}

export default SubmitToken;