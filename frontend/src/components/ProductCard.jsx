import "./ProductCard.css";

const ProductCard = ({
  name,
  category,
  price,
  originalPrice,
  badge,
  rating,
  image,
}) => {
  return (
    <div className="product-card">
      <div className="product-badge">{badge}</div>

      <div className="product-image" aria-label={name}>
        {image}
      </div>

      <div className="product-details">
        <p className="product-category">{category}</p>
        <h3>{name}</h3>

        <div className="product-rating">
          <span>⭐ {rating}</span>
        </div>

        <div className="product-footer">
          <div className="price-wrap">
            <span className="price">₹{price}</span>
            <span className="old-price">₹{originalPrice}</span>
          </div>

          <button type="button" className="add-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
