from fastapi import FastAPI

from .models import *
from .database import *

app = FastAPI()

@app.get("/")
async def index():
    return {"message": "Hello World"}