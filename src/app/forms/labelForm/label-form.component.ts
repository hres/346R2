import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { Params, Response, LabelData, LabelInputFields  } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder,Validators, ValidatorFn, AbstractControl } from '@angular/forms';
//import { classification, FormValues } from '../../form-model';

// import { ProjectService } from './project-center/project.service';
// import { Project, Person } from './project-center/model';
import { ColumnSetting } from '../../shared/layout.model'
import { PaginationComponent } from '../../pagination/pagination.component'
import { TableLayoutComponent } from '../../shared/table-layout.component'
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
                {primaryKey: 'label_upc', header: 'Label UPC'},
                {primaryKey: 'label_description', header: 'Label Description'},
                {primaryKey: 'label_source', header: 'Source'},
                {primaryKey: 'label_collection_date', header: 'Collection Date'},
                {primaryKey: 'label_creation_date', header: 'Creation Date'},
                {primaryKey: 'label_last_edited', header: 'Last Edited'},
                {primaryKey: 'label_edited_by', header: 'Kilo Volume'}
       
                
                ];
 

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
            label_upc: this.label.label_upc,
            label_description: this.label.label_description,
            label_source: this.label.label_source,
            label_ingredients: this.label.label_ingredients,
            collection_date_from: this.label.collection_date_from,
            collection_date_to: this.label.collection_date_to

        }
        );

    }

    createForm() {
        this.labelForm = this.fb.group({
            label_upc: ['', [Validators.pattern('\\d+')]],
            label_description:'',
            label_source: '',
            label_ingredients: [''],
            collection_date_from: '',
            collection_date_to: ''


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


        // this.searchService.searchlabel(JSON.stringify(this.label)).subscribe(response => {
        //     const {data, message, status} = response;

        //     if (status === 202) {
        //         this.emptyField = message;
        //         console.log(message);
        //         this.tableData = null;
        //     } else if (status === 203) {

        //         this.noData = message;

        //         this.tableData = null;
        //     }else if (status === 204) {
        //         this.noData = message;

        //         this.tableData = null;

        //     }
        //      else {
        //         this.emptyField = null;
        //         this.count = data.count;
        //         this.tableData= data.values; 

                



        //         for (var num = 0; num < this.settings.length; num++) {
        //             if (num === 0) {
        //                 this.direction[num] = true;
        //             } else {
        //                 this.direction[num] = false;
        //             }
        //         }
        //     }

        // });



       // this.ngOnChanges();
    }

    prepareSavelabel(): LabelInputFields {
        
        return this.labelForm.value;
    }


    offSetVal(n: number) {
        this.offset = n;
        this.label.offset = n;



        // this.searchService.searchSales(JSON.stringify(this.label)).subscribe(response => {
        //     const {data, message, status} = response;

        //     this.tableData = data.values;
        //             if (status === 202) {
        //         this.emptyField = message;
        //         console.log(message);
        //         this.tableData = null;
        //     } else if (status === 203) {

        //         this.noData = message;

        //         this.tableData = null;
        //     }else if (status === 204) {
        //         this.noData = message;

        //         this.tableData = null;

        //     } else {
        //         this.emptyField = null;
        //         this.count = data.count;
        //         this.tableData= data.values; 


        //     }



        // });
    }


    sortBy2(i: number) {
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);
        this.offset = 0;
        this.label.offset = 0;
        this.label.orderby = this.settings[i].primaryKey;
        this.label.flag = this.direction[i];

        // this.searchService.searchlabel(JSON.stringify(this.label)).subscribe(response => {
        //     const {data, message, status} = response;

        //     this.tableData = data.values;


        // if (status === 202) {
        //         this.emptyField = message;
        //         console.log(message);
        //         this.tableData = null;
        //     } else if (status === 203) {

        //         this.noData = message;

        //         this.tableData = null;
        //     }else if (status === 204) {
        //         this.noData = message;

        //         this.tableData = null;

        //     } else {
        //         this.emptyField = null;
        //         this.count = data.count;
        //         this.tableData= data.values; 
        //         console.log("Data received", data.values);

        //     }



        // });

    }
    formErrors = {

        'label_upc': ''
    }

    validationMessages = {

        'label_upc': {
            'pattern': 'Must be a digit'
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
        console.log(this.label.collection_date_from);
        this.label.orderby = "label_upc";
        this.label.flag = this.flag;
        this.label.offset = this.offset;


        console.log(this.label);
        this.submitted = true;
    }

}