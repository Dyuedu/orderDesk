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
  if (!refundReason || !String(refundReason).trim()) {
    throw new Error('refund reason is required');
  }

  return {
    ...returnRequest,
    approvedBy: clerkId,
    approvedAt: new Date().toISOString(),
    refundReason: String(refundReason).trim(),
  };
}

module.exports = { openReturn, approve };
