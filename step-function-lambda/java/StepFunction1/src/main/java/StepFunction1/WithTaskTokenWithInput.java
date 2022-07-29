package StepFunction1;

import java.util.ArrayList;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.spec.PutItemSpec;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.jayway.jsonpath.JsonPath;

public class WithTaskTokenWithInput implements RequestHandler<Object, Object> {

	private static DynamoDB dynamoDb;
	private static String DYNAMODB_TABLE_NAME = "stepfunction-uc1-2";
	private static Regions REGION = Regions.US_EAST_1;

	static ArrayList<String> taskTokenList = new ArrayList<String>();
	static ArrayList<String> executionArnList = new ArrayList<String>();
	static ArrayList<Number> idList = new ArrayList<Number>();

	public Object handleRequest(Object input, Context context) {

		initDynamoDbClient();

		String executionArn = JsonPath.read(input, "$.executionArn");
		String taskToken = JsonPath.read(input, "$.token");
		
		Object stepInput = JsonPath.read(input, "$.input");


		dynamoDb.getTable(DYNAMODB_TABLE_NAME).putItem(new PutItemSpec()
				.withItem(new Item().withString("execution_arn", executionArn).withString("task_token", taskToken).withString("stepInput", stepInput.toString())));
		return input;
	}

	private static void initDynamoDbClient() {
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion(REGION).build();
		dynamoDb = new DynamoDB(client);
	}
	



}
