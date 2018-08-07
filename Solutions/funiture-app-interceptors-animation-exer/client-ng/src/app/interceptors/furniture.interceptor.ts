import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { ToastrService } from "../../../node_modules/ngx-toastr";

@Injectable()
export class FurnitureInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>)=> {
        if (event instanceof HttpResponse) {
          if (req.url.includes("furniture")) {
            if (req.url.endsWith("create") && event.body && event.body.success) {
              this.toastr.success(event.body.meassage, "Success")
              this.router.navigate(["furniture/all"])
            }

            
          }
        }
      }));
  }

}