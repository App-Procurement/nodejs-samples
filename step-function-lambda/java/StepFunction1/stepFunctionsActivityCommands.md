# Followings are commands for running activities by command line

## For getting task token from activity

``` text
aws stepfunctions get-activity-task --activity-arn <activity arn>
```

## For sending task result

### for success

``` text
aws stepfunctions send-task-success --task-token <task token> --task-output <output>
```

### for failure

``` text
aws stepfunctions send-task-failure --task-token <task token> --error <error> --cause <cuase>
```
