DROP TABLE IF EXISTS public.users;
DROP TABLE IF EXISTS public.bookings;
DROP TABLE IF EXISTS public.desks;
DROP TABLE IF EXISTS public.department;
DROP TABLE IF EXISTS public.desk_size;
DROP TABLE IF EXISTS public.desk_type;

CREATE TABLE IF NOT EXISTS public.users
(
    user_id int GENERATED ALWAYS AS IDENTITY,
    first_name text,
    last_name text,
    email text UNIQUE NOT NULL,
    passwd text NOT NULL,
    department text NOT NULL,
    is_admin boolean DEFAULT false,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp,
    CONSTRAINT users_pkey PRIMARY KEY(user_id)
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.bookings
(
    booking_id int GENERATED ALWAYS AS IDENTITY,
    user_id int,
    desk_id int,
    created_at date NOT NULL UNIQUE DEFAULT NOW(),
    CONSTRAINT booking_user_fkey FOREIGN KEY(user_id) REFERENCES public.users(user_id),
    CONSTRAINT booking_desk_fkey FOREIGN KEY(desk_id) REFERENCES public.desks(desk_id)
)
TABLESPACE pg_default;


CREATE TABLE IF NOT EXISTS public.desks
(
    desk_id int GENERATED ALWAYS AS IDENTITY,
    size text NOT NULL,
    type text NOT NULL,
    CONSTRAINT desk_pkey PRIMARY KEY(desk_id)
)
TABLESPACE pg_default

CREATE TABLE IF NOT EXISTS public.department(
    department_id int GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL
)
TABLESPACE pg_default

CREATE TABLE IF NOT EXISTS public.desk_size(
    size_id int GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL
)
TABLESPACE pg_default

CREATE TABLE IF NOT EXISTS public.desk_type(
    type_id int GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL
)
TABLESPACE pg_default
