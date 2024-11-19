const Cart = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="border p-4 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <h4 className="mt-4 text-lg font-bold">Total: ${total}</h4>
            <button className="bg-green-500 text-white py-1 px-4 mt-2 rounded">Proceed to Pay</button>
          </>
        )}
      </div>
    );
  };
  
  export default Cart;
  