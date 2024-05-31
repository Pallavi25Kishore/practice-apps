import react, {useState} from 'react';
import axios from 'axios';
import Checkout from './Checkout.jsx';
import Account from './Account.jsx';
import Address from './Address.jsx';
import Card from './Card.jsx';
import Purchase from './Purchase.jsx';



const App = () => {

  const[showCheckout, setShowCheckout] = useState(true);
  const[showAccountInfo, setShowAccountInfo] = useState(false);
  const[showAddressInfo, setShowAddressInfo] = useState(false);
  const[showCardInfo, setShowCardInfo] = useState(false);
  const[showPurchase, setShowPurchase] = useState(false);
  const [purchaseInfo, setPurchaseInfo] = useState('');

  const sendAccountInfo = (username, email, password) => {
    axios.post('/response/accountinfo', {
      username: username,
      email: email,
      password: password
    })
    .then((response)=> {
      setShowAccountInfo(!showAccountInfo);
      setShowAddressInfo(!showAddressInfo);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const sendAddress = (address) => {
    axios.patch('/response/addressinfo', {
      address: address
    })
    .then((response)=> {
      setShowAddressInfo(!showAddressInfo);
      setShowCardInfo(!showCardInfo);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const sendCardInfo = (cardNum, expiry, cvv, zipcode) => {
    axios.patch('/response/cardinfo', {
      cardnum : cardNum,
      expiry: expiry,
      cvv : cvv,
      zipcode : zipcode
    })
    .then( () => {
      return axios.get('/response');
    })
    .then((response) => {
      console.log('only', response);
      setPurchaseInfo(response.data[0][0]);
      setShowCardInfo(!showCardInfo);
      setShowPurchase(!showPurchase);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const checkoutButtonClick = () => {
    setShowCheckout(!showCheckout);
    setShowAccountInfo(!showAccountInfo);
  };

  const purchaseButtonClick = () => {
    setShowPurchase(!showPurchase);
    setShowCheckout(!showCheckout);
  };


return (
  <div>
    <h1>Checkout</h1>
    <Checkout checkoutButtonClick={checkoutButtonClick} showCheckout={showCheckout}/>
    <Account sendAccountInfo={sendAccountInfo} showAccountInfo={showAccountInfo}/>
    <Address sendAddress={sendAddress} showAddressInfo={showAddressInfo}/>
    <Card sendCardInfo={sendCardInfo} showCardInfo={showCardInfo}/>
    <Purchase purchaseButtonClick={purchaseButtonClick} showPurchase={showPurchase} purchaseInfo={purchaseInfo}/>
  </div>
)


};
export default App;