// Returns handling for OrderDesk.
//
// A return covers one or more lines of an order. A refund against it must be
// approved by a refunds clerk before any money moves.

function openReturn(order, lines) {
  if (lines.length === 0) {
    throw new Error('a return must cover at least one line');
  }

  return {
    orderId: order.id,
    lines,
    raisedAt: new Date().toISOString(),
    approvedBy: null,
    approvedAt: null,
    refundReason: null,
  };
}

function approve(returnRequest, clerkId, refundReason) {
  // Keep both checks: FR-204 needs a reason for audit; FR-205 needs a clerk
  // so the approval is attributable. Dropping either check would pass one
  // story and fail the other.
  if (!clerkId || !String(clerkId).trim()) {
    throw new Error('clerk id is required');
  }
  if (!refundReason || !String(refundReason).trim()) {
    throw new Error('refund reason is required');
  }

  return {
    ...returnRequest,
    approvedBy: String(clerkId).trim(),
    approvedAt: new Date().toISOString(),
    refundReason: String(refundReason).trim(),
  };
}

module.exports = { openReturn, approve };
