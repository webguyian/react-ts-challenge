import { useCallback } from 'react';
import type { FormData } from '../types/form';
import PasswordRules from './PasswordRules/PasswordRules';

interface Step3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step3 = ({ formData, updateFormData }: Step3Props) => {
  const handleProgressUpdate = useCallback(
    (progress: number) => {
      updateFormData({ strongPassword: progress === 100 });
    },
    [updateFormData]
  );

  return (
    <div className="form-content">
      <h2>Account Creation</h2>
      <div className="form-group">
        <label htmlFor="accountType">Account Type</label>
        <select
          id="accountType"
          value={formData.accountType}
          onChange={(e) =>
            updateFormData({
              accountType: e.target.value as FormData['accountType'],
            })
          }
        >
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={(e) => updateFormData({ username: e.target.value })}
          required
          minLength={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => updateFormData({ password: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
          required
        />
      </div>

      <PasswordRules
        password={formData.password}
        confirmPassword={formData.confirmPassword}
        onProgressUpdate={handleProgressUpdate}
      />
    </div>
  );
};

export default Step3;
