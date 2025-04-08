import Loading from '@/components/Loading/Loading';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero/Hero'), {
  loading: () => <Loading />,
});

const Services = dynamic(() => import('@/components/Services/Services'), {
  loading: () => <Loading />,
});

const Portfolio = dynamic(() => import('@/components/Portfolio/Portfolio'), {
  loading: () => <Loading />,
});

const Contact = dynamic(() => import('@/components/Contact/Contact'), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <div>
      <section className="h-screen snap-start" id="hero">
        <Hero />
      </section>

      <section className="h-screen snap-start" id="services">
        <Services />
      </section>

      <Portfolio />

      <section className="h-screen snap-start" id="contact">
        <Contact />
      </section>
    </div>
  );
}
