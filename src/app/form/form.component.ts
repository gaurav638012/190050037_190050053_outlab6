import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  message:string;
  success:boolean;
  form = new FormGroup(
    {
      name : new FormControl(''),
      email : new FormControl(''),
      feedback : new FormControl(''),
      comment : new FormControl('')
    }
  )

  feedbacks = ["Great", "Okay", "Not good"];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data)=>{
      console.log(data);
      this.form.setValue({
        name: data.name,
        email:data.email,
        feedback:data.feedback,
        comment:data.comment
      })
    })
  }

  submit(){
    this.dataService.post(this.form.value).subscribe((data)=>{
      if(data!=undefined){
        this.message = "Form submitted successfully";
        this.success = true;
      }
      else{
        this.message = "Some error ocurred :( Please try again";
        this.success = false;
      }
    },(err)=>{
      console.log(err);
      this.message = "Some error ocurred :( Please try again";
      this.success = false;
    });
  }
}
