export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "whatsapp-storefront",
    "label": "WhatsApp Storefront",
    "description": "WhatsApp Storefront actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/whatsapp-storefront",
    "sourceProjects": [
      "AISMSchatbot",
      "AIChatbotBuilder",
      "AiECommerceAgent",
      "shopify",
      "AiCustomerSupportAgent"
    ],
    "examples": [
      "Open WhatsApp Storefront",
      "Review Commerce",
      "Run WhatsApp Storefront AI check"
    ],
    "count": 5
  },
  {
    "id": "catalog-qa",
    "label": "Catalog Q&A",
    "description": "Catalog Q&A actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/catalog-qa",
    "sourceProjects": [
      "AIChatbotBuilder",
      "AiECommerceAgent",
      "shopify",
      "AiCustomerSupportAgent",
      "AIEmailTriageResponseAgent"
    ],
    "examples": [
      "Open Catalog Q&A",
      "Review Conversation AI",
      "Run Catalog Q&A AI check"
    ],
    "count": 5
  },
  {
    "id": "order-status",
    "label": "Order Status",
    "description": "Order Status actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/order-status",
    "sourceProjects": [
      "AiECommerceAgent",
      "shopify",
      "AiCustomerSupportAgent",
      "AIEmailTriageResponseAgent",
      "AISocialMediaManager"
    ],
    "examples": [
      "Open Order Status",
      "Review Operations",
      "Run Order Status AI check"
    ],
    "count": 5
  },
  {
    "id": "cart-recovery",
    "label": "Cart Recovery",
    "description": "Cart Recovery actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/cart-recovery",
    "sourceProjects": [
      "shopify",
      "AiCustomerSupportAgent",
      "AIEmailTriageResponseAgent",
      "AISocialMediaManager",
      "AISMSchatbot"
    ],
    "examples": [
      "Open Cart Recovery",
      "Review Growth",
      "Run Cart Recovery AI check"
    ],
    "count": 5
  },
  {
    "id": "lead-capture",
    "label": "Lead Capture",
    "description": "Lead Capture actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/lead-capture",
    "sourceProjects": [
      "AiCustomerSupportAgent",
      "AIEmailTriageResponseAgent",
      "AISocialMediaManager",
      "AISMSchatbot",
      "AIChatbotBuilder"
    ],
    "examples": [
      "Open Lead Capture",
      "Review Growth",
      "Run Lead Capture AI check"
    ],
    "count": 5
  },
  {
    "id": "payment-handoff",
    "label": "Payment Handoff",
    "description": "Payment Handoff actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/payment-handoff",
    "sourceProjects": [
      "AIEmailTriageResponseAgent",
      "AISocialMediaManager",
      "AISMSchatbot",
      "AIChatbotBuilder",
      "AiECommerceAgent"
    ],
    "examples": [
      "Open Payment Handoff",
      "Review Commerce",
      "Run Payment Handoff AI check"
    ],
    "count": 5
  },
  {
    "id": "support-inbox",
    "label": "Support Inbox",
    "description": "Support Inbox actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/support-inbox",
    "sourceProjects": [
      "AISocialMediaManager",
      "AISMSchatbot",
      "AIChatbotBuilder",
      "AiECommerceAgent",
      "shopify"
    ],
    "examples": [
      "Open Support Inbox",
      "Review Support",
      "Run Support Inbox AI check"
    ],
    "count": 5
  },
  {
    "id": "broadcast-campaigns",
    "label": "Broadcast Campaigns",
    "description": "Broadcast Campaigns actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/broadcast-campaigns",
    "sourceProjects": [
      "AISMSchatbot",
      "AIChatbotBuilder",
      "AiECommerceAgent",
      "shopify",
      "AiCustomerSupportAgent"
    ],
    "examples": [
      "Open Broadcast Campaigns",
      "Review Growth",
      "Run Broadcast Campaigns AI check"
    ],
    "count": 5
  },
  {
    "id": "customer-segments",
    "label": "Customer Segments",
    "description": "Customer Segments actions optimized from donor dashboards and exposed as one AI WhatsApp Commerce action group.",
    "href": "/customer-segments",
    "sourceProjects": [
      "AIChatbotBuilder",
      "AiECommerceAgent",
      "shopify",
      "AiCustomerSupportAgent",
      "AIEmailTriageResponseAgent"
    ],
    "examples": [
      "Open Customer Segments",
      "Review Analytics",
      "Run Customer Segments AI check"
    ],
    "count": 5
  }
];
