import react from 'react';

const Address = ({sendAddress, showAddressInfo}) => {

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
    console.log(address);
    sendAddress(address);
  };

  return (
    <div>
      {showAddressInfo ?
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="line 1">Enter Address:</label>
      <input type="text" id="line1" name="line1" placeholder="Line 1..." required></input>
      <input type="text" id="line2" name="line2" placeholder="Line 2..."></input>
      <br></br>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" required></input>
      <label htmlFor="city">State:</label>
      <input type="text" id="state" name="state" required></input>
      <label htmlFor="city">Zip Code:</label>
      <input type="text" id="zip" name="zip" required></input>
      <br></br>
      <button type="submit">NEXT</button>
    </form> : null}
    </div>
  )
};

export default Address;