import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
export default async function Home() {
  return (
    <>
    <main className="w-[100%] md:w-[90%] lg:w-[70%] mx-auto flex flex-col gap-7">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <ContactForm/>
    </main>
    <Footer/>
    </>
  );
}


