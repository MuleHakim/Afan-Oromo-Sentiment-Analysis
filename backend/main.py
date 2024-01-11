from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.post("/process_text")
def process_text(request: TextRequest):
    return {"text": request.text}

