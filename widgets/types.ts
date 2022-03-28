import { WidgetSettingEntity } from "../config/slices/types";

export interface WidgetSetting extends WidgetSettingEntity {
};

export interface Widget<WidgetSetting> extends React.FC<WidgetSetting> {
};


