# Retrofit for Gemini Architecture

## Vision

"Retrofit for Gemini" is a browser extension that enhances the Gemini web experience with quality-of-life improvements.

The extension should feel like a natural extension of Gemini rather than a separate application.

---

# Design Philosophy

This project prioritizes:

- Simplicity
- Readability
- Separation of concerns/responsibilities
- Scalability
- Self-contained features

When making architectural decisions, prefer the simplest solution that keeps responsibilities clear.

Avoid introducing abstractions before they are needed.

---

# Project Structure

src/

entry/

- Browser extension entry points.
- Chrome executes these files directly.
- Responsible only for bootstrapping.

app/

- Injected React application.
- Owns the in-page UI.
- Does not know how Chrome started it.

popup/

- Extension popup React application.
- Contains extension-level controls.

features/

- User-facing functionality.
- Each feature should be as self-contained as possible.

shared/

- Reusable modules shared across multiple features.
- Should never implement feature-specific logic.

types/

- Shared TypeScript types.

assets/

- Static assets.

---

# Dependency Direction

The dependency flow should always move downward.

entry
↓
app
↓
features
↓
shared

Lower layers must never depend on higher layers.

Example:

✓ Feature → shared

✗ shared → feature

---

# Responsibilities

Entry

- Bootstrap applications.
- Mount React.
- Perform startup tasks.

App

- Layout.
- Global providers.
- Global UI.

Features

- Implement user-facing functionality.
- Own feature-specific components, hooks, utilities and styles.

Shared

- Generic reusable code.
- Browser wrappers.
- DOM helpers.
- Storage helpers.
- Shared UI components.

---

# Folder Rules

Before creating a new top-level folder, ask:

"What responsibility does this folder own that no existing folder owns?"

Avoid folders that only contain one file unless they represent a clear architectural concept.

---

# Feature Rules

Each feature should own its implementation.

Example:

features/
minimap/
components/
hooks/
styles/
utils/
index.ts

Avoid feature-to-feature imports whenever possible.

If multiple features need the same code, move it into shared/.

---

# Shared Rules

Shared code should be generic.

If removing "ChargeGPT" from the code would still make sense, it probably belongs in shared/.

Otherwise, it probably belongs inside a feature.

---

# Storage

Browser storage should be accessed through shared/storage.

Avoid calling chrome.storage directly throughout the project.

---

# Gemini Integration

Any code that understands Gemini's DOM belongs in shared/gemini.

If Gemini changes its HTML structure, this should be the primary place requiring updates.

---

# Future Expansion

Potential future entry points:

- background.ts
- options.tsx

The architecture should accommodate new entry points without major restructuring.

---

# Guiding Principle

Every file should have one clear responsibility.

Every folder should answer one simple question:

"What belongs here?"
