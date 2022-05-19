import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { LocalStorageService } from './services/local-storage.service';
import { Todo } from './models/todo';
import { PostModel } from './models/postmodel';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-mateiral';
  public newsFeedPosts: PostModel[] =[];
  aufgaben: Todo[];
  closeResult = '';
  constructor(private modalService: NgbModal) {}
// es klappen nur jpg!!!!!!!
  ngOnInit(): void {
  }


  // **Login Methode mit Modal Popup Fenster**
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
// **Login Methode mit Modal Popup Fenster**
}
