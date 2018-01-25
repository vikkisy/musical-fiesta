import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DiscussionComponent } from '../discussion/discussion.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '800px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog Closed");
    })

  }

  openDiscussion() {
    let dialogRef = this.dialog.open(DiscussionComponent, {
      width: '800px',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed");
    })
  }



}
