<template>
  <div class="payment-failed-container">
    <div class="payment-failed-content">
      <h1 class="error-title">❌ فشل الدفع!</h1>
      <p class="error-message">حدث خطأ أثناء المعاملة. حاول مرة أخرى لاحقاً.</p>
      <NuxtLink to="/" class="back-home-button">العودة إلى الصفحة الرئيسية</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No JS required for this simple layout
</script>

<style scoped>
/* الحاوية الكلية */
.payment-failed-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8d7da;
  background: linear-gradient(135deg, #f8d7da, #f1b0b7);
  color: #721c24;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

/* محتوى الرسالة */
.payment-failed-content {
  max-width: 600px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
}

/* عنوان الخطأ */
.error-title {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #e53e3e;
  font-weight: bold;
}

/* رسالة الخطأ */
.error-message {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #721c24;
  line-height: 1.5;
}

/* زر العودة إلى الصفحة الرئيسية */
.back-home-button {
  display: inline-block;
  font-size: 1.1rem;
  padding: 12px 30px;
  background-color: #f44336;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.back-home-button:hover {
  background-color: #d32f2f;
  transform: scale(1.05);
}

/* تأثيرات متحركة للصفحة */
.payment-failed-container {
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
