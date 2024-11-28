import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // تأكد من أنك تستخدم المفتاح السري بشكل صحيح

export default eventHandler(async (event) => {
  if (event.req.method === 'POST') {
    try {
      console.log('Creating session...');
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'منتج مميز',
                images:['https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=800','https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=800']
              },
              unit_amount: 2000, // السعر بالدولار (20 دولار)
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${event.req.headers.origin}/payment-success`,
        cancel_url: `${event.req.headers.origin}/payment-cancelled`,
         locale:"en",

      });

      console.log('Session created:', session);
      return { id: session.id }; // العودة بالـ session id
    } catch (err) {
      console.error('Error during session creation:', err);
      return { error: err.message };
    }
  } else {
    return { error: 'Method Not Allowed' };
  }
});
