import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges } from '@angular/core';
import { nftFields, UofM, nftFieldsList, nftList, ResponseComponentName, Components, NftAsSold } from '../../data-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EditRecordService } from '../../services/edit-records.service';
import { GetRecordService } from '../../services/getRecord.service';



@Component({
    selector: 'edit-nft',
    templateUrl: './edit-nft.component.html',
    styleUrls: ['./edit-nft.component.css'],
    providers:[EditRecordService]
})
export class EditNftComponent implements OnChanges {


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
    flag: number = null;
    submitted: boolean = false;
    listOfUnitOfMeasure: string[];

    responseComponentName: Components[];
    isLoading: boolean;
    fatExeeced: string;
    fibreExeeced: string;
    fibre: number = 0;
    totalFibre: number = 0;
    formValid: boolean = true;
    invalidInputDailyValue: string = null;
    nftAsSold:  nftFields[];
    nftValues:  nftFields[];
    flagNft: any = null;


    constructor(
        private fb: FormBuilder, private router: Router,
        private route: ActivatedRoute,
        private editRecordService: EditRecordService,
        private getRecordService: GetRecordService) {

        this.createForm();
         this.logNameChange();
    }

    ngOnInit(): void {

        this.responseComponentName = null;

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.getRecordService.getNftSoldRecordsEdit(param.get('id'), param.get('flag'))).subscribe(
            response => {
               console.log("flag",this.route.snapshot.paramMap.get('flag'));
               this.flagNft = this.route.snapshot.paramMap.get('flag') == 'true' ? 'true': (this.route.snapshot.paramMap.get('flag') =='false'? 'false':null );
                const {dataList} = response[0];
                this.responseComponentName = dataList;
                console.log("response",dataList)
                this.listOfUnitOfMeasure = response[1].dataList;
                this.nftValues = response[2].nft;
                this.nftValues.forEach(function(element){
                    element.unit_of_measure = element.unit_of_measure==null?"":element.unit_of_measure;
                });
                // this.nftAsSold = response[2].nft;
                this.nftAsSold = this.nftValues;
                console.log("response",this.nftAsSold);

                this.ngOnChanges();
        this.logNameChange();


            });



    }
    check() {
        console.log("yes")
    }
    createForm() {
        this.nftForm = this.fb.group({

            secretComponents: this.fb.array([])

        });
    }

    ngOnChanges() {
        this.submitted = false;
        this.nftForm.reset({
        });

        this.setComponents(this.nftAsSold);

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
        console.log(this.nameChangeLog, "is the length of the array");

        // if(!this.validate(this.nftListArray.nft)){ 
        //     console.log("failed", this.nftListArray);
        //     return;

        // }
        this.submitted = true;
        this.isLoading = true;
        this.flag = null
        this.editRecordService.updateNft(JSON.stringify(this.nftListArray)).finally(() => this.isLoading = false).subscribe(response => {

            const {id, message, status} = response;
            console.log("here is the response", response);
            if (status === 803) {
                this.flag = 2;
                this.errorMessage = "Missing mandatory fields";
                this.submitted = false;
            } else if (status === 804) {
                this.errorMessage = "Invalid input fields";
                this.flag = 2;
                this.submitted = false;
            } else if (status === 205) {

                this.flag = 2;
                this.errorMessage = "Can't create a record with no argument provided";
                this.submitted = false;

            } else if (status === 200) {
                this.flag = 1;
                setTimeout(() => {
                    this.router.navigate(['/view-package', this.nftListArray.package_id]);

                },
                    4000);
            }
            else {
                this.flag = 2;
                this.errorMessage = "Something happened, try again";
                this.submitted = false;

            }

        }, (error) => {
            this.errorMessage = "Can't access the server at this time";
            this.flag = 2;
            this.submitted = false;

        });;
    }
    validate(nft: nftFields[]): boolean{
        const nameControl = this.nftForm.get('secretComponents');
        console.log("MMM",  nameControl.value);
        this.nameChangeLog = [];
        let valid: boolean = true;
        nft.forEach(
        
            (element: any) => {

                this.errorMessage = null;
               
                this.missingName = null;
                this.duplicateEntries = null;
                this.invalidInput = null;
                this.formValid = true;
                this.invalidInputDailyValue = null;

                //return all components' name 
                var valueArr =  nameControl.value.map((item: any) => item.name);

                //return all of the components that are not undefined     
                //the filter method creates a new array with elments that pass the test implemented by 
                //the provided function
                valueArr = valueArr.filter(function (n: any) { return n != undefined });

                //the some method tests whether at least one element in the array passes the test 
                //implemented by the provided function
                var isDuplicate = valueArr.some(function (item: any, idx: number) {

                    return valueArr.indexOf(item) != idx
                });

                if (isDuplicate) {
                    this.duplicateEntries = "One or more components have been selected more than once";
                    this.formValid = false;
                }
                        var ree = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");



               
                    // console.log("top",element.name, element.amount, element.unit_of_measure);

                    if (element.name != null && element.name != "") {

                        if ((ree.test(element.amount)) 
                            && (element.unit_of_measure == ""   || element.unit_of_measure==null  || element.unit_of_measure==undefined)) 
                          {
                            this.nameChangeLog.push(element.name);
                            this.formValid = false;
                            this.errorMessage = "not null";
                             console.log("faild on: ",element.name, element.amount, element.unit_of_measure);

                             valid = false;
                            //element.amount == null || element.amount == "" ||element.amount == undefined
                        }else if(((!ree.test(element.amount)) && element.amount != 0)
                          
                        && (element.unit_of_measure != "" &&  element.unit_of_measure != null && element.unit_of_measure != undefined)){

                                 console.log("failed on: ",element.name, element.amount, element.unit_of_measure);
                                this.nameChangeLog.push(element.name);
                            this.formValid = false;
                            this.errorMessage = "not null";
                            valid =  false;
    
                        }
                        else {
                            // console.log("bottom",element.name, element.amount, element.unit_of_measure);
                            
                        }


                    } else {
                        this.missingName = "Missing component's name in one or more fields";
                        this.formValid = false;
                    }


             


            }
        );
        console.log("valid?", valid);
        return valid;
    }

    preparenftFieldsInput(): nftList {
        const formModel = this.nftForm.value;

                        var reg = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");

        const componentsDeepCopy: nftFields[] = formModel.secretComponents.map(
            (component: nftFields) => Object.assign({}, component)
        );

        componentsDeepCopy.forEach((element: any) => {
            if (!reg.test(element.amount)) {
                element.amount = null;
            }
            if (!reg.test(element.daily_value))  {
                element.daily_value = null;
            }

        });

        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });


        const saveNft: nftList = {

            nft: componentsDeepCopy,
            package_id: this.id,
            flag: this.flagNft
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
            this.fat = 0;
            this.sumOfAllFat = 0;
            this.errorMessage = null;
            this.nameChangeLog = [];
            this.missingName = null;
            this.duplicateEntries = null;
            this.invalidInput = null;
            this.fatExeeced = null;
            this.fibre = 0;
            this.totalFibre = 0;
            this.formValid = true;
            this.fibreExeeced = null;
            this.invalidInputDailyValue = null;
    
    
            //Will return an array containing all of the names
            var valueArr = value.map((item: any) => item.name);
    
            valueArr = valueArr.filter(function (n: any) { return n != undefined });
    
            var isDuplicate = valueArr.some(function (item: any, idx: number) {
    
              return valueArr.indexOf(item) != idx
            });
            if (isDuplicate) {
              this.duplicateEntries = "One or more components have been selected more than once";
              this.formValid = false;
            }
    
            value.forEach((element: any) => {
    
              if (element.name != null && element.name != "") {
    
                if ((
                    (
                    (element.amount !== "" && element.amount !== null) || element.amount===0) 
                    && (element.unit_of_measure === "" ||  element.unit_of_measure === null ||  element.unit_of_measure === undefined)) 
                    || 
                    ( (element.amount === "" || element.amount === null || element.amount === undefined) && element.amount!==0  
                     && (element.unit_of_measure !== "" || element.unit_of_measure ===null || element.unit_of_measure ===undefined )) ) {
    
                  this.nameChangeLog.push(element.name);
                  this.formValid = false;
                  this.errorMessage = "not null";
                }
                ///^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(this.value);
                var re = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
                if (!re.test(element.amount) && element.amount != 0 && element.amount !== "" && element.amount !== null) {
                  this.invalidInput = element.name;
                  this.formValid = false;
                }
                if (!re.test(element.daily_value) && element.daily_value!= 0 && element.daily_value !== "" && element.daily_value !== null) {
                  this.invalidInputDailyValue = element.name;
                  this.formValid = false;
                }
                //Sum all fats
                //               sumOfAllFat: number = 0;
                // duplicateEntries: string = null; 
    
    
              } else {
                this.missingName = "Missing component's name in one or more fields";
                this.formValid = false;
              }
    
    

    
            });
    

          }
        );
      }


}
