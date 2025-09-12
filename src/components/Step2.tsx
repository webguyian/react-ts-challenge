import type { FormData } from '../types/form';

interface Step2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step2 = ({ formData, updateFormData }: Step2Props) => {
  return (
    <div className="form-content">
      <h2>Interaction Settings</h2>
      <div className="form-group">
        <label htmlFor="memoryContext">Memory Context</label>
        <select
          id="memoryContext"
          value={formData.memoryContext}
          onChange={(e) =>
            updateFormData({
              memoryContext: e.target.value as FormData['memoryContext'],
            })
          }
        >
          <option value="none">None</option>
          <option value="last-3">Last 3 messages</option>
          <option value="last-5">Last 5 messages</option>
          <option value="full">Full conversation</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="responseTime">Response Time</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="quick"
              checked={formData.responseTime === 'quick'}
              onChange={(e) =>
                updateFormData({
                  responseTime: e.target.value as FormData['responseTime'],
                })
              }
            />
            Quick & Simple
          </label>
          <label>
            <input
              type="radio"
              value="moderate"
              checked={formData.responseTime === 'moderate'}
              onChange={(e) =>
                updateFormData({
                  responseTime: e.target.value as FormData['responseTime'],
                })
              }
            />
            Moderate
          </label>
          <label>
            <input
              type="radio"
              value="thorough"
              checked={formData.responseTime === 'thorough'}
              onChange={(e) =>
                updateFormData({
                  responseTime: e.target.value as FormData['responseTime'],
                })
              }
            />
            Thorough & Detailed
          </label>
        </div>
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

export default Step2;
