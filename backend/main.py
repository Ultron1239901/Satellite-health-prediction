from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="Satellite Health Monitoring API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("model/satellite_health_model.pkl")

class TelemetryInput(BaseModel):
    battery_voltage: float
    battery_current: float
    temperature: float
    cpu_load: float
    sensor_error_rate: float

@app.post("/predict")
def predict(data: TelemetryInput):
    features = np.array([[ 
        data.battery_voltage,
        data.battery_current,
        data.temperature,
        data.cpu_load,
        data.sensor_error_rate
    ]])

    prediction = model.predict(features)[0]
    probability = model.predict_proba(features).max()

    status_map = {
        0: "Healthy",
        1: "At Risk",
        2: "Failure"
    }

    return {
        "prediction": status_map[prediction],
        "risk_score": round(float(probability), 2)
    }
