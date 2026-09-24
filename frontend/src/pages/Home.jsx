import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ New Collection Available
          </div>

          <p className="hero-small">
            WELCOME TO SHOPSMART
          </p>

          <h1>
            Shop Smart.
            <br />
            <span>Live Better.</span>
          </h1>

          <p className="hero-description">
            Discover amazing products, stylish collections and
            unbeatable prices — all in one place.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">
              Shop Now →
            </button>

            <button className="explore-btn">
              Explore Products
            </button>
          </div>

          <div className="hero-features">
            <div>
              <strong>10K+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>5K+</strong>
              <span>Happy Customers</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE VISUAL */}

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="shopping-card">

            <div className="shopping-icon">
              🛍️
            </div>

            <h3>Shop Everything</h3>

            <p>
              Fashion • Electronics • Beauty
            </p>

          </div>


          <div className="floating-card card-one">
            ⭐ 4.9 Rating
          </div>

          <div className="floating-card card-two">
            🚚 Fast Delivery
          </div>

          <div className="floating-card card-three">
            💳 Secure Payment
          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories">

        <h2>Shop by Category</h2>

        <p className="category-subtitle">
          Explore our popular categories
        </p>

        <div className="category-container">

          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>Electronics</h3>
            <p>Explore Products</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👗</div>
            <h3>Fashion</h3>
            <p>Explore Products</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💄</div>
            <h3>Beauty</h3>
            <p>Explore Products</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🏠</div>
            <h3>Home & Kitchen</h3>
            <p>Explore Products</p>
          </div>

          <div className="category-card">
            <div className="category-icon">⚽</div>
            <h3>Sports</h3>
            <p>Explore Products</p>
          </div>

          <div className="category-card">
            <div className="category-icon">📚</div>
            <h3>Books</h3>
            <p>Explore Products</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;