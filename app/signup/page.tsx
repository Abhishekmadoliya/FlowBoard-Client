import type { Metadata } from "next";
import AuthSidePanel from "@/components/auth/AuthSidePanel";
import SignupForm from "@/components/auth/SignupForm";
import OnboardingSteps from "@/components/auth/OnboardingSteps";

export const metadata: Metadata = {
  title: "Sign Up — Flowboard",
  description:
    "Create your free Flowboard account. No credit card required. Start collaborating on an infinite canvas in seconds.",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel — Dark editorial */}
      <div className="hidden lg:flex lg:w-[40%] xl:w-[38%]">
        <AuthSidePanel />
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-16 bg-fb-white">
        <div className="w-full max-w-md">
          <OnboardingSteps currentStep={1} />
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
