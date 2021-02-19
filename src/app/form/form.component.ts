import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  teachForm = new FormGroup({
    name: new FormControl(''),
    photo: new FormControl(''),
    whatsapp: new FormControl(''),
    biography: new FormControl(''),
    discipline: new FormControl(''),
    costTeach: new FormControl(''),
    dayweek: new FormControl(''),
    starthour: new FormControl(''),
    endhour: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
