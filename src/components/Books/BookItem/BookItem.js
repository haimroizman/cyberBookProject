import React from 'react';
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import BookItemPurchaseForm from "./BookItemPurchaseForm";

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
    });
  };

  return (
    <li className="flex items-center border-2 border-black rounded-lg p-4 bg-slate-200">
      <div className="flex mr-4">
        <a className="w-full h-full inline-block" href="/#" onClick={props.onHandleImageClick}>
          {props.firstImg ? (
            <img src={props.firstImg} alt="Clickable" />
          ) : (
            <div className='h-full'>No Image</div>
          )}
        </a>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="font-semibold text-left">{props.title}</div>
        <BookItemPurchaseForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default BookItem;
