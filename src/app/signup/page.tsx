"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-full max-w-md p-6  rounded-lg shadow-md bg-secondary mx-4">
        <h2 className="text-2xl font-semibold text-center  mb-4">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username" className="block text-sm font-medium ">
              Username
            </Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
              className="mt-2 w-full"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium ">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="mt-2 w-full"
            />
          </div>
          <div className="mb-6 relative">
            <Label htmlFor="password" className="block text-sm font-medium ">
              Password
            </Label>
            <div className="relative">
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                className="mt-2 w-full pr-10"
              />
              <Button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-secondary border-none text-primary shadow-none size-sm h-8 rounded-md px-3 text-xs hover:bg-secondary hover:text-primary"
              >
                {passwordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-2 px-4  focus:outline-none focus:ring-2 "
          >
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
