from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from keras.models import load_model
from keras.preprocessing.text import Tokenizer
from keras.utils import pad_sequences
import numpy as np

# Specify the path to your .h5 file
file_path = r'model.h5'

# Load the model
model = load_model(file_path)

# Tokenizer for text preprocessing
tokenizer = Tokenizer()
tokenizer.fit_on_texts([""])  # Provide an empty string to avoid errors during tokenization

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SentimentRequest(BaseModel):
    text: str

@app.post("/predict")
def predict_sentiment_api(request: SentimentRequest):
    text = request.text

    # Tokenize and pad the input text
    sequences = tokenizer.texts_to_sequences([text])
    padded_sequence = pad_sequences(sequences, maxlen=30)  # Adjust maxlen based on your model's input shape

    # Predict sentiment
    predicted = model.predict(padded_sequence)
    label = np.argmax(predicted, axis=1)
    # Map label to sentiment
    sentiments = ["negative", "neutral", "positive"]
    ans = sentiments[label[0]]

    return {"The sentiment predicted is": ans}
