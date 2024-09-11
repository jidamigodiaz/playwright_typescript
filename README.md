# playwright_typescript
This is just a Playwright example to test login functionality of `https://m.apuestas.codere.es/`

## Get started

After clone this repository you need to install all dependencies, so first of all you need to have installed node, then 
you can install all dependencies with:

`npm install`


## Test execution
You can execute all test just with:

`yarn test`

## Some considerations

 * Usually url starting with `m` like `https://m.apuestas.codere.es/` are mobile versions, but in this case this page 
seem to not work properly in a emulated mobile device, so those tests are done only for desktop versions.
 * Page seem to not work at all in webkit (Safari) so only chromium and firefox are enabled.
 * Parallelization is disabled, this is why those tests are slower than expected. Parallelization is disabled mainly for
2 reasons: 
   * first one is that I dont know where are they to be tested so I am not sure about how much parallelization can 
support the machine.
   * second one is that as we only have 1 user, some test can try to access at the same time with same user and this 
   could cause some unexpected behaviour.
 * I decided to not use Gherkin because it was not required, so I decided simplify the example. Can be/not be a good 
idea to use Gherkin, it depends on the workflow, for instance if business people are involved into test workflow with 3 
amigos ceremonies.
 * If a test fail we are going to have a screenshot in our html report, but a needed improvement would be having a 
proper logger module to manage all failures and generate a log file.
 * `.env` file should not be upload to github repo because of security reasons 