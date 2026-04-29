import { useState, useEffect, useRef } from 'react';
import { useTypewriter } from './typewriter';
import './tour-modal.css';

const steps = [
  {
    text: 'Welcome to my AP Computer Science project.',
    elementId: 'tour-header',
    side: 'top',
    arrow: null,
    pause: 2000,
  },
  {
    text: 'For this project I decided to create a Character Chooser.',
    elementId: 'tour-header',
    side: 'bottom',
    arrow: null,
    pause: 3000,
  },
  {
    text: "As part of the project I need to accept a user's input. Here the user can type the name of their character, and the result will appear below.",
    elementId: 'tour-character-name',
    side: 'right',
    arrow: { direction: 'left' },
    pause: 6000,
  },
{
    text: "Different text | character - onscren",
    elementId: 'character-body',
    side: 'left',
    arrow: { direction: 'right' },
    pause: 6000,
  },
  {
    text: "Different text | character - body",
    elementId: 'character-chooser',
    side: 'right',
    arrow: { direction: 'left' },
    pause: 6000,
  },
  {
    text: "more information to type out",
    elementId: 'character-bottom',
    side: 'bottom',
    arrow: { direction: 'left' },
    pause: 6000,
  },
  {
    text: "Enjoy",
    elementId: 'character-bottom',
    side: 'bottom',
    arrow: { direction: 'left' },
    pause: 6000,
  },
];

function TourModal({ onClose }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const modalRef = useRef(null);

  const step = steps[stepIndex];
  const typed = useTypewriter(step.text);
  const typingFinished = typed.length === step.text.length;

  useEffect(() => {
    const el = document.getElementById(step.elementId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const modalWidth = modalRef.current ? modalRef.current.offsetWidth : 300;
    const modalHeight = modalRef.current ? modalRef.current.offsetHeight : 100;
    const pad = 8;

    let top, left;

    if (step.side === 'right') {
      top = rect.top;
      left = rect.right + 12;
    } else if (step.side === 'left') {
      top = rect.top;
      left = rect.left - modalWidth - 12;
    } else if (step.side === 'bottom') {
      top = rect.bottom + 12;
      left = rect.left;
    } else if (step.side === 'top') {
      top = rect.top - modalHeight - 12;
      left = rect.left;
    }

    top = Math.max(pad, Math.min(top, window.innerHeight - modalHeight - pad));
    left = Math.max(pad, Math.min(left, window.innerWidth - modalWidth - pad));

    setPos({ top, left });
  }, [stepIndex]);

  useEffect(() => {
    if (!typingFinished) return;
    const timer = setTimeout(() => {
      if (stepIndex < steps.length - 1) {
        setStepIndex(i => i + 1);
      } else {
        setDone(true);
        onClose?.();
      }
    }, step.pause);
    return () => clearTimeout(timer);
  }, [typingFinished, stepIndex]);

  if (done) return null;

  return (
    <div ref={modalRef} className="tour-modal" style={{ top: pos.top, left: pos.left }}>
      {step.arrow && <div className={`tour-arrow tour-arrow-${step.arrow.direction}`} />}
      <p>{typed}</p>
    </div>
  );
}

export { TourModal };
