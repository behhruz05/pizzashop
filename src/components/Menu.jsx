import React, { useState } from 'react';

const PizzaCard = ({ name, price, image, imgClass }) => {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(28);
  const sizes = [22, 28, 33];

  return (
    <div className="relative w-[300px] max-[428px]:w-[159px] max-[428px]:h-[281px] bg-[#1A0B05] rounded-[40px] max-[428px]:rounded-[24px] px-[23px] max-[428px]:px-[14px] pb-10 max-[428px]:pb-4 pt-[100px] max-[428px]:pt-[55px] shadow-2xl flex flex-col items-center ">
      <div className={`absolute -top-20 max-[428px]:-top-12 ${imgClass || "w-[160px] h-[158px] max-[428px]:w-[96px] max-[428px]:h-[96px]"} drop-shadow-[0_20px_30px_rgba(255,107,0,0.3)] transition-transform duration-700 hover:rotate-[30deg]`}>
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <h2 className="text-white text-[28px] max-[428px]:text-[16px] font-bold mb-3 max-[428px]:mb-1 tracking-wide">{name}</h2>

      <p className="text-[#A5A5A5] text-center text-sm max-[428px]:text-[9px] leading-relaxed max-[428px]:leading-tight mb-6 max-[428px]:mb-3">
        Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
      </p>

      <div className="flex gap-4 max-[428px]:gap-[10px] mb-8 max-[428px]:mb-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-12 h-12 max-[428px]:w-[24.46px] max-[428px]:h-[24.46px] rounded-full flex items-center justify-center border-2 max-[428px]:border transition-all duration-300 font-medium max-[428px]:text-[8px] ${selectedSize === size
              ? "bg-gradient-to-b from-[#FF5924] to-[#FFA229] border-transparent text-white scale-110 shadow-lg"
              : "border-[#45322B] text-[#A5A5A5] hover:border-orange-500"
              }`}
          >
            {size}
          </button>
        ))}
      </div>

      <button className="w-full py-3 max-[428px]:py-1.5 rounded-full border border-[#FF5924] text-[#FF5924] text-base max-[428px]:text-[10px] font-medium mb-8 max-[428px]:mb-3 hover:bg-[#FF5924] hover:text-white transition-all duration-300 active:scale-95">
        + Ingridients
      </button>

      <div className="w-full flex justify-between items-center mb-8 max-[428px]:mb-3 px-2 max-[428px]:px-0">
        <div className="flex items-start">
          <span className="text-white text-3xl max-[428px]:text-[16px] font-bold leading-none">{price}</span>
          <span className="text-white text-lg max-[428px]:text-[10px] ml-1 font-medium leading-none mt-0.5">$</span>
        </div>

        <div className="flex items-center gap-3 max-[428px]:gap-2">
          <button
            onClick={() => setCount(Math.max(1, count - 1))}
            className="w-8 h-8 max-[428px]:w-[18px] max-[428px]:h-[18px] rounded-full border border-[#666666] text-[#A5A5A5] flex items-center justify-center hover:bg-[#2A2A2A] transition-colors max-[428px]:text-[8px]"
          >
            —
          </button>
          <span className="text-white font-medium text-lg max-[428px]:text-[12px] min-w-[20px] max-[428px]:min-w-[12px] text-center">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="w-8 h-8 max-[428px]:w-[18px] max-[428px]:h-[18px] rounded-full bg-gradient-to-b from-[#FF5924] to-[#FFA229] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_15px_rgba(255,107,0,0.4)] max-[428px]:text-[10px]"
          >
            +
          </button>
        </div>
      </div>

      <button className="w-full h-14 max-[428px]:h-[35px] rounded-full bg-gradient-to-r from-[#FF5924] to-[#FFA229] text-white font-bold text-lg max-[428px]:text-[12px] shadow-[0px_10px_30px_0px_rgba(255,107,0,0.3)] hover:shadow-[0px_15px_40px_0px_rgba(255,107,0,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300">
        Order Now
      </button>
    </div>
  );
};

const Menu = () => {
  const pizzas = [
    { name: "Italian", price: "8,35", image: "./src/assets/italian.png" },
    { name: "Venecia", price: "7,35", image: "./src/assets/venecia.png" },
    { name: "Meat", price: "9,35", image: "./src/assets/meat.png" },
    { name: "Cheese", price: "8,35", image: "./src/assets/cheese.png", imgClass: "w-[180px] h-[188px] max-[428px]:w-[108px] max-[428px]:h-[113px]" },
  ];

  const popularPizzas = [
    { name: "Argentina", price: "7,35", image: "./src/assets/argentina.png" },
    { name: "Gribnaya", price: "6,35", image: "./src/assets/gribnaya.png" },
    { name: "Tomato", price: "7,35", image: "./src/assets/tomato.png" },
    { name: "Italian x2", price: "8,35", image: "./src/assets/italian2.png" },
  ];

  return (
    <div>
      <p>Menu</p>
    </div>
  );
}

export default Menu;