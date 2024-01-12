# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory in the container
WORKDIR /backend

# Copy the current directory contents into the container at /backend
COPY . /backend

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.py when the container launches
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
