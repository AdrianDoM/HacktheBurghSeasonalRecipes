import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, ElementRef, OnInit } from "@angular/core";
import { Grocery } from "../shared/grocery/grocery.model";
import { GroceryService } from "../shared/grocery/grocery.service";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "gr-list",
    templateUrl: "list/list.component.html",
    styleUrls: ["list/list.component.css"],
    providers: [GroceryService]
})
export class ListComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    onOpenDrawerTap() {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    onCloseDrawerTap() {
        this.drawerComponent.sideDrawer.closeDrawer();
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}