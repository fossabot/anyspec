export function assert(condition: unknown, message: string): void {
  const booleanCondition = Boolean(condition);
  // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')
  if (!booleanCondition) {
    throw new Error(message);
  }
}
