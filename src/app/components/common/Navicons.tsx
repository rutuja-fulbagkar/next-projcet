import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export default function Navicons() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.0, quantity: 1, img: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Product 2', price: 20.0, quantity: 1, img: 'https://via.placeholder.com/50' },
  ]);

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);
  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);

  const handleClose = () => {
    setIsCartOpen(false);
    setIsProfileOpen(false);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const CustomBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#ff5722',
      color: '#ffffff',
      boxShadow: `0 0 4px 0 rgba(0, 0, 0, 0.2)`,
    },
  }));

  return (
    <div className="flex justify-between gap-4 items-center">
      <NotificationsIcon className="cursor-pointer text-gray-500 hover:text-gray-700" />
      <CustomBadge badgeContent={cartItems.length} overlap="circular">
        <ShoppingCartIcon
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={handleCartToggle}
        />
      </CustomBadge>
      <AccountCircleIcon
        className="cursor-pointer text-gray-500 hover:text-gray-700"
        onClick={handleProfileToggle}
      />

      {/* Cart Dialog */}
      {(isCartOpen && !isProfileOpen)  && (
        <div className="absolute top-12 mt-5 right-5">
          <div className="bg-white rounded-lg shadow-2xl w-96 p-6 relative">
            <CloseIcon
              className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2">
                    <img src={item.img} alt={item.name} className="w-12 h-12 rounded" />
                    <div className="flex-1 ml-4">
                      <p className="text-gray-800 font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="bg-gray-200 px-2 rounded"
                          onClick={() => handleQuantityChange(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-gray-200 px-2 rounded"
                          onClick={() => handleQuantityChange(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                ))}
                <div className="font-bold flex justify-between items-center mt-4">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                    Checkout
                  </button>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md">
                    View Cart
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}

      {/* Profile Dialog */}
      {(isProfileOpen && ! isCartOpen) && (
        <div className="absolute top-12 mt-5 right-5">
          <div className="bg-white rounded-lg shadow-2xl w-80 p-6 relative">
            <CloseIcon
              className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
            <div className="space-y-2">
              <p className="text-gray-600">User Information</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
