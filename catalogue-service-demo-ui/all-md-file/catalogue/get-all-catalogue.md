
[GO Back](../../catalogue-service.md)

# Response 
```json
        {
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
```

[GO Back](../../catalogue-service.md)