QA test
1. Multiple-choice test results are available in Cucumber and Cypress Tasks.md.

2.The Cucumber project (Java, JUnit, Maven) is located in the QA repository and fully integrated with GitHub Actions.

Project structure:
Source: cucumber-java/src/test/java
Maven POM: cucumber-java/pom.xml
Workflow: .github/workflows/cucumber.yml

Test execution:
Automatically triggered on push to main or when opening a pull request targeting main.
Results available in the Actions tab on GitHub.

Technologies:
Java 17
JUnit
Cucumber
Maven
GitHub Actions

3. The Cypress tests are located under QA/cypress/e2e/.

They are executed automatically via GitHub Actions.
The Cypress suite is run inside a Docker container, demonstrating CI/CD integration in an isolated test environment.


Thank you!
Loredana Varallo
