import { FC } from "react";
import { WidgetSettingEntity } from "../redux/slices/types";

export interface WidgetSetting extends WidgetSettingEntity {
};

export interface Widget<WidgetSetting> extends FC<WidgetSetting> {
};


