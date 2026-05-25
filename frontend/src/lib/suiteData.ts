export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "AISMSchatbot",
    "ownership": "AISMSchatbot contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "WhatsApp Storefront",
      "Catalog Q&A",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIChatbotBuilder",
    "ownership": "AIChatbotBuilder contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "Catalog Q&A",
      "Order Status",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiECommerceAgent",
    "ownership": "AiECommerceAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "Order Status",
      "Cart Recovery",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "shopify",
    "ownership": "shopify contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "Cart Recovery",
      "Lead Capture",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiCustomerSupportAgent",
    "ownership": "AiCustomerSupportAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "Lead Capture",
      "Payment Handoff",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIEmailTriageResponseAgent",
    "ownership": "AIEmailTriageResponseAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "Payment Handoff",
      "Support Inbox",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISocialMediaManager",
    "ownership": "AISocialMediaManager contributes routes, workflows, data tables, AI prompts, and operational patterns to AI WhatsApp Commerce.",
    "coverage": [
      "Support Inbox",
      "Broadcast Campaigns",
      "AI tools",
      "Source tables"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Source Projects', value: '7', note: 'Mapped donors' },
  { label: 'Feature Groups', value: '16', note: 'Unified navigation' },
  { label: 'AI Tools', value: '12', note: 'Suite copilots' },
  { label: 'Open Work', value: '49', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '15', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '359', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "WhatsApp Storefront operating view",
  "Catalog Q&A operating view",
  "Order Status operating view",
  "Cart Recovery operating view",
  "Lead Capture operating view",
  "Payment Handoff operating view",
  "Support Inbox operating view",
  "Broadcast Campaigns operating view"
];
export const workflowHighlights = [
  "WhatsApp Storefront workflow with records, AI assist, approvals, audit, and reporting",
  "Catalog Q&A workflow with records, AI assist, approvals, audit, and reporting",
  "Order Status workflow with records, AI assist, approvals, audit, and reporting",
  "Cart Recovery workflow with records, AI assist, approvals, audit, and reporting",
  "Lead Capture workflow with records, AI assist, approvals, audit, and reporting",
  "Payment Handoff workflow with records, AI assist, approvals, audit, and reporting"
];
