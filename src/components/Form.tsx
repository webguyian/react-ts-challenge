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
    knowledgeBase: [],
    memoryContext: 'last-3',
    responseLength: 'balanced',
    accountType: 'basic',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const validateStep = (step: number): boolean => {
    // Validation logic for each step — no need to modify
    switch (step) {
      case 1:
        return formData.knowledgeBase.length > 0;
      case 2:
        return true;
      case 3:
        return formData.strongPassword === true;
      default:
        return false;
    }
  };

  /*
   * TODO - Implement nextStep and prevStep functions:
   * 1. nextStep should advance to the next step, if all fields are valid (hint: use validateStep)
   * 2. prevStep should go back to the previous step, if not on the first step
   */
  const nextStep = () => {};

  const prevStep = () => {};

  return (
    <div className="form-container">
      <h1>AI Bot Configuration 🤖</h1>
      <form>
        {/*
         * TODO - Implement step navigation and rendering logic:
         * 1. Render the appropriate step component based on the current step
         * 2. Previous and Next buttons should navigate between steps
         * 3. Hide Previous button on the first step and Next button on the last step
         */}
        <Step1 formData={formData} updateFormData={updateFormData} />
        <Step2 formData={formData} updateFormData={updateFormData} />
        <Step3 formData={formData} updateFormData={updateFormData} />
        <Summary formData={formData} />
        <div className="form-navigation">
          <button onClick={prevStep} type="button">
            Previous
          </button>
          <button onClick={nextStep} type="button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
