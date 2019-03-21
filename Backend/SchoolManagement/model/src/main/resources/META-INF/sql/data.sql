/**
 * Author:  hadji
 * Created: 20 mars 2019
 */

/************************************* HEADMASTER CREATION *************************************/

INSERT INTO `User`(`id`, `birthDate`, `email`, `firstname`, `lastname`, `password`, `status`) VALUES (1, '1970-07-09', 'headmaster@mail.com', 'headmaster', 'headmaster', 'password', 'HEADMASTER');
INSERT INTO `Headmaster` (`id`) VALUES ('1');

/*************************************** CLASSES CREATION ***************************************/

INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (1, 15, 1, 1)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (2, 20, 1, 2)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (3, 35, 1, 3)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (4, 25, 1, 4)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (5, 20, 2, 5)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (6, 20, 2, 6)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (7, 40, 2, 7)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (8, 20, 2, 8)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (9, 20, 3, 9)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (10, 20, 3, 10)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (11, 10, 3, 11)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (12, 20, 3, 12)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (13, 30, 4, 13)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (14, 20, 4, 14)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (15, 25, 4, 15)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (16, 30, 4, 16)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (17, 20, 5, 17)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (18, 15, 5, 18)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (19, 20, 5, 19)
INSERT INTO `Classroom`(`id`, `capacity`, `floorNumber`, `roomNumber`) VALUES (20, 20, 5, 20)

/************************************* SUBJECTS CREATION *************************************/

INSERT INTO `Subject`(`id`, `name`) VALUES (1, 'MATHEMATICS');
INSERT INTO `Subject`(`id`, `name`) VALUES (2, 'SCIENCE');
INSERT INTO `Subject`(`id`, `name`) VALUES (3, 'PHYSICS');
INSERT INTO `Subject`(`id`, `name`) VALUES (4, 'CHEMISTRY');
INSERT INTO `Subject`(`id`, `name`) VALUES (5, 'GEOGRAPHY');
INSERT INTO `Subject`(`id`, `name`) VALUES (6, 'HISTORY');
INSERT INTO `Subject`(`id`, `name`) VALUES (7, 'FRENCH');
INSERT INTO `Subject`(`id`, `name`) VALUES (8, 'ENGLISH');