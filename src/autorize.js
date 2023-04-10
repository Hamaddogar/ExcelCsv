import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/charge", {
        amount,
        cardNumber,
        expirationDate,
        cvv,
      });
      setResponse(data.response);
    } catch (error) {
      console.error(error);
      setResponse(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default App;
