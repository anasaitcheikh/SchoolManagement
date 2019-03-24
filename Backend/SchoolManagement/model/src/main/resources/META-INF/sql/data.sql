/**
 * Author:  hadji
 * Created: 20 mars 2019
 */

/************************************* HEADMASTER CREATION *************************************/

INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (1, '1970-07-09', 'headmaster@mail.com', 'Tony', 'STARK', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'HEADMASTER');
INSERT INTO `Headmaster` (`id`) VALUES ('1');

/*************************************** CLASSES CREATION ***************************************/


INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (1, 4, 'ELEMENTARY', 'E4-01', 2019);

INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (2, 7, 'MIDDLE', 'M7-01', 2019);

INSERT INTO `Class` (`id`, `grade`, `level`, `name`, `schoolYear`) VALUES (3, 11, 'HIGH', 'H11-01', 2019);

/*************************************** STUDENTS CREATION ***************************************/

INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (2, '2010-03-16', 'henry.williams@stu.mail.com', 'Henry', 'WILLIAMS', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (3, '2010-06-07', 'sarah.taylor@stu.mail.com', 'Sarah', 'TAYLOR', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (4, '2010-07-07', 'james.miller@stu.mail.com', 'James', 'MILLER', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (5, '2010-04-09', 'mary.jones@stu.mail.com', 'Mary', 'JONES', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (6, '2010-05-10', 'charles.davis@stu.mail.com', 'Charles', 'DAVIS', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');

INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (7, '2007-04-09', 'thomas.taylor@stu.mail.com', 'Thomas', 'TAYLOR', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (8, '2007-08-10', 'martha.jones@stu.mail.com', 'Martha', 'JONES', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (9, '2007-06-09', 'john.brown@stu.mail.com', 'John', 'BROWN', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');


INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (10, '2003-04-12', 'eliza.miller@stu.mail.com', 'Eliza', 'MILLER', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (11, '2003-02-01', 'david.wilson@stu.mail.com', 'David', 'WILSON', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (12, '2003-05-10', 'joseph.clark@stu.mail.com', 'Joseph', 'CLARK', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');
INSERT INTO `User` (`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (13, '2003-08-12', 'jane.brown@stu.mail.com', 'Jane', 'BROWN', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'STUDENT');

INSERT INTO `Student` (`id`, `id_class`) VALUES (2, 1);
INSERT INTO `Student` (`id`, `id_class`) VALUES (3, 1);
INSERT INTO `Student` (`id`, `id_class`) VALUES (4, 1);
INSERT INTO `Student` (`id`, `id_class`) VALUES (5, 1);
INSERT INTO `Student` (`id`, `id_class`) VALUES (6, 1);

INSERT INTO `Student` (`id`, `id_class`) VALUES (7, 2);
INSERT INTO `Student` (`id`, `id_class`) VALUES (8, 2);
INSERT INTO `Student` (`id`, `id_class`) VALUES (9, 2);

INSERT INTO `Student` (`id`, `id_class`) VALUES (10, 3);
INSERT INTO `Student` (`id`, `id_class`) VALUES (11, 3);
INSERT INTO `Student` (`id`, `id_class`) VALUES (12, 3);
INSERT INTO `Student` (`id`, `id_class`) VALUES (13, 3);

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

INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (14, '1970-07-09', 'jon.snow@mail.com', 'Jon', 'SNOW', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (15, '1975-08-04', 'arya.stark@mail.com', 'Arya', 'STARK', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (16, '1970-12-12', 'tyrion.lannister@mail.com', 'Tyrion', 'LANNISTER', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (17, '1969-01-02', 'sansa.stark@mail.com', 'Sansa', 'STARK', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (18, '1976-09-06', 'khal.drogo@mail.com', 'Khal', 'DROGO', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (19, '1968-05-08', 'petyr.baelish@mail.com', 'Petyr', 'BAELISH', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (20, '1979-06-09', 'ramsay.bolton@mail.com', 'Ramsay', 'BOLTON', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');
INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (21, '1970-07-09', 'daario.naharis@mail.com', 'Daario', 'NAHARIS', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'TEACHER');

INSERT INTO `Teacher` (`id`, `specialty`) VALUES (14, 'MATHEMATICS');              
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (15, 'SCIENCE');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (16, 'PHYSICS');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (17, 'CHEMISTRY');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (18, 'GEOGRAPHY');              
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (19, 'HISTORY');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (20, 'FRENCH');
INSERT INTO `Teacher` (`id`, `specialty`) VALUES (21, 'ENGLISH');

/************************************* MARKS CREATION *************************************/

INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (1, 2, 1, 15);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (2, 2, 2, 18);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (3, 2, 3, 18);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (4, 2, 4, 20);

INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (5, 13, 1, 15);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (6, 13, 2, 18);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (7, 13, 3, 17);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (8, 13, 4, 20);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (9, 13, 5, 15);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (10, 13, 6, 10);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (11, 13, 7, 12);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (12, 13, 8, 13);

INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (13, 12, 1, 19);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (14, 12, 2, 13);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (15, 12, 3, 15);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (16, 12, 4, 14);

INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (17, 11, 1, 2);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (18, 11, 2, 3);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (19, 11, 3, 7);
INSERT INTO `Mark` (`id`, `id_student`, `id_subject`, `mark`) VALUES (20, 11, 4, 10);

/**************************************** STAFF CREATION ****************************************/

INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (1, 'Sasuke', 'UCHIHA','CLEANER', 1000) 
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (2,'Ichigo', 'KUROSAKI','LIBRARIAN',1000) 
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (3,'Ash', 'KETCHUM','MANAGER',2000)    
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (4,'Kakashi', 'HATAKE','MANAGER',1010)     
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (5,'Sponge', 'BOB','SECRETARY',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (6,'Mickey', 'MOUSE','CLEANER',1200)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (7,'Natsu', 'DRAGNEEL','LIBRARIAN',1300) 
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (8,'Naruto', 'UZUMAKI','COOK',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (9,'Roy', 'MUSTANG','CLEANER',1100) 
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (10,'Shikamaru', 'NARA','COOK',1000)   
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (11,'Boruto', 'UZUMAKI','CLEANER',1000)
INSERT INTO `Staff`(`id`, `firstname`, `lastname`, `role`, `salary`) VALUES (12,'Kenshin', 'HIMURA','SECRETARY',1200)  

/**************************************** MESSAGES CREATION ****************************************/

INSERT INTO `Message` (`id`, `dateAndTime`, `msg`, `object`, `id_recipient`, `id_sender`) VALUES (1, '2019-03-21 00:00:00', 'Lorem Ipsum Sit 1', 'Lorem Ipsum 1', 1, 14);
INSERT INTO `Message` (`id`, `dateAndTime`, `msg`, `object`, `id_recipient`, `id_sender`) VALUES (2, '2019-03-21 00:00:00', 'Lorem Ipsum Sit 2', 'Lorem Ipsum 2', 2, 14);
INSERT INTO `Message` (`id`, `dateAndTime`, `msg`, `object`, `id_recipient`, `id_sender`) VALUES (3, '2019-03-21 00:00:00', 'Lorem Ipsum Sit 3', 'Lorem Ipsum 3', 1, 19);
INSERT INTO `Message` (`id`, `dateAndTime`, `msg`, `object`, `id_recipient`, `id_sender`) VALUES (4, '2019-03-21 00:00:00', 'Lorem Ipsum Sit 4', 'Lorem Ipsum 4', 1, 20);
INSERT INTO `Message` (`id`, `dateAndTime`, `msg`, `object`, `id_recipient`, `id_sender`) VALUES (5, '2019-03-21 00:00:00', 'Lorem Ipsum Sit 5', 'Lorem Ipsum 5', 2, 1);

/**************************************** COURSE CREATION ****************************************/
INSERT INTO `course` (`id`, `date`, `status`, `time`, `id_class`, `id_classroom`, `id_subject`, `id_teacher`) VALUES ('1', '2019-03-25', true, '14:00:00', '1', '1', '1', '14'), ('2', '2019-03-27', true, '10:00:00', '1', '2', '2', '15');
INSERT INTO `course` (`id`, `date`, `status`, `time`, `id_class`, `id_classroom`, `id_subject`, `id_teacher`) VALUES ('3', '2019-03-28', true, '16:00:00', '1', '3', '3', '16'), ('4', '2019-03-29', false, '08:00:00', '1', '4', '4', '17');

INSERT INTO `course` (`id`, `date`, `status`, `time`, `id_class`, `id_classroom`, `id_subject`, `id_teacher`) VALUES ('5', '2019-03-25', true, '10:00:00', '2', '5', '1', '14'), ('6', '2019-03-27', true, '14:00:00', '2', '6', '2', '15');
INSERT INTO `course` (`id`, `date`, `status`, `time`, `id_class`, `id_classroom`, `id_subject`, `id_teacher`) VALUES ('7', '2019-03-28', true, '09:00:00', '2', '7', '3', '16'), ('8', '2019-03-29', false, '16:00:00', '2', '8', '4', '17');

INSERT INTO `course` (`id`, `date`, `status`, `time`, `id_class`, `id_classroom`, `id_subject`, `id_teacher`) VALUES ('9', '2019-03-25', true, '10:00:00', '3', '9', '1', '14'), ('10', '2019-03-27', true, '17:00:00', '3', '10', '2', '15');
INSERT INTO `course` (`id`, `date`, `status`, `time`, `id_class`, `id_classroom`, `id_subject`, `id_teacher`) VALUES ('11', '2019-03-28', true, '08:00:00', '3', '11', '3', '16'), ('12', '2019-03-29', false, '14:00:00', '3', '12', '4', '17');