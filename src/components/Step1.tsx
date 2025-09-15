import type { FormData } from '../types/form';

interface Step1Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step1 = ({ formData, updateFormData }: Step1Props) => {
  return (
    <div className="form-content">
      <h2>Bot Personality</h2>
      <div className="form-group">
        <label htmlFor="botRole">Bot Role</label>
        <select
          id="botRole"
          value={formData.botRole}
          onChange={(e) =>
            updateFormData({ botRole: e.target.value as FormData['botRole'] })
          }
        >
          <option value="customer-service">Customer Service</option>
          <option value="personal-assistant">Personal Assistant</option>
          <option value="language-tutor">Language Tutor</option>
          <option value="technical-support">Technical Support</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="communicationStyle">Communication Style</label>
        <select
          id="communicationStyle"
          value={formData.communicationStyle}
          onChange={(e) =>
            updateFormData({
              communicationStyle: e.target
                .value as FormData['communicationStyle'],
            })
          }
        >
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
          <option value="technical">Technical</option>
        </select>
      </div>

      <div className="form-group">
        <label>Knowledge Base</label>
        <div className="checkbox-group">
          {/*
           * TODO - Implement the following logic to:
           * 1. Get the correct knowledge base options based on botRole
           * 2. Render the checkboxes dynamically
           * 3. Handle the checkbox changes to add and remove options
           */}
          <em>Add checkbox options here</em>
        </div>
      </div>
    </div>
  );
};

export default Step1;
