INSERT INTO department (dept_name)
VALUES  ("HR"),
        ("Accounting"),
        ("Management");
        ("Sales"),
        ("Legal"),        


INSERT INTO role (title, salary, department_id)
VALUES  ("HR", 65000, 1),
        ("Salesperson", 35000, 4),
        ("Manager", 50000, 3),
        ("Accountant", 55000, 2),
        ("Lawyer", 150000, 4),
        ("Legal Clerk", 40000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Rob", "Smith", 1, null),
        ("Bob", "Thebuilder", 3, null),
        ("Dora", "Theexplorer", 2, null),
        ("Mike", "Jordan", 5, 3);