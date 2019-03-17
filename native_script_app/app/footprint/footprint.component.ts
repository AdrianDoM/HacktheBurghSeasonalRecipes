import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Footprint",
    moduleId: module.id,
    templateUrl: "./footprint.component.html",
    styleUrls: ["./footprint.component.css"]
})
export class FootprintComponent implements OnInit {
    categoricalSource: { Country: string, Amount: number, SecondVal: number, ThirdVal: number }[] = [
        { Country: "January", Amount: 15, SecondVal: 14, ThirdVal: 24 },
        { Country: "February", Amount: 13, SecondVal: 23, ThirdVal: 25 },
        { Country: "March", Amount: 24, SecondVal: 17, ThirdVal: 23 },
        { Country: "April", Amount: 11, SecondVal: 19, ThirdVal: 24 },
        { Country: "May", Amount: 18, SecondVal: 8, ThirdVal: 21 }
    ];

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
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
    }

    ngOnInit(): void {
    }
}