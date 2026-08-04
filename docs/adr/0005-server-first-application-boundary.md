# Server-first application boundary

KOS will use Next.js Server Components for initial authenticated reads and Server Actions for mutations, both delegating to feature-scoped services. TanStack Query is reserved for interactive client-side data such as optimistic updates, filters, and command-palette search.

## Consequences

Domain services and validation schemas remain independent of transport and can later support route handlers or other clients. UI code must not query Drizzle directly or duplicate authorization logic.
