import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges } from '@angular/core';
import { nftFields, UofM, nftFieldsList, nftList, ResponseComponentName, Components, NftAsSold } from '../../data-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CreateRecordService } from '../../services/create-records.service';
import { GetRecordService } from '../../services/getRecord.service';



@Component({
    selector: 'edit-nft',
    templateUrl: './edit-nft.component.html',
    styleUrls: ['./edit-nft.component.css']
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
    flagNft: boolean | string = null;


    constructor(
        private fb: FormBuilder, private router: Router,
        private route: ActivatedRoute,
        private createRecordService: CreateRecordService,
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
               this.flagNft = this.route.snapshot.paramMap.get('flag');
                const {dataList} = response[0];
                //const cl = response;
                this.responseComponentName = dataList;
                this.listOfUnitOfMeasure = response[1].dataList;
                this.nftAsSold = response[2].nft;
                console.log(this.nftAsSold);

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
       // this.setComponents(this.nftAsSold?this.nftAsSold: null );
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
        this.submitted = true;
        this.isLoading = true;
        console.log("listtooo", this.nftListArray);
        this.flag = null
        this.createRecordService.createNft(JSON.stringify(this.nftListArray)).finally(() => this.isLoading = false).subscribe(response => {
            const {id, message, status} = response;

            if (status === 803) {
                this.flag = 2;
                this.errorMessage = "Missing mandatory fields";
                this.submitted = false;
            } else if (status === 804) {
                //Invalid input fields
                this.errorMessage = "Invalid input fields";
                this.flag = 2;
                this.submitted = false;

                // console.log("Here 203",data.dataList);
            } else if (status === 205) {
                this.flag = 2;
                this.errorMessage = "Can't create a record with no argument provided";
                this.submitted = false;

                //console.log("Here 204",data.dataList);
            } else if (status === 200) {
                // this.flag = 1;
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

    preparenftFieldsInput(): nftList {
        const formModel = this.nftForm.value;

        console.log("on save", formModel);
        // deep copy of form model lairs

        const componentsDeepCopy: nftFields[] = formModel.secretComponents.map(
            (component: nftFields) => Object.assign({}, component)
        );

        componentsDeepCopy.forEach((element: any) => {
            if (element.amount == "") {
                element.amount = null;
            }
            if (element.daily_value == "") {
                element.daily_value = null;
            }

        });

        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });


        const saveNft: nftList = {

            nft: componentsDeepCopy,
            package_id: this.id,
            flag: true
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
                console.log("its changing");
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

                        if (((element.amount != "" && element.amount != null && element.amount.length) && element.unit_of_measure == "") || (element.amount == "" && element.unit_of_measure != "")) {

                            this.nameChangeLog.push(element.name);
                            this.formValid = false;
                            this.errorMessage = "not null";
                        }
                        ///^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(this.value);
                        var re = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
                        if (element.amount != null && element.amount.length && !re.test(element.amount)) {
                            this.invalidInput = element.name;
                            this.formValid = false;
                        }
                        if (element.daily_value != null && element.daily_value.length && !re.test(element.daily_value)) {
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


                    // if (element.name === 'Fat') {
                    //     this.fat = (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);
                    // }
                    // if (element.name === 'Saturated + Trans Fat' || element.name === 'Saturated Fat' || element.name === 'Trans Fat' || element.name === 'Polyunsaturated Fat'
                    //     || element.name === 'Omega-6 Polyunsaturated Fat' || element.name === 'Omega-3 Polyunsaturated Fat' || element.name === 'Monounsaturated Fat') {

                    //     this.sumOfAllFat += (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);


                    // }

                    // if (element.name === 'Fibre') {
                    //     this.fibre = (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);
                    // }

                    // if (element.name === 'Soluble Fibre' || element.name === 'Insoluble Fibre') {

                    //     this.totalFibre += (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);


                    // }
                });

                // if (this.sumOfAllFat > this.fat) {

                //     this.fatExeeced = "Sum of all fats should not exceed total fat";
                //     this.formValid = false;
                // }

                // if (this.totalFibre > this.fibre) {

                //     this.fibreExeeced = "Sum of all fibres should not exceed total fibre";
                //     this.formValid = false;
                // }
            }
        );
    }


}
