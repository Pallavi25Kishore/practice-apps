import react, {useState} from 'react';
import axios from 'axios';
import Checkout from './Checkout.jsx';
import Account from './Account.jsx';
import Address from './Address.jsx';
import Card from './Card.jsx';


const App = () => {

  const sendAccountInfo = (username, email, password) => {
    axios.post('/response/accountinfo', {
      username: username,
      email: email,
      password: password
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const sendAddress = (address) => {
    axios.post('/response/addressinfo', {
      address: address
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const sendCardInfo = (cardNum, expiry, cvv, zipcode) => {
    axios.post('/response/cardinfo', {
      cardnum : cardNum,
      expiry: expiry,
      cvv : cvv,
      zipcode : zipcode
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }


return (
  <div>
    <Checkout />
    <Account sendAccountInfo={sendAccountInfo}/>
    <Address sendAddress={sendAddress}/>
    <Card sendCardInfo={sendCardInfo}/>

  </div>

)


};
export default App;