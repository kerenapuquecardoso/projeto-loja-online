import React from 'react'

export const Item = ({item, selected, changeQuantity}) => {

  return (
    <>
        <div onClick={ () => selected(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
            <div className="photo">
                <img src={"./img/" + item.photo }/>
            </div>
            <div className="description">
                <span className="name">{item.name}</span>
                <span className="price">$ {item.price}</span>  
                    {
                        item.isInBag &&
                        <div className="quantity-area">
                            <button onClick={ (e) => changeQuantity(e, item.id, -1)}>-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick={(e) => changeQuantity(e, item.id, +1)}>+</button>
                        </div>
                                   
                    }
            </div>
        </div>
    </>
  )
}
