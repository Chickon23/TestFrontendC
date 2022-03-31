import { FC } from "react";
import { WidgetEntity } from "../redux/slices/types";

export interface Widget<T extends WidgetEntity> extends FC<T> {
};


