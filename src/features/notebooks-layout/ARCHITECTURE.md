# Revamped Notebooks

## Purpose

Improve notebook browsing by offering alternative layouts optimized for different collection sizes.

---

# Scope

Owns:

- Layout toggle.
- Layout preference.
- Notebook presentation.

---

# Supported Layouts

## Grid View

Gemini's default presentation.

Optimized for visual browsing.

---

## Dense List View

Compact table-like presentation.

Optimized for users with many notebooks.

Displays significantly more notebooks per screen.

---

# User Experience

Users may switch between layouts at any time.

The selected layout should persist across browser sessions.

---

# Responsibilities

This feature only changes presentation.

Notebook functionality remains unchanged.

---

# Dependencies

Uses:

- shared/chatgpt
- shared/storage

Should not modify notebook behavior.