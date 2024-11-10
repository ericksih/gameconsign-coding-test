import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { PasswordFieldProps } from "../types";

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ field, value, path, updateModelValue, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    useEffect(() => {
      console.log(`PasswordField ${path} mounted`);
      return () => {
        console.log(`PasswordField ${path} unmounted`);
      };
    }, [path]);

    useEffect(() => {
      console.log(`PasswordField ${path} rerendered`);
    }, [value, path]);

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          name={field.name}
          id={path}
          value={value as string}
          onChange={(e) => updateModelValue(path, field, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          aria-label="Toggle password visibility"
        >
          {showPassword ? "👁️" : "🫣"}
        </button>
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";
export { PasswordField };
