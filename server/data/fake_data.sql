----department
INSERT INTO public.department (name) VALUES ('IT');
INSERT INTO public.department (name) VALUES ('Marketing');
INSERT INTO public.department (name) VALUES ('Finance');
INSERT INTO public.department (name) VALUES ('Sales');
INSERT INTO public.department (name) VALUES ('HR');
INSERT INTO public.department (name) VALUES ('Engineering');
INSERT INTO public.department (name) VALUES ('Customer Service');
INSERT INTO public.department (name) VALUES ('Research and Development');
INSERT INTO public.department (name) VALUES ('Legal');
INSERT INTO public.department (name) VALUES ('Operations');

--users
INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('John', 'Doe', 'john.doe@example.com', 'password123', 1, true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'securepass', 2, false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Alice', 'Johnson', 'alice.johnson@example.com', 'pass1234', 3, false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Bob', 'Williams', 'bob.williams@example.com', 'userpass', 4, true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Eva', 'Davis', 'eva.davis@example.com', 'password456', 5, false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Michael', 'Brown', 'michael.brown@example.com', 'secure123', 6, true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Emily', 'Taylor', 'emily.taylor@example.com', 'pass456', 7, false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('David', 'Jones', 'david.jones@example.com', 'user123', 8, false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Sophia', 'Miller', 'sophia.miller@example.com', 'adminpass', 9, true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, dept_id, is_admin, created_at, updated_at)
VALUES ('Daniel', 'Wilson', 'daniel.wilson@example.com', 'user456', 10, false, NOW(), NULL);

--desk
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-01', 'small', 'standing');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-02', 'medium', 'regular desk');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-03', 'large', 'standing');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-04', 'medium', 'standing');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-05', 'small', 'regular desk');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-06', 'large', 'regular desk');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-07', 'medium', 'regular desk');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-08', 'small', 'standing');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-09', 'large', 'regular desk');
INSERT INTO public.desks (desk_name, size, type) VALUES ('DK-10', 'medium', 'standing');

--bookings
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (11, 1, '2023-12-15');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (2, 2, '2023-12-16');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (3, 3, '2023-12-17');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (4, 4, '2023-12-18');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (5, 5, '2023-12-19');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (6, 6, '2023-12-20');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (7, 7, '2023-12-21');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (8, 8, '2023-12-22');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (9, 9, '2023-12-23');
INSERT INTO public.bookings (user_id, desk_id, reservation_date) VALUES (10, 10, '2023-12-24');
