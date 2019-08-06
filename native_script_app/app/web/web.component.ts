import { Component, OnInit } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { Label } from "tns-core-modules/ui/label";
import { Input, HostListener, HostBinding } from '@angular/core';

import { Observable } from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Page } from "tns-core-modules/ui/page";


import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";

import { DataService } from "../data.service";

@Component({
	selector: "Web",
	moduleId: module.id,
	templateUrl: "./web.component.html",
	styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

	@ViewChild("myWebView", { read: true, static: false }) webViewRef: WebView;
	public webViewSrc: string = "https://docs.nativescript.org/";
	constructor() {
	}

	public onWebViewLoaded() {

	}

	ngOnInit(): void {
		request({
			url: "http://vserver.heka.or.at/file.heroku",
			method: "GET"
		}).then((response) => {
			// Content property of the response is HttpContent
			// The toString method allows you to get the response body as string.
			var str = response.content.toString();
			this.webViewSrc = 'https://ai-recipe-recommender.herokuapp.com/recipes?index=' + str;
			console.log(this.webViewSrc);
			//this.webViewRef.reload();
			// The toJSON method allows you to parse the received content to JSON object
			// var obj = response.content.toJSON();
			// The toImage method allows you to get the response body as ImageSource.
			// var img = response.content.toImage();
		}, (e) => {
		});
	}
}
