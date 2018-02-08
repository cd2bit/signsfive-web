[Main README](../README.md)

# GITFLOW
#### THIS GITFLOW IS SUBJECT TO BE CHANGED

## Branches Overview
We have 2 primary branches.

- `master`
- `develop`

We also have naming conventions are for our branching.

- `feature/name-of-feature`
- `documentation/name-of-documentation`
- `bugfix/name-of-bugfix`

Our `master` branch are what we release within to production. We only merge `develop` branch into `master`. We never merge any other branches into `master`.

Also we will only merge `develop` with new version

Only we can create an **pull request** of  `feature`, `documentation`, or `bugfix` branches into `develop` with that once **pull request** has been approved by one of member from **deafchi** team.

Once `feature`, `documentation`, or `bugfix` are merged in. Please refer to [DEPLOYMENT](DEPLOYMENT.md) page for deployment process.
