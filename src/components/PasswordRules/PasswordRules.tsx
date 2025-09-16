import { useEffect } from 'react';
import './PasswordRules.css';
import commonPasswords from './common.txt?raw';

interface ValidationRule {
  id: string;
  description: string;
  validate: (password: string, confirmPassword?: string) => boolean;
}

export interface PasswordRulesProps {
  password: string;
  confirmPassword: string;
  onProgressUpdate: (progress: number) => void;
}

const PasswordRules = ({
  password,
  confirmPassword,
  onProgressUpdate,
}: PasswordRulesProps) => {
  const rules: ValidationRule[] = [
    {
      id: 'length',
      description: 'Password must be at least 8 characters long',
      validate: (password: string) => {
        // TODO: Implement this validation
        return false;
      },
    },
    {
      id: 'capital',
      description: 'Password must contain at least one capital letter',
      validate: (password: string) => {
        // TODO: Implement this validation
        return false;
      },
    },
    {
      id: 'number',
      description: 'Password must contain at least one number',
      validate: (password: string) => {
        // TODO: Implement this validation
        return false;
      },
    },
    {
      id: 'common',
      description: 'Password must not be commonly used',
      validate: (password: string) => {
        // TODO: Implement this validation
        // Use the `commonPasswords` import above
        return false;
      },
    },
    {
      id: 'match',
      description: 'Passwords must match',
      validate: (password: string, confirmPassword?: string) => {
        // TODO: Implement this validation
        return false;
      },
    },
  ];

  const calculateProgress = (
    password: string,
    confirmPassword: string
  ): number => {
    if (!password) return 0;

    const passedRules = rules.filter((rule) =>
      rule.validate(password, confirmPassword)
    );
    return (passedRules.length / rules.length) * 100;
  };

  const progress = calculateProgress(password, confirmPassword);

  useEffect(() => {
    onProgressUpdate(progress);
  }, [progress]);

  return (
    <div className="password-rules">
      <div className="progress-meter">
        <div
          className="progress-meter-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: `hsl(${progress}, 70%, 45%)`,
          }}
        />
      </div>
      <ul className="validation-rules">
        {rules.map((rule) => (
          <li key={rule.id}>
            <span>
              {rule.validate(password, confirmPassword) ? '✅' : '❌'}
            </span>
            {rule.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordRules;
