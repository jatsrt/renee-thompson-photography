import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as sources from "aws-cdk-lib/aws-lambda-event-sources";
import { Construct } from "constructs";

export class GalleryConstruct extends Construct {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const fn = new nodejs.NodejsFunction(this, "resize", {
      memorySize: 2048,
      architecture: lambda.Architecture.ARM_64,
      runtime: lambda.Runtime.NODEJS_18_X,
      bundling: {
        forceDockerBundling: true,
        nodeModules: ["sharp"],
        externalModules: ["sharp"],
      },
    });
    const bucket = new s3.Bucket(this, "bucket");
    bucket.grantReadWrite(fn);

    fn.addEventSource(
      new sources.S3EventSource(bucket, {
        events: [s3.EventType.OBJECT_CREATED],
      })
    );
  }
}
