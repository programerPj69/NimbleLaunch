export function cn(...classes: (string | boolean | undefined | null | Record<string, boolean | undefined | null>)[]) {
  return classes
    .flatMap(cls => {
      if (!cls) return [];
      if (typeof cls === 'string' || typeof cls === 'boolean') return [cls];
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}
