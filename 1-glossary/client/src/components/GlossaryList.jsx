import react from 'react';
import Item from './Item.jsx';

 const GlossaryList = ({list, handleEditButton, handleDeleteButton}) => {
  return (
    <div>
      {list.map((item) => {
        return <Item item={item} handleEditButton={handleEditButton} handleDeleteButton={handleDeleteButton}/>
      })}
    </div>
  )
 };

 export default GlossaryList;