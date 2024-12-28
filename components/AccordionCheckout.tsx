"use client";

import { useState } from "react";

const AccordionCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");

  const handlePaymentMethod = (id) => {
    setPaymentMethod(id);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            id="bank-transfer"
            name="payment-method"
            className="cursor-pointer"
            checked={paymentMethod === "bank-transfer"}
            onChange={() => handlePaymentMethod("bank-transfer")}
          />
          <label
            htmlFor="bank-transfer"
            className="cursor-pointer font-poppins text-base text-black"
          >
            Direct Bank Transfer
          </label>
        </div>
        <div
          className={`${
            paymentMethod !== "bank-transfer" && "h-0"
          } overflow-hidden transition-all duration-500`}
        >
          <p className="font-poppins text-sm text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            id="direct-debit"
            name="payment-method"
            className="cursor-pointer"
            checked={paymentMethod === "direct-debit"}
            onChange={() => handlePaymentMethod("direct-debit")}
          />
          <label
            htmlFor="direct-debit"
            className="cursor-pointer font-poppins text-base text-black"
          >
            Direct Debit
          </label>
        </div>
        <div
          className={`${
            paymentMethod !== "direct-debit" && "h-0"
          } overflow-hidden transition-all duration-500`}
        >
          <p className="font-poppins text-sm text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            id="credit-card"
            name="payment-method"
            className="cursor-pointer"
            checked={paymentMethod === "credit-card"}
            onChange={() => handlePaymentMethod("credit-card")}
          />
          <label
            htmlFor="credit-card"
            className="cursor-pointer font-poppins text-base text-black"
          >
            Credit Card
          </label>
        </div>
        <div
          className={`${
            paymentMethod !== "credit-card" && "h-0"
          } overflow-hidden transition-all duration-500`}
        >
          <p className="font-poppins text-sm text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionCheckout;
