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

----user
INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('John', 'Doe', 'john.doe@example.com', 'password123', 'IT', true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'securepass', 'Marketing', false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Alice', 'Johnson', 'alice.johnson@example.com', 'pass1234', 'Finance', false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Bob', 'Williams', 'bob.williams@example.com', 'userpass', 'Sales', true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Eva', 'Davis', 'eva.davis@example.com', 'password456', 'HR', false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Michael', 'Brown', 'michael.brown@example.com', 'secure123', 'Engineering', true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Emily', 'Taylor', 'emily.taylor@example.com', 'pass456', 'Customer Service', false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('David', 'Jones', 'david.jones@example.com', 'user123', 'Research and Development', false, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Sophia', 'Miller', 'sophia.miller@example.com', 'adminpass', 'Legal', true, NOW(), NULL);

INSERT INTO public.users (first_name, last_name, email, passwd, department, is_admin, created_at, updated_at)
VALUES ('Daniel', 'Wilson', 'daniel.wilson@example.com', 'user456', 'Operations', false, NOW(), NULL);
