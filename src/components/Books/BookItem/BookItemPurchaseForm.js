import React from 'react';
import { useRef, useState } from "react";
import Input from "../../UI/Input";

const BookItemPurchaseForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <Input
        className="flex justify-between"
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          className: "w-10 text-right"
        }}
      />
      { <button className="bg-sky-600 text-sky-50 p-2 px-4 rounded-md hover:bg-sky-800 w-full">
        + Purchase
        </button> }
      {!amountIsValid && <p> Please enter a valid amount (1-5). </p>}
    </form>
  );
};

export default BookItemPurchaseForm;
