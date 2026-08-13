<!-- BEGIN:TLG-AI-GOVERNANCE -->
# TLG cross-agent governance

Governance version: `TLG-GOV-2026-08-13-v1`
Owner: Donovan Love

## Decision codewords

- `LOCK IN`: make the owner's decision durable in the canonical GitHub checklist and affected living ledger, add enforcement when feasible, append an action receipt, and include it in the Google Drive synchronization.
- `RELOCK`: replace an earlier locked decision, identify the superseded rule, and preserve the replacement receipt.
- `RETIRE THIS`: retire an earlier locked decision, remove or disable its enforcement, and preserve the retirement history.

These phrases never authorize credential storage. They also do not authorize spend, publication, deployment, DNS, destructive changes, legal commitments, customer or employee contact, financial transactions, or live submissions.

## Universal operating rules

1. GitHub is the durable source of truth. Google Drive is the synchronized human-readable mirror.
2. Read this repository's `AGENTS.md`, AI-service instruction file, current checklist, and relevant ledger before changing governed work.
3. Use the newest GitHub decision receipt when chat history, generated summaries, browser tabs, exports, or local notes conflict.
4. Preserve owner-approved facts and business rules. Improve wording, structure, accessibility, and formatting without changing substance.
5. HubSpot is the only CRM used or named by The Love Group.
6. Never store passwords, tokens, cookies, private keys, OAuth credentials, recovery codes, exported browser sessions, or unapproved private data in GitHub.
7. Never describe a draft, local file, prepared payload, or queued action as live, published, connected, or complete.
8. Finish work at `VERIFIED COMPLETE` with evidence or `BLOCKED` with the exact named owner action.
9. No new spend. Any spend, credential, production release, deployment, destructive action, financial action, live submission, or external communication is an owner-only gate unless a current repository receipt grants that exact action.
10. Update the canonical checklist, affected living ledger, and append-only action receipt with every governed change.

## Application-specific boundary

- Repository: `TLG-Admin/tlg-intake-checklist`
- Classification: client intake and checklist surface
- Controlling boundary: Protect personally identifiable and client information. Airtable is the governed form backend. Do not submit live QA records or change production form destinations without explicit authorization.

## Required validation

- Verify the static experience locally
- Verify no test submission reaches Airtable or HubSpot
- HubSpot is The Love Group's only CRM. Never add, restore, recommend, or imply another CRM.
<!-- END:TLG-AI-GOVERNANCE -->
