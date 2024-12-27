import "./WishesCounter.scss";

interface WishesCounterProps {
  counter: number;
}

export default function WishesCounter({ counter }: WishesCounterProps) {
  return (
    <div className="counter-container">
      <span className="counter-text">{counter}</span>
    </div>
  );
}
