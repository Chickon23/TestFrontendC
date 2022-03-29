import { ConfigEntity, JobListWidgetSettings } from "../redux/slices/types";

function useConfigJobCount(config: ConfigEntity, widgetName: string): number {
  const { WidgetSettings } = config;

  const widget = WidgetSettings.find((w) => w.Name === widgetName);

  const settings: JobListWidgetSettings = widget ? widget.Settings : undefined;

  return settings && settings.JobCount ? settings.JobCount : 25;
}

export default useConfigJobCount;
