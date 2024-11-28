<template>
  <div class="payment-success-container">
    <div class="payment-success-content">
      <h1 class="success-title">🎉 تم الدفع بنجاح!</h1>
      <p class="success-message">شكراً لك على الدفع. سيتم معالجة طلبك قريباً.</p>
      <NuxtLink to="/" class="back-home-button">العودة إلى الصفحة الرئيسية</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No JS required for this simple layout
</script>

<style scoped>
/* الحاوية الكلية */
.payment-success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #d4edda;
  background: linear-gradient(135deg, #d4edda, #a3d9a5);
  color: #155724;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

/* محتوى الرسالة */
.payment-success-content {
  max-width: 600px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
}

/* عنوان النجاح */
.success-title {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #28a745;
  font-weight: bold;
}

/* رسالة النجاح */
.success-message {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #155724;
  line-height: 1.5;
}

/* زر العودة إلى الصفحة الرئيسية */
.back-home-button {
  display: inline-block;
  font-size: 1.1rem;
  padding: 12px 30px;
  background-color: #28a745;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.back-home-button:hover {
  background-color: #218838;
  transform: scale(1.05);
}

/* تأثيرات متحركة للصفحة */
.payment-success-container {
  animation: fadeIn 1.5s ease-in-out;
}

/* تأثير التلاشي عند دخول الصفحة */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
