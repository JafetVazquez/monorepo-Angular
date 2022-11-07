export class Projects{
    constructor(
        public id: string,
        public nombre_proyecto: string,
        public codigo_proyetco: string,
        public fecha_inicial: string,
        public fecha_final: string,
        public descripcion: string,
        public fecha_creacion: string,
        public fecha_actualizacion: string,
        public status_entidad: number
    ){}
}