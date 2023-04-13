import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../ContextAPI/StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  let totalPrice = 0;

  let price = 0;

  basket.forEach((element) => (totalPrice = totalPrice + element.price));
  console.log("total price ===>", totalPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
