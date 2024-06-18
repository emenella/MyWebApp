import { StackContext } from "sst/constructs";
import { LandingPage } from './LandingPage';
import { IAM } from './CICD';

export default function main(app: StackContext): void {
    // Set default runtime for all functions
    app.stack.setDefaultFunctionProps({
      runtime: 'nodejs20.x',
    });
  
    new LandingPage(app);
    new IAM(app);
  
    // Add more stacks
  }