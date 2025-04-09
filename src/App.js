import React from 'react';
import UserForm from './userform';

function App() {
  const handleFormSubmit = (data) => {
    alert(`Form Submitted\nName: ${data.name}\nEmail: ${data.email}`);
    // You can also post this to an API or save in state
  };

  return (
    <div>
      <UserForm
        title="Register User"
        onSubmit={handleFormSubmit}
        buttonLabel="Register"
      />
    </div>
  );
}

export default App;
