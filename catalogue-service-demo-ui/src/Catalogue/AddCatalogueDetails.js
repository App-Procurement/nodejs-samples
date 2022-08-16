import React, { useState, useEffect } from 'react';
import 'alertifyjs/build/css/alertify.css';
import '../css/Services.css';
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
let AWS = require('aws-sdk');

const data = {
    "dev": {
        "appBlocks": {
            "commonMicroservices": [],
            "generators": [],
            "workflows": []
        },
        "libraryAndSDKs": {
            "name": null
        },
        "buildDeployTemplates": {
            "name": null
        },
        "dataFlows": {
            "name": null
        },
        "isvsolutions": null
    },
    "sec": {
        "complianceRules": {
            "name": null
        },
        "compliancePolicies": {
            "name": null
        },
        "complianceAuditors": {
            "name": null
        },
        "codeSecurityTemplates": {
            "name": null
        },
        "conainerSecurityTemplates": {
            "name": null
        },
        "dataSecurityTemplates": {
            "name": null
        }
    },
    "ops": {
        "cloudDashBoards": [
            {
                "id": 1,
                "name": "AWS CloudTrail Overview",
                "description": "Overview of your AWS users, resources, network and security events, top 10 users, failed logins, resource creation and deletion",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CLOUDTRAIL",
                "jsonLocation": "s3://updated-dashboards-bucket/NewDashboards/CloudTrail/AWS CloudTrail - Overview.txt",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Overview1.png"
                ]
            },
            {
                "id": 2,
                "name": "AWS CloudTrail - User Monitoring",
                "description": "AWS users, volumes attach and detach, instance launch and termination by users",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CLOUDTRAIL",
                "jsonLocation": "s3://updated-dashboards-bucket/NewDashboards/CloudTrail/AWS CloudTrail - User Monitoring.txt",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/User-Monitoring.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/User-Monitoring1.png"
                ]
            },
            {
                "id": 3,
                "name": "AWS-CloudTrail-Network-And-Security",
                "description": "AWS CloudTrail Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "Availability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail-Network-Security",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS Cloudtrail Network & Security.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Network-and-security1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Network-and-security2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Network-and-security3.png"
                ]
            },
            {
                "id": 4,
                "name": "AWS-CloudTrail-Operations",
                "description": "AWS CloudTrail Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "Availability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS CloudTrail - Operations.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/AWS-CLOUDTRAILOPERATIONS1.png"
                ]
            },
            {
                "id": 5,
                "name": "AWS-CloudTrail-Console-Logins",
                "description": "AWS CloudTrail Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "Reliability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/Console Logins.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/AWS-CLOUDTRAIL-CONSOLE-LOGINS1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/AWS-CLOUDTRAIL-CONSOLE-LOGINS2.png"
                ]
            },
            {
                "id": 6,
                "name": "AWS-Config-Overview",
                "description": "AWS Config Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "Availability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Config",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Config/AWS Config Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Config/Overview.png"
                ]
            },
            {
                "id": 7,
                "name": "AWS-ELB-Application-Overview",
                "description": "AWS ELB Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ELB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS ELB/ALB/AWS ELB Application Load Balancer Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ELB/Application-Overview.png"
                ]
            },
            {
                "id": 8,
                "name": "AWS-ELB-Status-Code-Analysis",
                "description": "AWS ELB Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ELB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS ELB/ALB/AWS ELB Application Status Code Analysis.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ELB/STATUS-CODE-ANALYSIS.png"
                ]
            },
            {
                "id": 9,
                "name": "AWS-ELB-Request-Analysis",
                "description": "AWS ELB Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ELB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS ELB/ALB/AWS ELB - Application - Request Analysis.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ELB/Request-Analysis.png"
                ]
            },
            {
                "id": 10,
                "name": "AWS-LAMBDA-OVERVIEW",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS Lambda - Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-Overview1.png"
                ]
            },
            {
                "id": 11,
                "name": "AWS-LAMBDA-CLOUDTRAIL-EVENT-OVERVIEW",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END USER STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/LAMBDA-CLOUDTRAIL-EVENTS-OVERVIEW.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudTrail-Events-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudTrail-Events-Overview1.png"
                ]
            },
            {
                "id": 12,
                "name": "AWS-LAMBDA-Cloudwatch-Duration-And-Memory",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/Aws-lambda-cloudwatch-duration-memory.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Duration-And-Memory.png"
                ]
            },
            {
                "id": 13,
                "name": "AWS-LAMBDA-Cloudwatch-Duration-And-Memory",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/aws lambda cloudwatch durations metric.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Duration-And-Memory.png"
                ]
            },
            {
                "id": 14,
                "name": "AWS-LAMBDA-Cloudwatch-Usage",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "LAMBDA-OperationsLambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws Lambda - Cloudwatch - usage.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Usage.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Usage1.png"
                ]
            },
            {
                "id": 15,
                "name": "AWS-LAMBDA-ULM-Overview",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/lambda ulm overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview2.png"
                ]
            },
            {
                "id": 16,
                "name": "AWS-LAMBDA-ULM-Overview",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": " METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/lambda ulm overview metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview2.png"
                ]
            },
            {
                "id": 17,
                "name": "AWS-LAMBDA-ULM-Error-Analysis",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/lambda ulm error analysis metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis1.png"
                ]
            },
            {
                "id": 18,
                "name": "AWS-LAMBDA-ULM-Error-Aanlysis",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/lambda ulm error analysis logs.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis1.png"
                ]
            },
            {
                "id": 19,
                "name": "AWS-LAMBDA-ULM-Performance-Analysis",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/lambda ulm Performance analysis logs.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis1.png"
                ]
            },
            {
                "id": 20,
                "name": "AWS-LAMBDA-ULM-Performance-Analysis",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/lambda ulm Performance analysis metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis1.png"
                ]
            },
            {
                "id": 21,
                "name": "AWS-LAMBDA-ULM-Request-Analysis",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS Lambda ULM Request Analysis.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Request-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Request-Analysis1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Request-Analysis2.png"
                ]
            },
            {
                "id": 22,
                "name": "AWS-LAMBDA-ULM-Usage-Analysis",
                "description": "AWS LAMBDA Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Lambda",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Amazon Lambda ulm usage analysis.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Usage-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Usage-Analysis1.png"
                ]
            },
            {
                "id": 23,
                "name": "AWS-Secutity-Hub-Overview",
                "description": "AWS SECURITY Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Security-hub",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon Security Hub/AWS Security Hub -  Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Security-Hub/AWS- Security-Hub-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Security-Hub/AWS-Security Hub-Overview1.png"
                ]
            },
            {
                "id": 24,
                "name": "AWS-Secutity-Hub-Resource-Effected",
                "description": "AWS SECURITY Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Security-hub",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon Security Hub/Amazon Security hub resource effected.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Security-Hub/AWS-Security-Hub -Resource-Effected.png"
                ]
            },
            {
                "id": 25,
                "name": "AWS-WAF-TRAFFIC",
                "description": "AWS WAF Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "WAF-Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/AWS WAF- Traffic.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic1.png"
                ]
            },
            {
                "id": 26,
                "name": "AWS-DYNAMODB-CAPACITY-PLANNING",
                "description": "AWS DYNAMODB Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "DynamoDB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Capacity Planning.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-CapacityPlanning.png"
                ]
            },
            {
                "id": 27,
                "name": "AWS-DYNAMODB-EVENTS",
                "description": "AWS DYNAMODB Event Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "DynamoDB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-Events.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-Events1.png"
                ]
            },
            {
                "id": 28,
                "name": "AWS-DYNAMODB-LATENCY-&-ERRORS",
                "description": "AWS DYNAMODB Latency and Errors Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "DynamoDB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Latency & Errors.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/Latency-And-Errors.png"
                ]
            },
            {
                "id": 29,
                "name": "AWS-DYNAMODB-CAPACITY-PLANNING",
                "description": "AWS DYNAMODB Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "DynamoDB",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Capacity Planning.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-CapacityPlanning.png"
                ]
            },
            {
                "id": 30,
                "name": "AWS-ECS-Overview",
                "description": "AWS ECS Monitoring Overview",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ECS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Metrics/AWS ECS Overview metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview1.png"
                ]
            },
            {
                "id": 31,
                "name": "AWS-ECS-Overview",
                "description": "AWS ECS Monitoring Overview",
                "associatedDataSourceType": "AWS-PullLg-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ECS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Logs/Amazon ECS - Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview1.png"
                ]
            },
            {
                "id": 32,
                "name": "AWS-ECS-CPU-Utilization-Cluster-And-Service",
                "description": "AWS ECS Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ECS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Metrics/AWS ECS - CPU Utilization - Cluster & Service.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/CPU-Utilization-Cluster-And-Service.png"
                ]
            },
            {
                "id": 33,
                "name": "AWS-ECS-CPU-&-MEMORY-RESERVATION-CLUSTER",
                "description": "AWS ECS Operations",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ECS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Metrics/AWS ECS - CPU & Memory Reservation - Cluster.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/CPU-and-Memory-Reservation-Cluster.png"
                ]
            },
            {
                "id": 34,
                "name": "AWS-ECS-EVENTS",
                "description": "AWS ECS Events",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ECS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Logs/Amazon ECS - Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Events.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Events1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Events2.png"
                ]
            },
            {
                "id": 35,
                "name": "Amazon-ElastiCache-REDIS-ULM-EVENT-OVERVIEW",
                "description": "AWS ELASTICACHE Events Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ElastiCache",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon-Elasticache-redis-ulm-events-overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview3.png"
                ]
            },
            {
                "id": 36,
                "name": "Amazon-ElastiCache-Redis-ULM-Performance-Overview",
                "description": "AWS ElastiCache Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ElastiCache",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview2.png"
                ]
            },
            {
                "id": 37,
                "name": "Amazon ElastiCache Redis ULM-Performance Overview",
                "description": "AWS ElastiCache Redis ULM Monitoring Performance Overview",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ElastiCache-Redis",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview2.png"
                ]
            },
            {
                "id": 38,
                "name": "Amazon ElastiCache Redis ULM–Performance by Cluster",
                "description": "AWS ElastiCache Redis ULM Performance Monitoring by Cluster",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ElastiCache-Redis",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance by Cluster.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-performance-ByCluster.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-performance-ByCluster1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-performance-ByCluster2.png"
                ]
            },
            {
                "id": 39,
                "name": "Amazon ElastiCache Redis ULM–Performance by Host",
                "description": "AWS ElastiCache Redis ULM Monitoring Performance by Host",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ElastiCache-Redis",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance by Host.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceBy-host1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceBy-host2.png"
                ]
            },
            {
                "id": 40,
                "name": "Amazon ElastiCache Redis ULM – Notifications",
                "description": "AWS ElastiCache Redis ULM Monitoring Notifications",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "ElastiCache-Redis",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon-elasticache-redis-ulm-notifications.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/ElastiCache-Redis-ULM–Notifications.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/ElastiCache-Redis-ULM–Notifications1.png"
                ]
            },
            {
                "id": 41,
                "name": "Amazon GuardDuty - Overview",
                "description": "Amazon GuardDuty Monitoring Performance Overview",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GuardDuty",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GuardDuty/Amazon GuardDuty-Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Overview2.png"
                ]
            },
            {
                "id": 42,
                "name": "Amazon GuardDuty – CloudTrail Details",
                "description": "Amazon GuardDuty Monitoring CloudTrail Details",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GuardDuty",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GuardDuty/Amazon GuardDuty-CloudTrail-Details.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-CloudTrail Details1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-CloudTrail-Details.png"
                ]
            },
            {
                "id": 43,
                "name": "Amazon GuardDuty - Details(VPC,Subnet,Security Group)",
                "description": "Amazon GuardDuty Monitoring VPC,Subnet,Security Group Details",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GuardDuty",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GuardDuty/Amazon GuardDuty-Details(VPC,SUBNETS.SG).json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Details(VPC, SUBNETSecurity Group).png"
                ]
            },
            {
                "id": 44,
                "name": "Amazon Kinesis – Streams - Events",
                "description": "Amazon Kinesis Streams Monitoring Events",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "AVAILABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Kinesis",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS kinesis/Amazon Kinesis - Streams - Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Kinesis/Kinesis-Streams-Events.png"
                ]
            },
            {
                "id": 45,
                "name": "Amazon Redshift - Overview",
                "description": "Amazon Redshift Monitoring Performance Overview ",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Redshift",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - RedShift Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Overview.png"
                ]
            },
            {
                "id": 46,
                "name": "Amazon Redshift - Overview",
                "description": "Amazon Redshift Monitoring Performance Overview ",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Redshift",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - RedShift Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Overview.png"
                ]
            },
            {
                "id": 47,
                "name": "Amazon Redshift – Audit - Connection Log",
                "description": "Amazon Redshift Monitoring and Audit connection Log",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Redshift",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - Redshift - Audit - Connection Log.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Audit-Connection-Log.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Audit-connection-Log1.png"
                ]
            },
            {
                "id": 48,
                "name": "Amazon Redshift – CloudTrail Events Overview",
                "description": "Amazon Redshift Monitoring and Overview of CloudTrail Events",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Redshift",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - RedShift - CloudTrail events Overview1.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Cloudtrail-Events-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/CloudTrail-Events-Overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Cloudtrail-Events-Overview2.png"
                ]
            },
            {
                "id": 49,
                "name": "Amazon Redshift – Resource Utilization by ClusterIdentifier",
                "description": "Amazon Redshift Monitoring Resource Utilization by ClusterIdentifier ",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Redshift",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS-Redshift-Resource utilization by cluster identifier.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-ClusterIdentifier.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-ClusterIdentifier1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-ClusterIdentifier2.png"
                ]
            },
            {
                "id": 50,
                "name": "Amazon Redshift – Resource Utilization by NodeID",
                "description": "Amazon Redshift Monitoring Resource Utilization by NodeID ",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Redshift",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS-Redshift-Resource utilization by NODE ID.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID3.png"
                ]
            },
            {
                "id": 51,
                "name": "Amazon SES – CloudTrail Events Overview",
                "description": "Amazon SES Monitoring and Overview of CloudTrail Events",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SES",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon SES/Amazon SES - Cloud Trail Events Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/cloudtrail-Events-overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/cloudtrail-Events-overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/cloudtrail-Events-overview2.png"
                ]
            },
            {
                "id": 52,
                "name": "Amazon SES –CloudTrail Events by Event Name",
                "description": "Amazon SES Monitoring of CloudTrail Events by Event name",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SES",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon SES/AWS-SES-CLOUDTRAIL-EVENTS-BY-EVENTNAMES.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/CloudTrail Events by Eventname.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/CloudTrail Events by Eventname1.png"
                ]
            },
            {
                "id": 53,
                "name": "Amazon SNS - Overview",
                "description": "Amazon SNS Performance Monitoring and OverView",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SNS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/sns overview metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview1.png"
                ]
            },
            {
                "id": 54,
                "name": "Amazon SNS - Overview",
                "description": "Amazon SNS Performance Monitoring and OverView",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SNS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/sns overview logs.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview1.png"
                ]
            },
            {
                "id": 55,
                "name": "Amazon SNS – Metric by Region",
                "description": "Amazon SNS Region Monitoring by metrics",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SNS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/Amazon SNS - Metric By Region.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Metric-By-Region.png"
                ]
            },
            {
                "id": 56,
                "name": "Amazon SNS – Metric by TopicName",
                "description": "Amazon SNS TopicName Monitoring by metrics",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SNS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/Amazon SNS - Metric By TopicName.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Metric-By-TopicName.png"
                ]
            },
            {
                "id": 57,
                "name": "Amazon SNS – CloudTrail Events",
                "description": "Amazon SNS Monitoring by CloudTrail Events",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SNS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/Amazon SNS - CloudTrail Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events3.png"
                ]
            },
            {
                "id": 58,
                "name": "Amazon SNS – CloudTrail Events",
                "description": "Amazon SQS Monitoring  by CloudTrail Events",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SQS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/AWS-SQS-CloudTrail-Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events3.png"
                ]
            },
            {
                "id": 59,
                "name": "Amazon SQS – Overview",
                "description": "Amazon SQS Monitoring and Overview",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SQS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/sqs overview logs.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview1.png"
                ]
            },
            {
                "id": 60,
                "name": "Amazon SQS – Overview",
                "description": "Amazon SQS Monitoring and Overview",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SQS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/sqs overview metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview1.png"
                ]
            },
            {
                "id": 61,
                "name": "Amazon SQS by QueueName",
                "description": "Amazon SQS Monitoring by QueueName",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "AVAILABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SQS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/AWS-SQS-QueueName.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-QueueName.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-QueueName1.png"
                ]
            },
            {
                "id": 62,
                "name": "Amazon SQS by Region",
                "description": "Amazon SQS Monitoring by Region",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "AVAILABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "SQS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/AWS-SQS-By-Region.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-Region.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-Region1.png"
                ]
            },
            {
                "id": 63,
                "name": "Amazon VPC Flow Logs - Overview",
                "description": "Amazon VPC Flow Logs Monitoring and OverView",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "VPC",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Flow-logs-overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Flow-logs-overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Flow-logs-overview1.png"
                ]
            },
            {
                "id": 64,
                "name": "Amazon VPC Flow Logs - Traffic",
                "description": "Amazon VPC Flow Logs Monitoring Traffic",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "VPC",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Traffic.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/flowLogs-Traffic.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/flowLogs-Traffic1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/flowLogs-Traffic2.png"
                ]
            },
            {
                "id": 65,
                "name": "Amazon VPC Flow Logs - Accepts",
                "description": "Amazon VPC Flow Logs Monitoring by Accepts",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "VPC",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Accepts.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Accepted-flowLogs.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Accepted-flowLogs1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Accepted-flowLogs2.png"
                ]
            },
            {
                "id": 66,
                "name": "Amazon VPC Flow Logs - Rejects",
                "description": "Amazon VPC Flow Logs Monitoring by Rejects",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "VPC",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Rejects.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/FlowLogs-Rejects.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/FlowLogs-Rejects1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/FlowLogs-Rejects2.png"
                ]
            },
            {
                "id": 67,
                "name": "CIS AWS Monitoring – Access & Authentication",
                "description": "CIS AWS Monitoring Access & Authentication",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CIS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CIS AWS Monitoring- Access & Authentication/CIS AWS Monitoring – Access & Authentication.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CIS/Monitoring-Access-and-Authentication.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CIS/Monitoring-Access-and-Authentication1.png"
                ]
            },
            {
                "id": 68,
                "name": "CIS AWS Monitoring – Change Control",
                "description": "CIS AWS Monitoring Change Control",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CIS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CIS AWS Monitoring- Access & Authentication/CIS AWS Monitoring - Change Control.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CIS/Monitoring -Control-Change.png"
                ]
            },
            {
                "id": 69,
                "name": "GI GuardDuty – Global Baseline",
                "description": "GI GuardDuty Monitoring Global Baseline",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GI-GuardDuty",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI GuardDuty/GI GuardDuty Global Baseline.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-GlobalBaseline.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-GlobalBaseline1.png"
                ]
            },
            {
                "id": 70,
                "name": "GI GuardDuty – Findings Analysis",
                "description": "GI GuardDuty Monitoring and Findings Analysis",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GI-GuardDuty",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI GuardDuty/GI GuardDuty Finding Analysis.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis1.png"
                ]
            },
            {
                "id": 71,
                "name": "GI GuardDuty – Findings Analysis(1)",
                "description": "GI GuardDuty Monitoring and Findings Analysis",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GI-GuardDuty",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI GuardDuty/GI GuardDuty Finding Analysis(1).json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis1.png"
                ]
            },
            {
                "id": 72,
                "name": "GI CloudTrail – Tactics & Techniques",
                "description": "GI CloudTrail Monitoring Tactics & Techniques",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GI-CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI CloudTrail/GI CloudTrail Tactic and Techniques.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-Tactics-and-Techniques.png"
                ]
            },
            {
                "id": 73,
                "name": "GI CloudTrail – Action Plan",
                "description": "GI CloudTrail Monitoring by Action Plan",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GI-CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI CloudTrail/GI CloudTrail Action Plan.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan3.png"
                ]
            },
            {
                "id": 74,
                "name": "GI CloudTrail – Action Plan(1)",
                "description": "GI CloudTrail Monitoring by Action Plan",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "GI-CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI CloudTrail/GI CloudTrail Action Plan(1).json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan3.png"
                ]
            },
            {
                "id": 75,
                "name": "AWS CloudTrail - Access Monitoring",
                "description": "CloudTrail - Access Monitoring Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail - Access Monitoring.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Access-Monitoring1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Access-Monitoring2.png"
                ]
            },
            {
                "id": 76,
                "name": "AWS CloudTrail - Account, System Monitoring",
                "description": "CloudTrail - Account & System Monitoring Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail - Account , System Monitoring.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Account-System-Monitoring.png"
                ]
            },
            {
                "id": 77,
                "name": "AWS CloudTrail -Privileged Activity",
                "description": "CloudTrail -Privileged Activity Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail -Privileged Activity.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Account-Privileged Activity.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Account-Privileged-Activity1.png"
                ]
            },
            {
                "id": 78,
                "name": "AWS CloudTrail -Login Activity",
                "description": "CloudTrail -Login Activity Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail -Login Activity.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Login-Activity.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Login-Activity1.png"
                ]
            },
            {
                "id": 79,
                "name": "AWS WAF - Overview",
                "description": "WAF MonitOring Overview",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "WAF",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf overview logs.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview1.png"
                ]
            },
            {
                "id": 80,
                "name": "AWS WAF - Overview",
                "description": "WAF Monitering Overview",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "WAF",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf overview metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview1.png"
                ]
            },
            {
                "id": 81,
                "name": "AWS WAF - Security Analytics Traffic",
                "description": "WAF - Security Analytics Traffic Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "WAF",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf-security-analysis-traffic.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic1.png"
                ]
            },
            {
                "id": 82,
                "name": "AWS WAF - Security Monitoring Overview",
                "description": "WAF - Security Monitoring Overview Operations",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "WAF",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf-security-monitoring.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Monitoring-Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Monitoring-Overview1.png"
                ]
            },
            {
                "id": 83,
                "name": "EC2-Overview",
                "description": "EC2 Monitoring Overview",
                "associatedDataSourceType": "Aws-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Ec2",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/EC2 Instance Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/EC2-Overview.png"
                ]
            },
            {
                "id": 84,
                "name": "EC2-AMI-And-Ip's",
                "description": "EC2 Monitoring AMI And Ip's",
                "associatedDataSourceType": "Aws-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Ec2",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/EC2-AMI-And-Ip's.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/EC2-AMI-And-Ip's.png"
                ]
            },
            {
                "id": 85,
                "name": "EC2-Target And Security Group",
                "description": "EC2 Monitoring Target And Security Group",
                "associatedDataSourceType": "Aws-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Ec2",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/EC2-Target-Security Group.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/Target-And-Security-Group.png"
                ]
            },
            {
                "id": 86,
                "name": "EC2-CPU-utilization-by-instance-and-Auto-scaling",
                "description": "EC2 Monitoring CPU utilization by instance and Auto scaling",
                "associatedDataSourceType": "Aws-MetricLog-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Ec2",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/CPU-utilization-by-instance-and-Auto-scaling.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/CPU-Utilization-Instance-Auto-scaling-group-name.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/CPU-Utilization-Instance-Auto-scaling-group-name1.png"
                ]
            },
            {
                "id": 87,
                "name": "EC2-Disk-read-writes",
                "description": "EC2 Monitoring Disk read writes",
                "associatedDataSourceType": "Aws-MetricLog-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Ec2",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/Disk-read-writes.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/Disk-read-writes-by-instanceID.png"
                ]
            },
            {
                "id": 88,
                "name": "EC2-network-packets-in-out",
                "description": "EC2 network packets in and out",
                "associatedDataSourceType": "Aws-MetricLog-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Ec2",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/network-packets-in-out.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/Network-packets-in-and-out.png"
                ]
            },
            {
                "id": 89,
                "name": "API-Gateway-Overview",
                "description": "API Gateway Overview",
                "associatedDataSourceType": "Aws-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "API",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/API Gateway/overiew.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/API-Gateway/Overview.png"
                ]
            },
            {
                "id": 90,
                "name": "API-Audit-Events",
                "description": "API Audit Events",
                "associatedDataSourceType": "Aws-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "API",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/API Gateway/Audit-events.json",
                "images": [
                    "https://synectiks-monitoring-dashboards.s3.amazonaws.com/AWS+Dashboards/API+Gateway/Audit-events.json"
                ]
            },
            {
                "id": 91,
                "name": "API-Gateway-4xx-5xx-Errors",
                "description": "API Gateway 4xx and 5xx Errors",
                "associatedDataSourceType": "Aws-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "API",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/API Gateway/4xx-5xx-errors.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/API-Gateway/4xx-5xx-Errors.png"
                ]
            },
            {
                "id": 92,
                "name": "API-Gateway-Enhanced-Monitoring",
                "description": "API Gateway Enhanced Monitoring",
                "associatedDataSourceType": "Aws-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "API",
                "jsonLocation": "s3://syn-monitoring-images/AWS-Images/API-Gateway/Enhanced-Monitoring.png",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/API-Gateway/Enhanced-Monitoring.png"
                ]
            },
            {
                "id": 93,
                "name": "RDS-Aurora-Generic",
                "description": "RDS Aurora Generic",
                "associatedDataSourceType": "Aws-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "RDS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/aurora-generic.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic+2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic3.png"
                ]
            },
            {
                "id": 94,
                "name": "RDS-CloudTrail-Audit-Events",
                "description": "RDS-CloudTrail-Audit-Events",
                "associatedDataSourceType": "Aws-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "RDS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/Cloudtrail-Audit-events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Cloudtrail-audit-events.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Cloudtrail-audit-events1.png"
                ]
            },
            {
                "id": 95,
                "name": "RDS Overview by DataBase Instance",
                "description": "RDS-Overview-By-DataBase-Instance",
                "associatedDataSourceType": "Aws-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "RDS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/overview-database-instance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview-by-DB-instance.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview-by-DB-instance1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview-by-DB-instance2.png"
                ]
            },
            {
                "id": 96,
                "name": "RDS Overview",
                "description": "RDS-Overview",
                "associatedDataSourceType": "Aws-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "RDS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/overview-database-instance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview2.png"
                ]
            },
            {
                "id": 97,
                "name": "RDS-CloudTrail-Non-Describe-Audit-Events",
                "description": "RDS-CloudTrail-Non-Describe-Audit-Events",
                "associatedDataSourceType": "Aws-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "RDS",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/NonDescribe-CloudTrail-Audit.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Describe-CloudTrail-Audit-Events.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Describe-CloudTrail-Audit-Events1.png"
                ]
            },
            {
                "id": 98,
                "name": "Cloudfront-Metrics",
                "description": "Cloudfront Metrics Overview",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "METRIC",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Cloudfront",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Cloudfront/Cloud Front Metrics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/metrics.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/metrics1.png"
                ]
            },
            {
                "id": 99,
                "name": "Cloudfront-overview-visitor-statistics",
                "description": "Cloudfront overview of visitor statistics",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Cloudfront",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Cloudfront/cloud front - overview, visitor statistics.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/overview-visitor-statistics.png"
                ]
            },
            {
                "id": 100,
                "name": "Cloudfront-Web-Operations",
                "description": "Cloudfront Web Operations Overview",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "LOG",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "Cloudfront",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Cloudfront/Cloud Front Web Operations.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/web-operations.png"
                ]
            },
            {
                "id": 101,
                "name": "DynamoDB Performance",
                "description": "Performance Analytics for DynamoDB",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/DynamoDB/Performance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/Performance.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/Performance2.png"
                ]
            },
            {
                "id": 102,
                "name": "DynamoDB Reliability",
                "description": "Reliability Analytics for DynamoDB",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "RELIABILITY",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/DynamoDB/Reliability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/Reliability.png"
                ]
            },
            {
                "id": 103,
                "name": "DynamoDB End User Stats",
                "description": "End User Analytics for DynamoDB",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "END USER STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/DynamoDB/End User Stats.JSON",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/End-User-Stats.png"
                ]
            },
            {
                "id": 104,
                "name": "API Gateway Performance",
                "description": "Performance Analytics for API Gateway",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/API Gateway/Performance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/api-gateway/Performance.png"
                ]
            },
            {
                "id": 105,
                "name": "API Gateway End User Stats",
                "description": "End User Analytics for API Gateway",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "END-USER-STATS",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/API Gateway/End-user Stats.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/api-gateway/End-User-Stats.png"
                ]
            },
            {
                "id": 106,
                "name": "API Gateway Reliability",
                "description": "Reliability Analytics for API Gateway",
                "associatedDataSourceType": "AWS-PullMetric-Api",
                "associatedDataType": "Metric",
                "associatedSLAType": "Reliability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/api-gateway/Reliability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/api-gateway/Reliability.png"
                ]
            },
            {
                "id": 107,
                "name": "CloudFront Reliability",
                "description": "Reliability Analytics for CloudFront",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "Reliability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/CloudFront/Reliability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/cloudfront/Reliability.png"
                ]
            },
            {
                "id": 108,
                "name": "CloudFront End User Stats",
                "description": "End User Analytics for CloudFront",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "END-USER",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/CloudFront/End User.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/cloudfront/End-User-Stats.png"
                ]
            },
            {
                "id": 109,
                "name": "CloudFront Performance",
                "description": "Performance Analytics for CloudFront",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/CloudFront/Performance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/cloudfront/Performance.png"
                ]
            },
            {
                "id": 110,
                "name": "S3 Performance",
                "description": "Performance for s3",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/S3/Performance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/s3/Performance.png"
                ]
            },
            {
                "id": 111,
                "name": "S3 Reliability",
                "description": "Reliability Analytics for s3",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "Reliability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/S3/Reliability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/s3/Reliability.png"
                ]
            },
            {
                "id": 112,
                "name": "S3 Availability",
                "description": "Availability Analytics for s3",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "Availability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/S3/Availability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/s3/Availability.png"
                ]
            },
            {
                "id": 113,
                "name": "Lambda Availability",
                "description": "Availability Analytics for Lambda",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "Availability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/Availability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Availability.png"
                ]
            },
            {
                "id": 114,
                "name": "Lambda Performance",
                "description": "Performance Analytics for Lambda",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/Performance.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Performance.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Performance.png"
                ]
            },
            {
                "id": 115,
                "name": "Lambda End User Stats",
                "description": "End User Analytics for Lambda",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "END-USER",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/End User.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/End-User-Stats.png"
                ]
            },
            {
                "id": 116,
                "name": "Lambda Reliability",
                "description": "Reliability Analytics for Lambda",
                "associatedDataSourceType": "AWS-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "Reliability",
                "associatedCloud": "AWS",
                "associatedCloudElementType": "CloudTrail",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/Reliability.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Reliability.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Reliability2.png"
                ]
            },
            {
                "id": 1,
                "name": "Azure Active Directory - Overview",
                "description": "Azure Active Directory Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory-Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Overview.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Overview1.png"
                ]
            },
            {
                "id": 2,
                "name": "Azure Active Directory - Application Management",
                "description": "Azure Active Directory Applicaion Management Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory-Application Management Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Application Management.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Application-management.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Application-management1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Application-management2.png"
                ]
            },
            {
                "id": 3,
                "name": "Azure Active Directory -  Authorization/Authentication",
                "description": "Azure Active Directory Applicaion Management Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory-Application Management Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Authorization, Authentication.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Authorization-Authentication.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Authorization-Authentication1.png"
                ]
            },
            {
                "id": 4,
                "name": "Azure Active Directiory - Directory Management",
                "description": "Azure Active Directory management Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory Management Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Directory Management.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Directory-Management.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Directory-Management1.png"
                ]
            },
            {
                "id": 5,
                "name": "Azure Active Directory - Failure Sign-in Events ",
                "description": "Azure Active Directory Failed Sign-in Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory Failed Sign-in Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory -- Failure Sign_In Events.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Failure-SignIns.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Failure-SignIns1.png"
                ]
            },
            {
                "id": 6,
                "name": "Azure Active Directory - Successful  Sign-in Events ",
                "description": "Azure Active Directory Success Sign-in Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory Success Sign-in Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Success Sign-Ins.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Successful-SignIns.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Successful-SignIns1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Successful-SignIns2.png"
                ]
            },
            {
                "id": 7,
                "name": "Azure Audit - Overview",
                "description": "Azure Audit - Overview- Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure Audit - Overview",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Audit/Azure Audit - OverView.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/overview.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/overview1.png"
                ]
            },
            {
                "id": 8,
                "name": "Azure Audit Resource usage",
                "description": "Azure Audit Resource usage - Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure Audit - Resource Usasge",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Audit/Azure Audit - Resource Usage.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/resource-usage.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/resource-usage1.png"
                ]
            },
            {
                "id": 9,
                "name": "Azure SQL – Blocking Stats",
                "description": " SQL – Blocking Stats - Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure SQL – Blocking Stats",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL-Blocking Stats.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Blocking-Stats.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Blocking-Stats1.png"
                ]
            },
            {
                "id": 10,
                "name": "Azure SQL –Errors",
                "description": " SQL – Errors - Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure SQL – Errors",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL Errors.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Errors.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Errors1.png"
                ]
            },
            {
                "id": 11,
                "name": "Azure SQL – QueryStoreRuntime Stats",
                "description": "SQL – QueryStoreRuntime Stats  Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure SQL – QueryStoreRuntime Stats",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL - Query StoreRuntime Stats.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats1.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats2.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats3.png"
                ]
            },
            {
                "id": 12,
                "name": "Azure SQL – QueryStoreWait Stats",
                "description": "Azure SQL – QueryStoreWait Stats  Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure SQL – QueryStoreRuntime",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL-Query Store Wait Stats.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/QueryWait-Stats.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/QueryWait-Stats1.png"
                ]
            },
            {
                "id": 13,
                "name": "Azure SQL – Timeouts",
                "description": "Azure SQL – Timeouts  Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Azure SQL – Timeouts",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL TimeOuts.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Timeouts.png"
                ]
            },
            {
                "id": 14,
                "name": "Office 365 – SharePoint – Content Insight",
                "description": "Office 365 – SharePoint – Content Insight Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Office 365",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Office 365/Office 365 – SharePoint – Shared Content Non – Domain Activities.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Content-insight.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Content-insight1.png"
                ]
            },
            {
                "id": 15,
                "name": "Office 365 – SharePoint – Shared Content Non-Domain Activities",
                "description": "Office 365 – SharePoint – Shared Content Non-Domain Activities Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Office 365",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Office 365/Office 365 – SharePoint – Shared Content Non – Domain Activities.json",
                "images": [
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Domain-Activities.png",
                    "https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Domain-Activities1.png"
                ]
            }
        ],
        "dataSources": [
            {
                "id": 1,
                "name": "AWS-PullMetric-Api",
                "description": "Pull AWS metrics with Cloud API",
                "Type": "PullApi",
                "DataType": "METRIC",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "AppKubeMain",
                "associatedTargetDs": "NA"
            },
            {
                "id": 2,
                "name": "AWS-PullLogs-Api",
                "description": "Pull AWS Logs with Cloud API",
                "Type": "PullApi",
                "DataType": "LOG",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "AppKubeMain",
                "associatedTargetDs": "NA"
            },
            {
                "id": 3,
                "name": "AWS-PullLogs-Local",
                "description": "Receive AWS Logs and Store in Local ES",
                "Type": "ReceiveAndStoreLogs",
                "DataType": "LOG",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "LogManager",
                "associatedTargetDsType": "ES"
            },
            {
                "id": 4,
                "name": "AWS-StoreTrace-Local",
                "description": "Receive Traces and Store in Local Zipkin DB",
                "Type": "ReceiveAndStoreTrace",
                "DataType": "Trace",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "TraceManager",
                "associatedTargetDsType": "Zipkin"
            },
            {
                "id": 4,
                "name": "Azure-PullMetric-Api",
                "description": "Pull Azure metrics with Cloud API",
                "Type": "PullApi",
                "DataType": "METRIC",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "Azure",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "AppKubeMain",
                "associatedTargetDs": "NA"
            },
            {
                "id": 5,
                "name": "Azure-PullLogs-Api",
                "description": "Pull Azure Logs with Cloud API",
                "Type": "PullApi",
                "DataType": "LOG",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "Azure",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "AppKubeMain",
                "associatedTargetDs": "NA"
            },
            {
                "id": 6,
                "name": "Azure-PullLogs-Local",
                "description": "Receive Azure Logs and Store in Local ES",
                "Type": "ReceiveAndStoreLogs",
                "DataType": "LOG",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "Azure",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "LogManager",
                "associatedTargetDsType": "ES"
            },
            {
                "id": 7,
                "name": "Azure-StoreTrace-Local",
                "description": "Receive Traces and Store in Local Zipkin DB",
                "Type": "ReceiveAndStoreTrace",
                "DataType": "Trace",
                "associatedWorkflowTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault",
                "associatedApplicationLocation": "TraceManager",
                "associatedTargetDsType": "Zipkin"
            },
            {
                "id": 8,
                "name": "Azure Active Directory - Overview",
                "description": "Azure Active Directory Operations",
                "associatedDataSourceType": "Azure-PullLog-Api",
                "associatedDataType": "Log",
                "associatedSLAType": "PERFORMANCE",
                "associatedCloud": "Azure",
                "associatedCloudElementType": "Active Directory-Operations",
                "jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Overview.json"
            }
        ],
        "provisioningTemplates": [
            {
                "id": 1,
                "name": "AWS-Landing-Zone",
                "description": "Create AWS Accounts with Best Practices",
                "Type": "LandingZone",
                "actOn": "MainProduct",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault"
            },
            {
                "id": 2,
                "name": "Azure-Landing-Zone",
                "description": "Create Azure Account and Subscription with Best Practices",
                "Type": "LandingZone",
                "actOn": "MainProduct",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Azure",
                "associatedCreds": "Vault"
            },
            {
                "id": 3,
                "name": "Google-Landing-Zone",
                "description": "Create Google Project with Best Practices",
                "Type": "LandingZone",
                "actOn": "MainProduct",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Google",
                "associatedCreds": "Vault"
            },
            {
                "id": 4,
                "name": "AWS-Product-Enclave",
                "description": "Create AWS VPC/Gateway/Firewall Services",
                "Type": "ProductEnclave",
                "actOn": "LandingZone",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault"
            },
            {
                "id": 5,
                "name": "Azure-Product-Enclave",
                "description": "Create Azure VPC/Gateway/Firewall Services",
                "Type": "ProductEnclave",
                "actOn": "LandingZone",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Azure",
                "associatedCreds": "Vault"
            },
            {
                "id": 6,
                "name": "Google-Product-Enclave",
                "description": "Create Google VPC/Gateway/Firewall Services",
                "Type": "ProductEnclave",
                "actOn": "LandingZone",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Google",
                "associatedCreds": "Vault"
            },
            {
                "id": 7,
                "name": "AWS-Product-Cluster",
                "description": "Create EKS k8 cluster with best practices",
                "Type": "ProductCluster",
                "actOn": "ProductEnclave",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "AWS",
                "associatedCreds": "Vault"
            },
            {
                "id": 8,
                "name": "Azure-Product-Cluster",
                "description": "Create Azure AKS k8 cluster with best practices",
                "Type": "ProductCluster",
                "actOn": "ProductEnclave",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Azure",
                "associatedCreds": "Vault"
            },
            {
                "id": 9,
                "name": "Google-Product-Cluster",
                "description": "Create Google k8 cluster with best practices",
                "Type": "ProductCluster",
                "actOn": "ProductEnclave",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Google",
                "associatedCreds": "Vault"
            },
            {
                "id": 10,
                "name": "Common-Service-File-Repo",
                "description": "Provision Filerepo Common Services",
                "Type": "CommonService",
                "actOn": "ProductEnclave",
                "associatedSpecsTemplate": "s3://...",
                "associatedCloud": "Google",
                "associatedCreds": "Vault"
            }
        ],
        "alertRules": {},
        "workflows": {
            "name": null
        },
        "collectors": {
            "name": null
        },
        "diagonostics": {
            "name": null
        },
        "kubeOperators": {
            "name": null
        }
    }
}

