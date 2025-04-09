import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UserForm({ title, onSubmit, buttonLabel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Name is required";
    if (!formData.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Invalid email";

    if (!formData.password) temp.password = "Password is required";
    else if (formData.password.length < 6) temp.password = "Password too short";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // function handleSubmit(e) {
    //   // your logic
    // }
    
    e.preventDefault();
    if (validate()) {
      onSubmit(formData); // send to parent
      setFormData({ name: '', email: '', password: '' }); // reset form
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>{title}</h2>

      <div>
        <label>Name:</label><br />
        <input name="name" value={formData.name} onChange={handleChange} />
        <div style={{ color: 'red' }}>{errors.name}</div>
      </div>

      <div>
        <label>Email:</label><br />
        <input name="email" value={formData.email} onChange={handleChange} />
        <div style={{ color: 'red' }}>{errors.email}</div>
      </div>

      <div>
        <label>Password:</label><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <div style={{ color: 'red' }}>{errors.password}</div>
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>{buttonLabel}</button>
    </form>
  );
}
UserForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string
};

UserForm.defaultProps = {
  buttonLabel: "Submit"
};
export default UserForm;