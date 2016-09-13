export interface Device {
    $key?: string;
    location: Location;
    last_online?: string;
    connections?: string[];
}

interface Location {
    latitude: number;
    longitude: number;
    time: string;
}

export interface DeviceDetail {
    $key?: string;
}