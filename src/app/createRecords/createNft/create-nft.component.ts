import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges }       from '@angular/core';
import { nftFields, UofM, nftFieldsList, nftList} from '../../data-model';


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



  constructor(
    private fb: FormBuilder) {

    this.createForm();
    // this.logNameChange();
  }

  createForm() {
    this.nftForm = this.fb.group({

      secretComponents: this.fb.array([]),

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
    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

  preparenftFieldsInput(): nftList {
    const formModel = this.nftForm.value;

    // deep copy of form model lairs
    const componentsDeepCopy: nftFields[] = formModel.secretComponents.map(
      (component: nftFields) => Object.assign({}, component)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveNft: nftList = {

      // Componentses: formModel.secretLairs // <-- bad!
      nft: componentsDeepCopy
    };
    return saveNft;
  }

  revert() { this.ngOnChanges(); }

//   logNameChange() {
//     const nameControl = this.nftForm.get('name');
//     nameControl.valueChanges.forEach(
//       (value: string) => this.nameChangeLog.push(value)
//     );
//   }
}
