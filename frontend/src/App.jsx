import SentimentForm from './SentimentForm';
import './App.css';

function App() {
  return (
   <div className='App vh-100 bg-inspirational'>
      <h1 className='my-5 mx-5'>Afaan Oromo Sentiment Analysis</h1>
     <div className="d-flex justify-content-center align-items-center">
      <SentimentForm />
    </div>
   </div>
  );
}

export default App;