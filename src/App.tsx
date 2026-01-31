import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { DemoPage } from './pages/DemoPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <AboutPage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <ContactPage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/blog" element={
              <>
                <BlogPage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/blog/:id" element={
              <>
                <BlogArticlePage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/demo" element={
              <>
                <DemoPage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/privacy" element={
              <>
                <PrivacyPage />
                <Newsletter />
                <Footer />
              </>
            } />
            <Route path="/terms" element={
              <>
                <TermsPage />
                <Newsletter />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}