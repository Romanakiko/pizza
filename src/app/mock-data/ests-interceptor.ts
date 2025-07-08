import { HttpInterceptorFn } from '@angular/common/http';

export const estsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
