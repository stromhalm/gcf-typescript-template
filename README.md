# Starter Template for Google Cloud Functions using TypeScript

This is a minimal starter template that helps to get a Google Cloud Function up and running using TypeScript in Google's NodeJS environment. Local development is made easy.

Install with NPM:
```
npm i
```

## Local Development

Start a local webserver with TypeScript compilation and hot reloading for the example function using
```
npm run function -- --target=myGcfTest
```
Your function `myGcfTest` will be continuously served on `http://localhost:9000`

To compile TypeScript and execute any function as a one-time action in the terminal, run:
```
npm run action -- --target=myActionTest
```

## Continuous Deployment

For CI/CD on GitLab Runners, the `.gitlab-ci.yml` file provides compilation and deployment scripts. Just add your `google-service-account.json` key file to the repository and set the envionment variables to your desired configuration:

* `GCLOUD_PROJECT`: Your Google Cloud project ID, e.g. `project-id`
* `GCLOUD_FUNCTION`: The name of the function you want to deploy, e.g. `myGcfTest`
* `GCLOUD_REGION`: Your desired Cloud Region, e.g. `europe-west1`
* `GCLOUD_MEMORY`: How much memory should be allocated for you function, e.g. `512MB`
