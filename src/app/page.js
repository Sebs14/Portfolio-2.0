import AboutMe from '@/components/aboutMe/AboutMe';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/navbar';
export default function Home() {
  return (
    <main className='bg-[#092635]'>
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
}
