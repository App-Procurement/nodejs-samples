# Catalogue-Service workflow

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Errors

Service Api Requisition uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the ```2xx``` range indicate success. Codes in the ```4xx``` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the ```5xx``` range indicate an error with Stripe's servers (these are rare).

Some ```4xx``` errors that could be handled programmatically (e.g., a card is declined) include an error code that briefly explains the error reported.

 # HTTPS STATUS CODE SUMMRY

Code   | Summary
------------- | -------------
200 - OK  | Everything worked as expected.
400 - Bad Request  | The request was unacceptable, often due to missing a required parameter.
401 - Unauthorized | No valid API key provided.
402 - Request Failed | The parameters were valid but the request failed.
403 - Forbidden | The API key doesn't have permissions to perform the request.
404 - Not Found | The requested resource doesn't exist.
409 - Conflict | The request conflicts with another request (perhaps due to using the same idempotent key)
429 - Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500, 502, 503, 504 - Server Errors | Something went wrong on Stripe's end. (These are rare.)


### `Database credentials`

 	Host: postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com,
 	port: 5431,
	database: cloudassetdb,
 	username:  
 	password: 

### `Create a table in database`
1. Demo table create in database.

	```js
	CREATE TABLE demo(
		id SERIAL PRIMARY KEY,
		details jsonb NULL,
		view_json jsonb NULL
	);
	```
2. Catalogues table create in database.

 	```js
	CREATE TABLE demo_catalogues_detail(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```


### `Database tables used in program`
1. To save service details json
    ```
    Table Name = demo
    ```

    id ( pk ) | Details(jsonb) | View_Json(jsonb)
   --- | --- | --- 
    3726 | {} | {}


2. To save catalogues details json 
    ```
    Table Name = demo_catalogues_detail
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    500 | {}

## Events in UI
#### Service-Details
1.` When click on` <button>Service Details</button> `button.`

#### Following list will appear

	1. Add service details.
	2. Add multi-json service details.
	3. Update service details.
	4. Search service details.
	5. Append Key service details.
	6. Delete service details.

1. After clicking on `Add service details.` new page will appear which is defined as followes:- 
	1. when click on `Service Detail Demo` 
		```
		Shows demo service detail json
		```
		Demo: [Click here to see add service demo](./all-md-file/service-demo/add-service-demo.md)

	2. when click on `Add input` 

		```
		Write given json to database table `demo`.
		```
		OUTPUT: [Click here to see add serivce resposne](./all-md-file/service/add-service.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```
2. After clicking on `Add multi-json service details.` new page will appear which is defined as followes:- 
	1. when click on `Service Detail Demo` 
		```
		Shows demo service detail json
		```
		Demo: [Click here to see add multi json demo](./all-md-file/service-demo/add-multi-json-demo.md)
		
	2. when click on `Add multi-json input` 

		```
		Write given json to database table `demo`.
		```
		OUTPUT: [Click here to see add multi json response](./all-md-file/service/add-multi-json.md)

	3. when click on `Format input`.

		```
		 it formates the json.
		```
3. After clicking on `Update service details.` new page will appear which is defined as followes:- 
	1. when click on `Service Detail Demo` 
		```
		Shows demo service detail json
		```
 		Demo: [Click here to see update serivce demo](./all-md-file/service-demo/update-service-demo.md)
		
	2. when click on `Update input` 

		```
		Write given json to database table `demo`.
		```
		OUTPUT: : [Click here to see update serivce resposne](./all-md-file/service/update-service.md)
		
	3. when click on `Formate input`.

		```
		 it formate the json.
		```
4. After clicking on `Search service details.` new page will appear which is defined as followes:- 
	1. when click on `Service Detail Demo` 
		```
		Shows demo service detail json
		```
		Demo: [Click here to see search serivce demo](./all-md-file/service-demo/search-service-demo.md)

	2. when click on `Search input` 

		```
		Write given json to database table `demo`.
		```
		OUTPUT: : [Click here to see search serivce resposne](./all-md-file/service/search-service.md)

	3. when click on `Format input`.

		```
		 it formates the json.
		```

5. After clicking on `Append service details.` new page will appear which is defined as followes:- 
	1. when click on `Service Detail Demo` 
		```
		Shows demo service detail json
		```
		Demo: [Click here to see append key demo](./all-md-file/service-demo/append-key-service-demo.md)

	2. when click on `Append input` 

		```
		Write given json to database table `demo`.
		```
		OUTPUT: [Click here to see append key resposne](./all-md-file/service/add-multi-json.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```



6. After clicking on `Delete service details.` new page will appear which is defined as followes:- 
	1. when click on `Service Detail Demo` 
		```
		Shows demo service detail json
		```
		Demo: [Click here to see delete demo](./all-md-file/service-demo/delete-service-demo.md)

	
	2. when click on `Delete input` 

		```
		Write given json to database table `demo`.
		```
		OUTPUT: [Click here to see append key resposne](./all-md-file/service/delete-service.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```

## Events in UI
#### Catalogue-Details
1.` When click on` <button>Catalogue Details</button> `button.`

#### Following list will appear

	1. Add catalogue details.
	2. Get all catalogue details.
	3. Search catalogue details.
	4. Append Key catalogue details.
	5. Delete catalogue details.

1. After clicking on `Add catalogue details.` new page will appear which is defined as followes:- 
	1. when click on `Catalogue Detail Demo` 
		```
		Shows demo catalogue detail json
		```
		Demo: [Click here to see add catalogue demo](./all-md-file/catalogue-demo/add-catalogue-demo.md)

	2. when click on `Add input` 

		```
		Write given json to database table `demo_catalogues_detail`.
		```
		OUTPUT: [Click here to see add catalogue resposne](./all-md-file/catalogue/add-catalogue.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```

2. After clicking on `Get all catalogue details.` new page will appear which is defined as followes:- 
	1. when click on `Catalogue Detail Demo` 
		```
		Shows demo catalogue detail json
		```
		Demo: [Click here to see get all catalogue demo](./all-md-file/catalogue-demo/get-all-catalogue-demo.md)

	2. when click on `Get all input` 

		```
		Write given json to database table `demo_catalogues_detail`.
		```
		OUTPUT: [Click here to see get all catalogue resposne](./all-md-file/catalogue/get-all-catalogue.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```

3. After clicking on `Search catalogue details.` new page will appear which is defined as followes:- 
	1. when click on `Catalogue Detail Demo` 
		```
		Shows demo catalogue detail json
		```
		Demo: [Click here to see search catalogue demo](./all-md-file/catalogue-demo/search-catalogue-demo.md)
		
	2. when click on `Search input` 

		```
		Write given json to database table `demo_catalogues_detail`.
		```
		OUTPUT: [Click here to see search catalogue resposne](./all-md-file/catalogue/search-catalogue.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```
4. After clicking on `Append key catalogue details.` new page will appear which is defined as followes:- 
	1. when click on `Catalogue Detail Demo` 
		```
		Shows demo catalogue detail json
		```
		Demo: [Click here to see append key catalogue demo](./all-md-file/catalogue-demo/append-key-catalogue-demo.md)
		
	2. when click on `Append input` 

		```
		Write given json to database table `demo_catalogues_detail`.
		```
		OUTPUT: [Click here to see append key catalogue resposne](./all-md-file/catalogue/append-key-catalogue.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```

5. After clicking on `Delete catalogue details.` new page will appear which is defined as followes:- 
	1. when click on `Catalogue Detail Demo` 
		```
		Shows demo catalogue detail json
		```
		Demo: [Click here to see delete catalogue demo](./all-md-file/catalogue-demo/delete-catalogue-demo.md)
		
	2. when click on `Delete input` 

		```
		Write given json to database table `demo_catalogues_detail`.
		```
		OUTPUT: [Click here to see delete catalogue resposne](./all-md-file/catalogue/delete-catalogue.md)
		
	3. when click on `Format input`.

		```
		 it formates the json.
		```
 ### `Access key and secret keys are set into a .env.local file. This file is git ignored.`

```js
    REACT_APP_ACCESS_KEY_ID = ""
    REACT_APP_SECRET_ACCESS_KEY = ""
```
   <em> ** Never commit and push 'Access_key' and 'Secret_access_key' directly into github ** </em>

### Who do I talk to? ###

	Please mail us on
	info@syenctiks.com
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About







