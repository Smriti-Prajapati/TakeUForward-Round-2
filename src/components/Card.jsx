const Card = ({ children, style = {}, className = "" }) => {
  return (
    <div
      className={`card ${className}`}
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        padding: "20px",
        backgroundColor: "#fff",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
