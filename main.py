import json
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import openai
import os
import config




app = FastAPI()

# openai.api_key = os.environ["OPENAI_API_KEY"]
openai.api_key = config.OPENAI_API_KEY


origins = [
    "http://localhost",
    "http://127.0.0.1:8000/",
    "http://127.0.0.1:5500/",
]

# Allow requests from all domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def root(request: Request):
    data = await request.json()
    input_text = data["input"]
    response = openai.Completion.create(
     model = "text-davinci-003",
     max_tokens = 30,
     prompt = input_text, 
     temperature = 0  
    )
    return JSONResponse(content={"input": response['choices'][0]['text']})
