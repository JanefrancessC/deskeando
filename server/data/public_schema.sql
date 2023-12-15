DROP TABLE IF EXISTS public.users CASCADE;
DROP TABLE IF EXISTS public.bookings CASCADE;
DROP TABLE IF EXISTS public.desks CASCADE;
DROP TABLE IF EXISTS public.department CASCADE;
DROP TABLE IF EXISTS public.desk_size CASCADE;
DROP TABLE IF EXISTS public.desk_type CASCADE;

CREATE TABLE IF NOT EXISTS public.department(
    department_id int UNIQUE GENERATED ALWAYS AS IDENTITY,
    name text UNIQUE NOT NULL
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.users(
    user_id int UNIQUE GENERATED ALWAYS AS IDENTITY,
    first_name text,
    last_name text,
    email text UNIQUE NOT NULL,
    passwd text NOT NULL,
    dept_id int NOT NULL,
    is_admin boolean DEFAULT false,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp,
    CONSTRAINT users_pkey PRIMARY KEY(user_id),
    CONSTRAINT user_dept_fkey FOREIGN KEY(dept_id) REFERENCES public.department(department_id)
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.desks
(
    desk_id int UNIQUE GENERATED ALWAYS AS IDENTITY,
    desk_name text NOT NULL,
    size text NOT NULL,
    type text NOT NULL,
    CONSTRAINT desk_pkey PRIMARY KEY(desk_id)
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.bookings
(
    booking_id int UNIQUE GENERATED ALWAYS AS IDENTITY,
    user_id int,
    desk_id int,
    created_at date NOT NULL DEFAULT NOW(),
    reservation_date date NOT NULL,
    updated_at date,
    CONSTRAINT booking_user_fkey FOREIGN KEY(user_id) REFERENCES public.users(user_id),
    CONSTRAINT booking_desk_fkey FOREIGN KEY(desk_id) REFERENCES public.desks(desk_id)
)
TABLESPACE pg_default;


CREATE TABLE IF NOT EXISTS public.desk_size(
    size_id int UNIQUE GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.desk_type(
    type_id int UNIQUE GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL
)
TABLESPACE pg_default;
