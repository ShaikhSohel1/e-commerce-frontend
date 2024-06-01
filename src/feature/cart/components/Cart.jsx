import { Button } from '@/components/ui/button'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../cartSlice'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
];

export function Cart() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const calculateSubtotal = () => {
    return products.reduce((acc, product) => {
      return acc + parseFloat(product.price.replace('$', '')) * product.quantity;
    }, 0).toFixed(2);
  };

  const shippingEstimate = 5.00;
  const taxEstimate = 8.32;
  const subtotal = calculateSubtotal();
  const total = (parseFloat(subtotal) + shippingEstimate + taxEstimate).toFixed(2);

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row items-center sm:items-start">
              <img src={product.imageSrc} alt={product.imageAlt} className="w-24 h-24 object-cover mb-4 sm:mb-0" />
              <div className="sm:ml-4 flex-grow">
                <p className="font-medium">{product.name}</p>
                <p className="text-gray-500">{product.color}</p>
                <p className="font-medium mt-2">{product.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2" htmlFor={`quantity-${product.id}`}>Quantity</label>
                  <select
                    id={`quantity-${product.id}`}
                    className="border rounded px-3 py-1"
                    value={product.quantity}
                    onChange={(e) => onQuantityChange(product.id, e.target.value)}
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>{n + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => onRemove(product.id)}
                className="mt-4 sm:mt-0 sm:ml-4 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Order summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping estimate</span>
            <span>${shippingEstimate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax estimate</span>
            <span>${taxEstimate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Order total</span>
            <span>${total}</span>
          </div>
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart