package SimpleInputOutput;

import java.util.HashMap;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class ActualDevelopment implements RequestHandler<Object, Object> {

	public Object handleRequest(Object input, Context context) {

		HashMap<String, String> m = new HashMap<String, String>();
		
		m.put("Step5", "Gatling performance");
		m.put("Step4", "Junit5 test in github");
		m.put("Step3", "Populate test data in github");
		m.put("Step2", "API source code in github");
		m.put("Step1", "Data design development page");
//		HashMap<String, String> m = new HashMap<String, String>();
//
//		m.put("Step3", "Updating usecase");
//		m.put("Step2", "Create screen design");
//		m.put("Step1", "Create usecase document");
//
//		String a = JsonPath.read(input, "$.name");

		
		return m;
	}
}