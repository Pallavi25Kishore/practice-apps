import react from 'react';
import Display from './Display.jsx';

 const Item = ({item, handleEditButton, handleDeleteButton}) => {
  return (
    <div>
      {item.text}
      <Display item={item} handleEditButton={handleEditButton} handleDeleteButton={handleDeleteButton}/>
    </div>
  )
 };

 export default Item;