export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'],
    rows: [
      { id: slug + '-1', name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: slug + '-2', name: secondName, status: 'In progress', owner: 'AI Operations', amount: '$980', dueDate: '2026-06-11', priority: 'Medium' },
      { id: slug + '-3', name: title + ' quality review', status: 'Queued', owner: 'Quality Review', amount: '$640', dueDate: '2026-06-18', priority: 'Normal' },
    ],
  };
}

const entitySeeds = [
  [
    "whatsapp-storefront",
    "WhatsApp Storefront Records",
    "WhatsApp Storefront intake 1",
    "Open",
    "WhatsApp Storefront follow-up 1",
    "Operations Lead",
    "$1,200"
  ],
  [
    "catalog-qa",
    "Catalog Q&A Records",
    "Catalog Q&A intake 2",
    "Review",
    "Catalog Q&A follow-up 2",
    "AI Specialist",
    "$1,550"
  ],
  [
    "order-status",
    "Order Status Records",
    "Order Status intake 3",
    "Ready",
    "Order Status follow-up 3",
    "Client Success",
    "$1,900"
  ],
  [
    "cart-recovery",
    "Cart Recovery Records",
    "Cart Recovery intake 4",
    "Needs attention",
    "Cart Recovery follow-up 4",
    "Delivery Manager",
    "$2,250"
  ],
  [
    "lead-capture",
    "Lead Capture Records",
    "Lead Capture intake 5",
    "Open",
    "Lead Capture follow-up 5",
    "Operations Lead",
    "$2,600"
  ],
  [
    "payment-handoff",
    "Payment Handoff Records",
    "Payment Handoff intake 6",
    "Review",
    "Payment Handoff follow-up 6",
    "AI Specialist",
    "$2,950"
  ],
  [
    "support-inbox",
    "Support Inbox Records",
    "Support Inbox intake 7",
    "Ready",
    "Support Inbox follow-up 7",
    "Client Success",
    "$3,300"
  ],
  [
    "broadcast-campaigns",
    "Broadcast Campaigns Records",
    "Broadcast Campaigns intake 8",
    "Needs attention",
    "Broadcast Campaigns follow-up 8",
    "Delivery Manager",
    "$3,650"
  ],
  [
    "customer-segments",
    "Customer Segments Records",
    "Customer Segments intake 9",
    "Open",
    "Customer Segments follow-up 9",
    "Operations Lead",
    "$4,000"
  ],
  [
    "agent-handoff",
    "Agent Handoff Records",
    "Agent Handoff intake 10",
    "Review",
    "Agent Handoff follow-up 10",
    "AI Specialist",
    "$4,350"
  ],
  [
    "documents",
    "Documents Records",
    "Documents intake 11",
    "Ready",
    "Documents follow-up 11",
    "Client Success",
    "$4,700"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications intake 12",
    "Needs attention",
    "Notifications follow-up 12",
    "Delivery Manager",
    "$5,050"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations intake 13",
    "Open",
    "Integrations follow-up 13",
    "Operations Lead",
    "$5,400"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles intake 14",
    "Review",
    "Profiles follow-up 14",
    "AI Specialist",
    "$5,750"
  ]
];

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
