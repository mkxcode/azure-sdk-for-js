/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an availability set.
 *
 * @summary Create or update an availability set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/availabilitySetExamples/AvailabilitySet_Create.json
 */
async function createAnAvailabilitySet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const availabilitySetName = "myAvailabilitySet";
  const parameters = {
    location: "westus",
    platformFaultDomainCount: 2,
    platformUpdateDomainCount: 20,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.availabilitySets.createOrUpdate(
    resourceGroupName,
    availabilitySetName,
    parameters
  );
  console.log(result);
}

createAnAvailabilitySet().catch(console.error);
