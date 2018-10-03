import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { SearchService } from "./services/search.service";
// import {MatIconRegistry} from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";
import { KeycloakService } from "./keycloak/keycloak.service";
import { KeycloakHttp } from "./keycloak/keycloak.http";
declare const $;
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
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
  ngOnInit(): void {
    $(function() {
      let table = $("#table_id").DataTable({
        dom: "Bfrtip",
        colReorder: true,
        stateSave: true,
        buttons: ["colvis"],
        bDestroy: true
      });
    });
  }

  logout(): void {
    KeycloakService.logout();
  }
}
