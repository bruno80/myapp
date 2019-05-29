import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-aluno-modal',
  templateUrl: './aluno-modal.page.html',
  styleUrls: ['./aluno-modal.page.scss'],
})
export class AlunoModalPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  aluno = {
    "nome":"",
    "perfil":"",
    "url":""
  }

  add() {
    this.modalController.dismiss(this.aluno)
    // Quando o cara apertar em "Vai" e o modal fechar, irá retornar o objeto 
    //novo_aluno com os dados preenchidos.
    // dismiss | Dispensar.
  }
}
