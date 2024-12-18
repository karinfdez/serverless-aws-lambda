
# Serverless AWS Lambda Project

## Introduction
This repository contains the project I developed form scratch while taking the "Serverless with AWS Lambda" course. The project showcases various AWS Lambda functions, deployment strategies, and serverless application models that I learned through the course.

## Course Overview
The course covered a comprehensive range of topics essential for understanding and implementing serverless architectures with AWS Lambda. Here’s a brief overview of what I learned:

### Introduction to Serverless and AWS Lambda
- Basics of serverless architecture
- Setup and configuration of Lambda functions

### Lambda Events and Async Handling
- Understanding synchronous vs. asynchronous execution
- Configuring AWS event types to trigger Lambda functions

### Deployment Techniques
- Best practices for deploying Lambdas on AWS
- Utilizing AWS deployment tools and understanding Lambda settings

### Using Express with Lambda
- Implementing serverless routing using Express framework
- Handling HTTP requests and responses within a serverless environment

## Technologies Used
- AWS Lambda
- AWS API Gateway
- Node.js
- Express.js
- **Serverless Framework**: This is a crucial tool used throughout the project for deploying and managing serverless functions.

## Setup and Installation
To get this project running on your local machine, follow these steps:

### Prerequisites
- An AWS account is required to deploy and run services using AWS Lambda. If you do not have an account, sign up at [AWS Management Console](https://aws.amazon.com/console/).

### Clone the Repository
```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

### Install Dependencies
```bash
npm install
```

### Configure AWS Credentials using Serverless
This project uses the Serverless Framework to manage and deploy AWS Lambda functions. To configure AWS credentials:

1. Install the Serverless Framework globally:
   ```bash
   npm install -g serverless
   ```
2. Set up your AWS credentials to allow the Serverless Framework to deploy functions to your AWS account:
   ```bash
   serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
   ```
   This step configures your AWS access key and secret access key for use by the Serverless Framework, enabling it to deploy and manage functions on your behalf.

By following these steps, your local project environment will be fully prepared to work with AWS via the Serverless Framework, streamlining the deployment and management of serverless functions.

## What I Learned
- Configuring Lambda functions
- Deploying serverless applications
- Integration with other AWS services.