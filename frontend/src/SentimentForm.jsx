import { useState } from "react";
import axios from 'axios';
import { Spinner, Form, Button } from 'react-bootstrap';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const FORM_ENDPOINT = "https://afaanoromosentiment.onrender.com/predict";

const SentimentForm = () => {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction('');
    
    try {
      const response = await axios.post(`${FORM_ENDPOINT}`, { text });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error predicting sentiment:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPredictionColor = () => {
    if (prediction === 'positive') {
      return 'text-success';
    } else if (prediction === 'negative') {
      return 'text-danger';
    } else {
      return 'text-primary';
    }
  };


  return (
    <div>
      <Card className="w-100 p-4">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formTextarea">
            <Form.Group controlId="formTextarea" className="d-flex align-items-center">
              <Form.Label
                className="fw-bold"
                style={{ fontSize: '1.2rem', color: "black" }}
              >
                Enter Afaan Oromo Text:
              </Form.Label>
              <Form.Control
                as="textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your text here..."
                rows={3}
                className="form-control"
                />
            </Form.Group>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading} className="w-100 my-5">
            {loading ? (
              <Spinner animation="border" role="status" className="me-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <BsFillCaretRightFill className="me-2" />
            )}
            Predict Sentiment
          </Button>
        </Form>

        {prediction && (
          <Card className={`mt-3 text-center p-3 ${getPredictionColor()}`}>
            <h3>Prediction:</h3>
            <p>{prediction}</p>
          </Card>
        )}
      </Card>
    </div>
  );
}

export default SentimentForm;


