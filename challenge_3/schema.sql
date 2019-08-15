create database Checkout;

use Checkout;

create table Personal(
    id int auto_increment primary key, 
    name char(100), 
    email char(100), 
    password char(100)
);

create table Address(
    user_id int,
    line1 char(100),
    line2 char(100),
    city char(100),
    state char(100),
    zipcode1 char(100),
    phone char(100),
    foreign key (user_id) references Personal(id)
);

create table CreditCard(
    user_id int,
    number char(12),
    date char(5),
    cvv char(3),
    zipcode2 char(100),
    foreign key (user_id) references Personal(id)
);
