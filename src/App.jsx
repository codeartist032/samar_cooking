
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import HowItWorks from './components/HowItWorks';
import OrderForm from './components/OrderForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AppNavbar from './components/AppNavbar';
function App() {
  return (
    <main className="min-h-screen bg-[var(--color-beige-100)] font-[Tajawal]">
      <AppNavbar />
      <Hero />
      <About />
      <Menu />
      <HowItWorks />
      <OrderForm />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
