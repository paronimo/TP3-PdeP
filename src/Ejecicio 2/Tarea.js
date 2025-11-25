//-------------------------------------------
//  CONSTRUCTOR DE TAREA (POO con prototipos)
//-------------------------------------------

function Tarea(titulo, descripcion, dificultad, estado, dia, mes, anio, preguntaFecha) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.dificultad = dificultad;
  this.estado = estado;
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
  this.preguntaFecha = preguntaFecha;
}


/*getters
-------------------------------------------*/

Tarea.prototype.getTitulo = function() { return this.titulo; };
Tarea.prototype.getDescripcion = function() { return this.descripcion; };
Tarea.prototype.getDificultad = function() { return this.dificultad; };
Tarea.prototype.getEstado = function() { return this.estado; };
Tarea.prototype.getDia = function() { return this.dia; };
Tarea.prototype.getMes = function() { return this.mes; };
Tarea.prototype.getAnio = function() { return this.anio; };
Tarea.prototype.getPreguntaFecha = function() { return this.preguntaFecha; };

/*setters
-------------------------------------------*/

Tarea.prototype.setTitulo = function(n) { this.titulo = n; };
Tarea.prototype.setDescripcion = function(n) { this.descripcion = n; };
Tarea.prototype.setDificultad = function(n) { this.dificultad = n; };
Tarea.prototype.setEstado = function(n) { this.estado = n; };
Tarea.prototype.setDia = function(n) { this.dia = n; };
Tarea.prototype.setMes = function(n) { this.mes = n; };
Tarea.prototype.setAnio = function(n) { this.anio = n; };
Tarea.prototype.setPreguntaFecha = function(n) { this.preguntaFecha = n; };
