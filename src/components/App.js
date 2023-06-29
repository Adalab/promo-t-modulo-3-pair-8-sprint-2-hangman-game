// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
