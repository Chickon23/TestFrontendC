import { FC } from "react";
import { WidgetSettingEntity } from "../config/slices/types";
import { Widget, WidgetSetting } from "./types";

export const Widgets: React.FC<{
    widgetsSettings: WidgetSetting[],
    uiTemplates: Record<string, Widget<any>>;
}> = ({ widgetsSettings, uiTemplates }) => (
    <>
        {widgetsSettings &&
        widgetsSettings.map((setting, index) => {
            const Component = uiTemplates[setting.Name];
            return Component && <Component key={index} {...setting} />;
        })}
    </>
);
