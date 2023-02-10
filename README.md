# Testing APIS with Databases

## Key provided scripts and intended functionality
**`npm run unitTests`** (from within api folder)
- triggers a test run of unit tests only
- docker exec dev_api bash -c "npm run unitTests"

**`bash _scripts/startDev.sh`**
- starts api & db services
- runs db migrations
- seeds db for development
- serves api on localhost:3000

**`bash _scripts/startTest.sh`**
- starts api & db services
- runs db migrations
- attaches to api container and triggers full test run
- no ports mapped to local host

**`bash _scripts/teardown.sh`**
- stop all running services
- removes containers
- removes volumes

These enviroments will take a little time to set up especially the first time you run but both will listen for changes when running *except* for database setup files ie. anything in `db/migrations`. 

***Do not run both dev and test environments at the same time.***
