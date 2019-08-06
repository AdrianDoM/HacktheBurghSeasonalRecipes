import { ItemEventData } from "tns-core-modules/ui/list-view"
import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as utils from "tns-core-modules/utils/utils";

import { Input, HostBinding, HostListener } from '@angular/core';

import { DataService } from "../data.service";

import { WebComponent } from "../web/web.component";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { IfAndroidDirective, IfIosDirective } from "../if-platform.directive";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        WebComponent,
        Input,
        HostBinding,
        HostListener
    ],
    declarations: [
        IfAndroidDirective,
        IfIosDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

@Component({
    selector: "BrowseRecipes",
    moduleId: module.id,
    templateUrl: "./browse_recipes.component.html",
    styleUrls: ["./browse_recipes.component.css"]
})
export class BrowseRecipesComponent implements OnInit {

    onButtonTap(): void {
        this.router.navigate(['web']);
    }

    title_list: string[];
    list_element: { name: string }[] = [];
    countries: { name: string, imageSrc: string }[] = [
        { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
        { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
        { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
        { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
        { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
        { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
        { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
        { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
        { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
        { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
        { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
        { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
        { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
        { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
        { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
        { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    ];

    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
        request({
             url: "http://vserver.heka.or.at/test.php?ref=" + args.index,
             method: "GET"
         }).then((response) => {
             // Content property of the response is HttpContent
             // The toString method allows you to get the response body as string.
             const str = response.content.toString();
             
             // The toJSON method allows you to parse the received content to JSON object
             // var obj = response.content.toJSON();
             // The toImage method allows you to get the response body as ImageSource.
             // var img = response.content.toImage();
         }, (e) => {
             });
         this.router.navigate(['web']);
    }
    @ViewChild(RadSideDrawerComponent, { read: true, static: false }) public drawerComponent: RadSideDrawerComponent;
    mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
        + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    onOpenDrawerTap() {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    onCloseDrawerTap() {
        this.drawerComponent.sideDrawer.closeDrawer();
    }

    onHomeTap() {
        this.router.navigate(["/recipe"]);
    }

    onBrowseRecipeTap() {
        this.router.navigate(["/browserecipes"]);
    }

    onFootprintTap() {
        this.router.navigate(["/footprint"]);
    }

    onSettingsTap() {
        this.router.navigate(["/settings"]);
    }

    onLogoutTap() {
        this.router.navigate([""]);
    }

    constructor(private router: Router) {
        request({
            url: "https://ai-recipe-recommender.herokuapp.com/titles",
            method: "GET"
        }).then((response) => {
            // Content property of the response is HttpContent
            // The toString method allows you to get the response body as string.
            const str = response.content.toString();
            this.title_list = str.split(',');
            for (var i = 0; i < this.title_list.length; i++) {
                this.list_element.push({ name: this.title_list[i] })
            }
            // The toJSON method allows you to parse the received content to JSON object
            // var obj = response.content.toJSON();
            // The toImage method allows you to get the response body as ImageSource.
            // var img = response.content.toImage();
        }, (e) => {
        });


    }

    ngOnInit(): void {
    }

}
