import compact from '@/utils/compact';
import isNullOrUndefined from '@/utils/isNullOrUndefined';
import isObject from '@/utils/isObject';
import isUndefined from '@/utils/isUndefined';

export default <T>(object: T, path?: string, defaultValue?: unknown): any => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }

  const result = compact(path.split(/[,[\].]+?/)).reduce(
    (result, key) =>
      isNullOrUndefined(result) ? result : result[key as keyof {}],
    object,
  );

  return isUndefined(result) || result === object
    ? isUndefined(object[path as keyof T])
      ? defaultValue
      : object[path as keyof T]
    : result;
};
