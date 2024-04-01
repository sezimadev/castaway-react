
import './App.css';
import Footer from './conponents/Footer';
import Header from './conponents/Header';
import Hero from './conponents/Hero';
import Main from './conponents/Main';
import Main1 from './conponents/Main1';
import Main2 from './conponents/Main2';
import Section from './conponents/Section';
import Stars from './conponents/Stars';
import Subscribe from './conponents/Subscribe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Main/>
      <Main1/>
      <Main2/>
      <Section/>
      <Subscribe/>
      <Stars/>
      <Footer/>
    </div>
  );
}

export default App;
