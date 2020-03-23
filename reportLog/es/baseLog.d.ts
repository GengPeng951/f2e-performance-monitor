export interface BaseLogProps {
    pageName?: string;
}
export interface BaseLogData {
    userAgent: Navigator["userAgent"];
    pageInfo: {
        pageName: string;
    };
}
export default class BaseLog {
    pageName: string;
    constructor(props: BaseLogProps);
    _getBaseData(): BaseLogData;
}
