import useCartStore from "../../Store/Store"
import { Button } from "./button"
import { Card, CardHeader, CardTitle, } from "./card"
import { Input } from "./input"
import { Label } from "./label"

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  if (cart.length === 0) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Your Cart is empty</div>
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col">

        <CardHeader className="bg-white p-6 shadow-md">
          <CardTitle className="text-center font-bold text-[30px] drop-shadow-lg">
            Your Cart
          </CardTitle>
        </CardHeader>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col items-center space-y-3 shadow-md bg-gray-800">
              <img src={item.image} alt={item.title} className="w-32 h-32 object-contain rounded-lg text-white" />
              <h2 className="text-[20px] font-semibold mb-2 text-white font-semibold">{item.title}</h2>
              <p className="text-[15px] font-bold mb-2 text-white ">Price: ₹{item.price}</p>

              <div className="flex items-center gap-2">
                <Label htmlFor={`qty-${item.id}`} className="text-sm font-medium text-white">
                  Quantity:
                </Label>
                <Input
                  id={`qty-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center text-white"
                />
              </div>

              <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export default Cart