## E-R
```mermaid
erDiagram %% 
    USER }|--o{ BOOKING : has
    BOOKING }o--|| DESK : contains
    DESK }|--|{ STATUS: has-a
    DESK }|--|| FEATURE: has-a
```
