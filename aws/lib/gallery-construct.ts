import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
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
    const bucket = new s3.Bucket(this, "bucket", {
      cors: [
        {
          allowedMethods: [
            s3.HttpMethods.GET,
            s3.HttpMethods.POST,
            s3.HttpMethods.PUT,
          ],
          allowedOrigins: [
            "*",
            "http://localhost:3000",
            "https://reneethompson.photos",
          ],
          allowedHeaders: ["*"],
        },
      ],
    });
    bucket.grantReadWrite(fn);

    fn.addEventSource(
      new sources.S3EventSource(bucket, {
        events: [s3.EventType.OBJECT_CREATED],
      })
    );

    const hostedZone = route53.HostedZone.fromLookup(this, "zone", {
      domainName: "reneethompson.photos",
    });
    const myCertificate = new acm.DnsValidatedCertificate(this, "cert", {
      domainName: "media.reneethompson.photos",
      hostedZone,
    });

    const distribution = new cloudfront.Distribution(this, "dist", {
      defaultBehavior: {
        origin: new origins.S3Origin(bucket),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        originRequestPolicy: cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
        responseHeadersPolicy:
          cloudfront.ResponseHeadersPolicy
            .CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT_AND_SECURITY_HEADERS,
      },
      domainNames: ["media.reneethompson.photos"],
      certificate: myCertificate,
    });

    new route53.AaaaRecord(this, "alias", {
      zone: hostedZone,
      recordName: "media.reneethompson.photos",
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    new route53.ARecord(this, "aalias", {
      zone: hostedZone,
      recordName: "media.reneethompson.photos",
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });
  }
}
