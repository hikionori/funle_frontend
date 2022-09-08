FROM python:3.10.5

WORKDIR /

COPY requirements.txt requirements.txt
COPY main.py /main.py

RUN pip install -r requirements.txt

COPY /server /server

CMD ["python", "main.py"]