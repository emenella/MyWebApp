import { StackContext, NextjsSite } from "sst/constructs";

export function LandingPage({ stack }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
    path: "packages/landing-page",
    customDomain:
    {
      domainName: "emenella.fr",
      domainAlias: "www.emenella.fr",
    },
    warm: 20,
  });
}
