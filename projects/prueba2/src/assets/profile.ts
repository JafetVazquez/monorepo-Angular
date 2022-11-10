export class Profile {
    constructor(
        public id: string,
        public nombre: string,
        public apellidos: string,
        public correo: string,
        public password: string,
        public codigo: string,
        public fc_crea: string,
        public fc_culm: string,
        public rol: string,
        public proyecto: string
    ){}
}