# description

SQL is a language to manage query in database
mySQL is a DB

# keyword

GENERALLY WE WRITE THE KEYWORDS IN CAPITAL LETTER
CREATE DATABASE <name>;//fore creating
DROP DATABASE <name>; //for delete the db
USE <name>; //for making table in our db

# creating table
  
  goIn ->/image/first_Table.png
  

# some codes that how we make table


CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;
CREATE TABLE details(
Id INT ,
age INT CHECK(age>=18),
Name VARCHAR(30) NOT NULL,
Email VARCHAR(50) UNIQUE,
Followers INT DEFAULT 0 ,
Following INT DEFAULT 0,
PRIMARY KEY (Id)

);
INSERT INTO details (Id,age,Name,Email,Followers,Following)
VALUES
(1,19,'ADAM','adam@yahoo.in',12,145),
(2,19,'BOB','bob123@gamil.com',200,200),
(3,21,'CASSEY','cassey@yahoo.in',0,0),
(4,18,'JONNY','jonny@gamil.com',0,0);
select Id ,Name ,Email from details;
CREATE TABLE posts(
	Id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES details(Id)
    );
INSERT INTO posts (Id,content,user_id)
VALUES
(101,'Hello',1),
(102,'bye bye',3);
INSERT INTO posts (Id,content,user_id)
VALUES
(103,'Hello World',1);
SELECT * FROM posts;
SELECT Name,Email FROM details
WHERE age BETWEEN 15 AND 18;
SELECT Name,Email,Followers FROM details
WHERE age NOT IN (15,16,17,18)
ORDER BY Followers ASC;
SELECT age,sum(Followers) from details
GROUP BY age;
SELECT age,Name from details
order by age desc;
SELECT age ,sum(Followers) FROM details
GROUP BY age 
HAVING age >=12;
UPDATE details
SET age =43
WHERE Name = 'ADAM';
SET SQL_SAFE_UPDATES = 0;
DELETE FROM details
WHERE age IN (18,19,20);
SELECT * FROM details;


------------------------------------------------------------------------------------------------------------
CREATE DATABASE college;
USE college;
CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
subject VARCHAR(30) NOT NULL,
salary INT DEFAULT 0);
INSERT INTO teacher (id,name,subject, salary)
VALUES
(23,'ajay','math',50000),
(47,'bharat','english',60000),
(18,'chetan','chemistry',45000),
(9,'divya','physics',75000);

-- SELECT TTEACHERS WHOSE SALARY IS MORE THAN 55K
SELECT * FROM teacher
WHERE salary>55000;

-- RENAME THE SALARY COLUMN OF TEACHER TABLE TO CTC
ALTER TABLE teacher -- whenever you want to change in schema WE use alter
CHANGE COLUMN salary ctc INT;

-- UPDATE SALARY OF ALL TEACHERS BY GIVING THEM AN INCREMENT OF 25%
UPDATE teacher
SET ctc = ctc + ctc*0.25;

-- ADD A NEW COLUMN FOR TEACHERS CALLED CITY. THE DEFAULT CITY SHOULD BE 'GURGAON'
ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT 'GURGAON';

-- DELETE THE SALARY COLUMN FOR TERACHER TABLE
ALTER TABLE teacher
DROP COLUMN	 ctc;


-- CREATE A TABLE TO STORE STUDENT INFO (ROLL_NO,NAME,CITY,MARKS).
CREATE TABLE student (
	roll_no INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(30) ,
    marks INT);
INSERT INTO student (roll_no,name,city,marks)
values
(110 ,'adam','Delhi',76),
(108 ,'bob','Mumbai',65),
(124 ,'casey','Pune',94),
(112 ,'duke','Pune',80);

-- SELECT ALL STUDENTS WHO SCORED 75+
SELECT * FROM student
WHERE marks>75;

-- FIND NAMES OF ALL CITIES WHERE STUDENTS ARE FROM
	SELECT DISTINCT city FROM student;
    
-- FIND MAXIMUM MARKS OF STUDENTS FROM EACH CITY
SELECT name,marks FROM student
WHERE marks = (SELECT max(marks) FROM student);
SELECT avg(marks) FROM student;

-- ADD A NEW COLUMN grade , ASSIGN grade such that: marks > 80 -> grade = 'O', marks 70-80 -> grade = 'A'
ALTER TABLE student 
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = 'O'
WHERE marks>80;

SET SQL_SAFE_UPDATES = 0;

UPDATE student
SET grade = 'A'
WHERE marks BETWEEN 70 AND 80;
UPDATE student
SET grade = 'B'
WHERE marks<70;

# CLI 4 methods to run your mysql in terminal
1.) write "path/bin/mysql" -u root -p
all your command will run in your terminal
2.) using source file.sql
3.)build a connection between your backend and my sql in index.js file and run your query
4.) workbench

# working on CRUD operation with mySql database
 build a connection with databas