import BaseLog, { BaseLogData } from "./baseLog";
export interface ReportData extends BaseLogData {
    pData: PerformanceData;
}
export interface PerformanceData {
    loadPage: number;
    ttfb: number;
    domReady: number;
    lookupDomain: number;
    request: number;
    loadEvent: number;
    type: number;
}
export interface PerformanceLogProps {
    pageName: string;
    request: <T = PerformanceData, P = void>(data: T) => P;
}
export default class PerformanceLog extends BaseLog {
    readonly _t: PerformanceTiming;
    readonly _navigation: PerformanceNavigation;
    _request: <T = PerformanceData, P = void>(data: T) => P;
    constructor(props: PerformanceLogProps);
    report(): void | ReportData;
    getPerformanceNavigation(): {
        type: number;
    };
    getPerformanceTiming(): {
        loadPage: number;
        ttfb: number;
        domReady: number;
        lookupDomain: number;
        request: number;
        loadEvent: number;
    };
}
