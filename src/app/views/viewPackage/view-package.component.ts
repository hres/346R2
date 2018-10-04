import "rxjs/add/operator/switchMap";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {
  Component,
  OnChanges,
  Input,
  OnInit,
  AfterContentChecked
} from "@angular/core";
import {
  Response,
  labelViewFields,
  NftAsSold,
  componentView,
  NftAsPrepared
} from "../../data-model";
import { SearchService } from "../../services/search.service";
import { GetRecordService } from "../../services/getRecord.service";
import { DeleteRecordService } from "../../services/delete-record.service";
import { ColumnSetting } from "../../shared/layout.model";
import { environment } from "../../../environments/environment";
import { KeycloakService } from "../../keycloak/keycloak.service";
import { KeycloakHttp } from "../../keycloak/keycloak.http";

import {
  Headers,
  Http,
  RequestOptions,
  ResponseContentType
} from "@angular/http";

import { Observable } from "rxjs/Observable";
import { AbstractControl } from "@angular/forms";

export type ImageModel = {
  image_name: string;
  image_id: number;
};

declare var $: any;
@Component({
  selector: "view-package",
  templateUrl: "./view-package.component.html",
  styleUrls: ["./view-package.component.css"],
  providers: [DeleteRecordService]
})
export class ViewPackageComponent implements OnInit {
  imageToShow: any;
  apiUrl = environment.apiUrl;
  isImageLoading: boolean;
  flag: number;
  flag_add_image: number;
  Ids: any;
  confirmDeleteImageTransation: number;
  packageData: labelViewFields;
  type: string;
  isLoading: boolean;
  emptyField: string = null;
  serverDown: boolean;
  submitted: boolean = false;
  nftAsSold: NftAsSold;
  nftAsPrepared: NftAsPrepared;
  componentViewPrepared: componentView[];
  componentViewSold: componentView[];
  idToRelink: number = null;
  listOfImages: ImageModel[];
  imagesBackUp: ImageModel[];
  showForm: boolean = false;
  package_id: number;
  deleteImageId: number;
  showConfimModalBox: boolean = false;
  confirmModalBoxMessage: string =
    "Are you sure you want to delete this image?";

  nftSettings: ColumnSetting[] = [
    { primaryKey: "name", header: "Component" },
    { primaryKey: "amount", header: "Amount" },
    { primaryKey: "unit_of_measure", header: "Unit of Measure" },
    { primaryKey: "daily_value", header: "% DV" },
    { primaryKey: "amount_per100g", header: "Amount Per 100g" }
  ];

  constructor(
    private getRecordService: GetRecordService,
    private deleteRecordService: DeleteRecordService,
    private router: Router,
    private route: ActivatedRoute,
    private keycloakService: KeycloakService,
    private http: Http,
    private keycloakHttp: KeycloakHttp
  ) {}

  ngOnInit() {
    this.packageData = null;
    this.componentViewPrepared = null;

    this.route.paramMap
      .switchMap((param: ParamMap) =>
        this.getRecordService.getPackageRecords(param.get("id"))
      )
      .subscribe(response => {
        console.log(response);

        this.packageData = response[0].data.dataList[0];
        this.package_id = this.packageData.package_id;
        this.nftAsPrepared = response[2];
        this.listOfImages = response[3].dataList;

        this.imagesBackUp = response[3].dataList;
        if (this.nftAsPrepared.nft.length < 1) {
          this.componentViewPrepared = null;
        } else {
          this.componentViewPrepared = this.nftAsPrepared.nft;
        }

        this.nftAsSold = response[1];
        if (this.nftAsSold.nft.length < 1) {
          this.componentViewSold = null;
        } else {
          this.componentViewSold = this.nftAsSold.nft;
        }
        // this.ngOnChanges();
      });
  }
  ngOnChanges() {}
  getPath() {
    return `/add-nft-prepared/${+this.route.snapshot.paramMap.get("id")}`;
  }
  getPathAsSold() {
    return `/add-nft/${+this.route.snapshot.paramMap.get("id")}`;
  }
  editNft(flag: boolean) {
    this.router.navigate([
      "/edit-nft",
      this.route.snapshot.paramMap.get("id"),
      flag
    ]);
  }

  addImage() {
    this.showForm = true;
  }

  openImage() {
    $(".image").viewer();
    //$('.images').viewer();
  }

  callEdit() {
    this.router.navigate(["/edit-label", this.packageData.package_id]);
    this.flag = null;
  }
  callDelete() {
    this.type = "package";
  }

  responseFromModal(value: number) {
    if (value == 2) {
      this.type = null;
      this.deleteLabel(this.packageData.package_id);
      this.type = null;
    } else if (value == 1) {
      this.type = null;
      this.callRelink();
    } else {
      this.type = null;
    }
  }
  callRelink() {
    this.router.navigate([
      "/product-relink",
      this.packageData.package_id,
      "package"
    ]);
  }

  deleteLabel(id: number | string) {
    this.submitted = true;
    this.deleteRecordService
      .deleteLabelRecord(id)
      .finally(() => (this.isLoading = false))
      .subscribe(
        response => {
          const { message, status } = response;

          if (status === 202) {
            this.flag = 2;
          } else if (status === 203) {
            this.flag = 2;
          } else if (status === 204) {
            this.flag = 2;
          } else if (status === 200) {
            this.flag = 1;

            setTimeout(() => {
              this.router.navigate([
                "/viewproduct",
                this.packageData.product_id
              ]);
            }, 4000);
          } else {
            this.flag = 2;
          }
        },
        error => {
          this.serverDown = true;
          this.flag = 2;
          this.submitted = false;
        }
      );
  }
  callViewProduct() {
    this.router.navigate(["/viewproduct", this.packageData.product_id]);
  }
  returnImage(imagePath: string) {
    return this.apiUrl + "GetImageService/getLabelImages/" + imagePath;
  }
  createImageFromBlob(image: Blob): any {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
    return this.imageToShow;
  }
  updateImageGalery(imageList: ImageModel[]) {
    this.confirmDeleteImageTransation = null;
    if (imageList == null) {
      this.confirmDeleteImageTransation = 2;
      this.listOfImages = this.imagesBackUp;
      this.showForm = false;
    } else {
      this.confirmDeleteImageTransation = 1;
      this.listOfImages = imageList;
      this.imagesBackUp = imageList;
      this.showForm = false;
    }
  }
  confirmAction(id: any) {
    this.deleteImageId = id;
    this.showConfimModalBox = true;
  }
  responseFromConfirmModalBox(value: boolean) {
    this.showConfimModalBox = false;
    console.log("clicked to delete image");
    if (value) {
      this.deleteImage(this.deleteImageId);
    } else {
      console.log("Dont delete", this.deleteImageId);
      return;
    }
  }

  deleteImage(imaggeId: number) {
    this.confirmDeleteImageTransation = null;

    this.route.paramMap
      .switchMap((param: ParamMap) =>
        this.deleteRecordService.deleteImage(imaggeId)
      )
      .subscribe(
        response => {
          console.log(response);
          if (response.status == 200) {
            this.listOfImages = response.dataList;
            this.imagesBackUp = response.dataList;
            this.confirmDeleteImageTransation = 1;
          } else {
            this.listOfImages = this.imagesBackUp;
            this.confirmDeleteImageTransation = 2;
          }
        },
        error => {
          this.confirmDeleteImageTransation = 2;
          this.listOfImages = this.imagesBackUp;
          this.serverDown = true;
          this.flag = 2;
          this.submitted = false;
        }
      );
  }
}
