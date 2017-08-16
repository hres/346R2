import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response, Params, Classification_name, Classification_number, ClassificationList,addClass,productParams } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';



@Component({
    selector: 'view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {
    Classification_name = Classification_name;
    Classification_number = Classification_number;
    flag: boolean;
    Ids:any;
    params: productParams;
    productForm: FormGroup;
    emptyField: string = null;
    queryString: string = null;
        addClass: string;
listOfClass: addClass[];
    count: number = 0;
    isDisabled: boolean = true;
    noData: string = null;
    submitted: boolean = false;
    method: string;
    from: string;
    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private router: Router,
        private route: ActivatedRoute) {



    }



    createForm() {
        this.productForm = this.fb.group({
            classificationName: '',
            classificationNumber: '',
            classificationType: '',
            productManufacturer: '',
            productBrand: '',
            cnfCode: ['', [Validators.pattern('\\d+')]],
            clusterNumber: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            productDescription: ['', [Validators.required]],
            productComment: { value: '', disabled: this.isDisabled },
            classification_list: this.fb.array([])


        });
        this.productForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }


    setClassifcationList(classificationList: ClassificationList[]) {
        const classificationFGs = classificationList.map(classification => this.fb.group(classification));
        const classificationFormArray = this.fb.array(classificationFGs);
        this.productForm.setControl('classification_list', classificationFormArray);

    }
    get classification_list(): FormArray {
        return this.productForm.get('classification_list') as FormArray;

    }
    addClassification() {
        this.classification_list.push(this.fb.group(new ClassificationList()));
    }
    deleteClassification(i: number) {
        this.classification_list.removeAt(i)
    }

    onValueChanged(data?: any) {
        if (!this.productForm) { return; }
        const form = this.productForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }

    }
    onSubmit() {

        console.log(this.params['product_id'], "Is the product ID");
        this.submitted = true;
        this.params = this.prepareSaveParams();
        //Call update service 

        // console.log(this.params);
        // this.queryString = '?';

        // for (const prop in this.params) {
        //     console.log(prop, " ");
        //     if (this.params.hasOwnProperty(prop)) {
        //         this.queryString += encodeURIComponent(this.params[prop]) + '=' + (this.params[prop] == null ? '' : encodeURIComponent(this.params[prop])) + '&';
        //     }
        // }
        // this.queryString += `product_id=${this.params['product_id']}`;

        // this.queryString = this.queryString.slice(0, this.queryString.length);

        // console.log(this.queryString);
        // this.ngOnChanges();


    }
    prepareSaveParams(): productParams {

        const formModel = this.productForm.value;
        
        const classificationDeepCopy: ClassificationList[] = formModel.classification_list.map(
            (classificationList: ClassificationList) => Object.assign({}, classificationList)
        );
       
        const saveProduct: productParams = {

            classificationName: this.params.classificationName as string,
            classificationNumber: this.params.classificationNumber as string,
            classificationType: this.params.classificationType as string,
            productManufacturer: this.params.productManufacturer as string,
            productBrand: this.params.productBrand as string,
            cnfCode: this.params.cnfCode as number,
            clusterNumber: this.params.clusterNumber as number,
            productDescription: this.params.productDescription as string,
            productComment: this.params.productComment as string,
            classification_list: classificationDeepCopy,
            productId: this.params.productId,

        };

        return saveProduct;

    }

    formErrors = {
        'productDescription': '',
        'cnfCode': '',
        'clusterNumber': ''
    }
    validationMessages = {
        'productDescription': {
            'required': 'Description is requiredd'
        },
        'cnfCode': {
            'pattern': 'Must be a digit'
        },
        'clusterNumber': {
            'pattern': 'Must be a number'
        }

    }
    ngOnInit(): void {
        this.createForm();
        console.log("This is called");

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.searchService.getAll(param.get('id'))).subscribe(
            response => {
                this.listOfClass = response[0];
                this.params = response[1].data.values[0];
                
                console.log(response[0]);
                this.ngOnChanges();

            }
            );


            //        this.route.paramMap
            // .switchMap((param: ParamMap) =>

            //     this.searchService.getProduct(param.get('id'))).subscribe(
            // (parameter: Response<Params>) => {

            //     this.params = parameter.data.values[0];
            //     this.ngOnChanges();

            // }
            // );

    }
    ngOnChanges() {

        this.productForm.reset({

            classificationName: this.params['classificationName'] && this.params['classificationName'] != null ? this.params['classificationName'].toString() : this.params['classificationName'],
            classificationNumber: this.params['classificationNumber'] != null ? this.params['classificationNumber'].toString() : this.params['classificationName'],
            classificationType: this.params['classificationType'],
            productManufacturer: this.params['productManufacturer'],
            productBrand: this.params['productBrand'],
            cnfCode: this.params['cnfCode'],
            clusterNumber: this.params['clusterNumber'],
            productDescription: this.params['productDescription'],
            productComment: this.params['productComment']


        });
       // this.setClassifcationList(this.params.classification_list);
    }

    revert() {
        this.ngOnChanges();
    }
    // response(from: string, method: string) {
    //     this.from = from;
    //     this.method = method;
    // }
    responseDelete(flag: boolean){
         this.from = 'product';
         this.method = 'delete';
        console.log("Delete event triggered")
    }
    responseUpdate(i: boolean){
        this.method = 'update';
        this.from = 'product';
        console.log("Update event triggered")
    }
    responseAdd(i: boolean){

        this.addClass = 'add';
        this.method = 'add';
        this.from = 'product';
        this.Ids = {productId:this.params.productId}
        console.log("Add event triggered")
    }
    checkModal(flag: boolean){
    this.from = null;
    
}

}