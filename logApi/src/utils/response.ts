export const SUCCESS_CODE = 1000000; //成功
export const PARAMS_ERROR_CODE = 1000001; // 参数传入不对
export const HINT_ERROR_CODE = 500000; //失败
export const AUTH_ERROR_CODE = 500001; //异常
export const AUTH_FAIL_CODE = 400003; //鉴权失败
export const PERMISSION_ERROR_CODE = 400005; //无权限

interface Body {
  errorCode: number;
  errorMsg?: string | null;
  result?: any;
  success: boolean;
}

export const successBody = (result: any): Body => {
  return {
    errorCode: SUCCESS_CODE,
    errorMsg: null,
    result,
    success: true
  };
};

export const requestParamsErrorBody = (result?: any) => {
  return {
    errorCode: PARAMS_ERROR_CODE,
    errorMsg: "参数传入不对",
    result: result || null,
    success: false
  };
};

export const errorBody = (
  errorCode: number,
  errorMsg: string,
  result?: any
): Body => {
  return {
    errorCode,
    errorMsg,
    result,
    success: false
  };
};

export const hintErrorBody = (errorMsg: string, result?: any) => {
  return errorBody(HINT_ERROR_CODE, errorMsg, result);
};
