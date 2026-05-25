import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["AISMSchatbot","AIChatbotBuilder","AiECommerceAgent","shopify","AiCustomerSupportAgent","AIEmailTriageResponseAgent","AISocialMediaManager"];

const features = [
  {
    slug: "whatsapp-storefront",
    title: "WhatsApp Storefront",
    href: "/whatsapp-storefront",
    category: "Commerce",
    icon: Bot,
    summary: "WhatsApp Storefront combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["WhatsApp Storefront queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "WhatsApp Storefront", value: "18", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "catalog-qa",
    title: "Catalog Q&A",
    href: "/catalog-qa",
    category: "Conversation AI",
    icon: Workflow,
    summary: "Catalog Q&A combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Catalog Q&A queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Catalog Q&A", value: "27", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "order-status",
    title: "Order Status",
    href: "/order-status",
    category: "Operations",
    icon: Users,
    summary: "Order Status combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Order Status queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Order Status", value: "36", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "cart-recovery",
    title: "Cart Recovery",
    href: "/cart-recovery",
    category: "Growth",
    icon: CalendarCheck,
    summary: "Cart Recovery combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Cart Recovery queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Cart Recovery", value: "45", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "lead-capture",
    title: "Lead Capture",
    href: "/lead-capture",
    category: "Growth",
    icon: Mail,
    summary: "Lead Capture combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Lead Capture queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Lead Capture", value: "54", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "payment-handoff",
    title: "Payment Handoff",
    href: "/payment-handoff",
    category: "Commerce",
    icon: MessageSquareText,
    summary: "Payment Handoff combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Payment Handoff queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Payment Handoff", value: "63", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "support-inbox",
    title: "Support Inbox",
    href: "/support-inbox",
    category: "Support",
    icon: BarChart3,
    summary: "Support Inbox combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Support Inbox queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Support Inbox", value: "72", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "broadcast-campaigns",
    title: "Broadcast Campaigns",
    href: "/broadcast-campaigns",
    category: "Growth",
    icon: ClipboardList,
    summary: "Broadcast Campaigns combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Broadcast Campaigns queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Broadcast Campaigns", value: "81", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "customer-segments",
    title: "Customer Segments",
    href: "/customer-segments",
    category: "Analytics",
    icon: FileText,
    summary: "Customer Segments combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Customer Segments queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Customer Segments", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "agent-handoff",
    title: "Agent Handoff",
    href: "/agent-handoff",
    category: "Support",
    icon: PackageCheck,
    summary: "Agent Handoff combines donor project behavior into the AI WhatsApp Commerce operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Agent Handoff queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Agent Handoff", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "AI WhatsApp Commerce documents, packets, evidence, uploads, and exports.",
    bullets: ["Documents","Uploads","Exports"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "AI WhatsApp Commerce alerts, reminders, exceptions, and approvals.",
    bullets: ["Alerts","Reminders","Exceptions"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "AI WhatsApp Commerce source-system connector health and sync status.",
    bullets: ["Connectors","Sync","Warnings"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "AI WhatsApp Commerce users, roles, teams, permissions, and ownership settings.",
    bullets: ["Users","Roles","Teams"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "AI WhatsApp Commerce assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Targeted AI WhatsApp Commerce AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Commerce",
    "features": [
      "WhatsApp Storefront",
      "Payment Handoff"
    ]
  },
  {
    "name": "Conversation AI",
    "features": [
      "Catalog Q&A"
    ]
  },
  {
    "name": "Operations",
    "features": [
      "Order Status"
    ]
  },
  {
    "name": "Growth",
    "features": [
      "Cart Recovery",
      "Lead Capture",
      "Broadcast Campaigns"
    ]
  },
  {
    "name": "Support",
    "features": [
      "Support Inbox",
      "Agent Handoff"
    ]
  },
  {
    "name": "Analytics",
    "features": [
      "Customer Segments"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is normalized from source applications into one merged suite workflow.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners.length ? suiteSourceOwners : ["AI WhatsApp Commerce"],
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
