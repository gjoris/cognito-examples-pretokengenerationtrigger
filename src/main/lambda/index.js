exports.handler = (event, context, callback) => {

    //This Lambda is written to be used as a Pre Token Generation Lambda Trigger for Cognito: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html

    event.response = {
        "claimsOverrideDetails": {
            "groupOverrideDetails": {
                // "groupsToOverride": ["Admins"]
                // "iamRolesToOverride": ["arn:aws:iam::XXXXXXXXXXXX:role/sns_callerA", "arn:aws:iam::XXXXXXXXX:role/sns_callerB", "arn:aws:iam::XXXXXXXXXX:role/sns_callerC"],
                "preferredRole": "<ARN_OF_ROLE>"
            }
        }
    };

    // Return to Amazon Cognito
    callback(null, event);
};