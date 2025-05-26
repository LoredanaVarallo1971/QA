+-----+-------------------------------------------------------+-------------+
|     | **Database Questions**                                | **Answers** |
+=====+=======================================================+=============+
| 1\. | Which SQL statement lists the buyer names in the      | a\)         |
|     | buyer table that are not contained in the invoice     |             |
|     | table?                                                |             |
|     |                                                       |             |
|     | a)  select b.name                                     |             |
|     |                                                       |             |
|     | from buyer b                                          |             |
|     |                                                       |             |
|     | left join invoice i on b.id = i.buyer_id              |             |
|     |                                                       |             |
|     | where i.buyer_id is null;                             |             |
|     |                                                       |             |
|     | b)  select distinct b.name                            |             |
|     |                                                       |             |
|     | from buyer b                                          |             |
|     |                                                       |             |
|     | join invoice i on b.id = i.buyer_id;                  |             |
|     |                                                       |             |
|     | c)  select b.name                                     |             |
|     |                                                       |             |
|     | from buyer b                                          |             |
|     |                                                       |             |
|     | join invoice i on b.id = i.buyer_id;                  |             |
|     |                                                       |             |
|     | d)  select distinct b.name                            |             |
|     |                                                       |             |
|     | from buyer b                                          |             |
|     |                                                       |             |
|     | left join invoice i on b.id = i.buyer_id;             |             |
+-----+-------------------------------------------------------+-------------+
| 2\. | Which SQL statement returns the department number     | Choose an   |
|     | with the maximum salary given to any employee?        | item.       |
|     |                                                       |             |
|     | a)  select department_id, max(salary) from employees; | None        |
|     |                                                       |             |
|     | b)  select max(salary) from employees group by        |             |
|     |     department_id ;                                   |             |
|     |                                                       |             |
|     | c)  select department_id, max(salary) from employees  |             |
|     |     group by department_id;                           |             |
|     |                                                       |             |
|     | d)  select max(salary) from employees;                |             |
+-----+-------------------------------------------------------+-------------+

+-----+-------------------------------------------------------+------------+
| 3\. | What does the below query do:                         | b\)        |
|     |                                                       |            |
|     | update inv                                            |            |
|     |                                                       |            |
|     | set inv.status_id =                                   |            |
|     |                                                       |            |
|     | (case                                                 |            |
|     |                                                       |            |
|     | when inv.buyer_id = 1 then \'In Progress\'            |            |
|     |                                                       |            |
|     | when inv.buyer_id = 2 then \'New\'                    |            |
|     |                                                       |            |
|     | else \'Rejected\'                                     |            |
|     |                                                       |            |
|     | end)                                                  |            |
|     |                                                       |            |
|     | from invoices inv;                                    |            |
|     |                                                       |            |
|     | a)  Updates no invoices                               |            |
|     |                                                       |            |
|     | b)  Updates all invoices for buyer 1 to \'In          |            |
|     |     Progress\', buyer 2\'s invoices to \'New\' and    |            |
|     |     any other buyer\'s invoices to \'Rejected\'       |            |
|     |                                                       |            |
|     | c)  Updates all invoices to \'Rejected\'              |            |
|     |                                                       |            |
|     | d)  Throws exception                                  |            |
+=====+=======================================================+============+
| 4\. | Which statement below is correct to insert 'Baker' as | d\)        |
|     | the lastname in the persons table?                    |            |
|     |                                                       |            |
|     | a)  Insert into persons (\'Baker\') into lastname;    |            |
|     |                                                       |            |
|     | b)  Insert into persons values (\'Baker\');           |            |
|     |                                                       |            |
|     | c)  Insert into persons (lastname) values             |            |
|     |     (\'Baker\');                                      |            |
|     |                                                       |            |
|     | d)  Insert (\'Baker\') into persons (lastname);       |            |
+-----+-------------------------------------------------------+------------+
| 5\. | What is the output of the below query?                | b\)        |
|     |                                                       |            |
|     | *MS SQL:* select substring(\'123456789\',             |            |
|     | charindex(\'b\', \'abcabcabc\'), 4);                  |            |
|     |                                                       |            |
|     | *Oracle:* select substr(\'123456789\',                |            |
|     | instr(\'abcabcabc\', \'b\'), 4) from dual;            |            |
|     |                                                       |            |
|     | a)  6789                                              |            |
|     |                                                       |            |
|     | b)  2345                                              |            |
|     |                                                       |            |
|     | c)  1234                                              |            |
|     |                                                       |            |
|     | d)  456789                                            |            |
+-----+-------------------------------------------------------+------------+
| 6\. | A table my_numbers has 6 number values: 1, 2, null,   | b\)        |
|     | 1, 1, null. Predict the output of the below query:    |            |
|     |                                                       |            |
|     | select count(num) from my_numbers;                    |            |
|     |                                                       |            |
|     | a)  6                                                 |            |
|     |                                                       |            |
|     | b)  4                                                 |            |
|     |                                                       |            |
|     | c)  3                                                 |            |
|     |                                                       |            |
|     | d)  Throws exception because count function does not  |            |
|     |     work with null value                              |            |
+-----+-------------------------------------------------------+------------+

**Cucumber**

- Implement a feature file in java that compares two lists to ensure
  they contain the same items with three attributes (name, price, and
  category), regardless of order. If there are discrepancies, log a
  detailed message specifying which items and columns do not match. You
  can use any Java versions, libraries, frameworks and tools.

- Feature file which should be implemented is located here:
  https://github.com/matepapphu/interview/blob/main/task.feature

**Cypress**

Write a Cypress test in GitHub (or send code in text editor) to perform
the following actions:

1\. Open the page:
<https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login>

2\. Log in using the customer \'Harry Potter\'

3\. Deposit 100, 10 and 5. Check always that the confirmation message
contains \'Deposit Successful\'

4\. Verify that the Balance is 115

5\. Check that the sum of the amounts in the Transaction screen is equal
to 115

6\. Implement github pipeline (using github actions) that automatically
runs the test suite inside docker
