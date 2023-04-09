CREATE TABLE cameras(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255),
    url varchar(255),
    price integer,
    PRIMARY KEY(id)
);
CREATE TABLE cameranetworks(
   cn_id int NOT NULL AUTO_INCREMENT,
     id int,
    name varchar(255) NOT NULL ,
    descriptions varchar(255),
    url varchar(255),
    cameras varchar(255),
    type varchar(255),
    price integer,
     FOREIGN KEY(id) REFERENCES cameras(id),
     PRIMARY KEY(cn_id)
);