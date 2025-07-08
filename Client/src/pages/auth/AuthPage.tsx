import type { ReactNode } from "react";

const AuthPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthPage;
