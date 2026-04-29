import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './arrow-button.css';

function ArrowButton({ direction, onClick }) {
  return (
    <button className="arrow-button" onClick={onClick}>
      {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
}

export { ArrowButton };
