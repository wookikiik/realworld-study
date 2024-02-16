import { Task } from "@/types";
import { useLocation } from "./useLocation";

export function useFilterTasks(tasks: Task[] = []): Task[] {
  const filterAction = useLocation((location) => location.hash || "#/").replace(
    /^#\//,
    ""
  );
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
