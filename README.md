# UI Rakuten Task - QA UI Automation Test

## Objectives
The project aims to cover the following scenarios on the Sweetshop website:

1. Add different quantities of at least 4 products to the basket and verify all the selected items are present in the basket.
2. Verify that the total price in GBP matches the sum of individual item prices based on quantity.
3. Change the delivery type to Standard Shipping and verify the updated total price.
4. Fill in personal details and click on the checkout button to simulate a purchase.

Additionally, a CircleCI configuration file has been included to automate the build, test, and deployment processes for QA, Preprod, and Prod environments.

## Project Structure
The project is organized with a focus on separating different responsibilities into dedicated files and folders to maintain a clean and modular structure. Below is a detailed breakdown of the folder structure:

```
UI_Rakuten_Task
├── .circleci
│   └── config.yml                # CircleCI configuration file to automate the CI/CD process.
├── credentials
│   └── credentials.json          # JSON file containing credentials and the Sweetshop website URL.
├── cypress                       # Cypress configuration and related files.
├── ui_tests                      # Main folder containing all test-related code.
│   ├── actions                   # Folder containing files with low-level user actions.
│   │   ├── basketActions.js      # Contains actions related to the basket.
│   │   └── productActions.js     # Contains actions related to adding and handling products.
│   ├── page_objects              # Folder containing page object files that represent the web pages.
│   │   ├── BasketPage.js         # Page object for the basket page.
│   │   └── ProductPage.js        # Page object for the product page.
│   ├── specs                     # Folder containing test specifications.
│   │   └── sweetshop-tests
│   │       └── basket.spec.js    # Test specification for basket functionality.
│   ├── steps                     # Folder containing step definitions used in the tests.
│   │   ├── basketSteps.js        # Steps related to the basket flow.
│   │   └── productSteps.js       # Steps related to product interactions.
│   └── utility                   # Folder containing utility functions.
│       └── randomGenerators.js   # Utility functions for generating random data used in tests.
├── cypress.config.js             # Cypress configuration file.
├── package.json                  # Node.js package file with dependencies and scripts.
├── package-lock.json             # Node.js package lock file.
└── README.md                     # Project readme file (this document).
```

## Folder Descriptions

- **.circleci/config.yml**: Configuration file for CircleCI to automate build, test, and deployment processes across environments (QA, Preprod, and Prod).
- **credentials/credentials.json**: Stores website URL and any sensitive information required for the tests, ensuring easy configuration changes.
- **ui_tests/actions/**: Contains reusable low-level actions that interact with UI elements. This separation provides greater modularity and keeps step definitions clean and readable.
- **ui_tests/page_objects/**: Implements the Page Object Model (POM) pattern, representing different pages of the Sweetshop website. The POM pattern helps encapsulate the web elements and actions that can be performed on each page, promoting maintainability.
- **ui_tests/specs/**: Contains Cypress test files, which include test cases written to validate different scenarios of the Sweetshop application.
- **ui_tests/steps/**: Contains step definitions that use actions to build higher-level interactions with the application. These are used to describe how different features should be tested.
- **ui_tests/utility/**: Contains utility functions such as random data generators to make test data more dynamic and realistic.

## Key Design Patterns and Principles

- **Page Object Model (POM)**: The POM pattern has been employed to separate the representation of pages from test logic. This helps to encapsulate the structure and behavior of web pages, making the code easier to understand and maintain.

- **Actions, Steps, and Specs**: The project follows the principle of separating concerns by organizing low-level user actions in `actions` files, higher-level interactions in `steps`, and tests in `specs`. This results in code that is more readable and easier to maintain.

- **Utility Functions**: Common operations, such as generating random data, are located in the utility folder to avoid code duplication and keep the tests concise.

## Test Scenarios

1. **Verify Items in Basket**
    - Adds multiple products to the basket.
    - Navigates to the basket page and verifies that all selected items are present.

2. **Verify Total Price in Basket**
    - Verifies that the total price displayed matches the sum of individual items based on their quantities.

3. **Verify Total Price Update After Delivery Option Change**
    - Changes the delivery type to Standard Shipping and verifies that the total price updates accordingly.

4. **Checkout Test**
    - Fills in payment information and click on checkout button.

## Running Tests
To run the tests locally, use the following command:
```bash
npm run test
```
This command will initiate Cypress in the Chrome browser and execute all the test scenarios described above.

To use CircleCI for automated testing and deployment, the `.circleci/config.yml` file defines the necessary jobs and workflows. The project is set up to run tests in parallel and deploy to QA, Preprod, and Prod environments based on specific branch conditions.

## Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm run test
   ```

## CircleCI Integration
The project is integrated with CircleCI to automate continuous integration and deployment:
- The `build` job installs dependencies and caches them.
- The `test` job runs Cypress tests and stores the results.
- The `deploy` job is responsible for deploying the application to different environments based on the branch.
