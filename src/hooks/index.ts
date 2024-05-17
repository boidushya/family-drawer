import { useLayoutEffect, useRef } from "react";

export function useResizeObserver<T extends HTMLElement>(
  callback: (target: T, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      callback(element, entries[0]);
    });

    observer.observe(element);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [callback, ref]);

  return ref;
}
