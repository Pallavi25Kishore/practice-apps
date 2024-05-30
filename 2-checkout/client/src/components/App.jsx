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
    .then( () => {
      axios.get('/response')
    })
    .then((response) => {
      setPurchaseInfo(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const checkoutButtonClick = () => {
    setShowCheckout(!showCheckout);
    setShowAccountInfo(!showAccountInfo);
  };

  const accountButtonClick = () => {
    setShowAccountInfo(!showAccountInfo);
    setShowAddressInfo(!showAddressInfo);
  };

  const addressButtonClick = () => {
    setShowAddressInfo(!showAddressInfo);
    setShowCardInfo(!showCardInfo);
  };

  const cardButtonClick = () => {
    setShowCardInfo(!showCardInfo);
    setShowPurchase(!showPurchase);
  };

  const purchaseButtonClick = () => {
    setShowPurchase(!showPurchase);
    setShowCheckout(!showCheckout);
  };


return (
  <div>
    <h1>Checkout</h1>
    <Checkout checkoutButtonClick={checkoutButtonClick} showCheckout={showCheckout}/>
    <Account sendAccountInfo={sendAccountInfo} accountButtonClick={accountButtonClick} showAccountInfo={showAccountInfo}/>
    <Address sendAddress={sendAddress} addressButtonClick={addressButtonClick} showAddressInfo={showAddressInfo}/>
    <Card sendCardInfo={sendCardInfo} cardButtonClick={cardButtonClick} showCardInfo={showCardInfo}/>
    <Purchase purchaseButtonClick={purchaseButtonClick} showPurchase={showPurchase}/>
  </div>
)


};
export default App;