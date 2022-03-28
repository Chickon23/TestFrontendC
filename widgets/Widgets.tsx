import { FC } from "react";
import { Widget, WidgetSetting } from "./types";

export const Widgets: FC<{
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
