
function Overlay({ onClick }) {
  return (
    <div
      className="fixed inset-0  bg-opacity-25 "
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      onClick={onClick}
    ></div>
  );
}

export default Overlay;
