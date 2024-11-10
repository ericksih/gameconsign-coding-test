import isDateObject from '@/utils/isDateObject';
import isNullOrUndefined from '@/utils/isNullOrUndefined';

export const isObjectType = (value: unknown): value is object =>
  typeof value === 'object';

export default <T extends object>(value: unknown): value is T =>
  !isNullOrUndefined(value) &&
  !Array.isArray(value) &&
  isObjectType(value) &&
  !isDateObject(value);
