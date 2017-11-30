import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges } from '@angular/core';
import { nftFields, UofM, nftFieldsList, nftList } from '../../data-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'add-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.css']
})
export class CreateNftComponent implements OnChanges {


  nftForm: FormGroup;
  nameChangeLog: string[] = [];
  unit_of_measure = UofM;
  nftFieldsInput: nftFields;
  nftListArray: nftList;
  errorMessage: string = null;
  missingName: string = null;
  fat: number = 0;
  sumOfAllFat: number = 0;
  duplicateEntries: string = null; 
  invalidInput: string = null;
  id: number;



  constructor(
    private fb: FormBuilder, private router: Router,
         private route: ActivatedRoute) {

    this.createForm();
    this.logNameChange();
  }

  createForm() {
    this.nftForm = this.fb.group({

      secretComponents: this.fb.array([]),
      flag:null

    });
    this.setComponents(nftFieldsList);
  }

  ngOnChanges() {
    this.nftForm.reset({
    });
    this.setComponents(nftFieldsList);
  }

  get secretComponents(): FormArray {
    return this.nftForm.get('secretComponents') as FormArray;
  };

  setComponents(components: nftFields[]) {
    const componentsFGs = components.map(component => this.fb.group(component));
    const componentFormArray = this.fb.array(componentsFGs);
    this.nftForm.setControl('secretComponents', componentFormArray);
  }

  addComponent() {
    this.secretComponents.push(this.fb.group(new nftFields()));
  }

  onSubmit() {
    this.nftListArray = this.preparenftFieldsInput();
    
    console.log("listtooo",this.nftListArray);

    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
   // this.ngOnChanges();
  }

  preparenftFieldsInput(): nftList {
    const formModel = this.nftForm.value;

    // deep copy of form model lairs
    const componentsDeepCopy: nftFields[] = formModel.secretComponents.map(
      (component: nftFields) => Object.assign({}, component)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    this.route.params.subscribe( params => {
        this.id = +params['id'];
        });
    const saveNft: nftList = {

      nft: componentsDeepCopy,
      package_id:this.id,
      flag:formModel.flag
    };
    return saveNft;
  }

  revert() { this.ngOnChanges(); }

  deleteClassification(i: number) {

    this.secretComponents.removeAt(i)

  }

  logNameChange() {
    const nameControl = this.nftForm.get('secretComponents');

    // nameControl.value.forEach(function (element : any)  {
    //   if((element.amount!= "" && element.unit_of_measure == "") ||(element.amount== "" && element.unit_of_measure != "")){
    //     this.errorMessage = element.name;
    //   }
    //   console.log("oyesooo", element.name, element.amount)
    // });

    nameControl.valueChanges.forEach(

      (value: any) => {
        this.errorMessage = null;
        this.nameChangeLog = [];
        this.missingName = null;
        this.duplicateEntries = null;
        this.invalidInput = null;

          //Will return an array containing all of the names
          var valueArr = value.map((item: any ) =>  item.name );

         valueArr = valueArr.filter(function(n: any){ return n != undefined }); 

          var isDuplicate = valueArr.some(function(item : any, idx : number){ 

               return valueArr.indexOf(item) != idx 
          });
          if(isDuplicate){
            this.duplicateEntries = "One or more components have been selected more than once";
          }

        value.forEach((element: any) => {
          if (element.name != null && element.name!= ""){
            
            if ((element.amount != "" && element.unit_of_measure == "") || (element.amount == "" && element.unit_of_measure != "")) {

              this.nameChangeLog.push(element.name);
              this.errorMessage = "not null";
            }
            ///^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(this.value);
            var re = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
              if(element.amount.length && !re.test(element.amount)){
                console.log("wrong!");
                  this.invalidInput = element.name;
              }

            
          } else {
            this.missingName = "Missing component's name in one or more fields";
          }

        });

      }
    );
  }


}
