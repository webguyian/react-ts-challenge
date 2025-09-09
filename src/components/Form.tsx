import { useState } from 'react';
import type { FormData } from '../types/form';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Summary from './Summary';

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    botRole: 'customer-service',
    communicationStyle: 'professional',
    responseLength: 'balanced',
    languageModel: 'standard',
    memoryContext: 'last-3',
    responseTime: 'moderate',
    knowledgeBase: [],
    username: '',
    password: '',
    accountType: 'basic',
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {};
  const prevStep = () => {};

  return (
    <div className="form-container">
      <h1>AI Bot Configuration 🤖</h1>
      <div className="step-content">
        <Step1 formData={formData} updateFormData={updateFormData} />
        <Step2 formData={formData} updateFormData={updateFormData} />
        <Step3 formData={formData} updateFormData={updateFormData} />
        <Summary formData={formData} />
      </div>
      <div className="form-navigation">
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Form;
