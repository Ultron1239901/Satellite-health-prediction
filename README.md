# 🚀 Satellite Health Monitoring & Failure Risk Prediction System

A **cinematic, mission-control–style web application** that monitors satellite telemetry data and predicts satellite health using Machine Learning.  
Designed with a **NASA-inspired space dashboard UI** and a **production-ready ML backend**.

---

## 📌 Project Overview

This project simulates a **real-world satellite operations dashboard** used by space agencies to:

- Monitor satellite telemetry in real time
- Predict satellite health conditions
- Detect anomalies and failure risks
- Visualize system confidence using professional mission-control UI patterns

The application combines:
- **Machine Learning**
- **FastAPI backend**
- **Interactive space-themed frontend**
- **Cinematic dual-ring health indicators**

---

## 🎯 Features

### 🧠 Machine Learning
- Synthetic satellite telemetry dataset
- Trained models:
  - Logistic Regression
  - Random Forest (best-performing)
- Predicts satellite health status:
  - 🟢 Healthy
  - 🟠 At Risk
  - 🔴 Failure
- Returns confidence score for predictions

### 🛰️ Telemetry Parameters
- Battery Voltage (V)
- Battery Current (A)
- Temperature (°C)
- CPU Load (%)
- Sensor Error Rate

### 🖥️ Frontend (Mission Control UI)
- NASA-style cinematic dashboard
- Animated space background (starfield)
- Dual-ring system:
  - **Outer ring** → system processing / standby
  - **Inner ring** → confidence-based health indicator
- Color-coded health visualization:
  - Green → Healthy
  - Amber → At Risk
  - Red → Failure
- Sliders + manual numeric inputs
- Fully responsive design (desktop, tablet, mobile)

### ⚙️ Backend (FastAPI)
- `/predict` REST API
- JSON-based telemetry input
- Returns prediction + confidence
- CORS enabled for frontend integration

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript
- Canvas API (animated starfield)
- Custom CSS animations (rings, glow, transitions)

### Backend
- Python 3.13
- FastAPI
- Pydantic
- Uvicorn

### Machine Learning
- Scikit-learn
- Logistic Regression
- Random Forest
- Joblib (model persistence)

---

## 📂 Project Structure

Satellite-Health-Monitoring/
│
├── backend/
│ ├── main.py # FastAPI application
│ ├── model.joblib # Trained ML model
│ └── requirements.txt
│
├── ml/
│ └── train_model.ipynb # Google Colab training notebook
│
├── frontend/
│ └── index.html # Cinematic space dashboard UI
│
└── README.md



---

## ▶️ How to Run the Project

### 1️⃣ Train the ML Model (Google Colab)
- Open `train_model.ipynb`
- Run all cells
- Download `model.joblib`
- Place it inside the `backend/` folder

---

### 2️⃣ Run Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload


frontend/index.html

sample test value :

for healthy
Battery Voltage   : 27
Battery Current   : 5
Temperature       : 25
CPU Load          : 40
Sensor Error Rate : 0.02

for risk
Battery Voltage   : 22
Battery Current   : 8
Temperature       : 55
CPU Load          : 75
Sensor Error Rate : 0.12

for failure
Battery Voltage   : 18
Battery Current   : 2
Temperature       : 85
CPU Load          : 90
Sensor Error Rate : 0.30


{
  "prediction": "Healthy",
  "risk_score": 0.87
}


---


If you want, next I can:
- Convert this into a **GitHub-optimized README**
- Add **architecture diagrams**
- Write a **project description for resumes / LinkedIn**
- Help you present this as a **hackathon or interview project**

Just say the word 👊




