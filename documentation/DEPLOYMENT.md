[Main README](../README.md)

# DEPLOYMENT
#### THIS DEPLOYMENT IS SUBJECT TO BE CHANGED

Once we merge into `develop`, it will be sent to **tavis-ci** to run test and if it pass, it will be then is automatically build and deployed to [signsfive-web-staging](https://signsfive-web-staging.herokuapp.com).

Then we need to version the app, we can do that by run `npm version patch|minor|major`

Depending on scope of updates - but we follow [Semantic Versioning](https://docs.npmjs.com/getting-started/semantic-versioning).

- `patch` - minor code changes, documenation updates, or bugfixes
- `minor` - new feature that does not break existing features
- `major` - huge codebase changes, features that breaks backward compaitablity.

Next, once we finish bump version and make **pull request**, and once that approves - merge it. We also will need to request manual build and deploy into production.
