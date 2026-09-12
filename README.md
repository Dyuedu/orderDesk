# OrderDesk

Internal back office for a retail client's staff to handle orders from the website.

This repository is the shared OrderDesk tree for **FR_FND_SA_02**. `main` is the integration branch. Every change after the seed lands through a reviewed pull request.

```
.
├── ASSIGNMENT.md            short assignment brief
├── CONTRIBUTING.md          commit, PR and review rules
├── fnd_short_assignment_02.pdf
├── notes/                   domain rules these files implement
├── docs/
│   ├── pairing.md           who owns which ticket
│   ├── review-checklist.md
│   ├── returns-policy.md
│   └── tickets/             fake stories used for the exercise
└── src/
    ├── cancellation.js
    ├── returns.js
    └── courier.js
```

Build output belongs in `dist/` and is gitignored. Do not commit generated files, dependencies or credentials.
