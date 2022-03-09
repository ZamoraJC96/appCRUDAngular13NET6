import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutosApiService } from 'src/app/autos-api.service';

@Component({
  selector: 'app-agregar-editar-auto',
  templateUrl: './agregar-editar-auto.component.html',
  styleUrls: ['./agregar-editar-auto.component.css']
})
export class AgregarEditarAutoComponent implements OnInit {

  autosList$!:Observable<any[]>;
  tiposAutoList$!:Observable<any[]>;

  constructor(private service:AutosApiService) { }

  @Input() auto:any;
  id: number = 0;
  modelo: string = "";
  color: string = "";
  tipoAutoId!: number;

  ngOnInit(): void {
    this.id = this.auto.id;
    this.modelo = this.auto.modelo;
    this.color = this.auto.color;
    this.tipoAutoId = this.auto.tipoAutoId;
    this.autosList$ = this.service.getAutosList();
    this.tiposAutoList$ = this.service.getTiposList();
  }

  addAuto(){
    var auto = {
      modelo:this.modelo,
      color:this.color,
      tipoAutoId:this.tipoAutoId
    }
    this.service.addAuto(auto).subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    });
  }

  editAuto(){
    var auto = {
      id:this.id,
      modelo:this.modelo,
      color:this.color,
      tipoAutoId:this.tipoAutoId
    }
    var id:number = this.id;
    this.service.putAuto(id,auto).subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    });
  }
}
