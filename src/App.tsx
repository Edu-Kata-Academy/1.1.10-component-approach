import Header from './components/header/Header.jsx';
import List from './components/list/List.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App() {
  return (
    <section className="todoapp">
      <Header />
      <main className="main">
        <List />
        <Footer />
      </main>
    </section>
  );
}
