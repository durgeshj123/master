import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';

import { routes } from 'src/app/core/helpers/routes';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  public routes = routes;
  addUserForm !: FormGroup;
  ckForm = false;
  removeClass = true;
  imgs!:File;
  imagesBox   = '../../../../../../assets/img/product/product1.jpg' 
constructor(
  private _fb : FormBuilder,
  private _company : CompanyService
){}

ngOnInit(): void {
  this.addUserForm = this._fb.group({
    username : [null,Validators.required],
    email : [null,[Validators.required,Validators.email]],
    password : [null,Validators.required],
    img : ['',Validators.required]
  });
}

Onupload(event:any){

    if (event.target.files.length > 0) {
        this.imgs = event.target.files;
       
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
    
              const reader = new FileReader();
                reader.onload = (event:any) => {
                this.imagesBox = event.target.result; 
       
              }
         
         reader.readAsDataURL(event.target.files[i]);
      }
  }
  
}


onSubmit(): void{
  if ( this.addUserForm.invalid) {
      this.ckForm = true;
      return
  }else{
    try {
      const formData : FormData = new FormData();
      formData.append('img',this.imgs)
      

      this._company.addCompany(this.addUserForm?.value).subscribe({
        next : (res) =>{
          console.log(res)
        },
        error : (err) =>{
          console.log(err)
        },
      })
      
    } catch (e) {
      console.log(e)
    }
  }

  

}


  removeBtn() {
    this.removeClass = !this.removeClass;
  }
   
}
