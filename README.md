### README.md for the POM Assignment

```md
# Cypress Page Object Model (POM) Assignment

This project implements an end-to-end (E2E) flow using Cypress and the Page Object Model (POM) design pattern.
The flow is based on the OrangeHRM demo site, and the goal is to automate various scenarios using Cypress, ensuring a clean and maintainable code structure.

## Objective

The objective of this assignment is to develop a POM framework for an E2E flow on the OrangeHRM demo site.
The scenarios covered include logging in as an admin, creating a new employee, updating employee information, searching for employees, and more.

## Scenarios to Implement

1. **Login as Admin**
   - **URL**: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)
   - **Credentials**: Use the provided admin credentials.
   - **Validation**: Assert that the dashboard is visible after a successful login.

2. **Create a New Employee**
   - Navigate to the PIM module and click the Add button.
   - Generate random employee data using the Faker library.
   - Enter the employee's first name and last name generated from Faker.
   - Toggle "Create Login Details" and enter login information.
   - Generate a strong random password with a mix of upper/lower case letters, symbols, and numbers.
   - Save the employee's ID, username, and password into a JSON file.
   - **Validation**:
     - Assert that the employee was created successfully.
     - Assert that the employee's profile displays the correct full name.

3. **Update Employee Information**
   - Navigate to the Employee page.
   - Update the nationality of the employee.
   - Save the updated nationality.
   - **Validation**:
     - Assert that the success message appears.
     - Assert that the updated nationality is correctly saved.

4. **Search by Employee ID**
   - Go to the PIM module and search for the employee using the ID created earlier.
   - **Validation**: Assert that the employee is found in the search results.

5. **Search in Directory by Employee Name**
   - Navigate to the Directory menu and search for the employee by name.
   - **Validation**: Assert that the employee is found in the directory.

6. **Logout**
   - Log out from the admin session.

7. **Login with New Employee Credentials**
   - Use the newly created employee credentials from the JSON file to log in.
   - **Validation**: Assert that the full name is displayed beside the profile icon.

8. **Update My Info**
   - Navigate to the "My Info" section.
   - Select Gender and Blood Type (O+).
   - Save the changes.
   - **Validation**: Assert that the changes are saved successfully.

9. **Logout as New Employee**
   - Log out from the newly created employee session.

## Requirements

- Avoid using absolute locators.
- Implement custom commands to enhance code reusability.
- Minimize code duplication by adhering to the DRY (Don't Repeat Yourself) principle.
- Add documentation when implementing any methods.
- Create a `README.md` file to document the project.






##Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/YourRepository.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd YourRepository
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the tests**:
   - To open the Cypress Test Runner:
     ```bash
     npx cypress open
     ```
   - To run the tests in headless mode:
     ```bash
     npx cypress run
     ```

## Folder Structure

```bash
CypressPOM/
├── cypress/
│   ├── e2e/                   # Test files
│   ├── fixtures/               # Test data (JSON files)
│   ├── support/
│   │   ├── PageObjs/           # Page Object Model files
│   │   ├── commands.js         # Custom Cypress commands
│   │   └── index.js            # Global configurations and behavior
├── cypress.config.js           # Cypress configuration file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

## Contributing

If you would like to contribute to this project, please fork the repository, create a new branch, and submit a pull request.
## Cypress Related
Here’s a sample README text based on your instructions:

---

# Cypress Automation Setup

## Running Test Suites

### Running All Test Suites in Headed Mode

To run all the test files located in the `cypress/integration/` directory in headed mode, use the following command:

```bash
npx cypress run --spec "cypress/integration/**/*.spec.js" --headed
```

### Running Specific Test Files Sequentially in Headed Mode

To run specific test files sequentially in headed mode, use the following command:

```bash
npx cypress run --headed --spec "cypress/e2e/Sites.cy.js", "cypress/e2e/Users.cy.js", "cypress/e2e/Assets.cy.js", "cypress/e2e/WorkOrders.cy.js"
```

### Running Tests in a Specific Browser

To run your Cypress automation flow in a specific browser, for example, Chrome, use the following command:

```bash
npx cypress run --browser chrome
```

## Configuring Test Isolation

To prevent Cypress from automatically clearing the session, cookies, localStorage, and page state between tests, set `testIsolation: false` in your Cypress configuration file (`config.js`):

```javascript
module.exports = {
  e2e: {
    testIsolation: false,
    // other configuration options
  }
};
```

This setting allows you to write separate `it()` blocks without resetting the application state between tests.

## Generating Reports with Mochawesome

To include Mochawesome reporting in your Cypress tests, follow these steps:

1. Install the `cypress-mochawesome-reporter` package:

    ```bash
    npm install cypress-mochawesome-reporter --save-dev
    ```

2. Update your Cypress configuration (`config.js`) to include the reporter:

    ```javascript
    module.exports = {
      e2e: {
        reporter: 'cypress-mochawesome-reporter',
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },
      }
    };
    ```

3. Add the following import to your `cypress/support/e2e.js` file:

    ```javascript
    import 'cypress-mochawesome-reporter/register';
    ```

## Using Faker for Test Data

To generate fake data in your Cypress tests using the Faker.js library, follow these steps:

1. Install the `@faker-js/faker` package:

    ```bash
    npm install @faker-js/faker --save-dev
    ```

2. Import the Faker library into your test files:

    ```javascript
    const { faker } = require('@faker-js/faker');
    ```

You can now use Faker.js to generate random names, emails, addresses, and other test data.

---

This README provides instructions on how to configure and run Cypress tests with various options and additional tools like Mochawesome and Faker. If you need further customization or details, feel free to ask!
## Others

You can modify the placeholder information (e.g., repository URL) as needed for your specific project.

