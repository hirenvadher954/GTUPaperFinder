import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {
  default: boolean = true;
  form: FormGroup;

  constructor(fb: FormBuilder, private router: Router
  ) {
    this.form = fb.group({
      branchName: ['BE', Validators.required],
      subjectCode: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }


  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      this.router.navigate([`paper/${this.f['branchName'].value}/${this.f['subjectCode'].value}`]).then(r => console.log("Succesfullu"));
    }
  }
}
