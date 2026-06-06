"use client";

interface OnboardingStepsProps {
  currentStep?: number;
}

const steps = [
  { number: 1, label: "Create account" },
  { number: 2, label: "Set up workspace" },
  { number: 3, label: "Invite team" },
];

export default function OnboardingSteps({
  currentStep = 1,
}: OnboardingStepsProps) {
  return (
    <div id="onboarding-steps" className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                step.number <= currentStep
                  ? "bg-fb-primary text-white"
                  : "bg-fb-gray-100 text-fb-gray-400"
              }`}
            >
              {step.number < currentStep ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span
              className={`text-sm font-medium hidden sm:block ${
                step.number <= currentStep
                  ? "text-fb-black"
                  : "text-fb-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 lg:w-20 h-0.5 mx-3 ${
                step.number < currentStep
                  ? "bg-fb-primary"
                  : "bg-fb-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
