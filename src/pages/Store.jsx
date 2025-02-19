import React, { useState } from "react";
import { ShoppingCart, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Store = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "MSSN Prayer Mat",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=500",
      description: "High-quality prayer mat with MSSN ABUAD logo",
    },
    {
      id: 2,
      name: "Islamic Kettle",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=500",
      description: "Stainless steel kettle for wudu",
    },
    {
      id: 3,
      name: "MSSN Cap",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=500",
      description: "Elegant cap with MSSN embroidery",
    },
    {
      id: 4,
      name: "Jalabiya",
      price: 7000,
      image:
        "https://images.unsplash.com/photo-1589476993333-f55b84301219?auto=format&fit=crop&q=80&w=500",
      description: "Comfortable and stylish jalabiya for brothers",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">MSSN Store</h1>
          <div className="relative">
            <ShoppingCart className="text-primary" size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-base mb-4 h-12">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">
                    ₦{product.price}
                  </span>
                  <Link
                    to="tel:+2349012345678"
                    onClick={() => addToCart(product)}
                    className="btn btn-primary py-2"
                  >
                    Contact Seller
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
