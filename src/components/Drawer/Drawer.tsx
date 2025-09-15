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
                    Render the appropriate step component based on{' '}
                    <code>currentStep</code>
                  </li>
                  <li>
                    The <strong>Previous</strong> and <strong>Next</strong>{' '}
                    buttons should navigate between steps
                  </li>
                  <li>
                    Hide <strong>Previous</strong> button on first step and{' '}
                    <strong>Next</strong> button on last step
                  </li>
                </ul>
              </li>
              <li>
                <h4>Form Validation</h4>
                <ul>
                  <li>
                    Implement <code>nextStep</code> to advance to next step if
                    fields are valid
                  </li>
                  <li>
                    Add <code>prevStep</code> function to go back to previous
                    step
                  </li>
                </ul>
              </li>
              <li>
                <h4>Knowledge Base Options</h4>
                <ul>
                  <li>
                    Render the knowledge base options as checkboxes based on{' '}
                    <code>botRole</code>
                  </li>
                  <li>
                    Handle checkbox changes to add and remove options in the{' '}
                    <code>formData</code> state
                  </li>
                  <li>
                    Ensure the checkboxes reflect the current state of{' '}
                    <code>formData</code> and don't persist values from previous
                    selections
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
