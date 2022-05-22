import { Component, OnInit } from '@angular/core';
import {Admin} from "../../mode/Admin";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {LoaderService} from "../../services/loader.service";
import {AccountService} from "../../services/account.service";
import {ConfirmComponent} from "../../Client/confirm/confirm.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateProfileComponent} from "../../update-profile/update-profile.component";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  user: Admin=new Admin();
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  panelOpenState: boolean;



  constructor(private tokenService: TokenService,
              private router: Router,
              public LoadService: LoaderService,
              private dialog:MatDialog,
              private accountService: AccountService,

  ) {
  }
  date:Date
  ngOnInit(): void {
    this.date=new Date();
    this.getUserById();

  }


  logout() {
    this.tokenService.remove();
    this.router.navigateByUrl("");

  }

  getUserById() {
    this.accountService.getUserByEmail(this.tokenService.getId()).subscribe(data => {
        this.user = data;
        this.getImage();
      }
    )
  }

  getImage() {
    this.base64Data = this.user.image.data;
    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  }
openDialog(){
  this.dialog.open(UpdateProfileComponent,
    {
      data:this.user,

      width: '60%'
    }
  );

}

}
