import { Component, OnChanges, Input, ViewChild } from "@angular/core";
import {
  Params,
  classificationList,
  Classification_name,
  Classification_number,
  Response,
  GenericList
} from "../../data-model";
import { SearchService } from "../../services/search.service";
import { Observable } from "rxjs/Observable";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
declare const $;

//import { classification, FormValues } from '../../form-model';

// import { ProjectService } from './project-center/project.service';
// import { Project, Person } from './project-center/model';
import { ColumnSetting } from "../../shared/layout.model";
// import { PaginationComponent } from '../../pagination/pagination.component'
// import { TableLayoutComponent } from '../../shared/table-layout.component'
import { KeycloakService } from "../../keycloak/keycloak.service";
@Component({
  selector: "form-comp",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  providers: [SearchService]
})
export class FormComponent implements OnChanges {
  tableData: Params[];
  isLoading: boolean = false;
  submitted = false;
  offset: number = 0;
  product: Params;

  settings: ColumnSetting[] = [
    { primaryKey: "product_description", header: "Description" },
    { primaryKey: "product_brand", header: "Brand" },
    { primaryKey: "product_manufacturer", header: "Manufacturer" },
    { primaryKey: "classification_number", header: "Classification Number" },
    { primaryKey: "classification_name", header: "Classification Name" },
    { primaryKey: "classification_type", header: "Classification Type" },
    { primaryKey: "cnf_code", header: "CNF CODE" },
    { primaryKey: "cluster_number", header: "Cluster Number" }
  ];

  Classification_name = Classification_name;
  Classification_number = Classification_number;