const AddServiceDetails = () => {

    const credentials = {
        region: 'us-east-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }
    const lambda = new AWS.Lambda(credentials);
    const [input, setInput] = useState('');
    const [viewInput, setViewInput] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied1, setIsCopied1] = useState(false);
    function addJsonCatalogue() {
        var addServiceCatalogue = {
            FunctionName: 'aws-node-http-api-project-dev-add_catalogues_details',
            Payload: input
        };
        lambda.invoke(addServiceCatalogue, function (err, data) {
            if (err) {
                console.log(err, err.stack);
            }
            else {
                console.log("from add input", data);
                setViewInput(JSON.parse(data.Payload));
            }
        });
    }
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const onCopyText1 = () => {
        setIsCopied1(true);
        setTimeout(() => {
            setIsCopied1(false);
        }, 1000);
    };
    function PrettyPrint() {
        const a = JSON.parse(input);
        setInput(JSON.stringify(a, null, 2))
    }
    return (
        <>
            <center>
                <hr size="3" noshade />
                <h2>
                    Catalogue-Details
                </h2>
                <hr size="3" noshade />
            </center>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Demo</h5>
                            <div style={{ paddingLeft: "6px" }}>
                                <CopyToClipboard text={JSON.stringify(data)} onCopy={onCopyText}>
                                    <span>{isCopied ? "Copied!" : <a href=''> <MdContentCopy /></a>}</span>
                                </CopyToClipboard>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="scrollbar" id="style-default">
                            <div class="force-overflow">
                                <div class="modal-body">
                                    <pre>{JSON.stringify(data, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">CLose</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='myclass'>
                <a type="button" href='http://localhost:3000/CatalogueDetails' class="btn btn-light">Go Back</a>
                <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Catalogue Details Demo</a>
            </div>

            <div className='d-flex justify-content-around'>
                <div className='d-flex flex-column myBox' style={{ width: "600px" }}>
                    <h6>Add Catalogue_Details</h6>
                    <textarea className='form-control' value={input} onChange={e => setInput(e.target.value)} style={{ height: "300px", fontSize: "10px" }} placeholder="Input Here" />
                    <div className='d-flex'>
                        <button className='btn btn-info m-2 mt-3' style={{ width: "50%" }} onClick={addJsonCatalogue}>Add Input</button>
                        <button className='btn btn-warning m-2 mt-3' style={{ width: "50%" }} onClick={PrettyPrint}>Formate Input</button>
                    </div>
                </div>

                <div className='d-flex flex-column myBox' style={{ width: "800px" }}>
                    <h4>Output:</h4>
                    <div style={{ marginLeft: "95%", marginTop: "-40px" }}>
                        <CopyToClipboard text={JSON.stringify(viewInput)} onCopy={onCopyText1}>
                            <span>{isCopied1 ? "Copied!" : <a href='#'> <MdContentCopy /></a>}</span>
                        </CopyToClipboard>
                    </div>
                    <hr />
                    <div class="scrollbar" id="style-default">
                        <div class="force-overflow">
                            <div class="modal-body">
                                <pre>{JSON.stringify(viewInput, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default AddServiceDetails