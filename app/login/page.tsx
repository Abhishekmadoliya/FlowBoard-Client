import type { Metadata } from "next";
import AuthSidePanel from "@/components/auth/AuthSidePanel";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In — Flowboard",
  description: "Log in to your Flowboard account to access your workspaces and whiteboards.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel — Dark editorial */}
      <div className="hidden lg:flex lg:w-[40%] xl:w-[38%]">
        <AuthSidePanel />
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-16 bg-fb-white">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
