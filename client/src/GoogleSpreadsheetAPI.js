import React from 'react';

export const GoogleSpreadsheetAPI = () => {
  const [formData, setFormData] = React.useState({});
  const [message, setMessage] = React.useState('');

  const handleInput = (e) => {
    const copyFormData = {...formData};
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  async function sendData(e) {
    e.preventDefault();
    const {firstName, lastname, email, comment} = formData;

    const values = JSON.stringify([
      [firstName, lastname, email, comment]
    ]);

    try {
      await fetch(
        'http://localhost:4000',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {values},
        }
      );
      // const json = await response.json();
      // console.log('Success:', JSON.stringify(json));
      setMessage('Success');
    } catch (error) {
      // console.error('Error:', error);
      setMessage('Error');
    }
  }

  return (
    <div>
      <form
        className='input-form'
        id='contact'
        name='contact'
        required
        onSubmit={sendData}
      >
        <input
          name='firstName'
          type='text'
          placeholder='First Name'
          required
          onChange={handleInput}
        />
        <input
          name='lastName'
          type='text'
          placeholder='Last Name'
          required
          onChange={handleInput}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          required
          onChange={handleInput}
        />
        <textarea
          name='comment'
          placeholder='Comments'
          onChange={handleInput}
        />
        <input name='submit' type='submit' value='Send' />
        {message}
      </form>
    </div>
  );
};

export default GoogleSpreadsheetAPI;
