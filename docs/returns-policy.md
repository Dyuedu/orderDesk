# Returns policy (draft)

Customers may return goods within 30 days. The window runs from delivery, not from the order
date — although the website currently says "one month", which is not the same thing and needs
resolving.

A refund requires approval from a refunds clerk, who must record a reason. `approve()` must
reject a missing, empty or whitespace-only reason so money never moves without text an auditor
can read. This exists because of an audit finding and is not negotiable.

Faulty goods follow a separate statutory process and are out of scope for now.
