import os

import fastapi
from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder

from typing import Optional, List

from .models import *
from .database import db, client

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}