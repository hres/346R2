import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { Params, Response, LabelData, LabelInputFields  } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder,Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeWhile';
import { DatePipe } from '@angular/common';
//import { classification, FormValues } from '../../form-model';

// import { ProjectService } from './project-center/project.service';
// import { Project, Person } from './project-center/model';
import { ColumnSetting } from '../../shared/layout.model'
import { PaginationComponent } from '../../pagination/pagination.component'
import { TableLayoutComponent } from '../../shared/table-layout.component'
declare var $: any;

@Component({
    selector: 'label-form',
    templateUrl: './label-form.component.html',
    styleUrls: ['./label-form.component.css'],
    providers: [SearchService]

})
export class LabelFormComponent implements OnChanges {


    tableData: LabelData[];

    submitted = false;
    offset: number = 0;
    @Input() label: LabelInputFields;
    
     settings: ColumnSetting[] = [
                {primaryKey: 'labelUpc', header: 'Label UPC'},
                {primaryKey: 'labelDescription', header: 'Label Description'},
                {primaryKey: 'labelSource', header: 'Source'},
                {primaryKey: 'labelCollectionDate', header: 'Collection Date'},
                {primaryKey: 'labelCreationDate', header: 'Creation Date'},
                {primaryKey: 'labelLastEditDate', header: 'Last Edited'},
                {primaryKey: 'labelLastEditedBy', header: 'Edited By'}
       
                
                ];
 
    Order: string []= ['package_upc', 'package_description', 'package_source', 'package_collection_date', 'creation_date', 'last_edit_date', 'edited_by'];

    count = 0;
    pageSizes = 10;
    //value: any;
   // queryString = '';
    index: number = 0;
    flag: boolean = true;
    direction: boolean[];
    orderby: string = '';
    emptyField: string;
    noData: string;
    isLoading: boolean = false;
    serverDown: boolean = false;
    labelForm: FormGroup;

    constructor(private fb: FormBuilder,
        private searchService: SearchService) {
            
       this.createForm();   
       this.direction = [];
       this.direction[this.index] = false;
       this.index = 0;
       this.flag = true;


    }

    ngOnInit():void {
            // this.createForm();          
    }

    ngOnChanges() {
        

        this.labelForm.reset({
            labelUpc: this.label.labelUpc,
            labelDescription: this.label.labelDescription,
            labelSource: this.label.labelSource,
            labelIngredients: this.label.labelIngredients,
            collection_date_from: this.label.collectionDateFrom,
            collectionDateTo: this.label.collectionDateTo

        }
        );

    }

    createForm() {
        this.labelForm = this.fb.group({
            labelUpc: ['', [Validators.pattern('\\d+')]],
            labelDescription:'',
            labelSource: '',
            labelIngredients: [''],
            collectionDateFrom: '',
            collectionDateTo: ''


        });
        this.labelForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }




    onValueChanged(data?: any) {
        if(!this.labelForm){return;}
        const form = this.labelForm;

        for(const field in this.formErrors){
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid){
                const messages = this.validationMessages[field];
                for(const key in control.errors){
                    this.formErrors[field]+=messages[key] + ' ';
                }
            }
        }

    }
    onSubmit() {


        this.setValues();

        this.isLoading= true;
        this.searchService.searchLabel(JSON.stringify(this.label)).finally(()=> this.isLoading = false).subscribe(response => {
            const {data, message, status} = response;

            if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            }else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            }
             else if (status === 200) {
                this.emptyField = null;
                this.count = data.count;
                this.tableData= data.dataList; 
                console.log(data.dataList);

                



                for (var num = 0; num < this.settings.length; num++) {
                    if (num === 0) {
                        this.direction[num] = true;
                    } else {
                        this.direction[num] = false;
                    }
                }
            }else if (status === 205){

                this.emptyField = "No query values entered";
                this.tableData = null; 
            } else if (status === 602){

                this.emptyField = "Invalid date(s) range";
                this.tableData = null; 
            }else{
                this.noData = "Something happened";
                this.tableData = null;
            }

        }, (error) =>{
            this.serverDown=true;
            this.tableData = null;
          
        });



       // this.ngOnChanges();
    }

    prepareSavelabel(): LabelInputFields {
        
        return this.labelForm.value;
    }


    offSetVal(n: number) {
        this.offset = n;
        this.label.offset = n;


        this.isLoading= true;
        this.searchService.searchLabel(JSON.stringify(this.label)).finally(()=> this.isLoading = false).subscribe(response => {
            const {data, message, status} = response;

            this.tableData = data.dataList;
                    if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            }else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData= data.dataList; 


            }



        }, (error) =>{
            this.serverDown=true;
            this.tableData = null;
          
        });
    }


    sortBy2(i: number) {
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);
        this.offset = 0;
        this.label.offset = 0;
        this.label.orderBy = this.Order[i];
        this.label.flag = this.direction[i];
        this.isLoading = true;
        this.searchService.searchLabel(JSON.stringify(this.label)).finally(()=> this.isLoading = false).subscribe(response => {
            const {data, message, status} = response;



        if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            }else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            } else  {
                this.emptyField = null;
                this.count = data.count;
                this.tableData= data.dataList; 

            }



        }, (error) =>{
            this.serverDown=true;
          
        });

    }
    formErrors = {

        'labelUpc': ''
    }

    validationMessages = {

        'labelUpc': {
            'pattern': 'Invalid UPC number'
        }

    }

    setValues():void{
        this.offset = 0;
        this.count = 0;
       // this.queryString = null;
        this.noData = null;
        this.emptyField = null;

        
       this.direction = [];
       this.direction[this.index] = false;
       this.index = 0;
       this.flag = true;

        this.label = this.prepareSavelabel();
        var date = new DatePipe('en-US');

        this.label.collectionDateFrom = this.label.collectionDateFrom && this.label.collectionDateFrom != ""? this.label.collectionDateFrom: null;
        this.label.collectionDateTo = this.label.collectionDateTo && this.label.collectionDateTo != ""? this.label.collectionDateTo: null;

        // console.log(this.label.collection_date_from);
        this.label.orderBy = this.Order[0];
        this.label.flag = this.flag;
        this.label.offset = this.offset;


        console.log(JSON.stringify(this.label));
        this.submitted = true;
    }



}