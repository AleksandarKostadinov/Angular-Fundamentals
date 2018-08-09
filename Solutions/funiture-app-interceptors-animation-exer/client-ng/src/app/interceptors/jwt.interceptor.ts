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
import { ToastrService } from "ngx-toastr";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))

    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          "Authorization": "Bearer " + currentUser.token,
          "Content-Type": "application/json"
        }
      })
    }

    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (req.url.endsWith("login") && event.body && event.body.success) {
            this.toastr.success(event.body.message, "Success!");
            this.saveToken(event.body);
            this.router.navigate(["furniture/all"])
          }

          if (req.url.endsWith("signup") && event.body && event.body.success) {
            this.toastr.success(event.body.message, "Success!");
            this.router.navigate(["/signin"])
          }
        }
      }));
  }

  private saveToken(data) {
    localStorage.setItem("currentUser", JSON.stringify({ username: data.user.name, token: data.token, isAdmin: data.user.isAdmin }))
  }
}