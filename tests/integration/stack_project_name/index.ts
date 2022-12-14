// Copyright 2016-2018, Pulumi Corporation.  All rights reserved.

import * as pulumi from "@pulumi/pulumi";

const stackName = pulumi.getStack();
if (!stackName) {
    // We can't check for a specific stack name, since it is autogenerated by the test framework.  But
    // we *can* verify that it isn't blank.
    throw new Error("Empty pulumi.getStack() at runtime");
}

const expName = "stack_project_name";
const projName = pulumi.getProject();
if (projName !== expName) {
    throw new Error(`Unexpected pulumi.getProject(); wanted '${expName}', got '${projName}'`);
}

const expOrgName =  process.env["PULUMI_TEST_OWNER"];
// If we're running serviceless don't check the org name
if (expOrgName !== undefined) {
    const orgName = pulumi.getOrganization();
    if (orgName !== expOrgName) {
        throw new Error(`Unexpected pulumi.getOrganization(); wanted '${expOrgName}', got '${orgName}'`);
    }
}
