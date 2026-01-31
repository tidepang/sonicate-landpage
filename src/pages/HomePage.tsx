import { Hero } from '../components/Hero';
import { ProductShowcase } from '../components/ProductShowcase';
import { Features } from '../components/Features';
import { Blog } from '../components/Blog';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Features />
      {/* Temporarily hidden - Insights & Stories section */}
      {/* <Blog /> */}
      {/* Temporarily hidden - Start Your Journey section */}
      {/* <CTASection /> */}
    </>
  );
}