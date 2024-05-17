import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css'
})
export class CurrentTrainingComponent {
  @Output() trainingExit = new EventEmitter();

  progress=0;
  fitTimer: any;

  constructor(private dialog: MatDialog){
    this.fitTimer=0;
  }
  ngOnInit(){
    this.startOrResumeTimer()
  }

  startOrResumeTimer(){
    this.fitTimer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress>= 100){
        clearInterval(this.fitTimer);
      }
    }, 1000)
  }

  onStop(){
    clearInterval(this.fitTimer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data:{
        progress: this.progress
    }})

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.trainingExit.emit()
      } else{
        this.startOrResumeTimer()
      }
    })
  }
}
