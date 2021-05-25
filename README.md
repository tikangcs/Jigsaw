# Jigsaw
Foundational development and deployment of services oriented back-end architecture featuring performance testing and modern optimization techniques

## Overview

The objectives of this project included:

- Containerizing and composing the various services of the back end using Docker
- Deploying the composed services to the cloud using an AWS EC2 instance (t2.micro)
- Performing the ETL process over a sizable dataset involving over a million records
- Designing an efficient RESTful API server to handle requests gracefully
- Performance testing the deployed back end for latency acheived at various throughput levels
- Implementing server-side caching to improve latency (Redis)
- Horizontally scaling through a reverse proxy/load balancer to improve response rates and latency at higher throughput levels (Nginx)


## Technologies Featured
- Node.js
- Express
- MySQL
- Docker
- AWS EC2 
- Redis
- Nginx
- Loader.io

## Server and Database Layers

Given a set of CSV files containing over a million product records of an e-commerce website, the goal was to produce a scalable RESTful API that served pre-existing legacy front end code from different endpoints. 

MySQL was selected for the database layer. SQL databases provide fast, efficient and reliable solutions that could dependably serve the most significant data needs of the headlining products section of the e-commerce website. Since users' first impressions of the product are shaped by this top section, data inconsistencies and occurrences of failure would have a direct negative impact on conversion of sales. Hence, the ACID compliance features of SQL databases not only addressed the top priorities of the data needs, but also provided an edge over other NoSQL options. Connection pooling was enabled to improve the performance of the database to handle greater loads.

The server layer, comprised of Node.js and Express, was designed using the MVC architectural pattern and RESTful API endpoints were thoughtfully constructed. In addition, Docker was used throughout the project to facilitate an easier, more stream lined deployment process. Finally, Nginx was introduced to the back end as a reverse-proxy server and load balancer for optimizations through horizontal scaling. 

This was all deployed to the cloud using only AWS EC2 t2.micro instances. 

## Back End Architecture
### Containerized Single Server Set Up
> Containerized MySQL, Nginx, Node and Redis into a single Docker unit and deployed to a single AWS EC2 t2.micro instance
![Image of single server setup architecture](/documentation/SingleServer.png)

### Distributed Systems Set Up
> 5 separate AWS EC2 t2.micro instances (1 MySQL, 1 Nginx, 3 Node.js)
![Image of distributed systems setup architecture](/documentation/Distributed.png)

---
## Load Testing Details
- A suite of load testing was performed on Loader.io, a cloud based load testing web application
- A single GET endpoint was tested to read the data related to a random product ID in a population of over 1 million records
- Acceptable service level thresholds - latency of 50ms and 95% response rates/sub 5% error rates
- Load tested at different throughput levels - 100/500/1,000/2,000 requests per second over 30 seconds
- Each round of tests consisted of 3 consecutive 30 second tests. While this is not nearly enough data to serve as a basis to draw any concrete conclusions, the limited number of tests were deemed sufficient to demonstrate and confirm the effects of well known optimization techniques. 
- The initial goal was to serve 100 clients per second with sub-50ms average response times. However, through the optimzation techniques, the acceptable performance thresholds were met at 1,000 clients per second.

## Results and Observations

### Single server cache optimization - 500 requests / second over 30 seconds
---
#### `Baseline` - Without Redis
While this system was able to sufficiently handle a load of 500 req/s, it failed to meet the service level thresholds at 1,000 req/s.
Test # | Avg Latency | Response Counts | Response Rates | Error Rates
-------|-------------|-----------------|----------------|------------
1      |      1,094 ms  | 14,645 / 15,000 |   98%   | 0%
2      |      1,190 ms  | 14,781 / 15,000 |   99%   | 0%
3      |      1,213 ms  | 14,717 / 15,000 |   98%   | 0%
Total Avg|    1,166 ms  | 14,714 / 15,000 |  98%   | 0%

#### `Optimized` - With Redis
For purposes of testing the effectiveness of the cache, reduced the range of endpoints to target a subpopulation of the data and set a time-based expiration.

Despite showing dramatic improvements to the performance at 500 req/s throughput level, the caching method did not prove effective at the 1,000 req/s. It was determined that pushing the optimizations to this increased level would require a more effective method - load balancing. The initial attempt of load balancing was performed by distributing the load across 3 different ports within the single server instance. The data revealed that it was not an effective optimization technique. Hence, a distributed system with multiple interconnected servers was designed and tested in the next section.

Test # | Avg Latency | Response Counts | Response Rates | Error Rates
-------|-------------|-----------------|----------------|------------
1      |   1,112 ms  | 15,000 / 15,000 |   100%   | 0%
2      |      38 ms  | 15,000 / 15,000 |   100%   | 0%
3      |      17 ms  | 15,000 / 15,000 |   100%   | 0%
Total Avg|    389 ms  | 15,000 / 15,000 |  100%   | 0%
---

### Distributed systems horizontal scaling optimization - 1,000 requests / second over 30 seconds
---
### `Baseline` - Reverse Proxy to a single API server 
Implementing a reverse-proxy server negatively impacted the performance metrics of a single server architecture when compared to a set up without it. However, the potential performance improvements through horizontal scaling exceeded the immediate performance hit to the single server. Additional research to be performed over how to configure the reverse-proxy server to nullify some of the negative performance impacts observed.
Test # | Avg Latency | Response Counts | Response Rates | Error Rates
-------|-------------|-----------------|----------------|------------
1      |   556 ms  | 22,116 / 30,000 |   74%   | 24%
2      |   1031 ms  | 21,911 / 30,000 |   73%   | 15%
3      |   1434 ms  | 17,818 / 30,000 |   59%   | 17%
Total Avg|    389 ms  | 20,615 / 30,000 |  69%   | 19%

### `Optimized #1` - Reverse Proxy to 3 API servers with least connections load balancing
Using the least connections method, the back end was able to service a load of 1,000 req/s nearly perfectly. This technique and method proved to be the clear winner.
Test # | Avg Latency | Response Counts | Response Rates | Error Rates
-------|-------------|-----------------|----------------|------------
1      |   17 ms  | 29,962 / 30,000 |   100%   | 0%
2      |   53 ms  | 29,991 / 30,000 |   100%   | 0%
3      |   17 ms  | 30,000 / 30,000 |   100%   | 0%
Total Avg|    29 ms  | 29,984 / 30,000 |  100%   | 0%

### `Optimized #2` - Reverse Proxy to 3 API servers with round robin load balancing
While the overall load balancing technique was undoubtably effective, the least connection method was more consistent in producing the optimized results. The round robin method exhibited some erratic behavior. In testing rounds where no errors were encountered, the round robin method worked just as effectively as least connections. However, when errors were encountered, there was a big spike in average latency time that may have stemmed from unhandled errors. Because round robin is a static load balancing technique, errors may snowball and compound in the way that we observed in the second test.
Test # | Avg Latency | Response Counts | Response Rates | Error Rates
-------|-------------|-----------------|----------------|------------
1      |   17 ms  | 30,000 / 30,000 |   100%   | 0%
2      |   2,600 ms  | 9,752 / 30,000 |   33%   | 30%
3      |   52 ms  | 29,818 / 30,000 |   100%   | 0%
Total Avg|    890 ms  | 23,190 / 30,000 |  77%   | 10%

---
