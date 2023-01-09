import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { GalleryConstruct } from "./gallery-construct";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class RtpStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new GalleryConstruct(this, "gallery", props);
  }
}
