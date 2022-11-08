import { Directive, ViewContainerRef, TemplateRef, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRol]'
})
export class RolDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private elementImg: ElementRef) {

  }

  @HostListener('error')
  
  cargaImagenNoDisponible(): void{
    this.elementImg.nativeElement.src='la ruta de tu imagen por defecto si hay un error';
  }

}
