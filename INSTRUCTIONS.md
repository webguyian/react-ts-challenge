# Instructions for Code Exercise

Your task is to convert the form to a multi-step flow, render dynamic options, and add validation rules.

0. Create a new branch for your changes
1. Render the appropriate step component based on the current step

   - Expected flow: **Step 1** → **Step 2** → **Step 3** → **Summary**
   - Hide **Previous** button on first step and **Next** button on last step

2. Update `prevStep` and `nextStep` functions to navigate between steps

   - Call `validateStep` in the `nextStep` function to advance only if fields are valid

3. Render the knowledge base options dynamically based on `botRole`

   - Fix the issue where previous selections persist after changing `botRole`

4. Implement the validation for the password rules

   - Common passwords come from the `commonPasswords` import of `common.txt`

5. Commit your changes and push to the git remote

   - The push will fail, that's okay — ignore
