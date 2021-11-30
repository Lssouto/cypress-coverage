export const makeModifiers = (
  modifiers: string[],
  name: string,
  className: string,
): string => {
  return modifiers.reduce(
    (_name, _modifier) => `${_name} ${name}--${_modifier}`,
    `${className ? className + ' ' : ''}${name}`,
  );
};

export const addModifiers = (
  modifiers: string[],
  newModifiers: string[],
): string[] => {
  if (Array.isArray(newModifiers)) {
    return [
      ...modifiers,
      ...newModifiers.filter(value => !!value && !modifiers.includes(value)),
    ];
  }

  return modifiers;
};
