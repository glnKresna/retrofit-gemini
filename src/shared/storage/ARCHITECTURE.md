# Storage

Wrapper around browser storage.

All interaction with chrome.storage should happen here.

Responsibilities:
- Reading settings
- Writing settings
- Default values
- Data migration
- Validation

Features should avoid calling chrome.storage directly whenever possible.

This keeps storage implementation centralized.