# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's code to the working directory
COPY . .

# Expose port 9090 to the outside world
EXPOSE 9090

# Command to run the application
CMD ["mkdocs", "serve", "-a", "0.0.0.0:9090"]
