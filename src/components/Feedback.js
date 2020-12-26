import React, { useState } from 'react'
import './Feedback.css';
import axios from 'axios';
import { SERVER_URL, SITE_KEY } from '../util/config';

export const Feedback = ({ history }) => {

  const INITIAL_STATE = {
    name: '',
    profession: '',
    rating: ''
  };
  const [values, setValues] = useState(INITIAL_STATE);
  const [disabled, setDisabled] = useState('disabled');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (values.name === '' || values.profession === '' || values.rating === '') {
      return false;
    }
    return true;
  }

  const onChange = (e) => {

    setValues({ ...values, [e.target.name]: e.target.value });
    if (validate()) {
      setDisabled('');
    } else {
      setDisabled('disabled');
    }

  }

  const onSubmit = (e) => {
    console.log('submitted...', values);
    e.preventDefault();
    const validPayload = validate();
    console.log(validPayload);

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submitFeedback' }).then(token => {
        setValues({ ...values, [e.target.name]: e.target.value });
        finalSubmit(token);
      });
    });


  };

  const finalSubmit = async (token) => {
    const data = { ...values };
    data.token = token;
    setLoading(true);
    console.log('submitting...', data);

    const response = await axios.post(`${SERVER_URL}/feedback`, {
      data
    });
    setLoading(false);
    if (response.data === 'success') {

      console.log('redirecting ....')
    }

    console.log(response);
    history.push("/");

  }

  const renderLoader = () => {
    if (loading) {
      return (<div className="ui segment" style={{ align: "center", height: '300px' }}>
        <div className="ui active dimmer">
          <div className="ui huge text loader">Working ...</div>
        </div>

        <p></p>
      </div>);
    }
    else { return ''; }

  }

  return (
    <div className=" feedback ">
      {renderLoader()}

      <div className="ui form" noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={values.name} onChange={onChange} style={{ border: '1px solid grey' }} />
        </div>
        <div className="field">
          <label>Profession</label>
          <select className="ui dropdown" name="profession" value={values.profession} onChange={onChange} style={{ border: '1px solid grey' }}>
            <option value="none">Select</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>
        <div className="field">
          <label>Rate Content</label>
          <select className="ui dropdown" name="rating" value={values.rating} onChange={onChange} style={{ border: '1px solid grey' }}>
            <option value="none">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <button className={`g-recaptcha ui large primary button`}
          onClick={onSubmit}
        >Submit</button>
      </div>
    </div>
  )
}

export default Feedback;