export class Projects{
    constructor(
        public id: string,
        public nombre: string,
        public codigo: string,
        public descripcion: string,
        public fecha_inicio: string,
        public fecha_final: string,
        public estatus: number
    ){}
}