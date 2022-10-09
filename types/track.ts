import { ReactNode } from "react";

interface TrackArtist {
    name: String,
    mbid?: String,
    url?: String,
}

export interface Track {
    name: String,
    listeners: Number,
    playcount: Number,
    artist: TrackArtist,
    children: ReactNode,
}