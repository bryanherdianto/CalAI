import './App.css';
import FruitList from './components/Fruits';

const App = () => {
  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold mb-10'>Fruit Management App</h1>
      </header>
      <main>
        <FruitList />
      </main>
    </div>
  );
};

export default App;