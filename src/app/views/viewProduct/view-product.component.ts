import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response, Params, Classification_name, Classification_number, ClassificationList } from '../../data-model';
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
    Ids:any;
    params: Params;
    productForm: FormGroup;
    emptyField: string = null;
    queryString: string = null;
        addClass: string;

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
            classification_name: '',
            classification_number: '',
            classification_type: '',
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [Validators.pattern('\\d+')]],
            cluster_number: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: ['', [Validators.required]],
            product_comment: { value: '', disabled: this.isDisabled },
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

        console.log(this.params);
        this.queryString = '?';

        for (const prop in this.params) {
            console.log(prop, " ");
            if (this.params.hasOwnProperty(prop)) {
                this.queryString += encodeURIComponent(this.params[prop]) + '=' + (this.params[prop] == null ? '' : encodeURIComponent(this.params[prop])) + '&';
            }
        }
        this.queryString += `product_id=${this.params['product_id']}`;

        this.queryString = this.queryString.slice(0, this.queryString.length);

        console.log(this.queryString);
        this.ngOnChanges();


    }
    prepareSaveParams(): Params {

        const formModel = this.productForm.value;
        
        const classificationDeepCopy: ClassificationList[] = formModel.classification_list.map(
            (classificationList: ClassificationList) => Object.assign({}, classificationList)
        );
       
        const saveProduct: Params = {

            classification_name: this.params.classification_name as string,
            classification_number: this.params.classification_number as string,
            classification_type: this.params.classification_type as string,
            product_manufacturer: this.params.product_manufacturer as string,
            product_brand: this.params.product_brand as string,
            cnf_code: this.params.cnf_code as number,
            cluster_number: this.params.cluster_number as number,
            product_description: this.params.product_description as string,
            product_comment: this.params.product_comment as string,
            classification_list: classificationDeepCopy,
            product_id: this.params.product_id,

        };

        return saveProduct;

    }

    formErrors = {
        'product_description': '',
        'cnf_code': '',
        'cluster_number': ''
    }
    validationMessages = {
        'product_description': {
            'required': 'Description is requiredd'
        },
        'cnf_code': {
            'pattern': 'Must be a digit'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        }

    }
    ngOnInit(): void {
        this.createForm();
        console.log("This is called");

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.searchService.getProduct(param.get('id'))).subscribe(
            (parameter: Response<Params>) => {

                this.params = parameter.data.values[0];
                this.ngOnChanges();

            }
            );

    }
    ngOnChanges() {

        this.productForm.reset({

            classification_name: this.params['classification_name'] && this.params['classification_name'] != null ? this.params['classification_name'].toString() : this.params['classification_name'],
            classification_number: this.params['classification_number'] != null ? this.params['classification_number'].toString() : this.params['classification_name'],
            classification_type: this.params['classification_type'],
            product_manufacturer: this.params['product_manufacturer'],
            product_brand: this.params['product_brand'],
            cnf_code: this.params['cnf_code'],
            cluster_number: this.params['cluster_number'],
            product_description: this.params['product_description'],
            product_comment: this.params['product_comment']


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
        this.Ids = {productId:this.params.product_id}
        console.log("Add event triggered")
    }
    checkModal(flag: boolean){
    this.from = null;
    
}

}