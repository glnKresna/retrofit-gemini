# Bulk Action

## Purpose

Bulk Action provides multi-item selection and batch operations across Gemini.

It enables users to efficiently manage large numbers of chats and notebooks that would otherwise require repetitive individual actions.

---

# Scope

This feature owns:

- Multi-selection state.
- Selection UI.
- Batch action toolbar.
- Bulk operations.
- Selection keyboard shortcuts.

---

# Supported Targets

Current:

- Chats
- Notebooks

Future:

- Files (if Gemini introduces them)
- Other selectable resources

---

# User Workflow

1. Enter selection mode.
2. Select one or more items.
3. Execute one batch action.
4. Exit selection mode.

---

# Current Actions

Chats:

- Delete
- Pin
- Move to Notebook

Notebooks:

- Delete
- Pin

---

# Future Actions

- Drag-and-drop
- Duplicate
- Archive
- Export

---

# Dependencies

Uses:

- shared/chatgpt (Gemini DOM helpers)
- shared/storage (user preferences)

Should remain independent from other features.

---

# Non-Goals

Bulk Action does not modify Gemini's data model.

It only exposes more efficient interactions with existing Gemini functionality.