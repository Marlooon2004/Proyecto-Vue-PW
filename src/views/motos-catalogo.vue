<template>
  <div class="popular-products">
    <h2 class="section-title">Elecciones populares</h2>
    <div class="product-grid">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <img :src="product.image" class="product-image" :alt="product.title" />
        <div class="product-body">
          <h5 class="product-title">{{ product.title }}</h5>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-info">
            <span class="product-price">{{ product.price }}</span>
            <div class="product-rating">
              <span v-for="n in 4" :key="n" class="star">★</span>
              <span class="star half">☆</span>
              <small class="rating-text">(4.5)</small>
            </div>
          </div>
        </div>
        <div class="product-footer">
          <button class="btn primary">Add to Cart</button>
          <button class="btn secondary">♡</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    title: 'Product Name',
    description: 'Short product description goes here.',
    price: '$99.99',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Product Name',
    description: 'Short product description goes here.',
    price: '$99.99',
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Product Name',
    description: 'Short product description goes here.',
    price: '$99.99',
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Product Name',
    description: 'Short product description goes here.',
    price: '$99.99',
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Product Name',
    description: 'Short product description goes here.',
    price: '$99.99',
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    title: 'Product Name',
    description: 'Short product description goes here.',
    price: '$99.99',
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
]
</script>

<style scoped>
.popular-products {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.product-body {
  padding: 1rem;
  flex-grow: 1;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.product-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #f5a623;
  font-size: 1rem;
}

.star.half {
  color: #f5a623;
  opacity: 0.5;
}

.rating-text {
  font-size: 0.8rem;
  color: #888;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #eee;
  background-color: #f9f9f9;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.primary {
  background-color: #007bff;
  color: white;
}

.btn.primary:hover {
  background-color: #0056b3;
}

.btn.secondary {
  background-color: transparent;
  color: #555;
  border: 1px solid #ccc;
}

.btn.secondary:hover {
  background-color: #eee;
}
</style>
