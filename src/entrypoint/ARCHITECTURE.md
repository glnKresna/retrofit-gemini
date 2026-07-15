# Entry Points

Contains all browser extension entry points.

These are the files Chrome executes directly.

Examples:

- content.ts
- popup.tsx
- background.ts (future)
- options.tsx (future)

Entry points should stay thin.

Their job is only to bootstrap an application, not implement features.
