export interface FormData {
  // Step 1
  botRole:
    | 'customer-service'
    | 'personal-assistant'
    | 'language-tutor'
    | 'technical-support';
  communicationStyle: 'professional' | 'casual' | 'friendly' | 'technical';
  knowledgeBase: string[];

  // Step 2
  memoryContext: 'none' | 'last-3' | 'last-5' | 'full';
  responseLength: 'concise' | 'balanced' | 'detailed';

  // Step 3
  accountType: 'basic' | 'premium' | 'enterprise';
  username: string;
  password: string;
  confirmPassword: string;
  strongPassword?: boolean;
}

export const knowledgeBaseOptions = {
  'customer-service': [
    { value: 'product-docs', label: 'Product Documentation' },
    { value: 'user-guides', label: 'User Guides' },
    { value: 'support-history', label: 'Support Ticket History' },
    { value: 'faqs', label: 'FAQs & Troubleshooting' },
  ],
  'technical-support': [
    { value: 'api-docs', label: 'API Documentation' },
    { value: 'code-samples', label: 'Code Samples' },
    { value: 'error-solutions', label: 'Error Solutions' },
    { value: 'system-architecture', label: 'System Architecture' },
  ],
  'language-tutor': [
    { value: 'learning-materials', label: 'Learning Materials' },
    { value: 'practice-exercises', label: 'Practice Exercises' },
    { value: 'grammar-rules', label: 'Grammar Rules' },
    { value: 'common-phrases', label: 'Common Phrases' },
  ],
  'personal-assistant': [
    { value: 'task-templates', label: 'Task Templates' },
    { value: 'scheduling-tools', label: 'Scheduling Tools' },
    { value: 'workflow-guides', label: 'Workflow Guides' },
    { value: 'resource-links', label: 'Resource Links' },
  ],
} as const;
