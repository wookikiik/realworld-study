import { useSyncExternalStore } from "react";

export function useLocation<T>(
  convert: LocationConvert<T> = (location) => location as any,
) {
  function subscribe(callback: any) {
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
  }

  function getSnapshot() {
    return convert(window.location);
  }

  const location = useSyncExternalStore(subscribe, getSnapshot);
  return location;
}

type LocationConvert<T> = (source: Location) => T;
