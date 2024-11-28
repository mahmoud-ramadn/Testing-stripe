<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>مرحبا بك في متجرنا</h1>
        <p>تصفح مجموعتنا الرائعة من المنتجات وابدأ بالتسوق الآن.</p>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products">
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" alt="Product Image" class="product-image" />
        </div>
        <button @click="handleCheckout(product)">ادفع الآن</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js'

// Load the Stripe public key dynamically from runtime config
const stripePromise = loadStripe(useRuntimeConfig().public.STRIPE_PUBLIC_KEY)

// بيانات المنتجات
const products = [
  {
    id: 1,
    name: 'منتج مميز 1',
    price: 2000,
    image: 'https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'منتج مميز 2',
    price: 3000,
    image: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'منتج مميز 3',
    price: 1500,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
  },
]

const handleCheckout = async (product) => {
  const stripe = await stripePromise

  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({ productId: product.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error('خطأ في الاتصال بالسيرفر:', response.statusText)
      return
    }

    const session = await response.json()

    if (session.error) {
      console.error('خطأ في إنشاء الجلسة:', session.error)
      return
    }

    const { error } = await stripe.redirectToCheckout({ sessionId: session.id })

    if (error) {
      console.error('خطأ في الدفع:', error.message)
    }
  } catch (error) {
    console.error('حدث خطأ في الطلب:', error)
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: #00bcd4;
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
}

/* Products Section */
.products {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.product-card {
  width: 250px;
  margin-bottom: 30px;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.card {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  background-color: #00bcd4;
  width: 80%;
  height: 45px;
  border-radius: 30px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-bottom: 20px;
}

button:hover {
  background-color: #0097a7;
  transform: translateY(-5px);
}
</style>
