import { Component, ElementRef, OnInit, ViewChild, EventEmitter, HostListener } from '@angular/core';
import { FormioRefreshValue }  from 'angular-formio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('json', {static: true}) jsonElement?: ElementRef| any;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  @ViewChild('formio') formio:any;
  public form: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor() {
    this.form = {components: []};
  }

  ngOnInit(): void {
    this.form = {components: []};
    this.refreshForm = new EventEmitter();
  }
  saveForm() {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.formio.form, null, 4)));
    this.refreshForm.emit({
      property: 'form',
      form: this.form
    });
  }
}
