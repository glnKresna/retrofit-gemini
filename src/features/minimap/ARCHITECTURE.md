# Chat Minimap

## Purpose

Provide fast navigation inside long Gemini conversations.

The minimap gives users a compact overview of the conversation and allows instant scrolling to important locations.

---

# Scope

Owns:

- Right sidebar minimap.
- Checkpoint generation.
- Scroll synchronization.
- Collapse / expand state.

---

# Checkpoint Modes

The minimap supports two visualization modes.

### User Prompts

Display only user messages.

Useful for quickly reviewing prompts.

### AI Responses

Display only Gemini responses.

Useful for locating generated answers.

---

# Navigation

Clicking a checkpoint scrolls the conversation to the corresponding message.

The currently visible message should be highlighted inside the minimap.

---

# Layout

The minimap is displayed as a collapsible right sidebar.

It should never obstruct Gemini's normal interface.

---

# Dependencies

Uses:

- shared/chatgpt
- shared/dom

Should not depend on other features.

---

# Future Ideas

- Search result markers
- Bookmarks
- Code block markers
- Image markers