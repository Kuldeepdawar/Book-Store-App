import React from "react";

const Cards = ({ item }) => {
  console.log(item);

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-110 duration-200 dark:bg-slate-600 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white rounded-full border-[2px] ">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
