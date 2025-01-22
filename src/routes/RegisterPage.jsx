import { SignUp } from "@clerk/clerk-react";

export default function RegisterPage() {
  return (
    <div className="flex justify-center h-[calc(100vh-80px)] items-center">
      <SignUp />
    </div>
  )
}
