import { FC } from "react";
import { WidgetEntity } from "../redux/slices/types";
import { Widget } from "./types";

export const Widgets: FC<{
    widgetsSettings: WidgetEntity[],
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
