export class Comments{
    constructor(
        public id: string,
        public contenido_comentario: string,
        public id_ticket: number,
        public comentario_usuario: string,
        public fecha_comentario: string,
        public fecha_creacion: Date,
        public fecha_culminacion: string,
        public estatus: string
    ){}
}
