import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from "../../../node_modules/ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401:
            this.toastr.error(err.error.message, "Warning!")
            break;
          case 400:
            if (req.url.endsWith('create')) {
              this.toastr.error(err.error, "Warning!")
            } else {
              this.toastr.error(err.error.message, "Warning!")
            }
            break;
        
          default:
            break;
        }

        return throwError(err);
      }))
  }

}