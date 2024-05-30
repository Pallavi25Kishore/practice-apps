import react from 'react';

const Address = ({sendAddress, addressButtonClick, showAddressInfo}) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (formJson.line2 === '') {
      var address = `${formJson.line1}, ${formJson.city}, ${formJson.state}, ${formJson.zip}`;
    } else {
      var address = `${formJson.line1}, ${formJson.line2}, ${formJson.city}, ${formJson.state}, ${formJson.zip}`;
    }
    sendAddress(address);
  };

  const handleClick = () => {
    event.preventDefault();
    addressButtonClick();
  };

  return (
    <div>
      {showAddressInfo ?
    <form onSubmit={handleFormSubmit}>
      <label for="line 1">Enter Address:</label>
      <input type="text" id="line1" name="line1" placeholder="Line 1..." required></input>
      <input type="text" id="line2" name="line2" placeholder="Line 2..."></input>
      <br></br>
      <label for="city">City:</label>
      <input type="text" id="city" name="city" required></input>
      <label for="city">State:</label>
      <input type="text" id="state" name="state" required></input>
      <label for="city">Zip Code:</label>
      <input type="text" id="zip" name="zip" required></input>
      <br></br>
      <button type="submit" onClick={handleClick}>NEXT</button>
    </form> : null}
    </div>
  )
};

export default Address;