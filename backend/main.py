from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Pipeline Monitoring Dashboard API is Running"
    }