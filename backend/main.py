from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
import os

app = FastAPI()

class Location(BaseModel):
    lat: float
    lng: float

# Load model if available
model = None
if os.path.exists("model.pkl"):
    with open("model.pkl", "rb") as f:
        model = pickle.load(f)

@app.get("/")
def home():
    return {"message": "EV backend live ✅"}

@app.post("/predict")
def predict_location(loc: Location):
    if model:
        X = np.array([[loc.lat, loc.lng]])
        result = model.predict(X)[0]
        return {"prediction": f"ML Model says: {result}"}
    else:
        # Dummy fallback logic
        lat_offset = loc.lat + 0.01
        lng_offset = loc.lng + 0.01
        return {
            "prediction": f"Suggested near: ({lat_offset:.4f}, {lng_offset:.4f})"
        }
