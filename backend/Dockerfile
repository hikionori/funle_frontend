FROM python:3.10.5

WORKDIR /back

COPY requirements.txt /back/requirements.txt
COPY main.py /back/main.py

RUN pip install -r requirements.txt

COPY /server /back/server

CMD ["python", "main.py"]