import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
    
    <h1 className='underline text-lg font-bold'>Devjops Project</h1>
    {/* Navigation */}
      <Navigation />

      <Card />

    </div>
  );
}

export default App;
