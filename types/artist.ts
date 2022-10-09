import { ReactNode } from "react";

export interface Artist {
    name: String,
    listeners: Number,
    playcount: Number,
    children: ReactNode,
}