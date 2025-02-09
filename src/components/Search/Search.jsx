
function Search({className}) {
  return (
    <div className={className}>
    <input
      type="text"
      placeholder="Buscar pijamas..."
      className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
    <button className="bg-blue-300 text-white px-4 py-2 rounded-r hover:bg-blue-400">
      Buscar
    </button>
  </div>
  )
}

export default Search