import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Recipe",
    moduleId: module.id,
    templateUrl: "./recipe.component.html",
    styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
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