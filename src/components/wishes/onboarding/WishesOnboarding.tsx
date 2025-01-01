import { motion } from "motion/react";
import "./WishesOnboarding.scss";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

interface WishesOnboardingProps {
  handleStart: () => void;
}

export default function WishesOnboarding({
  handleStart,
}: WishesOnboardingProps) {
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <div className="onboarding-instructions">
          <div className="instruction">
            <div className="instruction-pic-container">
              <svg
                className="instruction-pic"
                width="36"
                height="56"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m12 40.946-2.734-2.604a2.338 2.338 0 0 0-3.318 3.292l8.913 9.507a2.997 2.997 0 0 0 2.187.948H24c3.6 0 6-3 6-6V33.232"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M25.5 34.089v-.857c0-3.429 4.5-3.429 4.5 0m-9 .857v-2.571c0-3.429 4.5-3.429 4.5 0v2.571m-9 .001v-3.75c0-3.43 4.5-3.43 4.5 0v3.749m-9 6.857V24.34a2.25 2.25 0 0 1 4.5-.001v9.75"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12.5 6.089c9 1.5 16 7.5 19.5 16m-19.5-16 4 7.5m-4-7.499 8-3.5"
                />
              </svg>
            </div>
            <div className="instruction-title">Не подходит?</div>
            <div className="instruction-text">Смахивай влево</div>
          </div>
          <div className="instruction">
            <div className="instruction-pic-container">
              <svg
                className="instruction-pic"
                width="37"
                height="55"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m13 40.857-2.734-2.604a2.338 2.338 0 0 0-3.318 3.292l8.913 9.507a2.996 2.996 0 0 0 2.187.948H25c3.6 0 6-3 6-6V33.143"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M26.5 34v-.857c0-3.429 4.5-3.429 4.5 0M22 34v-2.572c0-3.428 4.5-3.428 4.5 0V34m-9 0v-3.75c0-3.428 4.5-3.428 4.5 0V34m-9 6.857V24.25a2.25 2.25 0 0 1 4.5-.002V34"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M20.5 6.089c-9 1.5-16 7.5-19.5 16m19.5-16-4 7.5m4-7.499-8-3.5"
                />
              </svg>
            </div>
            <div className="instruction-title">Нравится?</div>
            <div className="instruction-text">Смахивай вправо</div>
          </div>
        </div>
        <p className="onboarding-note">
          Не выбирай сразу всё, а то нечего будет оставить на потом 😏
        </p>
        <div className="onboarding-footer">
          <motion.button
            onClick={handleStart}
            whileTap={{ scale: 0.95 }}
            className="onboarding-button"
          >
            <span className="onboarding-button-text">Понятно, приступим</span>
            <ArrowRightCircleIcon className="onboarding-button-icon" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
