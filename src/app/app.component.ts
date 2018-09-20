import { Component, Input, ViewEncapsulation, OnInit } from "@angular/core";
import { SearchService } from "./services/search.service";
// import {MatIconRegistry} from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";
import { KeycloakService } from "./keycloak/keycloak.service";
import { KeycloakHttp } from "./keycloak/keycloak.http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list = ["radiobutton"];
  username: string;
  fullName: string;
  constructor(
    private keycloakHttp: KeycloakHttp,
    private keycloakService: KeycloakService
  ) {}
  getUserInfoFromToken(): void {
    this.username = KeycloakService.getUsername();
    this.fullName = KeycloakService.getFullName();

    // console.log("the token is",this.keycloakService.getToken())

    if (KeycloakService.hasRealmRole("sodium-user")) {
      console.log("oui");
    } else {
      console.log("Nope");
    }
  }

  logout(): void {
    KeycloakService.logout();
  }
}
