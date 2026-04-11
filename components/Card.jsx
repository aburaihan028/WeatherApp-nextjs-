const Card = ({ children }) => {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="card">{children}</div>
    </div>
  );
};

export default Card;
