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
import { ToastrService } from "ngx-toastr";

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
              if (err.error.errors) {
                let errorsEntries = Object.entries(err.error.errors);

                this.toastr.error(errorsEntries.map((e, i) => `${i + 1}. ${e[1]}`).join(), "Warning!")
              }

              this.toastr.error(err.error.errors, "Warning!")
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