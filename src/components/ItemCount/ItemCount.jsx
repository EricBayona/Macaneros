
function ItemCount({quantity, handleDecrement, handleIncrement}) {
    
  return (
    <div className="flex items-center mt-4">
            <button className="px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-200" onClick={handleDecrement}>-</button>
            <p className="mx-4 text-2xl">{quantity}</p>
            <button className="px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-200" onClick={handleIncrement}>+</button>
        </div>
  )
}

export default ItemCount