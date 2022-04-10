import { Component, OnInit } from '@angular/core';
import { PaperService } from '../common/paper.service';
import { ActivatedRoute } from '@angular/router';
import { Paper } from '../common/models/paper';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css'],
})
export class PaperListComponent implements OnInit {
  papers: Paper[] = [];
  isLoading: boolean = true;
  isMobieDevice:boolean =false;

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService
  ) {}

  ngOnInit(): void {
    if (window.innerWidth < 658) {
      this.isMobieDevice =true
      } else {
       this.isMobieDevice=false
      } 
    const param = this.route.snapshot?.paramMap;
    this.paperService
      .getPaper(param?.get('branchName')!, param?.get('subjectCode')!)
      .subscribe((papers) => {
        this.isLoading=false;
        this.papers = papers;
        console.log(this.papers);
      });
  }
}
