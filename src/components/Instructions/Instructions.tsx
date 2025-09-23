import { useRef, useEffect, useState, type FormEvent } from 'react';
import './Instructions.css';

type CheckboxState = {
  [key: string]: boolean;
};

const Instructions = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const getCheckboxState = (): CheckboxState => {
    const saved = localStorage.getItem('drawerCheckboxes');
    return saved
      ? JSON.parse(saved)
      : {
          step1a: false,
          step1b: false,
          step1c: false,
          step1d: false,
          step2a: false,
          step2b: false,
          step3a: false,
          step3b: false,
          step4a: false,
          step4b: false
        };
  };
  const [checkboxes, setCheckboxes] = useState<CheckboxState>(
    getCheckboxState()
  );

  const handleCheckboxChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;

    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked
    }));
  };

  const getFocusableElements = (element: HTMLElement) => {
    return element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  };

  const openDrawer = async () => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    if (!document.startViewTransition) {
      dialogRef.current?.showModal();
      return;
    }

    await document.startViewTransition(async () => {
      dialogRef.current?.showModal();
    }).finished;

    // Focus first focusable element in drawer
    const focusableElements = dialogRef.current
      ? getFocusableElements(dialogRef.current)
      : null;
    if (focusableElements?.length) {
      focusableElements[0].focus();
    }
  };

  const closeDrawer = async () => {
    if (!document.startViewTransition) {
      dialogRef.current?.close();
    } else {
      await document.startViewTransition(async () => {
        dialogRef.current?.close();
      }).finished;
    }

    // Restore focus
    previousActiveElement.current?.focus();
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    const drawerContent = dialogRef.current?.querySelector('.drawer-content');
    if (!drawerContent?.contains(e.target as Node)) {
      closeDrawer();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
        return;
      }

      if (e.key === 'Tab') {
        // Get all focusable elements
        const focusableElements = getFocusableElements(dialog);
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        // If shift+tab on first element, move to last
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
        // If tab on last element, move to first
        else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    dialog.addEventListener('keydown', handleKeyDown);
    return () => dialog.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    localStorage.setItem('drawerCheckboxes', JSON.stringify(checkboxes));
  }, [checkboxes]);

  return (
    <>
      <button
        className="drawer-button"
        onClick={openDrawer}
        title="Open instructions"
      >
        ℹ️
      </button>
      <dialog
        ref={dialogRef}
        className="drawer"
        onClick={handleClickOutside}
        aria-modal="true"
        aria-labelledby="drawer-title"
        role="dialog"
      >
        <div className="drawer-content">
          <header className="drawer-header">
            <h2 id="drawer-title">Instructions</h2>
            <button
              className="close-button"
              onClick={closeDrawer}
              aria-label="Close instructions"
            >
              ✕
            </button>
          </header>
          <div className="instructions-content">
            <h3>Form Implementation Tasks</h3>
            <ol>
              <li>
                <h4>Step Navigation</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="step-1a"
                      name="step1a"
                      checked={checkboxes.step1a}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-1a">
                      Render the appropriate step component based on the current
                      step (<strong>Step 1</strong> → <strong>Step 2</strong> →{' '}
                      <strong>Step 3</strong> → <strong>Summary</strong>)
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="step-1b"
                      name="step1b"
                      checked={checkboxes.step1b}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-1b">
                      Hide <strong>Previous</strong> button on first step and{' '}
                      <strong>Next</strong> button on last step
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="step-1c"
                      name="step1c"
                      checked={checkboxes.step1c}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-1c">
                      Update <code>prevStep</code> and <code>nextStep</code>{' '}
                      functions to navigate between steps
                    </label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="step-1d"
                      name="step1d"
                      checked={checkboxes.step1d}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-1d">
                      Call <code>validateStep</code> in the{' '}
                      <code>nextStep</code> function to advance only if fields
                      are valid
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Knowledge Base Options</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="step-2a"
                      name="step2a"
                      checked={checkboxes.step2a}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-2a">
                      Render the knowledge base options dynamically based on{' '}
                      <code>botRole</code>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="step-2b"
                      name="step2b"
                      checked={checkboxes.step2b}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-2b">
                      Fix the issue where previous selections persist after
                      changing <code>botRole</code>
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Password Rules</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="step-3a"
                      name="step3a"
                      checked={checkboxes.step3a}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-3a">
                      Implement the validation for the password rules
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="step-3b"
                      name="step3b"
                      checked={checkboxes.step3b}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-3b">
                      Common passwords come from the{' '}
                      <code>commonPasswords</code> import of{' '}
                      <code>common.txt</code>
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Commit & Push</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="step-4a"
                      name="step4a"
                      checked={checkboxes.step4a}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-4a">Commit your changes in git</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="step-4b"
                      name="step4b"
                      checked={checkboxes.step4b}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="step-4b">
                      Push your changes to git remote (it will fail, that's okay
                      &mdash; ignore)
                    </label>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Instructions;
