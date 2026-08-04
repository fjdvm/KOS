# Rules and Conventions for AGENTS

- use test driven development(tdd) when implementing a feature
- always use shadcn ui and use cli to install the needed components or ui
- when i use /grill-me or /grill-me-with-docs, do not implement anything. We should only be requirements gathering or planning
- our workflow will be like this `/grill-me-with-docs`, `to-spec`, `to-tickets`, `implement`, the `code-review`
- all tickets are in github, get them and implement them when I use the `implement` skill
- don't add unnecessary comments, and if some were already implemented then remove them
- always add github bot as contributor or collaborator of the code we are committing/pushing
  
## Nextjs Page Convention
- below is the convention for every nextjs page in `apps/` directory, and put the components of that page in `components/` directory then separate the helpers and main components for better code structure.
```bash
export default async function ConversationsPage() {
  return <Conversations />;
}
```

