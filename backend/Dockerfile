FROM python:3.10.3-slim

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "api:app", "--host", "localhost", "--port", "8000"]