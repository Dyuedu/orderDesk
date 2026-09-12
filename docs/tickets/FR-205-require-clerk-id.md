# FR-205 — Require a clerk id on approve

## Role

Refunds clerk / audit.

## Story

As an auditor I want every refund approval to name the clerk who approved it so the action is attributable.

## Why

`approve()` copies `clerkId` into `approvedBy` with no check. A missing clerk id still marks the return as approved. That breaks the audit trail the policy depends on.

## Acceptance

- `approve` rejects a missing, empty or whitespace-only clerk id.
- A successful approve still writes `approvedBy` and `approvedAt`.
- The returns policy names this check.

## Out of scope

Login, SSO, or looking up clerk names. Refund amount rules.
