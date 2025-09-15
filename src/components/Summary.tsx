import type { FormData } from '../types/form';

interface SummaryProps {
  formData: FormData;
}

const Summary = ({ formData }: SummaryProps) => {
  return (
    <div className="summary-content">
      <h2>Summary</h2>
      <div className="summary-section">
        <h3>Bot Personality</h3>
        <p>
          <strong>Bot Role:</strong> {formData.botRole}
        </p>
        <p>
          <strong>Communication Style:</strong> {formData.communicationStyle}
        </p>
        <p>
          <strong>Knowledge Base:</strong>{' '}
          {formData.knowledgeBase.join(', ') || <em>None selected</em>}
        </p>
      </div>

      <div className="summary-section">
        <h3>Interaction Settings</h3>
        <p>
          <strong>Memory Context:</strong> {formData.memoryContext}
        </p>
        <p>
          <strong>Response Length:</strong> {formData.responseLength}
        </p>
      </div>

      <div className="summary-section">
        <h3>Account Details</h3>
        <p>
          <strong>Account Type:</strong> {formData.accountType}
        </p>
        <p>
          <strong>Username:</strong> {formData.username}
        </p>
      </div>
    </div>
  );
};

export default Summary;
