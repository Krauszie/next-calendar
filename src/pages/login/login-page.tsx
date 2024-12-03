import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

type LoginFormProps = {
  onLoginSuccess?: () => void;
};

const LoginPage = ({ onLoginSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid credentials");
      }

      const data = await response.json();
      console.log("data-login", data);

      // Store token and role securely in cookies
      document.cookie = `token=${encodeURIComponent(
        data.token
      )}; path=/; SameSite=Strict`;

      // Weekends Debt: Try Fetch API for user consist of email and role :pepehands:
      document.cookie = `email=${encodeURIComponent(
        data.email
      )}; path=/; SameSite=Strict`;
      document.cookie = `role=${encodeURIComponent(
        data.role
      )}; path=/; SameSite=Strict`;

      onLoginSuccess?.();
      // router.push("dashboard");
      const redirectPath = (router.query.redirect as string) || "/";
      router.push(redirectPath);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <h1 className="text-2xl font-bold mb-4 text-tertiary">Log1(n) = -1</h1>
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email:</label>
          <input
            className="w-full px-3 py-2 border rounded text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password:</label>
          <input
            className="w-full px-3 py-2 border rounded text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </form>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default LoginPage;
