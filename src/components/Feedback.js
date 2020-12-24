import React, { useState } from 'react'
import './Feedback.css';

export const Feedback = () => {

  const [values, setValues] = useState({
    name: '',
    profession: '',
    rating: ''
  });

  const onSubmit = (e) => {
    console.log('submitted...', values);
    e.preventDefault();

  };

  return (
    <div className=" feedback ">
      <div className="ui form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
        </div>
        <div className="field">
          <label>Profession</label>
          <select className="ui dropdown" name="profession" value={values.profession} onChange={(e) => setValues({ ...values, profession: e.target.value })}>
            <option value="none">Select</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>
        <div className="field">
          <label>Rate Content</label>
          <select className="ui dropdown" name="rating" value={values.rating} onChange={e => setValues({ ...values, rating: e.target.value })}>
            <option value="none">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <div className="ui large basic primary button" type="submit" onClick={onSubmit}>Submit</div>
      </div>
    </div>
  )
}

export default Feedback;