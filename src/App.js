import ReviewsList from './components/reviews'
import ReviewForm from './components/review-form'
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <ReviewsList />
      </section>
      <section>
        <ReviewForm/>
      </section>
    </div>
  );
}

export default App;
