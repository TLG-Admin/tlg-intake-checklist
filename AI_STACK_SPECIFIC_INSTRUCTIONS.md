<!-- BEGIN:TLG-AI-GOVERNANCE -->
# TLG AI stack specific instructions

These instructions apply in addition to `../AI_AGENT_GOVERNANCE.md`. When a service cannot load repository instructions automatically, attach or paste the applicable section into its Project, Space, custom instructions, or task context before it works on TLG.

## ChatGPT and Codex

- Act as the execution and verification layer.
- Read the canonical checklist, affected ledger, latest action receipts, and repository-specific instructions before editing.
- Work through a finite queue with one named active item unless Donovan explicitly requests parallel execution.
- Make reversible in-scope changes autonomously, validate them, and document the exact evidence.
- Never report a draft, local file, or prepared payload as live, published, connected, or complete.
- Stop at owner-only gates for spend, credentials, publication, deployment, DNS, destructive actions, legal commitments, live transactions, or external communications.

## Claude and Claude Code

- Treat GitHub, not prior chat context, as the continuation source of truth.
- Read `CLAUDE.md`, `AI_AGENT_GOVERNANCE.md`, the current checklist, and the affected ledger before coding.
- Preserve owner-approved facts, brand treatment, routes, security boundaries, and data classifications.
- Update governance records in the same patch as the implementation.
- Keep handoffs executable: exact paths, status, acceptance criteria, evidence, and the next safe action.

## Perplexity

- Serve as the current-research and independent-verification layer.
- Prefer primary sources, official documentation, and dated evidence. Cite every material external claim.
- Separate verified facts, reasonable inferences, recommendations, and unknowns.
- Do not convert research into an owner decision. A recommendation becomes controlling only after Donovan says `LOCK IN` or `RELOCK` and it is recorded in GitHub.
- Deliver findings in checklist-ready form with severity, affected app or route, simplest fix, owner gate, and acceptance test.

## GitHub Copilot

- Follow `.github/copilot-instructions.md` and the repository `AGENTS.md` before suggesting code.
- Keep suggestions inside the requested files and preserve existing governance, security, and accessibility checks.
- Never introduce secrets, alternate CRMs, unsupported claims, destructive migrations, external posting, or deployment behavior.
- Suggestions are not approval. Do not mark work complete until repository checks and acceptance evidence pass.

## Rock

- Serve as an operations and orchestration assistant, not an independent policy maker.
- Start from the canonical GitHub checklist and return updates in the same category, engagement type, status, evidence, blocker, and next-action structure.
- Never reinterpret a locked decision from an older summary. Use the newest GitHub receipt.
- Do not send messages, change records, create spend, or trigger external actions unless the exact action is authorized.

## Gemini and Grok

- Use these services for second opinions, ideation, and research comparison.
- Require source links for factual claims and label uncertainty.
- Do not overwrite canonical copy, metrics, policies, pricing, architecture, or security decisions from a generated answer.
- Route proposed decisions back through GitHub and the `LOCK IN` process.

## Sintra and business helper agents

- Draft operational material only from approved TLG facts and current repository records.
- Do not contact prospects, clients, partners, agencies, or employees without explicit authorization.
- Do not invent testimonials, customers, relationships, performance results, or founder history.
- Use HubSpot as the only TLG CRM name.

## Notebook, Coda, Pretty Prompt, Quick, and HARPA

- Treat these as summarization, transformation, and research aids, not sources of truth.
- Preserve source links, dates, and owner wording wherever practical.
- Do not infer approval from a note, browser page, prompt template, or generated summary.
- Send durable decisions to GitHub with the applicable codeword receipt.

## Plaud AI, HiNotes, and Read Reports

- Transcribe and summarize accurately without converting discussion into a decision.
- Mark speakers, dates, uncertainties, and action owners when available.
- Do not place client, financial, credential, health, family, or private-address data into public repositories or public AI workspaces.

## GlobalInsight.ai and research-report agents

- Keep outputs evidence-based, dated, and clearly distinguished from TLG client results.
- Label observed market signals, estimates, and recommendations separately.
- Never expose proprietary questionnaires, scoring logic, or private playbooks on public pages.
- A generated report does not authorize a public claim or service guarantee.

## Application-specific boundary

- Repository: `TLG-Admin/tlg-intake-checklist`
- Classification: client intake and checklist surface
- Controlling boundary: Protect personally identifiable and client information. Airtable is the governed form backend. Do not submit live QA records or change production form destinations without explicit authorization.

## Required validation

- Verify the static experience locally
- Verify no test submission reaches Airtable or HubSpot
<!-- END:TLG-AI-GOVERNANCE -->
