import React, { useState } from "react";
import { motion } from "framer-motion";
const products = [
  {
    id: 1,
    title: "Product 1",
    image: "/products/product-1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/products/product-2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/products/product-3.jpg",
  },
];

const ProductCarousel = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const handleNextProduct = () => {
    setActiveProductIndex((activeProductIndex + 1) % products.length);
  };

  const handlePreviousProduct = () => {
    setActiveProductIndex(
      activeProductIndex - 1 < 0 ? products.length - 1 : activeProductIndex - 1,
    );
  };

  return (
    <div className="w-full  h-96 bg-teal-300">
      <motion.div
        animate={{
          x: -(activeProductIndex * 100),
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className=""
            layout
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          >
            <h1>{product.title}</h1>
          </motion.div>
        ))}
      </motion.div>

      <button className="" onClick={handlePreviousProduct}>
        Previous
      </button>
      <button className="" onClick={handleNextProduct}>
        Next
      </button>
    </div>
  );
};

export default ProductCarousel;
