import react from 'react';

const Account = ({sendAccountInfo, showAccountInfo}) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.username, formJson.email, formJson.password);
    sendAccountInfo(formJson.username, formJson.email, formJson.password);
  };

  return (
    <div>
      {showAccountInfo ?
    (<form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Enter Username:</label>
      <input type="text" id="username" name="username" required></input>
      <br></br>
      <label htmlFor="email">Enter email address:</label>
      <input type="email" id="email" name="email" required></input>
      <br></br>
      <label htmlFor="password">Enter password:</label>
      <input type="password" id="password" name="password" required></input>
      <br></br>
      <button type="submit">NEXT</button>
    </form>) : null
    }
    </div>
  )
};

export default Account;

