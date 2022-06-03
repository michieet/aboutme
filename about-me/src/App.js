import './App.css';
import Header from './components/header';
import Main from './components/main';
import Cart from './components/cart';
import data from './data';

function App() {

  const {products} = data;

  return (
    <div className='App'>
      <Header></Header>
      <div className='row'>
        {/* Main component will be the one rendering 'products' */}
        <Main products={products}></Main>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
