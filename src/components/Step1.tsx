import type { FormData } from '../types/form';

interface Step1Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step1 = ({ formData, updateFormData }: Step1Props) => {
  return (
    <div>
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
        <label>Response Length</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="concise"
              checked={formData.responseLength === 'concise'}
              onChange={(e) =>
                updateFormData({
                  responseLength: e.target.value as FormData['responseLength'],
                })
              }
            />
            Concise
          </label>
          <label>
            <input
              type="radio"
              value="balanced"
              checked={formData.responseLength === 'balanced'}
              onChange={(e) =>
                updateFormData({
                  responseLength: e.target.value as FormData['responseLength'],
                })
              }
            />
            Balanced
          </label>
          <label>
            <input
              type="radio"
              value="detailed"
              checked={formData.responseLength === 'detailed'}
              onChange={(e) =>
                updateFormData({
                  responseLength: e.target.value as FormData['responseLength'],
                })
              }
            />
            Detailed
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="languageModel">Language Model</label>
        <select
          id="languageModel"
          value={formData.languageModel}
          onChange={(e) =>
            updateFormData({
              languageModel: e.target.value as FormData['languageModel'],
            })
          }
        >
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
};

export default Step1;
