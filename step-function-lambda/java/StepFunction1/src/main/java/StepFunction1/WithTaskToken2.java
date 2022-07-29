package StepFunction1;

import java.util.ArrayList;
import java.util.Map;

import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.spec.PutItemSpec;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.jayway.jsonpath.JsonPath;

public class WithTaskToken2 implements RequestHandler<Object, Object> {

	private static DynamoDB dynamoDb;
	private static String DYNAMODB_TABLE_NAME = "stepFunctions";
	private static Regions REGION = Regions.US_EAST_1;
	static AmazonDynamoDBClient client = null;

	static ArrayList<String> taskTokenList = new ArrayList<String>();
	static ArrayList<String> executionArnList = new ArrayList<String>();
	static ArrayList<Number> idList = new ArrayList<Number>();

	public Object handleRequest(Object input, Context context) {

		initDynamoDbClient();
		getData();

		String executionArn = JsonPath.read(input, "$.executionArn");
		String taskToken = JsonPath.read(input, "$.token");
		Number previousId = 12;

		int index = 0;
		for (String e : executionArnList) {

			if (e.equals(executionArn)) {
				previousId = idList.get(index);
			}
			index++;
		}

		if (previousId.equals(12)) {
			dynamoDb.getTable(DYNAMODB_TABLE_NAME)
					.putItem(new PutItemSpec().withItem(new Item().withNumber("id", Math.random())
							.withString("execution_arn", executionArn).withString("task_token", taskToken)));
		} else {
			dynamoDb.getTable(DYNAMODB_TABLE_NAME)
					.putItem(new PutItemSpec().withItem(new Item().withNumber("id", previousId)
							.withString("execution_arn", executionArn).withString("task_token", taskToken)));
		}
		return "Success";
	}

	private static void initDynamoDbClient() {
		@SuppressWarnings("deprecation")
		AmazonDynamoDBClient client = new AmazonDynamoDBClient();
		client.setRegion(Region.getRegion(REGION));
		dynamoDb = new DynamoDB(client);
	}

	public static void getData() {

		@SuppressWarnings("deprecation")
		AmazonDynamoDBClient client = new AmazonDynamoDBClient();
		client.setRegion(Region.getRegion(REGION));

		ScanRequest scanRequest = new ScanRequest().withTableName(DYNAMODB_TABLE_NAME);

		ScanResult result = client.scan(scanRequest);
		for (Map<String, AttributeValue> item : result.getItems()) {

			Object tt = JsonPath.read(item.get("task_token").toString(), "$.S");
			Object ea = JsonPath.read(item.get("execution_arn").toString(), "$.S");
			Object id = JsonPath.read(item.get("id").toString(), "$.N");

			taskTokenList.add(tt.toString());
			executionArnList.add(ea.toString());
			idList.add((Number) id);
		}
	}
	
	public static void main(String[] args) {
		
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion("us-east-1").build();
		dynamoDb = new DynamoDB(client);
		
		Item item = dynamoDb.getTable("stepfunction-uc1-2").getItem("execution_arn","jj");
		System.out.println(item);

//		ScanRequest scanRequest = new ScanRequest().withTableName(DYNAMODB_TABLE_NAME);

//		ScanResult result = client.scan(scanRequest);
//		for (Map<String, AttributeValue> item : result.getItems()) {
//			System.out.println(item);
//		}
	}
}
