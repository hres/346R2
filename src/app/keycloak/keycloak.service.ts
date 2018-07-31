import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
declare let Keycloak: any;
// var Keycloakk = require("./keycloak"); 

@Injectable()
export class KeycloakService {
	static auth: any = {};
	
	static init(): Promise<any> {
		const keycloakAuth: any = Keycloak({
			url: environment.keycloakRootUrl,						
			realm: 'sodium-monitoring',
			clientId: 'sodium-monitoring-webapp', 
			'ssl-required': 'none',
			'public-client': true
		});

		KeycloakService.auth.loggedIn = false;

		return new Promise((resolve, reject) => {
			keycloakAuth.init({onLoad: 'login-required'})
				.success(() => {
					console.log(keycloakAuth);
					KeycloakService.auth.loggedIn = true;
					KeycloakService.auth.authz = keycloakAuth;
					KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl
						+ '/realms/sodium-monitoring/protocol/openid-connect/logout?redirect_uri='
						+ document.baseURI;
					resolve();
				})
				.error(() => {
					reject();
				});
		});
	}

	static logout() {
		console.log('**  LOGOUT');
		KeycloakService.auth.loggedIn = false;
		KeycloakService.auth.authz = null;

		window.location.href = KeycloakService.auth.logoutUrl;
	}

	static getUsername(): string {
		return KeycloakService.auth.authz.tokenParsed.preferred_username;
	}

	static getFullName(): string {
		return KeycloakService.auth.authz.tokenParsed.name;
	}
	static hasRealmRole(role:string): boolean{
		console.log("here",KeycloakService.auth.authz.loadUserProfile);
		return KeycloakService.auth.authz.hasRealmRole(role);
	}

	getToken(): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			if (KeycloakService.auth.authz.token) {
				KeycloakService.auth.authz
					.updateToken(5)
					.success(() => {
						resolve(<string>KeycloakService.auth.authz.token);
					})
					.error(() => {
						reject('Failed to refresh token');
					});
			} else {
				reject('Not logged in');
			}
		});
	}
}
