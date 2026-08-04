# Registry-backed shared relationships

Each linkable KOS item will have one internal Entity registry record. Links, Tag assignments, and File attachments will reference Entity records with SQLite foreign keys, while feature tables retain their feature-specific fields.

## Consequences

This adds a consistent one-to-one registry boundary to each supported domain model but avoids unenforceable polymorphic type-and-ID references and prevents dangling shared relationships.
