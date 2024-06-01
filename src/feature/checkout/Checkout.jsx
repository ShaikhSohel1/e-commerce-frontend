
import { ModeToggle } from '@/components/toogle-mode';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react'

const Checkout = () => {
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMode, setPaymentMode] = useState('Card');

    const addresses = [
      {
        id: 1,
        name: "Home",
        address: "2707 Davis Avenue, New York, 94612",
      },
      {
        id: 2,
        name: "Office",
        address: "1234 Market Street, San Francisco, 94103",
      },
    ];
  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">
   
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
        <Card className="p-4 h-full">
            
          <CardTitle className="text-2xl font-bold mb-6">Payment Information</CardTitle>
       
                
           <CardContent>

        
          <div className="mb-6">
           
            <Label className="block text-gray-700 mb-2">Full Name</Label>
            <Input
              type="text"
              className="w-full p-3 border rounded-md"
              value="Mark Litho"
             
            />
          </div>
          <div className="mb-6">
            <Label className="block text-gray-700 mb-2">Phone Number</Label>
            <Input
              type="text"
              className="w-full p-3 border rounded-md"
              value="883-992-145"
              readOnly
            />
          </div>
          <div className="mb-6">
            <Label className="block text-gray-700 mb-2">Email</Label>
            <Input
              type="email"
              className="w-full p-3 border rounded-md"
              value="yourmail@gmail.com"
              readOnly
            />
          </div>
          <div className="mb-6">
            <Label className="block text-gray-700 mb-2">Address</Label>
            <Input
              type="text"
              className="w-full p-3 border rounded-md"
              value="2707 Davis Avenue"
              readOnly
            />
          </div>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="block text-gray-700 mb-2">Country</Label>
              <Input
                type="text"
                className="w-full p-3 border rounded-md"
                value="USA"
                readOnly
              />
            </div>
            <div>
              <Label className="block text-gray-700 mb-2">City</Label>
              <Input
                type="text"
                className="w-full p-3 border rounded-md"
                value="New York"
                readOnly
              />
            </div>
            <div>
              <Label className="block text-gray-700 mb-2">Post Code</Label>
              <Input
                type="text"
                className="w-full p-3 border rounded-md"
                value="94612"
                readOnly
              />
            </div>
          </div>
          <div className='flex gap-4 justify-end'>
            <Button >
                Save
            </Button>

            <Button variant="destructive">
                Cancel
            </Button>
          </div>
          <h3 className="text-lg font-semibold mb-4">Select an Existing Address</h3>
          <div className="mb-6">
            {addresses.map((address) => (
              <div key={address.id} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`address-${address.id}`}
                  name="address"
                  value={address.id}
                  checked={selectedAddress === address.id}
                  onChange={() => setSelectedAddress(address.id)}
                  className="mr-3"
                />
                <label htmlFor={`address-${address.id}`} className="text-gray-700">
                  <span className="font-semibold">{address.name}</span> - {address.address}
                </label>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4">Select Payment Mode</h3>
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="payment-card"
                  name="paymentMode"
                  value="Card"
                  checked={paymentMode === 'Card'}
                  onChange={() => setPaymentMode('Card')}
                  className="mr-3"
                />
                <label htmlFor="payment-card" className="text-gray-700 cursor-pointer">
                  Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="payment-cash"
                  name="paymentMode"
                  value="Cash"
                  checked={paymentMode === 'Cash'}
                  onChange={() => setPaymentMode('Cash')}
                  className="mr-3"
                />
                <label htmlFor="payment-cash" className="text-gray-700 cursor-pointer">
                  Cash
                </label>
              </div>
            </div>
          </CardContent>
          </Card>
        </div>
      

        <div>
            
          <h2 className="text-2xl font-bold mb-6">Payment Summary</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Trendy Ladies Pants"
                  className="w-12 h-12 mr-3 rounded-lg"
                />
                <div>
                  <div className="font-semibold">Trendy Ladies Pants</div>
                  <div className="text-sm text-gray-600">Quantity: 1</div>
                </div>
              </div>
              <div className="font-semibold">$59.99</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Men's Sendo T-shirt"
                  className="w-12 h-12 mr-3 rounded-lg"
                />
                <div>
                  <div className="font-semibold">Men's Sendo T-shirt</div>
                  <div className="text-sm text-gray-600">Quantity: 2</div>
                </div>
              </div>
              <div className="font-semibold">$80.99</div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-gray-700">Subtotal</div>
              <div className="font-semibold">$140.98</div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-gray-700">Shipping Cost</div>
              <div className="font-semibold">$10.99</div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-gray-700">Discount</div>
              <div className="font-semibold">-$5.00</div>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <div>Total Amount</div>
              <div>$124.99</div>
            </div>
            <button className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
              Get Started
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-3 border rounded-l-md"
                placeholder="Enter code to get discount instantly"
              />
              <button className="p-3 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition duration-200">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Checkout