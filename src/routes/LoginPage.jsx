import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <div className="flex justify-center h-[calc(100vh-80px)] items-center">
      <SignIn  signUpUrl="/register" />
    </div>
  )
}
