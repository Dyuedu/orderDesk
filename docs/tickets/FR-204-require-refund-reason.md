# FR-204 — Require a refund reason on approve

## Role

Refunds clerk.

## Story

As a refunds clerk I want `approve()` to store a non-empty refund reason so an auditor can see why money moved.

## Why

`src/returns.js` currently leaves `refundReason` as `null` after approve. Policy already says a reason is mandatory. The code does not enforce it.

## Acceptance

- `approve(returnRequest, clerkId, refundReason)` stores the trimmed reason.
- A missing, empty or whitespace-only reason is rejected.
- The returns policy names this check.

## Out of scope

Changing cancellation or courier handoff. Computing the refund amount.
