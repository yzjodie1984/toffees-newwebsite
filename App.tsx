import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import Assets from './components/Assets';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Ticker from './components/Ticker';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-alabaster antialiased selection:bg-brass selection:text-midnight">
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <Assets />
        <Process />
        <WhyUs />
        <Ticker />
        <ContactFooter />
      </main>
    </div>
  );
}
