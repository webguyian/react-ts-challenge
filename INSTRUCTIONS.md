# Instructions for Code Exercise

Your task is to convert the form to a multi-step flow, render missing options, and add validation rules.

0. Create a new branch for your changes
1. Render the appropriate step component based on `currentStep`

   - The **Previous** and **Next** buttons should navigate between steps
   - Hide **Previous** button on first step and **Next** button on last step

2. Implement `nextStep` and `prevStep` functions

   - Use `validateStep` to determine if fields are valid

3. Render the knowledge base options as checkboxes based on `botRole`

   - `knowledgeBaseOptions` is exported from `form.ts`
   - Handle checkbox changes to add and remove options in the `formData` state
   - Ensure the checkboxes reflect the current state of `formData` and don't persist values from previous selections

4. Implement the validation for the password rules

   - Common passwords come from the `commonPasswords` import of `common.txt`

5. Commit your changes and push to the git remote

   - The push will fail, that's okay — ignore
