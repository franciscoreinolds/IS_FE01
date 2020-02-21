SET @@auto_increment_increment=1;

-- patients

insert into patient (id, name, address, dob, phone_number) values (1, 'Francisco Reinolds', 'Madeira', '2020-01-01 10:10:10', '123456789');
insert into patient (id, name, address, dob, phone_number) values (2,'José Costa', 'Braga', '2020-01-01 10:10:10', '123456789');
insert into patient (id, name, address, dob, phone_number) values (3,'Alexandru Domente', 'Moldávia', '2020-01-01 10:10:10', '123456789');

-- episode types

insert into episode_type (id, name) values (1, 'Consulta');

-- doctors

insert into doctor (id, name) values (1, 'Cláudia Vasconcelos');
insert into doctor (id, name) values (2, 'Prima do Zé');
insert into doctor (id, name) values (3, 'Conci');

-- medical_act

insert into medical_act (id, name) values (1, 'Alergia e Imunologia');
insert into medical_act (id, name) values (2, 'Anestesiologia');
insert into medical_act (id, name) values (3, 'Dermatologia');
insert into medical_act (id, name) values (4, 'Neurologia');
insert into medical_act (id, name) values (5, 'Urologia');