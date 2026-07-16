# Prompt Library

## Purpose

Provide reusable prompt templates directly inside Gemini.

Prompt Library eliminates the need for external note-taking applications when storing frequently used prompts.

---

# Scope

Owns:

- Prompt library UI.
- Prompt management.
- Categories.
- Search.
- Prompt insertion.

---

# Prompt Sources

## Built-in Library

Curated prompt templates included with the extension.

Read-only.

---

## Personal Library

User-created prompts.

Supports:

- Create
- Edit
- Delete
- Search
- Organize

---

# Integration

Prompt Library is displayed as an in-page popup.

Selecting a prompt inserts it into Gemini's prompt input.

The user always remains in control of sending the prompt.

---

# Storage

Prompt data is stored locally using browser storage.

No prompts are transmitted to external services.

---

# Future Ideas

- Import / Export
- Variables
- Prompt packs
- Favorites
- Recently used
- Usage statistics

---

# Dependencies

Uses:

- shared/storage
- shared/ui

Should remain independent from other features.