import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter, ElementRef, Inject, PLATFORM_ID, Renderer2, OnDestroy, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { debuglog } from 'util';

@Component({
  selector: 'dynamic-image',
  //
  template: `<img src="assets/images/{{tip}}/{{naziv}}.jpg" class="kompanija-slika">`,
  //styles: [':host {display: block;}']
})
export class DynamicImageComponent {
  @Input() naziv: string; // slika MORA da se zove isto kao i kompanija i da ima .jpg extenziju
  @Input() tip: string; // ubacen da moze da se udje u odgovarajuci direktorijum
  constructor(){}

  OnInit(){
  }
}