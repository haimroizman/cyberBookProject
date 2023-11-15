import React from "react";
import Modal from "../UI/Modal";

const UserSignupForm = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="John Doe"
            required
            minLength="3"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="mt-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="555-555-5555"
            required
            maxLength="12"
            pattern="[0-9]+"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder
            required
          ></input>
        </label>
        <label className="block">
          <span className="text-gray-700">Address</span>
          <input
            type="text"
            name="address"
            id="address"
            className="mt-1 border mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="123 Main St"
            required
          />
        </label>
        <button className="bg-sky-600 text-sky-50 p-2 px-4 rounded-md hover:bg-sky-800 w-full">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default UserSignupForm;
