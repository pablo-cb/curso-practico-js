function conseguirTipoSuscripcion (suscripcion) {
	if (suscripcion == 'Free') {
		console. log ("Solo puedes tomar los cursos gratis");
		return;
	}
	if (suscripcion == 'Basic') {
		console. log ("Puedes tomar casi todos los cursos de Platzi durante un mes");
		return;
	}
	if (suscripcion == 'Expert') {
		console. log ("Puedes tomar casi todos los cursos de Platzi durante un año");
		return;
	}
	if (suscripcion == 'ExpertDuo') {
		console. log ("Tú y alguien más pueden tomar TODOS los cursos Platzi durante un año");
		return;
	}
	console.warn('Este tipo de suscripcion no existe') 
}
