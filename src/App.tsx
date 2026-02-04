import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CustomOrdersPage } from './pages/CustomOrdersPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    if (currentPath === '/') return <HomePage />;
    if (currentPath === '/shop') return <ShopPage />;
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/custom-orders') return <CustomOrdersPage />;
    if (currentPath === '/contact') return <ContactPage />;
    if (currentPath === '/cart') return <CartPage />;
    if (currentPath.startsWith('/product/')) {
      const slug = currentPath.split('/product/')[1];
      return <ProductDetailPage slug={slug} />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
