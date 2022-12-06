export class Tickets{
    // constructor(
    //     public id: string,
    //     public folio: string,
    //     public titulo: string,
    //     public coordenadas: string,
    //     public evidencias: string,
    //     public descripcion: string,
    //     public comentario_t: string,
    //     public fecha_creacion: string | null | undefined,
    //     public fecha_atendido: string,
    //     public fecha_asignado: string,
    //     public fecha_proceso: string,
    //     public fecha_resuelto: string,
    //     public fecha_validado: string,
    //     public fecha_cancelado: string,
    //     public ticket_superior: string,
    //     public ticket_usariocreador: string,
    //     public ticket_especialistaasignado: string,
    //     public ticket_tipoprioridad: string,
    //     public ticket_tipopstatus: string,
    //     public ticket_proyecto: string,
    //     public ticket_areaorigen: string
    // ){}

    constructor(
        public id: string,
        public titulo: string,
        public folio: string,
        public descripcion: string,
        public coordenadas: string,
        public creacion: string | null | undefined,
        public atendido: string,
        public asignado: string,
        public proceso: string,
        public cancelado: string,
        public reasignado: string,
        public resuelto: string,
        public validado: string,
        public autor: string,
        public proyecto: string,
        public area: string,
        public especialista: string,
        public prioridad: string,
        public estatus: string
    ){}
}