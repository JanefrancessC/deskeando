## E-R
```mermaid
erDiagram %% 

    USER ||--o{ BOOKING :books
    USER ||--o{ DESK:has
    USER }o--|| DEPARTMENT:belongs-to-a
    BOOKING }o--|| DESK:contains
    USER {
        id id(PK)
        first-name string
        last-name string
        department string
        password string
        is_admin boolean
    }
   
    BOOKING {
        booking_id id
        desk_id id(FK)
        user_id id(FK)
        created_at date
        reservation_date date
        updated_at date
    }
    DESK {
        id id(PK)
        size string
        type string
    }
    DEPARTMENT {
        department_id id(PK)
        name string
    }

```
