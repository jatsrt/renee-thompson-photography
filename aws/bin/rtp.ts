#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { RtpStack } from "../lib/rtp-stack";

const app = new cdk.App();
new RtpStack(app, "RtpStack", {
  env: {
    account: "109239967190",
    region: "us-east-1",
  },
});
