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
    username: '',
    password: '',
    accountType: 'basic',
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  /*
   * TODO - Implement nextStep and prevStep functions:
   * 1. nextStep should advance to the next step, if all fields are valid
   * 2. prevStep should go back to the previous step, if not on the first step
   */
  const nextStep = () => {};

  const prevStep = () => {};

  return (
    <div className="form-container">
      <h1>AI Bot Configuration 🤖</h1>
      <form onSubmit={nextStep}>
        {/*
         * TODO - Implement step navigation and rendering logic:
         * 1. Render the appropriate step component based on currentStep
         * 2. Include Previous and Next buttons to navigate between steps
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
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
