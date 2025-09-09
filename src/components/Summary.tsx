import type { FormData } from '../types/form';

interface SummaryProps {
  formData: FormData;
}

const Summary = ({ formData }: SummaryProps) => {
  return (
    <div>
      <h2>Summary</h2>
      <div className="summary-section">
        <h3>Bot Personality</h3>
        <p>
          <strong>Bot Role:</strong> {formData.botRole.replace('-', ' ')}
        </p>
        <p>
          <strong>Communication Style:</strong> {formData.communicationStyle}
        </p>
        <p>
          <strong>Response Length:</strong> {formData.responseLength}
        </p>
        <p>
          <strong>Language Model:</strong> {formData.languageModel}
        </p>
      </div>

      <div className="summary-section">
        <h3>Interaction Settings</h3>
        <p>
          <strong>Memory Context:</strong>{' '}
          {formData.memoryContext.replace('-', ' ')}
        </p>
        <p>
          <strong>Response Time:</strong> {formData.responseTime}
        </p>
        <p>
          <strong>Knowledge Base:</strong>{' '}
          {formData.knowledgeBase.join(', ') || 'None selected'}
        </p>
      </div>

      <div className="summary-section">
        <h3>Account Details</h3>
        <p>
          <strong>Username:</strong> {formData.username}
        </p>
        <p>
          <strong>Account Type:</strong> {formData.accountType}
        </p>
      </div>
    </div>
  );
};

export default Summary;
