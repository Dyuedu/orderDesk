# Review checklist

Use this when commenting on the pair partner's pull request. The assignment needs at least four line comments.

- [ ] Every comment points at a specific line.
- [ ] Every comment states what would go wrong if that line stayed.
- [ ] At least one comment is marked **Blocking**.
- [ ] At least one comment is a question, not an assertion.
- [ ] Generated files (`dist/`, `node_modules/`) are absent from the diff.
- [ ] Commit subjects are imperative and do not use "and" to glue two changes.
- [ ] After a conflict, both ticket behaviours still work.

## Comment starters

**Blocking:** If `clerkId` is missing the audit log cannot name who approved the refund.

**Would go wrong:** A space-only reason would pass a truthy check and leave finance with no usable text.

**Question:** What happens if the clerk screen already treats `approve` as returning an object instead of throwing?
