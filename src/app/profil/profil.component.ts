import { Component, OnInit } from '@angular/core';
import {AccountService} from "../services/account/account.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  prenom: any
  nom: any
  contact: any
  mail: any
  lieuNaiss: any
  dateNaiss: any
  cin: any
  sexe: any
  libelleStatus: any
  codePostal: any
  nomFokontany: any
  imgIndividu: any
  nomCommune: any
  nomDistrict: any
  nomRegion: any
  nomProvince: any
  lot: any
  national: any


  constructor( private accountService: AccountService) { }

  ngOnInit(): void {
    this.getLocalStorage()
  }
  getLocalStorage(){
    let values = JSON.parse(localStorage.getItem("user"));
    this.prenom = values.individu.prenom
    this.nom = values.individu.nom
    this.contact = values.individu.contact
    this.mail = values.individu.mail
    this.lieuNaiss = values.individu.lieuNaiss
    this.dateNaiss = values.individu.dateNaiss
    this.cin = values.individu.cin
    this.sexe = values.individu.sexe
    this.libelleStatus = values.individu.status.libelleStatus
    this.national = values.individu.national
    this.nomFokontany = values.individu.fokontany.nomFokontany
    this.nomCommune = values.individu.commune.nomCommune
    this.nomDistrict = values.individu.district.nomDistrict
    this.nomRegion = values.individu.region.nomRegion
    this.nomProvince = values.individu.province.nomProvince
    this.imgIndividu = values.individu.imgIndividu





  }
}
