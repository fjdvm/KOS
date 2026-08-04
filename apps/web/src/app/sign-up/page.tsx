"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpInput } from "validation";
import { signUp } from "auth/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Lock, Mail, User, AlertCircle, Loader2 } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpInput) => {
    setLoading(true);
    setError(null);
    try {
      const response = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: "/",
      });
      if (response?.error) {
        setError(response.error.message || "Failed to sign up");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F1115] px-4">
      <div className="w-full max-w-md border border-[#2A313D] bg-[#171A21] p-8 rounded-xl shadow-2xl animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 rounded-lg bg-[#b7c4ff]/10 flex items-center justify-center text-[#b7c4ff] border border-[#b7c4ff]/20 mb-4">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#e2e1ec] tracking-tight">Create your account</h1>
          <p className="text-sm text-[#c4c5d6] mt-1">Get started with KnowledgeOS</p>
        </div>

        {error && (
          <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-950/30 border border-red-500/20 p-3 text-sm text-red-200">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#c4c5d6] mb-1.5" htmlFor="name">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#8e90a0]">
                <User className="h-4 w-4" />
              </div>
              <Input
                id="name"
                type="text"
                className="pl-10"
                placeholder="Ada Lovelace"
                disabled={loading}
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-[#c4c5d6] mb-1.5" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#8e90a0]">
                <Mail className="h-4 w-4" />
              </div>
              <Input
                id="email"
                type="email"
                className="pl-10"
                placeholder="ada@example.com"
                disabled={loading}
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-[#c4c5d6] mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#8e90a0]">
                <Lock className="h-4 w-4" />
              </div>
              <Input
                id="password"
                type="password"
                className="pl-10"
                placeholder="••••••••"
                disabled={loading}
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full mt-2 h-10 bg-[#b7c4ff] text-[#002681] hover:bg-[#b7c4ff]/90 flex justify-center items-center font-semibold rounded-lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-xs text-[#c4c5d6]">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-[#b7c4ff] hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
