import react from 'react';

const Account = ({sendAccountInfo, accountButtonClick, showAccountInfo}) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    sendAccountInfo(formJson.username, formJson.email, formJson.password);
  };

  const handleClick = (event) => {
    event.preventDefault();
    accountButtonClick();
  }

  return (
    <div>
      {showAccountInfo ?
    (<form onSubmit={handleFormSubmit}>
      <label for="username">Enter Username:</label>
      <input type="text" id="username" name="username" required></input>
      <br></br>
      <label for="email">Enter email address:</label>
      <input type="email" id="email" name="email" required></input>
      <br></br>
      <label for="password">Enter password:</label>
      <input type="password" id="password" name="password" required></input>
      <br></br>
      <button type="submit" onClick={handleClick}>NEXT</button>
    </form>) : null
    }
    </div>
  )
};

export default Account;

