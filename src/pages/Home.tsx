import { useConsoleEgg } from '../hooks/useConsoleEgg';
import { useTabTitle } from '../hooks/useTabTitle';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import SideProjects from '../components/sections/SideProjects';
import Recognition from '../components/sections/Recognition';
import Teaching from '../components/sections/Teaching';
import Writing from '../components/sections/Writing';
import Listen from '../components/sections/Listen';
import Footer from '../components/Footer';

export default function Home() {
  useTabTitle('Shashwat — Engineer & Writer');
  useConsoleEgg();
  useScrollReveal();

  return (
    <>
      <Hero />
      <About />
      <Work />
      <SideProjects />
      <Recognition />
      <Teaching />
      <Writing />
      <Listen />
      <div className="frame">
        <Footer
          heading="Say hello, or just say something."
          intro={'I read every email. I reply to most. The fastest way to reach me is below — though if you spell "mellon" on this page, a door opens.'}
          showSoot={true}
        />
      </div>
    </>
  );
}
