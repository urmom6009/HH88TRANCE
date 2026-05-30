import "@testing-library/jest-dom/vitest";

const store = new Map<string, string>();

Object.defineProperty(window, "localStorage", {
  value: {
    clear: () => store.clear(),
    getItem: (key: string) => store.get(key) ?? null,
    removeItem: (key: string) => store.delete(key),
    setItem: (key: string, value: string) => store.set(key, value)
  },
  configurable: true
});

Object.defineProperty(window, "scrollTo", {
  value: () => undefined,
  configurable: true
});
