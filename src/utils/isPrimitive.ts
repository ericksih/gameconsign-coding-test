import isNullOrUndefined from '@/utils/isNullOrUndefined';
import { isObjectType } from '@/utils/isObject';
import {PrimitiveValues} from "@/utils/types";

export default (value: unknown): value is PrimitiveValues =>
  isNullOrUndefined(value) || !isObjectType(value);
