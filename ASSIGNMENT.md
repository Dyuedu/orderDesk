# Short Assignment — Land an OrderDesk change on main

- **Code:** FR_FND_SA_02
- **Level:** FR
- **Duration:** 60 minutes
- **Topics:** Git, focused commits, branches, pull requests, review, merge conflicts

See also `fnd_short_assignment_02.pdf`.

## Problem statement

The shared OrderDesk repository has a protected `main`: nobody can push to it directly, and every change arrives through a reviewed pull request.

The trainer assigns you one small story and your pair partner another, and the two stories touch the same file. Three rules define this assignment:

- Every change to `main` goes through a reviewed pull request. Never merge your own unreviewed work.
- Each commit does one thing. Describable in one sentence without the word "and".
- A conflict will happen, and it is not an error. You must resolve it and prove the result is right.

## Tasks

### Task 1 — Branch and commits (25%)

- Work on your own branch, named for the story and carrying the ticket id you were given.
- Two or more commits, each holding one change describable in a single sentence.
- Every subject line is imperative and under about 50 characters.
- At least one commit has a body explaining why the change was made, not restating the diff.
- No generated files, dependencies or credentials reach any commit.

### Task 2 — Pull request (25%)

- Open a pull request from your branch into `main`.
- The description says what the change does, why it is needed, and gives numbered verification steps.
- The description names the one point you are least sure about and want examined.
- The pull request is merged into `main` after review.

### Task 3 — Reviewing a peer's pull request (25%)

- Leave at least four comments on your pair partner's pull request.
- Every comment points at a specific line and states what would go wrong if it stayed.
- At least one comment is explicitly marked as blocking.
- At least one comment is a question rather than an assertion.
- Reply to every comment on your own pull request, including ones you disagree with.

### Task 4 — Resolving the conflict (25%)

- Merge current `main` into your branch and resolve the conflict that results.
- The resolution must be a deliberate choice, carrying a comment saying why the surviving version is correct.
- No conflict marker is left anywhere in the repository.
- After resolving, the behaviour both stories required must work, not just one.

## Deliverables

- One archive named `<StudentID>_fnd_assignment_02.zip`.
- Inside it, a document holding: the link to your pull request, the link to the pull request you reviewed, and the name of the branch you used.
- The output of `git log --oneline --graph --decorate` on `main` after both pull requests have merged, pasted as text.
- A screenshot of the resolved section in the conflicted file, or the `git show` output of the merge commit.
