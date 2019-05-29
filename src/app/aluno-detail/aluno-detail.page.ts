import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.page.html',
  styleUrls: ['./aluno-detail.page.scss'],
})
export class AlunoDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

    nome;
    perfil;  

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome');
    this.perfil = this.route.snapshot.paramMap.get('perfil');
  }

}
