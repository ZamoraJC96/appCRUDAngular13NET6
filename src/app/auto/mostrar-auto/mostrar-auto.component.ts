import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AutosApiService } from 'src/app/autos-api.service';

@Component({
  selector: 'app-mostrar-auto',
  templateUrl: './mostrar-auto.component.html',
  styleUrls: ['./mostrar-auto.component.css']
})
export class MostrarAutoComponent implements OnInit {

  autosList$!:Observable<any[]>;
  tiposAutoList$!:Observable<any[]>;
  tiposAutoList:any=[];

  // Mapa para mostrar datos con llaves foraneas
  tiposAutoMap:Map<number, string> = new Map();

  constructor(private service:AutosApiService) { }

  ngOnInit(): void {
    this.autosList$ = this.service.getAutosList();
    this.tiposAutoList$ = this.service.getTiposList();
    this.refrescarMapaAutos();
  }

  // Variables (propiedades)
  tituloModalAgregar:string = '';
  activarComponenteAgregarEditar:boolean = false;
  auto:any;

  //Metodos
  refrescarMapaAutos(){
    this.service.getTiposList().subscribe(data => {
      this.tiposAutoList = data;

      for(let i = 0; i < data.length; i++){
        this.tiposAutoMap.set(this.tiposAutoList[i].id, this.tiposAutoList[i].nombreTipoAuto);
      }
    });
  }

  agregandoAuto() {
    this.auto = {
      id:0,
      modelo:null,
      color:null,
      tipoAutoId:null
    };
    this.tituloModalAgregar = 'Agregar Auto';
    this.activarComponenteAgregarEditar = true;
  }

  editandoAuto(item:any) {
    this.auto = item;
    this.tituloModalAgregar = "Editar Auto"
    this.activarComponenteAgregarEditar = true;
  }

  eliminarAuto(item:any) {
    if(confirm(`Estas seguro de eliminar ${item.id}?`)) {
      this.service.deleteAuto(item.id).subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.autosList$ = this.service.getAutosList();
      });
    }
  }

  cerrarModal() {
    this.activarComponenteAgregarEditar = false;
    this.autosList$ = this.service.getAutosList();
  }
}
