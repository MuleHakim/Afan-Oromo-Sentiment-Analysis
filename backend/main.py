from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# from predict_sentiment import predict_sentiment  # implement this function

app = FastAPI()

# Enable CORS
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
    prediction = "90889"
    # prediction = predict_sentiment(text) 
    return {"negative": prediction}

