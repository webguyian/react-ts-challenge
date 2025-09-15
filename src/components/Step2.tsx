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
    </div>
  );
};

export default Step2;
