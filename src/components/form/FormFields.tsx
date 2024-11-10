import React from "react";
import { FormFieldProps } from "@/components/form/types";
import { TextField } from "@/components/form/fields/TextField";
import { FormLabel } from "@/components/form/FormLabel";
import { PasswordField } from "./fields/PasswordField";

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ field, path, value, errors, updateModelValue, ...props }, ref) => {
    // Determines which component to render based on field type
    const generateField = () => {
      let Component = null;

      switch (field.type) {
        case "text":
          Component = TextField;
          break;
        case "password":
          Component = PasswordField;
          break;
        default:
          return null;
      }

      return (
        <FormLabel label={field.label} errors={errors} path={path}>
          <Component
            field={field}
            value={value as string}
            path={path}
            updateModelValue={updateModelValue}
            {...props}
          />
        </FormLabel>
      );
    };

    return <div ref={ref}>{generateField()}</div>;
  }
);

FormField.displayName = "FormField";

export { FormField };
