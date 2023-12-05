import AboutMe from "@/components/aboutMe/AboutMe";
import Hero from "@/components/hero/Hero";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-sky-500 to-sky-300">
      <Hero />
      <AboutMe />
    </main>
  );
}
