import isKey from '@/utils/isKey';
import isObject from '@/utils/isObject';
import stringToPath from '@/utils/stringToPath';

export default <T>(object: T, path: string, value?: unknown) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;

  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;

    if (index !== lastIndex) {
      const objValue = object[key as keyof T];
      newValue =
        isObject(objValue) || Array.isArray(objValue)
          ? objValue
          : !isNaN(+tempPath[index + 1])
          ? []
          : {};
    }

    if (key === '__proto__') {
      return;
    }

    // @ts-ignore
    object[key as keyof T] = newValue;
    object = object[key as keyof T] as T;
  }
  return object;
};
