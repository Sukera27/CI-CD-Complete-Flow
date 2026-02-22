FROM python:3

RUN mkdir app
WORKDIR "./app"
ADD . .
RUN ["pip", "install", "FastApi[all]"]
RUN ["pip", "install", "python-dotenv"]
RUN ["pip", "install", "requests"]

EXPOSE 8000

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]