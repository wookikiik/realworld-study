import { useSyncExternalStore } from "react";
import { Task } from "@/types";

export function useFilterTasks(tasks: Task[] = []): Task[] {
  const filterAction = useSyncExternalStore(subscribe, getSnapshot);
  if (filterAction === "") {
    return tasks;
  }

  if (filterAction === "active") {
    return tasks.filter((task) => !task.complete);
  }

  if (filterAction === "completed") {
    return tasks.filter((task) => task.complete);
  }

  return tasks;
}

function subscribe(callback: any) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSnapshot() {
  return (window.location.hash || "#/").replace(/^#\//, "");
}
