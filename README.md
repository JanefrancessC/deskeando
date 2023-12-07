## E-R
```mermaid
erDiagram %% 
    USER }|--o{ BOOKING : has
    USER {
        id string
    }
    BOOKING }o--|| DESK : contains
    DESK }|--|{ STATUS: has-a
    DESK }|--|| FEATURE: has-a
```
