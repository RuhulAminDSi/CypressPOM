### README.md for the POM Assignment

```md
# Cypress Page Object Model (POM) Assignment

This project implements an end-to-end (E2E) flow using Cypress and the Page Object Model (POM) design pattern. The flow is based on the OrangeHRM demo site, and the goal is to automate various scenarios using Cypress, ensuring a clean and maintainable code structure.

## Objective

The objective of this assignment is to develop a POM framework for an E2E flow on the OrangeHRM demo site. The scenarios covered include logging in as an admin, creating a new employee, updating employee information, searching for employees, and more.

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

## Setup Instructions

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

## License

This project is licensed under the MIT License.
```

### Notes:
- **Objective and Scenarios**: This section covers the key tasks and goals as outlined in your PDF.
- **Setup Instructions**: Provides commands for setting up and running the project.
- **Requirements**: Highlights important coding practices such as avoiding absolute locators and minimizing code duplication.
- **Folder Structure**: Reflects a typical Cypress POM project structure.

You can modify the placeholder information (e.g., repository URL) as needed for your specific project.
