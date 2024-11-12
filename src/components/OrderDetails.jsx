import React from 'react'

export const OrderDetails = ({itemsInBag}) => {
   
    function calculaTotal(){
        let orderTotal = 0;
        itemsInBag.forEach(element => {
            orderTotal += element.price * element.quantity
        });
        return orderTotal.toFixed(2);
    }
  return (
    <>
        <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { itemsInBag.map((item) => 
                            <tr>
                                <td>{item.quantity}x {item.name}</td>
                                <td>$ {(item.price * item.quantity).toFixed(2) }</td>
                            </tr>
                        )}
                        <tr>
                            <th>Total</th>
                            <th>$ {calculaTotal()}</th>
                        </tr>
                    </tbody>
                </table>
        </section>
    </>
    
            
  )
}
