import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
function App() {
  let x = 5;

  return (
    <div className="App">
      <Header></Header>
      <Content />
      <Footer></Footer>
    </div>
  );
}

export default App;
