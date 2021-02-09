-- Seeds for SQL table. --
USE companyDB;

-- Insert Rows into department table --
INSERT INTO departments (name)
VALUES ("Human Resources"), ("Finance"), ("Communications"), ("Legal"), ("Operations");

 -- Insert Rows into role table --
INSERT INTO roles (title, salary, departments_id)
VALUES ("President", 495000.00, 5);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Vice President", 205000.00, 1);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Vice President", 235000.00, 2);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Vice President", 195000.00, 3);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Cousel", 250000.00, 4);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Talent Director", 145000.00, 1);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Managing Director", 150000.00, 2);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Director", 115000.00, 3);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Attorney", 185000.00, 4);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Manager", 110000.00, 1);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Business Manager", 125000.00, 2);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Manager", 95000.00, 3);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Paralegal", 115000.00, 4);

INSERT INTO roles (title, salary, departments_id)
VALUES ("People Partner", 50000.00, 1);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Analyst", 85000.00, 2);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Coordinator", 50000.00, 3);

INSERT INTO roles (title, salary, departments_id)
VALUES ("Legal Assistant", 55000.00, 4);

-- Insert  Rows into employee table --
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Andrea", "Frey", 1, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Paul", "Chen", 2, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Sandra", "Rodgers", 3, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Casey", "Downey", 4, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Viviana", "Fuentes", 5, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Christy", "Lannister", 6, 2);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Eldor", "Flowers", 7, 3);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Tequila", "Mockingbird", 8, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Sam", "Patel", 9, 5);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Jason", "Balistar", 10, 6);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Melissa", "Pentalopis", 11, 7);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Ariana", "Mundane", 12, 8);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Shakira", "Grande", 13, 9);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Beyonce", "Child", 14, 10);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Ramon", "San Cristo", 15, 11);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Michael", "Snow", 16, 12);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Vanessa", "Shoju", 17, 13);

