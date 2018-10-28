export interface Feature {
    type: string;
    name?: string;
    objectID?: string;
    clientId?: string;
    clientName?: string;
    landowner?: string;
    shape?: string;
    parish?: string;
    size?: number;
    featureId?: string;
    lat?: number;
    lng?: number;
    notes?: string;
    geometry?: Object;
    [propName: string]: any;
  }
