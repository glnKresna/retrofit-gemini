# ChatGPT Integration

Contains utilities specific to ChatGPT.

This folder is the abstraction layer between ChargeGPT and ChatGPT's webpage.

Examples:

- DOM selectors
- Navigation helpers
- Chat detection
- ChatGPT-specific utilities
- Wait-for-element helpers

Nothing in this folder should implement a ChargeGPT feature.

Its responsibility is only to understand ChatGPT's structure.

If ChatGPT changes its DOM, this folder is likely where fixes belong.
