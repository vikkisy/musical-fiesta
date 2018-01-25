import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>) { }

  ngOnInit() {
  }
  
  onClose() {
    this.thisDialogRef.close('Cancel');
  }

}