  listOfClass: classificationList[];
  count = 0;
  pageSizes = 10;
  index: number = 0;
  flag: boolean = true;
  direction: boolean[];
  orderby: string = "";
  emptyField: string;
  noData: string;
  serverDown: boolean = false;
  restaurantTypes: GenericList;
  types: GenericList;
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private keycloakService: KeycloakService
  ) {
    this.createForm();

    this.direction = [];
    this.direction[this.index] = false;
    this.index = 0;
    this.flag = true;
  }

  ngOnInit() {
    this.searchService.getClassificationRestaurant().subscribe(response => {
      const { data, message, status } = response[0];
      //const cl = response;
      this.listOfClass = data.dataList;
      this.restaurantTypes = response[1].dataList;
      this.types = response[2].dataList;
    });

    // $(function() {
    //   let table = $("#table_id_2").DataTable({
    //     dom: "Bfrtip",
    //     colReorder: true,
    //     stateSave: true,
    //     buttons: ["colvis"],

    //     destroy: true
    //   });
    // });
  }

  ngOnChanges() {
    this.productForm.reset({
      classification_name: this.product.classification_name,
      Classification_number: this.product.classification_number,
      classification_type: this.product.classification_type,
      product_manufacturer: this.product.product_manufacturer,
      product_brand: this.product.product_brand,
      cnf_code: this.product.cnf_code,
      cluster_number: this.product.cluster_number,
      product_description: this.product.product_description,
      product_comment: this.product.product_comment,
      restaurant_type: this.product.restaurant_type,
      type: this.product.type
    });
  }

  createForm() {
    this.productForm = this.fb.group({
      classification_name: "",
      classification_number: "",
      classification_type: "",
      product_manufacturer: "",
      product_brand: "",
      cnf_code: ["", [Validators.pattern("\\d+")]],
      cluster_number: ["", [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]],
      product_description: "", //['', [Validators.required]],
      product_comment: "",
      restaurant_type: "",
      type: ""
    });
    this.productForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.productForm) {
      return;
    }
    const form = this.productForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
  onSubmit() {
    this.setValues();
    // this.queryString = '?';

    // for (const prop in this.product) {
    //     if (this.product.hasOwnProperty(prop)) {
    //         this.queryString += encodeURIComponent(prop) + '=' + (this.product[prop] == null ? '' : encodeURIComponent(this.product[prop])) + '&';
    //     }
    // }

    this.isLoading = true;
    this.searchService
      .search(JSON.stringify(this.product))
      .finally(() => (this.isLoading = false))
      .subscribe(
        response => {
          const { data, message, status } = response;

          if (status === 202) {
            this.emptyField = message;
            this.tableData = null;
          } else if (status === 203) {
            this.noData = message;

            this.tableData = null;
          } else if (status === 204) {
            this.noData = message;

            this.tableData = null;
          } else if (status === 205) {
            this.noData = message;
          } else if (status === 200) {
            this.count = data.count;
            this.tableData = data.dataList;
            console.log(this.tableData);
            this.emptyField = null;
            var counter = 1;
            // $("#table_id_2")
            //   .DataTable()
            //   .clear();
            // var t = $("#table_id_2").DataTable();
            // for (let item of this.tableData) {
            //   t.row
            //     .add([
            //       '<a href="/viewproduct/' +
            //         item["product_id"] +
            //         '">' +
            //         item["product_description"] +
            //         "</a>",
            //       // item["product_description"],
            //       counter + ".2",
            //       counter + ".3",
            //       counter + ".4",
            //       item["classification_name"],
            //       counter + ".6",
            //       counter + ".7",
            //       counter + ".8"
            //     ])
            //     .draw();
            // }

            for (var num = 0; num < this.settings.length; num++) {
              if (num === 0) {
                this.direction[num] = true;
              } else {
                this.direction[num] = false;
              }
            }
          } else {
            this.noData = "Something happened";
          }
        },
        error => {
          this.serverDown = true;
        }
      );

    // this.ngOnChanges();
  }

  prepareSaveProduct(): Params {
    return this.productForm.value;
  }

  offSetVal(n: number) {
    this.offset = n;
    this.product.offset = n;
    // this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + this.offset);
    // console.log("in Parent");
    // console.log(this.offset, this.queryString);

    this.isLoading = true;
    this.searchService
      .search(JSON.stringify(this.product))
      .finally(() => {
        this.isLoading = false;
        // console.log("failling here")
      })
      .subscribe(
        response => {
          const { data, message, status } = response;
          this.isLoading = false;

          if (status === 202) {
            this.emptyField = message;
            // console.log(message);
            this.tableData = null;
          } else if (status === 203) {
            this.noData = message;

            this.tableData = null;
          } else if (status === 204) {
            this.noData = message;

            this.tableData = null;
          } else {
            this.emptyField = null;
            this.count = data.count;
            this.tableData = data.dataList;
          }
        },
        error => {
          this.serverDown = true;
        }
      );
  }

  sortBy2(i: number) {
    this.index = i;
    this.flag = this.direction[i];
    this.direction = this.direction.map(
      (item, index) => (i === index ? !this.direction[i] : false)
    );

    this.isLoading = true;
    this.offset = 0;
    this.product.offset = 0;
    this.product.orderby = this.settings[i].primaryKey;
    this.product.flag = this.direction[i];
    this.isLoading = false;
    this.searchService
      .search(JSON.stringify(this.product))
      .finally(() => (this.isLoading = false))
      .subscribe(
        response => {
          const { data, message, status } = response;

          if (status === 205) {
            this.emptyField = message;
            //console.log(message);
            this.tableData = null;
          } else if (status === 203) {
            this.noData = message;

            this.tableData = null;
          } else if (status === 204) {
            this.noData = message;

            this.tableData = null;
          } else {
            this.emptyField = null;
            this.count = data.count;
            this.tableData = data.dataList;
            //console.log("Data received", data.dataList);
          }
        },
        error => {
          this.serverDown = true;
        }
      );
  }
  formErrors = {
    product_description: "",
    cnf_code: "",
    cluster_number: ""
  };
  validationMessages = {
    product_description: {
      required: "Description is requiredd"
    },
    cnf_code: {
      pattern: "Must be a digit"
    },
    cluster_number: {
      pattern: "Must be a number"
    }
  };
  setValues(): void {
    this.offset = 0;
    this.count = 0;
    this.noData = null;
    this.emptyField = null;

    this.direction = [];
    this.direction[this.index] = false;
    this.index = 0;
    this.flag = true;

    this.product = this.prepareSaveProduct();
    this.product.orderby = "product_description";
    this.product.flag = this.flag;
    this.product.offset = this.offset;

    //console.log(this.product);
    this.submitted = true;
  }
}
