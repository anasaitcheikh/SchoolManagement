/**
 * Author:  hadji
 * Created: 20 mars 2019
 */

/************************************* HEADMASTER CREATION *************************************/

INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (1, '1970-07-09', 'headmaster@mail.com', 'headmaster', 'headmaster', 'password', 'HEADMASTER');
INSERT INTO `Headmaster` (`id`) VALUES ('1');

/*************************************** CLASSES CREATION ***************************************/

INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (1, 1, 'ELEMENTARY', 'C1', 2019);
INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (2, 1, 'ELEMENTARY', 'K1', 2019);
INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (3, 1, 'MIDDLE', 'L1', 2019);
INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (4, 1, 'ELEMENTARY', 'S1', 2019);
INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (5, 1, 'MIDDLE', 'M1', 2019);
INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (6, 1, 'HIGH', 'T1', 2019);

/*************************************** STUDENTS CREATION ***************************************/

INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (2, '2019-07-07', 'student@mail.com', 'Stu', 'DENT', 'password', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (3, '2019-07-07', 'student2@mail.com', 'Stu1', 'DENT1', 'password', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (4, '2019-07-07', 'student3@mail.com', 'Stu2', 'DENT2', 'password', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (5, '2019-07-07', 'student4@mail.com', 'Stu3', 'DENT3', 'password', 'STUDENT');

INSERT INTO `Student` (`id`, `id_class`) VALUES (2, 1);
INSERT INTO `Student` (`id`, `id_class`) VALUES (3, 1);
INSERT INTO `Student` (`id`, `id_class`) VALUES (4, 6);
INSERT INTO `Student` (`id`, `id_class`) VALUES (5, 6);

/************************************* CLASSES CREATION *************************************/

INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (1, 15, 1, 1);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (2, 20, 1, 2);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (3, 35, 1, 3);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (4, 25, 1, 4);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (5, 20, 2, 5);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (6, 20, 2, 6);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (7, 40, 2, 7);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (8, 20, 2, 8);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (9, 20, 3, 9);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (10, 20, 3, 10);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (11, 10, 3, 11);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (12, 20, 3, 12);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (13, 30, 4, 13);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (14, 20, 4, 14);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (15, 25, 4, 15);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (16, 30, 4, 16);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (17, 20, 5, 17);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (18, 15, 5, 18);
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (19, 20, 5, 19;
INSERT INTO `Classroom` (`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (20, 20, 5, 20);

/************************************* SUBJECTS CREATION *************************************/

INSERT INTO `Subject`(`id`, `name`) VALUES (1, 'MATHEMATICS');
INSERT INTO `Subject`(`id`, `name`) VALUES (2, 'SCIENCE');
INSERT INTO `Subject`(`id`, `name`) VALUES (3, 'PHYSICS');
INSERT INTO `Subject`(`id`, `name`) VALUES (4, 'CHEMISTRY');
INSERT INTO `Subject`(`id`, `name`) VALUES (5, 'GEOGRAPHY');
INSERT INTO `Subject`(`id`, `name`) VALUES (6, 'HISTORY');
INSERT INTO `Subject`(`id`, `name`) VALUES (7, 'FRENCH');
INSERT INTO `Subject`(`id`, `name`) VALUES (8, 'ENGLISH');

/************************************* TEACHERS CREATION *************************************/

INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (6, '1970-07-09', 'teacher1@mail.com', 'Teacher1', 'Teacher1', 'password', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (7, '1970-07-09', 'teacher2@mail.com', 'Teacher2', 'Teacher2', 'password', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (8, '1970-07-09', 'teacher3@mail.com', 'Teacher3', 'Teacher3', 'password', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (9, '1970-07-09', 'teacher4@mail.com', 'Teacher4', 'Teacher4', 'password', 'TEACHER');

INSERT INTO `Teacher` (`id`, `specialty`) VALUES (6, 'MATHEMATICS');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (7, 'MATHEMATICS');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (8, 'SCIENCE');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (9, 'GEOGRAPHY');

/************************************* MARKS CREATION *************************************/

INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (1, 2, 1, 15);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (2, 3, 1, 18);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (3, 4, 1, 18);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (4, 5, 1, 20);

/**************************************** STAFF CREATION ****************************************/

INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (1, 'Yann', 'DUC','CLEANER', 1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (2,'Tommy', 'MY','LIBRARIAN',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (3,'Jerry', 'RY','MANAGER',2000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (4,'Scooby', 'DO','MANAGER',1010)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (5,'Sponge', 'BOB','SECRETARY',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (6,'Mickey', 'MOUSE','CLEANER',1200)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (7,'Kiri', 'KOU','LIBRARIAN',1300)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (8,'Naru', 'TO','COOK',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (9,'Sango', 'KU','CLEANER',1100)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (10,'Kir', 'OUA','COOK',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (11,'Boru', 'TO','CLEANER',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (12,'Mo', 'TO','SECRETARY',1200)