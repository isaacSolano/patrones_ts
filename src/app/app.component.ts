import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	title = "Patrones de diseno";
	patrones = {
		"Constructor": "/constructor",
		"Fabrica Abstracta": "/fabricaAbstracta",
		"Metodo Fabrica": "/metodoFabrica",
		"Prototipo": "/prototipo",
		"Adaptador": "/adaptador",
		"Fachada": "/fachada",
		"Peso Ligero": "/peso-ligero",
		"Decorador": "/decorador",
		"Puente": "/puente",
		"Compositor": "/compositor",
		"Cadena de Responsabilidad": "/cadenaResponsabilidad",
		"Comando": "/comando",
		"Mediador": "/mediador",
		"Iterador": "/iterador",
		"Observador": "/observador",
		"Visitante": "/visitante",
		"Interprete": "/interprete",
		"Memento": "/memento",
		"Estrategia": "/estrategia"
	};
}