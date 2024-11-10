import React, { useCallback, useEffect, useState } from "react";
import {
  FieldDefinition,
  FormErrors,
  FormModel,
  UseFormGeneratorProps,
  UseFormGeneratorReturn,
  UpdateModelValue,
  UseFormGenHandleSubmit,
  SubmitHandler,
} from "@/components/form/types";
import cloneObject from "@/utils/cloneObject";
import deepEqual from "@/utils/deepEqual";

export function useFormGen(
  props: UseFormGeneratorProps
): UseFormGeneratorReturn {
  const [state, setState] = useState({
    isDirty: false,
    isLoading: true,
    isSubmitting: false,
    isSubmitted: false,
    errors: {} as FormErrors,
    defaultValue: props.model as FormModel,
  });

  const [model, setModel] = useState({} as FormModel);

  useEffect(() => {
    setTimeout(() => {
      setModel(props.model || {});
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.model.definitions]);

  useEffect(() => {
    const isDirty = !deepEqual(model, state.defaultValue);
    if (isDirty !== state.isDirty) {
      setState((prev) => ({
        ...prev,
        isDirty: isDirty,
      }));
    }
  }, [model, state.defaultValue, state.isDirty]);

  const updateModelValue: UpdateModelValue = useCallback(
    (path, definition, value) => {
      setModel((prevModel) => ({
        ...prevModel,
        [path]: value,
      }));
    },
    []
  );

  const handleSubmit: UseFormGenHandleSubmit =
    (onValid, onInvalid) => async (e?: React.BaseSyntheticEvent) => {
      if (e) {
        e.preventDefault();
      }
      setState((prev) => ({
        ...prev,
        isSubmitting: true,
      }));

      const modelForSubmit = cloneObject(model);

      if (Object.keys(state.errors).length > 0 && onInvalid) {
        await onInvalid(modelForSubmit);
      } else {
        await onValid(modelForSubmit);
      }

      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
      }));
    };

  return {
    state,
    model,
    updateModelValue,
    handleSubmit,
  };
}
