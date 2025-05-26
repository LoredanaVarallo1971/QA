# QA
1. Multiple-choice test results are in Cucumber and Cypress Tasks.md
2. In QA repository there is the cucumber project with JUnit and Maven, fully integrated with GitHub Actions.

Project Structure
Source folder: cucumber-java/src/test/java
Maven POM: cucumber-java/pom.xml
Workflow file: .github/workflows/cucumber.yml

How to Run Tests
The tests are automatically triggered:

when you push to the main branch
or create a pull request targeting main
You can view the latest test results in the Actions tab.

Technologies Used
Java 17
JUnit
Cucumber
Maven
GitHub Actions

Example Feature and Step Definitions
Located under:
cucumber-java/src/test/java
Run Cucumber Tests
3.
Cypress tests are defined under `QA/cypress/e2e/`, and automatically executed via GitHub Actions using this workflow:  
[Run Cypress Tests](https://github.com/LoredanaVarallo1971/QA/actions)



Thank you for reviewing my work!
