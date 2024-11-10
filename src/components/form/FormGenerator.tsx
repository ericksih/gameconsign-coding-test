"use client";
import React from "react";
import { FormGeneratorProps } from "@/components/form/types";
import { FormGeneratorLoader } from "@/components/form/FormGeneratorLoader";
import { FormField } from "@/components/form/FormFields";

const FormGenerator = React.forwardRef<HTMLDivElement, FormGeneratorProps>(
  (props, ref) => {
    const { schema, state: formGenState, model, updateModelValue } = props;

    if (formGenState.isLoading) {
      return <FormGeneratorLoader />;
    }

    // TODO: Challenge #5 last_name re-rendered as I change value for first_name. Figure how to optimize this.
    return (
      <div ref={ref}>
        {schema.definitions.map((field) => (
          <FormField
            key={field.name}
            field={field}
            path={field.name}
            value={model?.[field.name]}
            errors={formGenState?.errors?.[field.name]}
            updateModelValue={updateModelValue}
          />
        ))}
      </div>
    );
  }
);

FormGenerator.displayName = "FormGenerator";

export { FormGenerator };
