# Pairing sheet — FR_FND_SA_02

Two stories, one shared file. That is intentional: the second pull request must hit a conflict.

| Ticket | Owner (exercise role) | Story | Shared files |
| ------ | --------------------- | ----- | ------------ |
| FR-204 | You                   | Require a refund reason when a clerk approves a return | `src/returns.js`, `docs/returns-policy.md` |
| FR-205 | Pair partner          | Require a clerk id so the approval is attributable     | `src/returns.js`, `docs/returns-policy.md` |

## Suggested order

1. Both branches start from the same `main`.
2. Open both pull requests.
3. Review each other on the files tab (line comments).
4. Merge **FR-205** first after review.
5. On **FR-204**, merge current `main`, resolve the conflict, keep **both** behaviours.
6. Merge FR-204 after the resolution is reviewed.

Do not keep-ours or keep-theirs. Dropping either check fails the other story.
