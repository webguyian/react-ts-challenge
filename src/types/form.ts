export interface FormData {
  // Step 1
  botRole:
    | 'customer-service'
    | 'personal-assistant'
    | 'language-tutor'
    | 'technical-support';
  communicationStyle: 'professional' | 'casual' | 'friendly' | 'technical';
  responseLength: 'concise' | 'balanced' | 'detailed';
  languageModel: 'basic' | 'standard' | 'advanced';

  // Step 2
  memoryContext: 'none' | 'last-3' | 'last-5' | 'full';
  responseTime: 'quick' | 'moderate' | 'thorough';
  knowledgeBase: string[];

  // Step 3
  username: string;
  password: string;
  accountType: 'basic' | 'premium' | 'enterprise';
}
