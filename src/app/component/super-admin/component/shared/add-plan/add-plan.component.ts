import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent {
  addPlan : FormGroup;
  ckDep: boolean = false;
  constructor(private fb:FormBuilder,private router:Router){
    this.addPlan = this.fb.group({
      planname: ['',Validators.required],
      trialdays: ['',Validators.required],
      monthlyprice: ['',Validators.required],
      annualprice: ['',Validators.required],
      maximumusers: ['',Validators.required],
      maximumdeals: ['',Validators.required],
      storagelimit: ['',Validators.required],
      description: ['',Validators.required],
    })
  }
  ngOnInit(): void {
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  addPlans() {
    if (this.addPlan.invalid) {
      this.ckDep = true;
      return
  } else {
      try {
      } catch (err) {
      }
    }
  }
}

