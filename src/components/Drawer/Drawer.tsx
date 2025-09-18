import { useRef, useEffect } from 'react';
import './Drawer.css';

const Drawer = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

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

  const handleClickOutside = (e: React.MouseEvent) => {
    const drawerContent = dialogRef.current?.querySelector('.drawer-content');
    if (!drawerContent?.contains(e.target as Node)) {
      closeDrawer();
    }
  };

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
                    <input type="checkbox" id="step-1a" />
                    <label htmlFor="step-1a">
                      Render the appropriate step component based on the current
                      step (<strong>Step 1</strong> → <strong>Step 2</strong> →{' '}
                      <strong>Step 3</strong> → <strong>Summary</strong>)
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="step-1b" />
                    <label htmlFor="step-1b">
                      Hide <strong>Previous</strong> button on first step and{' '}
                      <strong>Next</strong> button on last step
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="step-1c" />
                    <label htmlFor="step-1c">
                      Update <code>prevStep</code> and <code>nextStep</code>{' '}
                      functions to navigate between steps
                    </label>
                  </li>

                  <li>
                    <input type="checkbox" id="step-1d" />
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
                    <input type="checkbox" id="step-2a" />
                    <label htmlFor="step-2a">
                      Render the knowledge base options dynamically based on{' '}
                      <code>botRole</code>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="step-2b" />
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
                    <input type="checkbox" id="step-3a" />
                    <label htmlFor="step-3a">
                      Implement the validation for the password rules
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="step-3b" />
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
                    <input type="checkbox" id="step-4a" />
                    <label htmlFor="step-4a">Commit your changes in git</label>
                  </li>
                  <li>
                    <input type="checkbox" id="step-4b" />
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

export default Drawer;
