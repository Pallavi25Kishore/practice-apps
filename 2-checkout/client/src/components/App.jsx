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
  const [purchaseInfo, setPurchaseInfo] = useState(''); // USE ONCE BACK END IS WORKING

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
      setShowAccountInfo(!showAccountInfo);//REMOVE LATER WHEN BACKEND IS READY
      setShowAddressInfo(!showAddressInfo);//REMOVE LATER WHEN BACKEND IS READY
    });
  }

  const sendAddress = (address) => {
    axios.post('/response/addressinfo', {
      address: address
    })
    .then((response)=> {
      setShowAddressInfo(!showAddressInfo);
      setShowCardInfo(!showCardInfo);
    })
    .catch((error) => {
      console.log(error);
      setShowAddressInfo(!showAddressInfo);//REMOVE LATER WHEN BACKEND IS READY
      setShowCardInfo(!showCardInfo);//REMOVE LATER WHEN BACKEND IS READY
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
      setPurchaseInfo(response.data);
      setShowCardInfo(!showCardInfo);
      setShowPurchase(!showPurchase);
    })
    .catch((error) => {
      console.log(error);
      setShowCardInfo(!showCardInfo);//REMOVE LATER WHEN BACKEND IS READY
      setShowPurchase(!showPurchase);//REMOVE LATER WHEN BACKEND IS READY
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
    <Purchase purchaseButtonClick={purchaseButtonClick} showPurchase={showPurchase}/>
  </div>
)


};
export default App;