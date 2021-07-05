import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account/account.service";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  hide = true;

  personne: {
      prenoms: any;
      nom:  any;
      contact:  any;
      mail:  any;
      lieuNaiss:  any;
      dateNaiss:  any;
      cin:  any;
      sexe:  any;
      idStatus:  any;
      idSecteur:  any;
      banque:  any;
      idModePaiement:  any;
      idTypeMdp:  any;
      codeAdresse:  any;
      lot:  any;
      national:  any;
      modePaiement:  any;
  }

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private accountService: AccountService,
              private alertService: AlertService) {
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      contact: ['', Validators.required],
      mail: ['', Validators.required],
      lieuNaiss: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      cin: ['', Validators.required],
      sexe: ['', Validators.required],
      idStatus: ['', Validators.required],
      idSecteur: ['', Validators.required],
      banque: ['', Validators.required],
      idModePaiement: ['', Validators.required],
      idTypeMdp: ['', Validators.required],
      codeAdresse: ['', Validators.required],
      lot: ['', Validators.required],
      national: ['', Validators.required],
      modePaiement: ['', Validators.required]
      /*password: ['', [Validators.required, Validators.minLength(6)]]*/

    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.f[controlName].hasError(errorName);

  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;/*

    if (this.registerForm.invalid) {
      return;
    }
*/
    let data = {
      "individu":
          {
            "nom": this.personne.nom,
            "prenom": this.personne.prenoms,
            "contact": this.personne.contact,
            "mail": this.personne.mail,
            "lieuNaiss": this.personne.lieuNaiss,
            "dateNaiss": this.personne.dateNaiss,
            "cin": this.personne.cin,
            "sexe": this.personne.sexe,
            "status":
                {
                  "idStatus": this.personne.idStatus
                },
            "national": this.personne.national,
            "secteurActivite":
                {
                  "idSecteur": this.personne.idSecteur
                },
            "modePaiement":
                {
                  "idModePaiement": this.personne.idModePaiement
                },
            "adresse":
                {
                  "codeAdresse": this.personne.codeAdresse

                }
          }
    }
    this.loading = true;
      console.log("data incription",data)
    this.accountService.register(data)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
  }

  inscription(){


    this.loading = true;
    this.accountService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
  }
}
