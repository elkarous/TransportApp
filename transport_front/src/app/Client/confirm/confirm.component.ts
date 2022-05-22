import {Component, Inject, OnInit} from '@angular/core';
import {Commande} from "../../mode/Commande";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CommandeService} from "../../services/commande.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Commande,
              private commandeService:CommandeService,
              private toast:ToastrService) { }

  ngOnInit(): void {
  }
  valide() {


    this.commandeService.addCommande(this.data).subscribe(
      res => {
        this.toast.success('Data added successfully !!', 'add', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right'
        });

      },
      error => this.toast.error('Data not added !!', 'add', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      })

    )
  }

}
