"use client";
import { logout } from "@/actions/logout";
import { FormModel, FormSchema } from "@/components/form/types";
import { useFormGen } from "@/components/form/useFormGen";
import { FormGenerator } from "@/components/form/FormGenerator";
import { Button } from "@/components/ui/button";

export default function FormPage() {
  const schema = {
    name: "simple-form",
    definitions: [
      {
        name: "first_name",
        type: "text",
        label: { text: "First Name" },
        rules: [{ name: "required" }],
      },
      {
        name: "last_name",
        type: "text",
        label: { text: "Last Name" },
        rules: [{ name: "required" }],
      },
    ],
  } as FormSchema;

  const { state, model, updateModelValue, handleSubmit } = useFormGen({
    schema: schema,
    model: { first_name: "", last_name: "" },
  });

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log(model, state.isDirty);
  // };

  const logSubmit = async (model: FormModel) => {
    console.log(model);
  };
  // TODO: Challenge #2: Browser console is throwing a warning. Fix it.
  return (
    <div className="w-full md:w-96 mx-auto text-center">
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit(logSubmit)}>
        <FormGenerator
          schema={schema}
          state={state}
          model={model}
          updateModelValue={updateModelValue}
        />
        <Button type={"submit"}>Submit</Button>
      </form>
      <hr />
      <form action={logout} className="mt-4 text-center align-center">
        <Button
          type={"submit"}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </Button>
      </form>
    </div>
  );
}
