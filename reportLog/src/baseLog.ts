export interface BaseLogProps {
  pageName?: string;
}
export interface BaseLogData {
  userAgent: Navigator["userAgent"];
  pageInfo: { pageName: string };
}
export default class BaseLog {
  pageName: string;

  constructor(props: BaseLogProps) {
    this.pageName = props.pageName || window.location.pathname;
  }

  _getBaseData(): BaseLogData {
    return {
      userAgent: navigator.userAgent,
      pageInfo: { pageName: this.pageName }
      /* 用户访问地址的方式 */
    };
  }
}
