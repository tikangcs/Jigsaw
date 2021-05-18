# Jigsaw
Foundational development and deployment of microservices driven back-end architecture featuring performance testing and modern optimization techniques

## Overview

The objectives of this project will be as follows:

- Containerize and compose the backend stacks into a single unit in Docker
- Deploy the containers to the cloud using an AWS EC2 instance
- Perform the ETL process over a sizable dataset involving over 10 millions records
- Design an efficient RESTful API server to handle requests gracefully
- Performance test the backend for latency acheived at various throughput levels
- Implement a reverse proxy/load balancer (Nginx)
- Implement serverside caching using Redis

## Technologies Featured
- Node.js
- MySQL
- Docker
- AWS EC2 
- Redis
- Nginx
- Loader.io

## Getting Started

- npm init
- npm install dependencies
  - express
- Create a server in MVC architecture and route requests to the following endpoints:
  - /Products
  - /Styles
  - /Related
- Products response
  - Primary key of ID
  - Default of 5 products
  - Has the ability to paginate the responses based on the values passed into the page and count parameters
- Styles
  - Foreign Key of Product ID
- Related
  - Foreign Key of Product ID
- Index

## Key Observations and Accomplishments

- Run the docker container
- Design Schema for the 3 tables
- Create the products, styles, and related tables
- Import the data for each table
- Design SQL queries for each API endpoint

- Create a Dockerfile to customize the node image
- Utilize docker-compose to package the server and database services
- Mount a volume to store the db data
- Load data into the volume

- Create an AWS EC 2 T2.Micro instance
- SSH into the instance
- Install Docker
- Pull the following docker images
  - MySQL
  - Node
  - Redis
  - Nginx
- Install PM2 to the node image

