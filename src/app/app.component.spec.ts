import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { KeycloakService } from "./keycloak/keycloak.service";
import { KeycloakHttp, keycloakHttpFactory } from "./keycloak/keycloak.http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from "@angular/common";
import { CreateProductModule } from "./createRecords/createProduct/create-product.module";
import { CreateProductComponent } from "./createRecords/createProduct/create-product.component";

import { HttpModule } from "@angular/http";

import { ConnectionBackend, XHRBackend } from "@angular/http";

describe("AppComponent", () => {
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpModule, CreateProductModule],
      declarations: [AppComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },

        KeycloakService,
        KeycloakHttp,
        ConnectionBackend,
        XHRBackend
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should  render title in a h1 tag", () => {
    expect(de.query(By.css("h1")).nativeElement.innerText).toBe(
      "Food Component Data Repository"
    );
  });

  it("#Clicked() should display create product component", () => {
    // de.query(By.css("a"));
    // de.query(By.css(".navBarItems")).nativeElement.
    let listOfAnchorTag = de.queryAll(By.css(".navBarItems"));
    for(let item of listOfAnchorTag){
      
    }
    expect(de.queryAll(By.css(".navBarItems")).length).toBe(4);
  });
});
