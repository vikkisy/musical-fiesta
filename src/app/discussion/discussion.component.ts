import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DiscussionComponent>) { }

  ngOnInit() {
  }
  onClose() {
    this.thisDialogRef.close('Cancel');
  }

}
