
[GO Back](../../catalogue-service.md)

# Response 
```json
        {
			"dev": {
				"appBlocks": {
				"workflows": [],
				"generators": [],
				"commonMicroservices": []
				},
				"dataFlows": {
				"name": null
				},
				"isvsolutions": null,
				"libraryAndSDKs": {
				"name": null
				},
				"buildDeployTemplates": {
				"name": null
				}
			},
			"ops": {
				"workflows": {
				"name": null
				},
				"alertRules": {},
				"collectors": {
				"name": null
				},
				"dataSources": [
				{
					"id": 1,
					"Type": "PullApi",
					"name": "AWS-PullMetric-Api",
					"DataType": "METRIC",
					"description": "Pull AWS metrics with Cloud API",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedTargetDs": "NA",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "AppKubeMain"
				},
				{
					"id": 2,
					"Type": "PullApi",
					"name": "AWS-PullLogs-Api",
					"DataType": "LOG",
					"description": "Pull AWS Logs with Cloud API",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedTargetDs": "NA",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "AppKubeMain"
				},
				{
					"id": 3,
					"Type": "ReceiveAndStoreLogs",
					"name": "AWS-PullLogs-Local",
					"DataType": "LOG",
					"description": "Receive AWS Logs and Store in Local ES",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedTargetDsType": "ES",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "LogManager"
				},
				{
					"id": 4,
					"Type": "ReceiveAndStoreTrace",
					"name": "AWS-StoreTrace-Local",
					"DataType": "Trace",
					"description": "Receive Traces and Store in Local Zipkin DB",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedTargetDsType": "Zipkin",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "TraceManager"
				},
				{
					"id": 4,
					"Type": "PullApi",
					"name": "Azure-PullMetric-Api",
					"DataType": "METRIC",
					"description": "Pull Azure metrics with Cloud API",
					"associatedCloud": "Azure",
					"associatedCreds": "Vault",
					"associatedTargetDs": "NA",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "AppKubeMain"
				},
				{
					"id": 5,
					"Type": "PullApi",
					"name": "Azure-PullLogs-Api",
					"DataType": "LOG",
					"description": "Pull Azure Logs with Cloud API",
					"associatedCloud": "Azure",
					"associatedCreds": "Vault",
					"associatedTargetDs": "NA",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "AppKubeMain"
				},
				{
					"id": 6,
					"Type": "ReceiveAndStoreLogs",
					"name": "Azure-PullLogs-Local",
					"DataType": "LOG",
					"description": "Receive Azure Logs and Store in Local ES",
					"associatedCloud": "Azure",
					"associatedCreds": "Vault",
					"associatedTargetDsType": "ES",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "LogManager"
				},
				{
					"id": 7,
					"Type": "ReceiveAndStoreTrace",
					"name": "Azure-StoreTrace-Local",
					"DataType": "Trace",
					"description": "Receive Traces and Store in Local Zipkin DB",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedTargetDsType": "Zipkin",
					"associatedWorkflowTemplate": "s3://...",
					"associatedApplicationLocation": "TraceManager"
				},
				{
					"id": 8,
					"name": "Azure Active Directory - Overview",
					"description": "Azure Active Directory Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Overview.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory-Operations"
				}
				],
				"diagonostics": {
				"name": null
				},
				"kubeOperators": {
				"name": null
				},
				"cloudDashBoards": [
				{
					"id": 1,
					"name": "AWS CloudTrail Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Overview1.png"
					],
					"description": "Overview of your AWS users, resources, network and security events, top 10 users, failed logins, resource creation and deletion",
					"jsonLocation": "s3://updated-dashboards-bucket/NewDashboards/CloudTrail/AWS CloudTrail - Overview.txt",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CLOUDTRAIL",
					"key1": "value1"
				},
				{
					"id": 2,
					"name": "AWS CloudTrail - User Monitoring",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/User-Monitoring.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/User-Monitoring1.png"
					],
					"description": "AWS users, volumes attach and detach, instance launch and termination by users",
					"jsonLocation": "s3://updated-dashboards-bucket/NewDashboards/CloudTrail/AWS CloudTrail - User Monitoring.txt",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CLOUDTRAIL",
					"key1": "value1"
				},
				{
					"id": 3,
					"name": "AWS-CloudTrail-Network-And-Security",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Network-and-security1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Network-and-security2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Network-and-security3.png"
					],
					"description": "AWS CloudTrail Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS Cloudtrail Network & Security.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Availability",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail-Network-Security",
					"key1": "value1"
				},
				{
					"id": 4,
					"name": "AWS-CloudTrail-Operations",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/AWS-CLOUDTRAILOPERATIONS1.png"
					],
					"description": "AWS CloudTrail Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS CloudTrail - Operations.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Availability",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 5,
					"name": "AWS-CloudTrail-Console-Logins",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/AWS-CLOUDTRAIL-CONSOLE-LOGINS1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/AWS-CLOUDTRAIL-CONSOLE-LOGINS2.png"
					],
					"description": "AWS CloudTrail Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/Console Logins.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Reliability",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 6,
					"name": "AWS-Config-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Config/Overview.png"
					],
					"description": "AWS Config Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Config/AWS Config Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Availability",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Config",
					"key1": "value1"
				},
				{
					"id": 7,
					"name": "AWS-ELB-Application-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ELB/Application-Overview.png"
					],
					"description": "AWS ELB Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS ELB/ALB/AWS ELB Application Load Balancer Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ELB",
					"key1": "value1"
				},
				{
					"id": 8,
					"name": "AWS-ELB-Status-Code-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ELB/STATUS-CODE-ANALYSIS.png"
					],
					"description": "AWS ELB Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS ELB/ALB/AWS ELB Application Status Code Analysis.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ELB",
					"key1": "value1"
				},
				{
					"id": 9,
					"name": "AWS-ELB-Request-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ELB/Request-Analysis.png"
					],
					"description": "AWS ELB Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS ELB/ALB/AWS ELB - Application - Request Analysis.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ELB",
					"key1": "value1"
				},
				{
					"id": 10,
					"name": "AWS-LAMBDA-OVERVIEW",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-Overview1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS Lambda - Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 11,
					"name": "AWS-LAMBDA-CLOUDTRAIL-EVENT-OVERVIEW",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudTrail-Events-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudTrail-Events-Overview1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/LAMBDA-CLOUDTRAIL-EVENTS-OVERVIEW.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END USER STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 12,
					"name": "AWS-LAMBDA-Cloudwatch-Duration-And-Memory",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Duration-And-Memory.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/Aws-lambda-cloudwatch-duration-memory.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 13,
					"name": "AWS-LAMBDA-Cloudwatch-Duration-And-Memory",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Duration-And-Memory.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/aws lambda cloudwatch durations metric.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 14,
					"name": "AWS-LAMBDA-Cloudwatch-Usage",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Usage.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/CloudWatch-Usage1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws Lambda - Cloudwatch - usage.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "LAMBDA-OperationsLambda",
					"key1": "value1"
				},
				{
					"id": 15,
					"name": "AWS-LAMBDA-ULM-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview2.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/lambda ulm overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 16,
					"name": "AWS-LAMBDA-ULM-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Overview2.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/lambda ulm overview metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": " METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 17,
					"name": "AWS-LAMBDA-ULM-Error-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/lambda ulm error analysis metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 18,
					"name": "AWS-LAMBDA-ULM-Error-Aanlysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Error-Analysis1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/lambda ulm error analysis logs.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 19,
					"name": "AWS-LAMBDA-ULM-Performance-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Aws-lambda logs/lambda ulm Performance analysis logs.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 20,
					"name": "AWS-LAMBDA-ULM-Performance-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Performance-Analysis1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS-LAMBDA-METRICS/lambda ulm Performance analysis metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 21,
					"name": "AWS-LAMBDA-ULM-Request-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Request-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Request-Analysis1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Request-Analysis2.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/AWS Lambda ULM Request Analysis.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 22,
					"name": "AWS-LAMBDA-ULM-Usage-Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Usage-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Lambda/Lambda-ULM-Usage-Analysis1.png"
					],
					"description": "AWS LAMBDA Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Lambda/Amazon Lambda ulm usage analysis.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Lambda",
					"key1": "value1"
				},
				{
					"id": 23,
					"name": "AWS-Secutity-Hub-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Security-Hub/AWS- Security-Hub-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Security-Hub/AWS-Security Hub-Overview1.png"
					],
					"description": "AWS SECURITY Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon Security Hub/AWS Security Hub -  Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Security-hub",
					"key1": "value1"
				},
				{
					"id": 24,
					"name": "AWS-Secutity-Hub-Resource-Effected",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Security-Hub/AWS-Security-Hub -Resource-Effected.png"
					],
					"description": "AWS SECURITY Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon Security Hub/Amazon Security hub resource effected.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Security-hub",
					"key1": "value1"
				},
				{
					"id": 25,
					"name": "AWS-WAF-TRAFFIC",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic1.png"
					],
					"description": "AWS WAF Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/AWS WAF- Traffic.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "WAF-Operations",
					"key1": "value1"
				},
				{
					"id": 26,
					"name": "AWS-DYNAMODB-CAPACITY-PLANNING",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-CapacityPlanning.png"
					],
					"description": "AWS DYNAMODB Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Capacity Planning.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "DynamoDB",
					"key1": "value1"
				},
				{
					"id": 27,
					"name": "AWS-DYNAMODB-EVENTS",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-Events.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-Events1.png"
					],
					"description": "AWS DYNAMODB Event Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "DynamoDB",
					"key1": "value1"
				},
				{
					"id": 28,
					"name": "AWS-DYNAMODB-LATENCY-&-ERRORS",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/Latency-And-Errors.png"
					],
					"description": "AWS DYNAMODB Latency and Errors Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Latency & Errors.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "DynamoDB",
					"key1": "value1"
				},
				{
					"id": 29,
					"name": "AWS-DYNAMODB-CAPACITY-PLANNING",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/DynamoDB/DynamoDB-CapacityPlanning.png"
					],
					"description": "AWS DYNAMODB Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS DynamoDb/Amazon DynamoDB - Capacity Planning.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "DynamoDB",
					"key1": "value1"
				},
				{
					"id": 30,
					"name": "AWS-ECS-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview1.png"
					],
					"description": "AWS ECS Monitoring Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Metrics/AWS ECS Overview metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "ECS",
					"key1": "value1"
				},
				{
					"id": 31,
					"name": "AWS-ECS-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Overview1.png"
					],
					"description": "AWS ECS Monitoring Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Logs/Amazon ECS - Events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLg-Api",
					"associatedCloudElementType": "ECS",
					"key1": "value1"
				},
				{
					"id": 32,
					"name": "AWS-ECS-CPU-Utilization-Cluster-And-Service",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/CPU-Utilization-Cluster-And-Service.png"
					],
					"description": "AWS ECS Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Metrics/AWS ECS - CPU Utilization - Cluster & Service.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "ECS",
					"key1": "value1"
				},
				{
					"id": 33,
					"name": "AWS-ECS-CPU-&-MEMORY-RESERVATION-CLUSTER",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/CPU-and-Memory-Reservation-Cluster.png"
					],
					"description": "AWS ECS Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Metrics/AWS ECS - CPU & Memory Reservation - Cluster.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "ECS",
					"key1": "value1"
				},
				{
					"id": 34,
					"name": "AWS-ECS-EVENTS",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Events.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Events1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ECS/Events2.png"
					],
					"description": "AWS ECS Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ECS/AWS ECS Logs/Amazon ECS - Events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ECS",
					"key1": "value1"
				},
				{
					"id": 35,
					"name": "Amazon-ElastiCache-REDIS-ULM-EVENT-OVERVIEW",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-Events-Overview3.png"
					],
					"description": "AWS ELASTICACHE Events Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon-Elasticache-redis-ulm-events-overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ElastiCache",
					"key1": "value1"
				},
				{
					"id": 36,
					"name": "Amazon-ElastiCache-Redis-ULM-Performance-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview2.png"
					],
					"description": "AWS ElastiCache Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ElastiCache",
					"key1": "value1"
				},
				{
					"id": 37,
					"name": "Amazon ElastiCache Redis ULM-Performance Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceOverview2.png"
					],
					"description": "AWS ElastiCache Redis ULM Monitoring Performance Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "ElastiCache-Redis",
					"key1": "value1"
				},
				{
					"id": 38,
					"name": "Amazon ElastiCache Redis ULM–Performance by Cluster",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-performance-ByCluster.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-performance-ByCluster1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-performance-ByCluster2.png"
					],
					"description": "AWS ElastiCache Redis ULM Performance Monitoring by Cluster",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance by Cluster.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "ElastiCache-Redis",
					"key1": "value1"
				},
				{
					"id": 39,
					"name": "Amazon ElastiCache Redis ULM–Performance by Host",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceBy-host1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/REDIS-ULM-PerformanceBy-host2.png"
					],
					"description": "AWS ElastiCache Redis ULM Monitoring Performance by Host",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon ElastiCache Redis ULM-Performance by Host.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "ElastiCache-Redis",
					"key1": "value1"
				},
				{
					"id": 40,
					"name": "Amazon ElastiCache Redis ULM – Notifications",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/ElastiCache-Redis-ULM–Notifications.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/ElastiCache/ElastiCache-Redis-ULM–Notifications1.png"
					],
					"description": "AWS ElastiCache Redis ULM Monitoring Notifications",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon ElastiCache Redis/Amazon-elasticache-redis-ulm-notifications.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "ElastiCache-Redis",
					"key1": "value1"
				},
				{
					"id": 41,
					"name": "Amazon GuardDuty - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Overview2.png"
					],
					"description": "Amazon GuardDuty Monitoring Performance Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GuardDuty/Amazon GuardDuty-Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GuardDuty",
					"key1": "value1"
				},
				{
					"id": 42,
					"name": "Amazon GuardDuty – CloudTrail Details",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-CloudTrail Details1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-CloudTrail-Details.png"
					],
					"description": "Amazon GuardDuty Monitoring CloudTrail Details",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GuardDuty/Amazon GuardDuty-CloudTrail-Details.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GuardDuty",
					"key1": "value1"
				},
				{
					"id": 43,
					"name": "Amazon GuardDuty - Details(VPC,Subnet,Security Group)",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GuardDuty/GuardDuty-Details(VPC, SUBNETSecurity Group).png"
					],
					"description": "Amazon GuardDuty Monitoring VPC,Subnet,Security Group Details",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GuardDuty/Amazon GuardDuty-Details(VPC,SUBNETS.SG).json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GuardDuty",
					"key1": "value1"
				},
				{
					"id": 44,
					"name": "Amazon Kinesis – Streams - Events",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/Kinesis/Kinesis-Streams-Events.png"
					],
					"description": "Amazon Kinesis Streams Monitoring Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS kinesis/Amazon Kinesis - Streams - Events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "AVAILABILITY",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Kinesis",
					"key1": "value1"
				},
				{
					"id": 45,
					"name": "Amazon Redshift - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Overview.png"
					],
					"description": "Amazon Redshift Monitoring Performance Overview ",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - RedShift Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Redshift",
					"key1": "value1"
				},
				{
					"id": 46,
					"name": "Amazon Redshift - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Overview.png"
					],
					"description": "Amazon Redshift Monitoring Performance Overview ",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - RedShift Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Redshift",
					"key1": "value1"
				},
				{
					"id": 47,
					"name": "Amazon Redshift – Audit - Connection Log",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Audit-Connection-Log.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Audit-connection-Log1.png"
					],
					"description": "Amazon Redshift Monitoring and Audit connection Log",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - Redshift - Audit - Connection Log.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Redshift",
					"key1": "value1"
				},
				{
					"id": 48,
					"name": "Amazon Redshift – CloudTrail Events Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Cloudtrail-Events-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/CloudTrail-Events-Overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Cloudtrail-Events-Overview2.png"
					],
					"description": "Amazon Redshift Monitoring and Overview of CloudTrail Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS - RedShift - CloudTrail events Overview1.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Redshift",
					"key1": "value1"
				},
				{
					"id": 49,
					"name": "Amazon Redshift – Resource Utilization by ClusterIdentifier",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-ClusterIdentifier.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-ClusterIdentifier1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-ClusterIdentifier2.png"
					],
					"description": "Amazon Redshift Monitoring Resource Utilization by ClusterIdentifier ",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS-Redshift-Resource utilization by cluster identifier.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Redshift",
					"key1": "value1"
				},
				{
					"id": 50,
					"name": "Amazon Redshift – Resource Utilization by NodeID",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RedShift/Resource-Utilization-By-NodeID3.png"
					],
					"description": "Amazon Redshift Monitoring Resource Utilization by NodeID ",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS Redshift/AWS-Redshift-Resource utilization by NODE ID.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Redshift",
					"key1": "value1"
				},
				{
					"id": 51,
					"name": "Amazon SES – CloudTrail Events Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/cloudtrail-Events-overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/cloudtrail-Events-overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/cloudtrail-Events-overview2.png"
					],
					"description": "Amazon SES Monitoring and Overview of CloudTrail Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon SES/Amazon SES - Cloud Trail Events Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "SES",
					"key1": "value1"
				},
				{
					"id": 52,
					"name": "Amazon SES –CloudTrail Events by Event Name",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/CloudTrail Events by Eventname.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SES/CloudTrail Events by Eventname1.png"
					],
					"description": "Amazon SES Monitoring of CloudTrail Events by Event name",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon SES/AWS-SES-CLOUDTRAIL-EVENTS-BY-EVENTNAMES.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "SES",
					"key1": "value1"
				},
				{
					"id": 53,
					"name": "Amazon SNS - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview1.png"
					],
					"description": "Amazon SNS Performance Monitoring and OverView",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/sns overview metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "SNS",
					"key1": "value1"
				},
				{
					"id": 54,
					"name": "Amazon SNS - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Overview1.png"
					],
					"description": "Amazon SNS Performance Monitoring and OverView",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/sns overview logs.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "SNS",
					"key1": "value1"
				},
				{
					"id": 55,
					"name": "Amazon SNS – Metric by Region",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Metric-By-Region.png"
					],
					"description": "Amazon SNS Region Monitoring by metrics",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/Amazon SNS - Metric By Region.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "SNS",
					"key1": "value1"
				},
				{
					"id": 56,
					"name": "Amazon SNS – Metric by TopicName",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/Metric-By-TopicName.png"
					],
					"description": "Amazon SNS TopicName Monitoring by metrics",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/Amazon SNS - Metric By TopicName.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "SNS",
					"key1": "value1"
				},
				{
					"id": 57,
					"name": "Amazon SNS – CloudTrail Events",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events3.png"
					],
					"description": "Amazon SNS Monitoring by CloudTrail Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS SNS/Amazon SNS - CloudTrail Events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "SNS",
					"key1": "value1"
				},
				{
					"id": 58,
					"name": "Amazon SNS – CloudTrail Events",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SNS/CloudTrail-Events3.png"
					],
					"description": "Amazon SQS Monitoring  by CloudTrail Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/AWS-SQS-CloudTrail-Events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "SQS",
					"key1": "value1"
				},
				{
					"id": 59,
					"name": "Amazon SQS – Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview1.png"
					],
					"description": "Amazon SQS Monitoring and Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/sqs overview logs.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "SQS",
					"key1": "value1"
				},
				{
					"id": 60,
					"name": "Amazon SQS – Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-Overview1.png"
					],
					"description": "Amazon SQS Monitoring and Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/sqs overview metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "SQS",
					"key1": "value1"
				},
				{
					"id": 61,
					"name": "Amazon SQS by QueueName",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-QueueName.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-QueueName1.png"
					],
					"description": "Amazon SQS Monitoring by QueueName",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/AWS-SQS-QueueName.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "AVAILABILITY",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "SQS",
					"key1": "value1"
				},
				{
					"id": 62,
					"name": "Amazon SQS by Region",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-Region.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/SQS/Amazon-SQS-By-Region1.png"
					],
					"description": "Amazon SQS Monitoring by Region",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS-SQS/AWS-SQS-By-Region.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "AVAILABILITY",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "SQS",
					"key1": "value1"
				},
				{
					"id": 63,
					"name": "Amazon VPC Flow Logs - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Flow-logs-overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Flow-logs-overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Flow-logs-overview1.png"
					],
					"description": "Amazon VPC Flow Logs Monitoring and OverView",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "VPC",
					"key1": "value1"
				},
				{
					"id": 64,
					"name": "Amazon VPC Flow Logs - Traffic",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/flowLogs-Traffic.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/flowLogs-Traffic1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/flowLogs-Traffic2.png"
					],
					"description": "Amazon VPC Flow Logs Monitoring Traffic",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Traffic.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "VPC",
					"key1": "value1"
				},
				{
					"id": 65,
					"name": "Amazon VPC Flow Logs - Accepts",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Accepted-flowLogs.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Accepted-flowLogs1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/Accepted-flowLogs2.png"
					],
					"description": "Amazon VPC Flow Logs Monitoring by Accepts",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Accepts.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "VPC",
					"key1": "value1"
				},
				{
					"id": 66,
					"name": "Amazon VPC Flow Logs - Rejects",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/FlowLogs-Rejects.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/FlowLogs-Rejects1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/VPC/FlowLogs-Rejects2.png"
					],
					"description": "Amazon VPC Flow Logs Monitoring by Rejects",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/vpc/Amazon VPC Flow Logs - Rejects.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "VPC",
					"key1": "value1"
				},
				{
					"id": 67,
					"name": "CIS AWS Monitoring – Access & Authentication",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CIS/Monitoring-Access-and-Authentication.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CIS/Monitoring-Access-and-Authentication1.png"
					],
					"description": "CIS AWS Monitoring Access & Authentication",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CIS AWS Monitoring- Access & Authentication/CIS AWS Monitoring – Access & Authentication.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CIS",
					"key1": "value1"
				},
				{
					"id": 68,
					"name": "CIS AWS Monitoring – Change Control",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CIS/Monitoring -Control-Change.png"
					],
					"description": "CIS AWS Monitoring Change Control",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CIS AWS Monitoring- Access & Authentication/CIS AWS Monitoring - Change Control.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CIS",
					"key1": "value1"
				},
				{
					"id": 69,
					"name": "GI GuardDuty – Global Baseline",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-GlobalBaseline.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-GlobalBaseline1.png"
					],
					"description": "GI GuardDuty Monitoring Global Baseline",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI GuardDuty/GI GuardDuty Global Baseline.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GI-GuardDuty",
					"key1": "value1"
				},
				{
					"id": 70,
					"name": "GI GuardDuty – Findings Analysis",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis1.png"
					],
					"description": "GI GuardDuty Monitoring and Findings Analysis",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI GuardDuty/GI GuardDuty Finding Analysis.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GI-GuardDuty",
					"key1": "value1"
				},
				{
					"id": 71,
					"name": "GI GuardDuty – Findings Analysis(1)",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/GuardDuty-Finding-Analysis1.png"
					],
					"description": "GI GuardDuty Monitoring and Findings Analysis",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI GuardDuty/GI GuardDuty Finding Analysis(1).json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GI-GuardDuty",
					"key1": "value1"
				},
				{
					"id": 72,
					"name": "GI CloudTrail – Tactics & Techniques",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-Tactics-and-Techniques.png"
					],
					"description": "GI CloudTrail Monitoring Tactics & Techniques",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI CloudTrail/GI CloudTrail Tactic and Techniques.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GI-CloudTrail",
					"key1": "value1"
				},
				{
					"id": 73,
					"name": "GI CloudTrail – Action Plan",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan3.png"
					],
					"description": "GI CloudTrail Monitoring by Action Plan",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI CloudTrail/GI CloudTrail Action Plan.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GI-CloudTrail",
					"key1": "value1"
				},
				{
					"id": 74,
					"name": "GI CloudTrail – Action Plan(1)",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/GI/CloudTrail-ActionPlan3.png"
					],
					"description": "GI CloudTrail Monitoring by Action Plan",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Amazon GI CloudTrail/GI CloudTrail Action Plan(1).json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "GI-CloudTrail",
					"key1": "value1"
				},
				{
					"id": 75,
					"name": "AWS CloudTrail - Access Monitoring",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Access-Monitoring1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Access-Monitoring2.png"
					],
					"description": "CloudTrail - Access Monitoring Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail - Access Monitoring.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 76,
					"name": "AWS CloudTrail - Account, System Monitoring",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Account-System-Monitoring.png"
					],
					"description": "CloudTrail - Account & System Monitoring Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail - Account , System Monitoring.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 77,
					"name": "AWS CloudTrail -Privileged Activity",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Account-Privileged Activity.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Account-Privileged-Activity1.png"
					],
					"description": "CloudTrail -Privileged Activity Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail -Privileged Activity.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 78,
					"name": "AWS CloudTrail -Login Activity",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Login-Activity.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudTrail/Amazon-CloudTrail-Login-Activity1.png"
					],
					"description": "CloudTrail -Login Activity Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/CloudTrail/AWS-CloudTrails-logs/AWS CloudTrail -Login Activity.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 79,
					"name": "AWS WAF - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview1.png"
					],
					"description": "WAF MonitOring Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf overview logs.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "WAF",
					"key1": "value1"
				},
				{
					"id": 80,
					"name": "AWS WAF - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Overview1.png"
					],
					"description": "WAF Monitering Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf overview metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "WAF",
					"key1": "value1"
				},
				{
					"id": 81,
					"name": "AWS WAF - Security Analytics Traffic",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Analysis-Traffic1.png"
					],
					"description": "WAF - Security Analytics Traffic Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf-security-analysis-traffic.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "WAF",
					"key1": "value1"
				},
				{
					"id": 82,
					"name": "AWS WAF - Security Monitoring Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Monitoring-Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/WAF/Security-Monitoring-Overview1.png"
					],
					"description": "WAF - Security Monitoring Overview Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/AWS WAF/waf-security-monitoring.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "WAF",
					"key1": "value1"
				},
				{
					"id": 83,
					"name": "EC2-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/EC2-Overview.png"
					],
					"description": "EC2 Monitoring Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/EC2 Instance Overview.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Aws-PullLog-Api",
					"associatedCloudElementType": "Ec2",
					"key1": "value1"
				},
				{
					"id": 84,
					"name": "EC2-AMI-And-Ip's",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/EC2-AMI-And-Ip's.png"
					],
					"description": "EC2 Monitoring AMI And Ip's",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/EC2-AMI-And-Ip's.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Aws-PullLog-Api",
					"associatedCloudElementType": "Ec2",
					"key1": "value1"
				},
				{
					"id": 85,
					"name": "EC2-Target And Security Group",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/Target-And-Security-Group.png"
					],
					"description": "EC2 Monitoring Target And Security Group",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/EC2-Target-Security Group.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Aws-PullLog-Api",
					"associatedCloudElementType": "Ec2",
					"key1": "value1"
				},
				{
					"id": 86,
					"name": "EC2-CPU-utilization-by-instance-and-Auto-scaling",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/CPU-Utilization-Instance-Auto-scaling-group-name.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/CPU-Utilization-Instance-Auto-scaling-group-name1.png"
					],
					"description": "EC2 Monitoring CPU utilization by instance and Auto scaling",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/CPU-utilization-by-instance-and-Auto-scaling.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "Aws-MetricLog-Api",
					"associatedCloudElementType": "Ec2",
					"key1": "value1"
				},
				{
					"id": 87,
					"name": "EC2-Disk-read-writes",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/Disk-read-writes-by-instanceID.png"
					],
					"description": "EC2 Monitoring Disk read writes",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/Disk-read-writes.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "Aws-MetricLog-Api",
					"associatedCloudElementType": "Ec2",
					"key1": "value1"
				},
				{
					"id": 88,
					"name": "EC2-network-packets-in-out",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/EC2/Network-packets-in-and-out.png"
					],
					"description": "EC2 network packets in and out",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/EC2/network-packets-in-out.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "Aws-MetricLog-Api",
					"associatedCloudElementType": "Ec2",
					"key1": "value1"
				},
				{
					"id": 89,
					"name": "API-Gateway-Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/API-Gateway/Overview.png"
					],
					"description": "API Gateway Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/API Gateway/overiew.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "Aws-PullMetric-Api",
					"associatedCloudElementType": "API",
					"key1": "value1"
				},
				{
					"id": 90,
					"name": "API-Audit-Events",
					"images": [
					"https://synectiks-monitoring-dashboards.s3.amazonaws.com/AWS+Dashboards/API+Gateway/Audit-events.json"
					],
					"description": "API Audit Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/API Gateway/Audit-events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "Aws-PullLog-Api",
					"associatedCloudElementType": "API",
					"key1": "value1"
				},
				{
					"id": 91,
					"name": "API-Gateway-4xx-5xx-Errors",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/API-Gateway/4xx-5xx-Errors.png"
					],
					"description": "API Gateway 4xx and 5xx Errors",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/API Gateway/4xx-5xx-errors.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "Aws-PullMetric-Api",
					"associatedCloudElementType": "API",
					"key1": "value1"
				},
				{
					"id": 92,
					"name": "API-Gateway-Enhanced-Monitoring",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/API-Gateway/Enhanced-Monitoring.png"
					],
					"description": "API Gateway Enhanced Monitoring",
					"jsonLocation": "s3://syn-monitoring-images/AWS-Images/API-Gateway/Enhanced-Monitoring.png",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "Aws-PullMetric-Api",
					"associatedCloudElementType": "API",
					"key1": "value1"
				},
				{
					"id": 93,
					"name": "RDS-Aurora-Generic",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic+2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Aurora-Generic3.png"
					],
					"description": "RDS Aurora Generic",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/aurora-generic.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "Aws-PullMetric-Api",
					"associatedCloudElementType": "RDS",
					"key1": "value1"
				},
				{
					"id": 94,
					"name": "RDS-CloudTrail-Audit-Events",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Cloudtrail-audit-events.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Cloudtrail-audit-events1.png"
					],
					"description": "RDS-CloudTrail-Audit-Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/Cloudtrail-Audit-events.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Aws-PullLog-Api",
					"associatedCloudElementType": "RDS",
					"key1": "value1"
				},
				{
					"id": 95,
					"name": "RDS Overview by DataBase Instance",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview-by-DB-instance.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview-by-DB-instance1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview-by-DB-instance2.png"
					],
					"description": "RDS-Overview-By-DataBase-Instance",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/overview-database-instance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "Aws-PullMetric-Api",
					"associatedCloudElementType": "RDS",
					"key1": "value1"
				},
				{
					"id": 96,
					"name": "RDS Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/overview2.png"
					],
					"description": "RDS-Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/overview-database-instance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "Aws-PullMetric-Api",
					"associatedCloudElementType": "RDS",
					"key1": "value1"
				},
				{
					"id": 97,
					"name": "RDS-CloudTrail-Non-Describe-Audit-Events",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Describe-CloudTrail-Audit-Events.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/RDS/Describe-CloudTrail-Audit-Events1.png"
					],
					"description": "RDS-CloudTrail-Non-Describe-Audit-Events",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/RDS/NonDescribe-CloudTrail-Audit.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Aws-PullLog-Api",
					"associatedCloudElementType": "RDS",
					"key1": "value1"
				},
				{
					"id": 98,
					"name": "Cloudfront-Metrics",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/metrics.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/metrics1.png"
					],
					"description": "Cloudfront Metrics Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Cloudfront/Cloud Front Metrics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "METRIC",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "Cloudfront",
					"key1": "value1"
				},
				{
					"id": 99,
					"name": "Cloudfront-overview-visitor-statistics",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/overview-visitor-statistics.png"
					],
					"description": "Cloudfront overview of visitor statistics",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Cloudfront/cloud front - overview, visitor statistics.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Cloudfront",
					"key1": "value1"
				},
				{
					"id": 100,
					"name": "Cloudfront-Web-Operations",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/CloudFront/web-operations.png"
					],
					"description": "Cloudfront Web Operations Overview",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/Cloudfront/Cloud Front Web Operations.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "LOG",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "Cloudfront",
					"key1": "value1"
				},
				{
					"id": 101,
					"name": "DynamoDB Performance",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/Performance.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/Performance2.png"
					],
					"description": "Performance Analytics for DynamoDB",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/DynamoDB/Performance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 102,
					"name": "DynamoDB Reliability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/Reliability.png"
					],
					"description": "Reliability Analytics for DynamoDB",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/DynamoDB/Reliability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "RELIABILITY",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 103,
					"name": "DynamoDB End User Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/dynamodb/End-User-Stats.png"
					],
					"description": "End User Analytics for DynamoDB",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/DynamoDB/End User Stats.JSON",
					"associatedCloud": "AWS",
					"associatedSLAType": "END USER STATS",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 104,
					"name": "API Gateway Performance",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/api-gateway/Performance.png"
					],
					"description": "Performance Analytics for API Gateway",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/API Gateway/Performance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 105,
					"name": "API Gateway End User Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/api-gateway/End-User-Stats.png"
					],
					"description": "End User Analytics for API Gateway",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/API Gateway/End-user Stats.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER-STATS",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 106,
					"name": "API Gateway Reliability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/api-gateway/Reliability.png"
					],
					"description": "Reliability Analytics for API Gateway",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS Dashboards/api-gateway/Reliability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Reliability",
					"associatedDataType": "Metric",
					"associatedDataSourceType": "AWS-PullMetric-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 107,
					"name": "CloudFront Reliability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/cloudfront/Reliability.png"
					],
					"description": "Reliability Analytics for CloudFront",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/CloudFront/Reliability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Reliability",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 108,
					"name": "CloudFront End User Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/cloudfront/End-User-Stats.png"
					],
					"description": "End User Analytics for CloudFront",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/CloudFront/End User.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 109,
					"name": "CloudFront Performance",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/cloudfront/Performance.png"
					],
					"description": "Performance Analytics for CloudFront",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/CloudFront/Performance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 110,
					"name": "S3 Performance",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/s3/Performance.png"
					],
					"description": "Performance for s3",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/S3/Performance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 111,
					"name": "S3 Reliability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/s3/Reliability.png"
					],
					"description": "Reliability Analytics for s3",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/S3/Reliability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Reliability",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 112,
					"name": "S3 Availability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/s3/Availability.png"
					],
					"description": "Availability Analytics for s3",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/S3/Availability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Availability",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 113,
					"name": "Lambda Availability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Availability.png"
					],
					"description": "Availability Analytics for Lambda",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/Availability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Availability",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 114,
					"name": "Lambda Performance",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Performance.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Performance.png"
					],
					"description": "Performance Analytics for Lambda",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/Performance.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 115,
					"name": "Lambda End User Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/End-User-Stats.png"
					],
					"description": "End User Analytics for Lambda",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/End User.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "END-USER",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 116,
					"name": "Lambda Reliability",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Reliability.png",
					"https://syn-monitoring-images.s3.amazonaws.com/AWS-Images/lambda/Reliability2.png"
					],
					"description": "Reliability Analytics for Lambda",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/AWS/Lambda/Reliability.json",
					"associatedCloud": "AWS",
					"associatedSLAType": "Reliability",
					"associatedDataType": "Log",
					"associatedDataSourceType": "AWS-PullLog-Api",
					"associatedCloudElementType": "CloudTrail",
					"key1": "value1"
				},
				{
					"id": 1,
					"name": "Azure Active Directory - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Overview1.png"
					],
					"description": "Azure Active Directory Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Overview.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory-Operations",
					"key1": "value1"
				},
				{
					"id": 2,
					"name": "Azure Active Directory - Application Management",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Application-management.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Application-management1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Application-management2.png"
					],
					"description": "Azure Active Directory Applicaion Management Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Application Management.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory-Application Management Operations",
					"key1": "value1"
				},
				{
					"id": 3,
					"name": "Azure Active Directory -  Authorization/Authentication",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Authorization-Authentication.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Authorization-Authentication1.png"
					],
					"description": "Azure Active Directory Applicaion Management Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Authorization, Authentication.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory-Application Management Operations",
					"key1": "value1"
				},
				{
					"id": 4,
					"name": "Azure Active Directiory - Directory Management",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Directory-Management.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Directory-Management1.png"
					],
					"description": "Azure Active Directory management Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Directory Management.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory Management Operations",
					"key1": "value1"
				},
				{
					"id": 5,
					"name": "Azure Active Directory - Failure Sign-in Events ",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Failure-SignIns.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Failure-SignIns1.png"
					],
					"description": "Azure Active Directory Failed Sign-in Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory -- Failure Sign_In Events.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory Failed Sign-in Operations",
					"key1": "value1"
				},
				{
					"id": 6,
					"name": "Azure Active Directory - Successful  Sign-in Events ",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Successful-SignIns.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Successful-SignIns1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Active-Directory/Successful-SignIns2.png"
					],
					"description": "Azure Active Directory Success Sign-in Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Active Directory/Azure Active Directory - Success Sign-Ins.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Active Directory Success Sign-in Operations",
					"key1": "value1"
				},
				{
					"id": 7,
					"name": "Azure Audit - Overview",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/overview.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/overview1.png"
					],
					"description": "Azure Audit - Overview- Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Audit/Azure Audit - OverView.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure Audit - Overview",
					"key1": "value1"
				},
				{
					"id": 8,
					"name": "Azure Audit Resource usage",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/resource-usage.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Audit/resource-usage1.png"
					],
					"description": "Azure Audit Resource usage - Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure Audit/Azure Audit - Resource Usage.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure Audit - Resource Usasge",
					"key1": "value1"
				},
				{
					"id": 9,
					"name": "Azure SQL – Blocking Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Blocking-Stats.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Blocking-Stats1.png"
					],
					"description": " SQL – Blocking Stats - Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL-Blocking Stats.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure SQL – Blocking Stats",
					"key1": "value1"
				},
				{
					"id": 10,
					"name": "Azure SQL –Errors",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Errors.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Errors1.png"
					],
					"description": " SQL – Errors - Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL Errors.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure SQL – Errors",
					"key1": "value1"
				},
				{
					"id": 11,
					"name": "Azure SQL – QueryStoreRuntime Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats1.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats2.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Query-RunTime-stats3.png"
					],
					"description": "SQL – QueryStoreRuntime Stats  Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL - Query StoreRuntime Stats.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure SQL – QueryStoreRuntime Stats",
					"key1": "value1"
				},
				{
					"id": 12,
					"name": "Azure SQL – QueryStoreWait Stats",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/QueryWait-Stats.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/QueryWait-Stats1.png"
					],
					"description": "Azure SQL – QueryStoreWait Stats  Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL-Query Store Wait Stats.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure SQL – QueryStoreRuntime",
					"key1": "value1"
				},
				{
					"id": 13,
					"name": "Azure SQL – Timeouts",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/SQL/Timeouts.png"
					],
					"description": "Azure SQL – Timeouts  Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Azure SQL/Azure SQL TimeOuts.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Azure SQL – Timeouts",
					"key1": "value1"
				},
				{
					"id": 14,
					"name": "Office 365 – SharePoint – Content Insight",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Content-insight.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Content-insight1.png"
					],
					"description": "Office 365 – SharePoint – Content Insight Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Office 365/Office 365 – SharePoint – Shared Content Non – Domain Activities.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Office 365",
					"key1": "value1"
				},
				{
					"id": 15,
					"name": "Office 365 – SharePoint – Shared Content Non-Domain Activities",
					"images": [
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Domain-Activities.png",
					"https://syn-monitoring-images.s3.amazonaws.com/Azure-Images/Office-365/Domain-Activities1.png"
					],
					"description": "Office 365 – SharePoint – Shared Content Non-Domain Activities Operations",
					"jsonLocation": "s3://synectiks-monitoring-dashboards/Azure Dashboards/Office 365/Office 365 – SharePoint – Shared Content Non – Domain Activities.json",
					"associatedCloud": "Azure",
					"associatedSLAType": "PERFORMANCE",
					"associatedDataType": "Log",
					"associatedDataSourceType": "Azure-PullLog-Api",
					"associatedCloudElementType": "Office 365",
					"key1": "value1"
				}
				],
				"provisioningTemplates": [
				{
					"id": 1,
					"Type": "LandingZone",
					"name": "AWS-Landing-Zone",
					"actOn": "MainProduct",
					"description": "Create AWS Accounts with Best Practices",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 2,
					"Type": "LandingZone",
					"name": "Azure-Landing-Zone",
					"actOn": "MainProduct",
					"description": "Create Azure Account and Subscription with Best Practices",
					"associatedCloud": "Azure",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 3,
					"Type": "LandingZone",
					"name": "Google-Landing-Zone",
					"actOn": "MainProduct",
					"description": "Create Google Project with Best Practices",
					"associatedCloud": "Google",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 4,
					"Type": "ProductEnclave",
					"name": "AWS-Product-Enclave",
					"actOn": "LandingZone",
					"description": "Create AWS VPC/Gateway/Firewall Services",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 5,
					"Type": "ProductEnclave",
					"name": "Azure-Product-Enclave",
					"actOn": "LandingZone",
					"description": "Create Azure VPC/Gateway/Firewall Services",
					"associatedCloud": "Azure",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 6,
					"Type": "ProductEnclave",
					"name": "Google-Product-Enclave",
					"actOn": "LandingZone",
					"description": "Create Google VPC/Gateway/Firewall Services",
					"associatedCloud": "Google",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 7,
					"Type": "ProductCluster",
					"name": "AWS-Product-Cluster",
					"actOn": "ProductEnclave",
					"description": "Create EKS k8 cluster with best practices",
					"associatedCloud": "AWS",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 8,
					"Type": "ProductCluster",
					"name": "Azure-Product-Cluster",
					"actOn": "ProductEnclave",
					"description": "Create Azure AKS k8 cluster with best practices",
					"associatedCloud": "Azure",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 9,
					"Type": "ProductCluster",
					"name": "Google-Product-Cluster",
					"actOn": "ProductEnclave",
					"description": "Create Google k8 cluster with best practices",
					"associatedCloud": "Google",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				},
				{
					"id": 10,
					"Type": "CommonService",
					"name": "Common-Service-File-Repo",
					"actOn": "ProductEnclave",
					"description": "Provision Filerepo Common Services",
					"associatedCloud": "Google",
					"associatedCreds": "Vault",
					"associatedSpecsTemplate": "s3://..."
				}
				]
			},
			"sec": {
				"complianceRules": {
				"name": null
				},
				"complianceAuditors": {
				"name": null
				},
				"compliancePolicies": {
				"name": null
				},
				"codeSecurityTemplates": {
				"name": null
				},
				"dataSecurityTemplates": {
				"name": null
				},
				"conainerSecurityTemplates": {
				"name": null
				}
			}
		}
```

[GO Back](../../catalogue-service.md)