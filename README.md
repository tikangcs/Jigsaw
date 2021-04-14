# Introduction

In Project Jigsaw, we will be refactoring the backend that serves our mock fashion ecommerce front end client.
The objectives of this project will be as follows:

- Containerize and compose the backend stacks into a single unit using Docker
- Deploy the containers to the cloud using an AWS EC2 instance
- Perform the ETL process over a sizable dataset involving millions of records
- Design an efficient RESTful API server to handle requests gracefully
- Performance test the backend for latency acheived at various throughput levels
- Implement a load balancer using Nginx
- Implement serverside caching using Redis

# NODE

- npm init
- npm install dependencies
  - express
- Create a server in MVC architecture and route requests to one of three endpoints
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

# DOCKER

## DockerFile

## Docker Compose

- Determine the composition of the containers

# AWS EC2

- Create an AWS EC 2 T2.Micro instance
- SSH into the instance
- Install Docker
- Pull the following docker images
  - MySQL
  - Node
  - Redis
  - Nginx
- Install PM2

# MYSQL

- Run the docker container
- Design Schema for the 3 tables
- Create the products, styles, and related tables
- Import the data for each table
- Design SQL queries for each API endpoint

# NGINX

# REDIS
