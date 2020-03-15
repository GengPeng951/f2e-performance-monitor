export interface PerformanceData {
    loadPage: number;
    ttfb: number;
    domReady: number;
    lookupDomain: number;
    request: number;
    loadEvent: number;
    type: number;
}
export interface PerformanceReportProps {
    pageName: string;
    logApi: string;
    transParmas: <T>(data: PerformanceData) => T;
    request: <T = PerformanceData, P = void>(data: T) => P;
}
export default class PerformanceReport {
    pageName: string;
    logApi?: string;
    transParmas?: <T>(data: PerformanceData) => T;
    request?: <T = PerformanceData, P = void>(data: T) => P;
    _t: PerformanceTiming;
    _navigation: PerformanceNavigation;
    constructor(props: PerformanceReportProps);
    report(): unknown;
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
