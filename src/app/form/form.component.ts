import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormService} from '../form.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  dataform;
  submit_status=0;
  constructor
  ( private formBuilder: FormBuilder,
   private formService:FormService,
  ) 
  {
    this.dataform=this.formBuilder.group({name:'',email:'',feedback:'',comment:''});
  }
onSubmit() {
   this.formService.post(this.dataform.value).subscribe(Data=>{console.log(Data);this.submit_status=1;})
   if(this.submit_status==1)
   {
     window.alert("successfully submitted");
   }
   this.set_default();
  }
  set_default()
  {
  this.formService.get().subscribe(Data=>this.dataform.setValue(Data));
  this.submit_status=0;
  }
  
  ngOnInit() {
    this.set_default();
  }

}