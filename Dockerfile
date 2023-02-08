# Use an official Python runtime as the base image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /GPT-3-interface

# Copy the current directory contents into the container at /GPT-3-interface
COPY . .

# Install required packages
RUN pip make install

# Specify the command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
