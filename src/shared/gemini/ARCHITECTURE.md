# Gemini Integration

Contains utilities specific to Gemini.

This folder is the abstraction layer between Retrofit and Gemini's webpage.

Examples:

- DOM selectors
- Navigation helpers
- Chat detection
- Gemini-specific utilities
- Wait-for-element helpers

Nothing in this folder should implement a Retrofit for Gemini feature.

Its responsibility is only to understand Gemini's structure.

If Gemini changes its DOM, this folder is likely where fixes belong.
