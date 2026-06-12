import { useRouter } from './hooks/useRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const { currentPath, navigate } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home navigate={navigate} />;
      case '/about':
        return <About navigate={navigate} />;
      case '/services':
        return <Services navigate={navigate} />;
      case '/blog':
        return <Blog navigate={navigate} />;
      case '/contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPath={currentPath} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      <FloatingButtons />
    </div>
  );
}

export default App;
