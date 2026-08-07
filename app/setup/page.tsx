"use client";

import OnboardingSteps from "@/components/auth/OnboardingSteps";
import WorkspaceSetup from "@/components/auth/WorkspaceSetup";

export default function SetupPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-16 bg-fb-white">
        <div className="w-full max-w-md">
          <OnboardingSteps currentStep={2} />
          <WorkspaceSetup />
        </div>
      </div>
    </div>
  );
}
