(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_routings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/routings */ "./src/app/services/routings.ts");




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_services_routings__WEBPACK_IMPORTED_MODULE_3__["appRoutes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movieDB__container {\n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n}\n \n.side-navigation-bar__container {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    height: 100vh;\n}\n \n.side-navigation-bar {\n    background-color: rgb(58, 60, 90);\n    background: linear-gradient(to bottom, rgb(58, 60, 90), rgb(51,53,57));\n    color: white;\n}\n \n.movieDB__header-container {\n    width: 100%;\n    height: 10vh;\n}\n \n.movieDB__content-container {\n    height: 100vh;\n    width: 100%;\n}\n \n.scroll-top__container {\n    display: flex;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsdUVBQXVFO0lBQ3ZFLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWVEQl9fY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiBcbi5zaWRlLW5hdmlnYXRpb24tYmFyX19jb250YWluZXIge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2lkZS1uYXZpZ2F0aW9uLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA2MCwgOTApO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig1OCwgNjAsIDkwKSwgcmdiKDUxLDUzLDU3KSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW92aWVEQl9faGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuXG4ubW92aWVEQl9fY29udGVudC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zY3JvbGwtdG9wX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movieDB__container\">\n  <div class=\"side-navigation-bar__container side-navigation-bar\">\n    <app-side-navigation-bar></app-side-navigation-bar>\n  </div>\n  <div class=\"movieDB__content-container\">\n    <div class=\"movieDB__header-container\">\n      <app-header></app-header>\n    </div>\n    <app-add-movie *ngIf=\"showAddMovie$ | async\"></app-add-movie>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.showAddMovie$ = this.store.select(function (s) { return s.movieDb.ShowAddMovie; });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_side_navigation_bar_side_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-navigation-bar/side-navigation-bar.component */ "./src/app/components/side-navigation-bar/side-navigation-bar.component.ts");
/* harmony import */ var _components_side_navigation_bar_item_side_navigation_bar_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-navigation-bar-item/side-navigation-bar-item.component */ "./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-item/search-item.component */ "./src/app/components/search-item/search-item.component.ts");
/* harmony import */ var _components_header_navigation_header_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header-navigation/header-navigation.component */ "./src/app/components/header-navigation/header-navigation.component.ts");
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search-form/search-form.component */ "./src/app/components/search-form/search-form.component.ts");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_films_list_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/effects/films-list.effects */ "./src/app/store/effects/films-list.effects.ts");
/* harmony import */ var _store_effects_tv_shows_list_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/effects/tv-shows-list.effects */ "./src/app/store/effects/tv-shows-list.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/reducers/index */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/components/list-item/list-item.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/scroll-top/scroll-top.component */ "./src/app/components/scroll-top/scroll-top.component.ts");
/* harmony import */ var _components_tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/tv-shows-list/tv-shows-list.component */ "./src/app/components/tv-shows-list/tv-shows-list.component.ts");
/* harmony import */ var _components_subscribe_item_window_subscribe_item_window_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/subscribe-item-window/subscribe-item-window.component */ "./src/app/components/subscribe-item-window/subscribe-item-window.component.ts");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/library/library.component */ "./src/app/components/library/library.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/app/components/checkbox/checkbox.component.ts");
/* harmony import */ var _components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/progressbar/progressbar.component */ "./src/app/components/progressbar/progressbar.component.ts");
/* harmony import */ var _components_subscribe_movie_subscribe_movie_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/subscribe-movie/subscribe-movie.component */ "./src/app/components/subscribe-movie/subscribe-movie.component.ts");
/* harmony import */ var _components_subscribe_tv_show_subscribe_tv_show_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/subscribe-tv-show/subscribe-tv-show.component */ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _store_effects_movieDB_effects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./store/effects/movieDB.effects */ "./src/app/store/effects/movieDB.effects.ts");
/* harmony import */ var _services_search_form_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/search-form.service */ "./src/app/services/search-form.service.ts");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/support/support.component */ "./src/app/components/support/support.component.ts");
/* harmony import */ var _components_add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/add-movie/add-movie.component */ "./src/app/components/add-movie/add-movie.component.ts");
/* harmony import */ var _components_form_text_inputs_form_text_inputs_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/form-text-inputs/form-text-inputs.component */ "./src/app/components/form-text-inputs/form-text-inputs.component.ts");
/* harmony import */ var _components_form_labels_form_labels_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/form-labels/form-labels.component */ "./src/app/components/form-labels/form-labels.component.ts");
/* harmony import */ var _components_file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/file-loader/file-loader.component */ "./src/app/components/file-loader/file-loader.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_subscribe_library_subscribe_library_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/subscribe-library/subscribe-library.component */ "./src/app/components/subscribe-library/subscribe-library.component.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./directives/click-outside.directive */ "./src/app/directives/click-outside.directive.ts");












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_side_navigation_bar_side_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationBarComponent"],
                _components_side_navigation_bar_item_side_navigation_bar_item_component__WEBPACK_IMPORTED_MODULE_6__["SideNavigationBarItemComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__["SearchItemComponent"],
                _components_header_navigation_header_navigation_component__WEBPACK_IMPORTED_MODULE_11__["HeaderNavigationComponent"],
                _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_12__["SearchFormComponent"],
                _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_13__["MovieListComponent"],
                _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_21__["ListItemComponent"],
                _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_23__["ScrollTopComponent"],
                _components_tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_24__["TvShowsListComponent"],
                _components_subscribe_item_window_subscribe_item_window_component__WEBPACK_IMPORTED_MODULE_25__["SubscribeItemWindowComponent"],
                _components_library_library_component__WEBPACK_IMPORTED_MODULE_26__["LibraryComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_29__["CheckboxComponent"],
                _components_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_30__["ProgressBarComponent"],
                _components_subscribe_movie_subscribe_movie_component__WEBPACK_IMPORTED_MODULE_31__["SubscribeMovieComponent"],
                _components_subscribe_tv_show_subscribe_tv_show_component__WEBPACK_IMPORTED_MODULE_32__["SubscribeTvShowComponent"],
                _components_support_support_component__WEBPACK_IMPORTED_MODULE_36__["SupportComponent"],
                _components_add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_37__["AddMovieComponent"],
                _components_form_text_inputs_form_text_inputs_component__WEBPACK_IMPORTED_MODULE_38__["FormTextInputsComponent"],
                _components_form_labels_form_labels_component__WEBPACK_IMPORTED_MODULE_39__["FormLabelsComponent"],
                _components_file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_40__["FileLoaderComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_41__["AboutComponent"],
                _components_subscribe_library_subscribe_library_component__WEBPACK_IMPORTED_MODULE_42__["SubscribeLibraryComponent"],
                _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_43__["ClickOutsideDirective"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_store_reducers_index__WEBPACK_IMPORTED_MODULE_20__["reducers"], { metaReducers: _store_reducers_index__WEBPACK_IMPORTED_MODULE_20__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_store_effects_films_list_effects__WEBPACK_IMPORTED_MODULE_15__["FilmsListEffects"], _store_effects_tv_shows_list_effects__WEBPACK_IMPORTED_MODULE_16__["TvShowListEffects"], _store_effects_movieDB_effects__WEBPACK_IMPORTED_MODULE_34__["MovieDbEffects"]]),
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__["InfiniteScrollModule"],
            ],
            providers: [_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_33__["LocalStorageService"], _services_search_form_service__WEBPACK_IMPORTED_MODULE_35__["SearchFormService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about__container{\r\n    background-color: rgb(38, 33, 38);\r\n    width: 100%;\r\n    height: 90%;\r\n    color: rgb(92, 92, 92);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.about__content-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: rgb(0, 136, 204);\r\n\r\n}\r\n\r\n.about__text{\r\n    font-family: sans-serif;\r\n    font-size: 0.7em;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    margin: 1em;\r\n}\r\n\r\n.about__link{\r\n    -webkit-user-select: all;\r\n       -moz-user-select: all;\r\n        -ms-user-select: all;\r\n            user-select: all;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCOztDQUUzQjs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dF9fY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCAzMywgMzgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0X19jb250ZW50LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6IHJnYigwLCAxMzYsIDIwNCk7XHJcblxyXG59XHJcblxyXG4uYWJvdXRfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4uYWJvdXRfX2xpbmt7XHJcbiAgICB1c2VyLXNlbGVjdDogYWxsO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about__container about\">\n  <div class=\"about__content-container\">\n    <span class=\"about__text\">\n      This site was designed and developed by: Dzmitry Harnakou\n    </span>\n    <span class=\"about__text\">\n      GitHub URL: <a class=\"about__link\" href=\"https://github.com/DzmitryHarnakou/Dzmitry_Harnakou-project\"> https://github.com/DzmitryHarnakou/Dzmitry_Harnakou-project </a>\n    </span>\n    <span class=\"about__text\">\n      GitHub pages : <a class=\"about__link\" href=\"https://dzmitryharnakou.github.io/\"> https://dzmitryharnakou.github.io/ </a>\n    </span>\n    <span class=\"about__text\">\n      Design: file.pdf\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/add-movie/NewMovie.ts":
/*!**************************************************!*\
  !*** ./src/app/components/add-movie/NewMovie.ts ***!
  \**************************************************/
/*! exports provided: NewMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovie", function() { return NewMovie; });
var NewMovie = /** @class */ (function () {
    function NewMovie(adult, genre_ids, original_title, overview, title) {
        this.backdrop_path = null;
        this.id = null;
        this.original_language = null;
        this.popularity = null;
        this.poster_path = null;
        this.release_date = null;
        this.video = false;
        this.vote_average = null;
        this.vote_count = null;
        this.adult = adult;
        this.genre_ids = genre_ids;
        this.original_title = original_title;
        this.overview = overview;
        this.title = title;
    }
    return NewMovie;
}());



/***/ }),

/***/ "./src/app/components/add-movie/add-movie.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-movie/add-movie.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-movie__container {\r\n    height: 30vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: rgb(92, 92, 92);\r\n    background-color: rgb(38, 33, 38);\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.add-movie__content-container{\r\n    width: 90%;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-text-inputs__container{\r\n    width: 30%;\r\n}\r\n\r\n.form-labels__container{\r\n    width: 30%;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.form-labels__header{\r\n    font-size: 0.7em;\r\n}\r\n\r\n.search_form__header{\r\n    font-size: 0.7em;\r\n    border-bottom: 2px solid rgb(92, 92, 92);\r\n}\r\n\r\n.form-labels__container-item {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.add-movie__button-add {\r\n    background-color: rgb(87, 148, 96);\r\n    border: 2px solid rgb(158, 158, 158);\r\n    width: 7em;\r\n    height: 2em;\r\n    color: rgb(158, 158, 158);\r\n}\r\n\r\n.add-movie__button-add:hover {\r\n    border: 2px solid white;\r\n    color: white;\r\n}\r\n\r\n.add-movie__button-cancel {\r\n    background-color: rgb(242, 22, 22);\r\n    border: 2px solid rgb(158, 158, 158);\r\n    width: 5em;\r\n    height: 2em;\r\n    margin-left: 1em;\r\n    color: rgb(80, 80, 80);\r\n}\r\n\r\n.add-movie__button-cancel:hover {\r\n    border: 2px solid white;\r\n    color: white;\r\n}\r\n\r\n.add-movie__file-loader-container {\r\n    height: 27vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.add-movie__button-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.search-form__validation-text {\r\n    color: red;\r\n    font-size: 0.6em;\r\n    position: absolute;\r\n    padding-top: 0.4em;\r\n}\r\n\r\n.alert-menu {\r\n    position: absolute;\r\n    background: rgba(26, 25, 26, 0.5);\r\n    color: red;\r\n    border: 2px rgba(42, 41, 42, 0.7);\r\n    border-radius: 1em;\r\n    box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.71);\r\n    height: 10em;\r\n    width: 20em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 4em;\r\n    right: 25%;\r\n}\r\n\r\n.alert-menu__text{\r\n    font-size: 2em;\r\n    font-family: sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbW92aWUvYWRkLW1vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksV0FBVztJQUNYLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFdBQVc7SUFDWCw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbW92aWUvYWRkLW1vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW1vdmllX19jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCAzMywgMzgpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtbW92aWVfX2NvbnRlbnQtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtLXRleHQtaW5wdXRzX19jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbHNfX2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbHNfX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5zZWFyY2hfZm9ybV9faGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoOTIsIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsc19fY29udGFpbmVyLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uYWRkLW1vdmllX19idXR0b24tYWRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTQ4LCA5Nik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBjb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG59XHJcblxyXG4uYWRkLW1vdmllX19idXR0b24tYWRkOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkLW1vdmllX19idXR0b24tY2FuY2VsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIyLCAyMik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcclxufVxyXG5cclxuLmFkZC1tb3ZpZV9fYnV0dG9uLWNhbmNlbDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkZC1tb3ZpZV9fZmlsZS1sb2FkZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjd2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYWRkLW1vdmllX19idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm1fX3ZhbGlkYXRpb24tdGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcclxufVxyXG5cclxuLmFsZXJ0LW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMjUsIDI2LCAwLjUpO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlcjogMnB4IHJnYmEoNDIsIDQxLCA0MiwgMC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDRweCByZ2JhKDAsMCwwLDAuNzEpO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdG9wOiA0ZW07XHJcbiAgICByaWdodDogMjUlO1xyXG59XHJcblxyXG4uYWxlcnQtbWVudV9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/add-movie/add-movie.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/add-movie/add-movie.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"add-movie add-movie__container\">\n    <div class=\"add-movie__content-container\">\n      <div class=\"form-text-inputs__container\">\n        <h2 class=\"search_form__header\">\n          Add movie\n        </h2>\n        <app-form-text-inputs  (titleValue) = \"titleValue($event)\"\n                               (overviewValue) = \"overviewValue($event)\"\n                               [titleIsValid] = \"title\"\n                               [overviewIsValid] = \"overview\"\n                               ></app-form-text-inputs>\n      </div>\n      <div class=\"form-labels__container\">\n        <span class=\"form-labels__header\">Genres</span>\n        <div class=\"form-labels__container-item\">\n          <app-form-labels  (genreId) = getGenreId($event)></app-form-labels>\n          <p class=\"search-form__validation-text\" *ngIf = \"!genreIds.length\">Genre is required</p>\n        </div>\n        <app-checkbox [label]=\"'Adult'\" (boolValue)='adultValue($event)' class=\"form-label__adult\"></app-checkbox>\n      </div>\n      <div class=\"add-movie__file-loader-container\">\n        <app-file-loader (emitFiles) = \"getFiles($event)\"></app-file-loader>\n        <div class=\"add-movie__button-container\">\n          <input type=\"submit\" \n          value=\"Add\" \n          (click) = \"submit()\" \n          class=\"add-movie__button-add\">\n          <input type=\"button\" \n          value=\"cancel\" \n          (click) = \"onCancel()\" \n          class=\"add-movie__button-cancel\">\n        </div>\n      </div>\n    </div>\n  </div>\n<div class=\"alert-menu\" *ngIf = \"showMenu\">\n  <span class=\"alert-menu__text\">Fill all required fields</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-movie/add-movie.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-movie/add-movie.component.ts ***!
  \*************************************************************/
/*! exports provided: AddMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieComponent", function() { return AddMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");
/* harmony import */ var _NewMovie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewMovie */ "./src/app/components/add-movie/NewMovie.ts");





var AddMovieComponent = /** @class */ (function () {
    function AddMovieComponent(store) {
        this.store = store;
        this.adult = false;
        this.genreIds = [];
        this.showMenu = false;
    }
    AddMovieComponent.prototype.getFiles = function (files) {
        this.files = files;
    };
    AddMovieComponent.prototype.adultValue = function (adult) {
        this.adult = adult;
    };
    AddMovieComponent.prototype.titleValue = function (title) {
        this.title = title;
    };
    AddMovieComponent.prototype.getGenreId = function (genreId) {
        for (var i = 0; i < this.genreIds.length; i++) {
            if (this.genreIds[i] === genreId) {
                this.genreIds.splice(i, 1);
                return;
            }
        }
        this.genreIds.push(genreId);
    };
    AddMovieComponent.prototype.overviewValue = function (overview) {
        this.overview = overview;
    };
    AddMovieComponent.prototype.submit = function () {
        var _this = this;
        if (this.genreIds.length && this.title && this.overview) {
            this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["AddMovie"](new _NewMovie__WEBPACK_IMPORTED_MODULE_4__["NewMovie"](this.adult, this.genreIds, this.title, this.overview, this.title), this.files));
            this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["HideAddMovie"]());
        }
        else {
            this.showMenu = true;
        }
        if (this.showMenu) {
            setTimeout(function () { return _this.showMenu = false; }, 1000);
        }
    };
    AddMovieComponent.prototype.onCancel = function () {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["HideAddMovie"]());
    };
    AddMovieComponent.prototype.ngOnInit = function () {
    };
    AddMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-movie',
            template: __webpack_require__(/*! ./add-movie.component.html */ "./src/app/components/add-movie/add-movie.component.html"),
            styles: [__webpack_require__(/*! ./add-movie.component.css */ "./src/app/components/add-movie/add-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AddMovieComponent);
    return AddMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check{\n    display: none;\n}\n\n.checkbox__field{\n    height: 13px;\n    width: 13px;\n    border: 1px solid rgb(92, 92, 92);\n    background-color: rgb(38, 33, 38);\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 5px;\n}\n\n.checkbox__mark{\n    color: rgb(92, 92, 92);\n}\n\n.checkbox_position {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.checkbox__label-text {\n    font-size: 0.7em;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNre1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveF9fZmllbGR7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MiwgOTIsIDkyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDMzLCAzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNoZWNrYm94X19tYXJre1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG59XG5cbi5jaGVja2JveF9wb3NpdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGVja2JveF9fbGFiZWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label  class=\"checkbox_position\">\n    <input type=\"checkbox\" class=\"check\" [(ngModel)]=\"value\" (click) = \"emitId(); emitBoolVal(value)\">\n    <div class=\"checkbox__field\">\n      <fa-icon [icon]=\"faCheck\" class=\"checkbox__mark\" *ngIf=\"value\"></fa-icon>\n    </div>\n  <span class=\"checkbox__label-text\">{{label}}</span>\n</label>\n"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.getGenreId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boolValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value = false;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
    }
    CheckboxComponent.prototype.emitId = function () {
        this.getGenreId.emit(this.genre_id);
    };
    CheckboxComponent.prototype.emitBoolVal = function (value) {
        if (value) {
            this.boolValue.emit(false);
        }
        else {
            this.boolValue.emit(true);
        }
    };
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CheckboxComponent.prototype, "genre_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CheckboxComponent.prototype, "getGenreId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CheckboxComponent.prototype, "boolValue", void 0);
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/components/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.css */ "./src/app/components/checkbox/checkbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/components/file-loader/file-loader.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/file-loader/file-loader.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#file-loader {\r\n  display: none;\r\n}\r\n\r\n.file-loader__button {\r\n  background: repeating-linear-gradient(-45deg, rgb(53, 53, 53),\r\n  rgb(53, 53, 53) .5em, transparent .5em, transparent 1em);\r\n  border: 1px black dashed;\r\n  background-color: rgb(42, 42, 42);\r\n  padding: 0.7em;\r\n  cursor: pointer;\r\n  padding-right: 4em;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.file-loader__button:hover{\r\n    border: 1px wheat solid;\r\n    color: wheat;\r\n\r\n}\r\n\r\n.file-loader__button-icon {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.file-loader__button-text {\r\n    margin-left: 0.5em;\r\n}\r\n\r\n.file-loader__image{\r\n    height: 3em;\r\n    width: 2em;\r\n    margin-top: 0.8em;\r\n    margin-right: 0.5em;\r\n}\r\n\r\n.file-loader__progress-measure{\r\n    height: 100%;\r\n    width: 30%;\r\n    background-color: rgb(87, 148, 96);\r\n    border-radius: 3px;\r\n}\r\n\r\n.file-loader__file-container {\r\n    overflow-x: scroll; \r\n}\r\n\r\n.file-loader__progress-container{\r\n    border: 1px black solid;\r\n    border-radius: 3px;\r\n    height: 0.8em;\r\n    margin-right: 0.5em;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n.file-loader__file-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100%;\r\n    width: 13em;\r\n    overflow-x: scroll;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n\theight: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: rgb(20, 20, 20);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(71, 71, 71);\r\n    border-radius: 2.5px;\r\n}\r\n\r\n.search-form__validation-text {\r\n    color: red;\r\n    font-size: 0.6em;\r\n    position: absolute;\r\n}\r\n\r\n.file-loader__container {\r\n    margin-bottom: 0.4em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWxlLWxvYWRlci9maWxlLWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0U7MkRBQ3lEO0VBQ3pELHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25COztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7O0NBRWhCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0lBQ0ksa0NBQWtDO0NBQ3JDOztBQUVEO0lBQ0ksNEJBQTRCO0lBQzVCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kscUJBQXFCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maWxlLWxvYWRlci9maWxlLWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbGUtbG9hZGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsZS1sb2FkZXJfX2J1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYig1MywgNTMsIDUzKSxcclxuICByZ2IoNTMsIDUzLCA1MykgLjVlbSwgdHJhbnNwYXJlbnQgLjVlbSwgdHJhbnNwYXJlbnQgMWVtKTtcclxuICBib3JkZXI6IDFweCBibGFjayBkYXNoZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0MiwgNDIpO1xyXG4gIHBhZGRpbmc6IDAuN2VtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiA0ZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5maWxlLWxvYWRlcl9fYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggd2hlYXQgc29saWQ7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcblxyXG59XHJcblxyXG4uZmlsZS1sb2FkZXJfX2J1dHRvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5maWxlLWxvYWRlcl9fYnV0dG9uLXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcblxyXG4uZmlsZS1sb2FkZXJfX2ltYWdle1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG59XHJcblxyXG4uZmlsZS1sb2FkZXJfX3Byb2dyZXNzLW1lYXN1cmV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNDgsIDk2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmZpbGUtbG9hZGVyX19maWxlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7IFxyXG59XHJcblxyXG4uZmlsZS1sb2FkZXJfX3Byb2dyZXNzLWNvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgaGVpZ2h0OiAwLjhlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLmZpbGUtbG9hZGVyX19maWxlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEzZW07XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0aGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm1fX3ZhbGlkYXRpb24tdGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmZpbGUtbG9hZGVyX19jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/file-loader/file-loader.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/file-loader/file-loader.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-loader__container\">\n  <label for=\"file-loader\" class=\"file-loader__button\">\n    <fa-icon [icon]=\"faUpload\" class=\"file-loader__button-icon\">\n    </fa-icon>\n    <span class=\"file-loader__button-text\">\n      Upload posters\n    </span>\n  </label>\n  <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" #fileloader multiple (change)=\"detectFiles($event)\" id=\"file-loader\">\n  <div class=\"file-loader__file-container\">\n    <div class=\"file-loader__img-container\" *ngFor=\"let url of urls\">\n      <img class=\"file-loader__image\" [src]=\"url\">\n      <div class=\"file-loader__progress-container\">\n        <div class=\"file-loader__progress-measure\" [style.width]=\"width\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<p class=\"search-form__validation-text\" *ngIf=\"!fileloader.files.length\">\n  Upload 1 poster as minimum\n</p>\n"

/***/ }),

/***/ "./src/app/components/file-loader/file-loader.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/file-loader/file-loader.component.ts ***!
  \*****************************************************************/
/*! exports provided: FileLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoaderComponent", function() { return FileLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var FileLoaderComponent = /** @class */ (function () {
    function FileLoaderComponent() {
        this.emitFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUpload"];
        this.widthNum = 1;
        this.urls = new Array();
        this.showScroll = false;
    }
    FileLoaderComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.widthNum = 1;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        this.emitFiles.emit(files);
        var intervalID = setInterval(function () {
            if (_this.widthNum < 100) {
                _this.widthNum++;
                _this.width = String(_this.widthNum) + "%";
            }
            else {
                clearInterval(intervalID);
            }
            ;
        }, 50);
    };
    FileLoaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileLoaderComponent.prototype, "emitFiles", void 0);
    FileLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-loader',
            template: __webpack_require__(/*! ./file-loader.component.html */ "./src/app/components/file-loader/file-loader.component.html"),
            styles: [__webpack_require__(/*! ./file-loader.component.css */ "./src/app/components/file-loader/file-loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileLoaderComponent);
    return FileLoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/form-labels/form-labels.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/form-labels/form-labels.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form__labels-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    border: 2px solid rgb(92, 92, 92);\r\n    border-radius: 0.5em;\r\n    padding-left: 0.5em;\r\n  }\r\n  \r\n  .search-form__labels-container-item{\r\n    width: 50%;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWxhYmVscy9mb3JtLWxhYmVscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0dBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWxhYmVscy9mb3JtLWxhYmVscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1mb3JtX19sYWJlbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA5MiwgOTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWZvcm1fX2xhYmVscy1jb250YWluZXItaXRlbXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/form-labels/form-labels.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-labels/form-labels.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-form__labels-container\">\n    <app-checkbox class=\"search-form__labels-container-item\"\n                  *ngFor = \"let label of labels\" \n                  [label] = \"label.text\"  \n                  [genre_id] = \"label.genre_id\"\n                  (getGenreId) = \"getGenreId($event)\">\n                </app-checkbox>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/form-labels/form-labels.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-labels/form-labels.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormLabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabelsComponent", function() { return FormLabelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_labels_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/labels.config */ "./src/app/services/labels.config.ts");



var FormLabelsComponent = /** @class */ (function () {
    function FormLabelsComponent() {
        this.genreId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.labels = _services_labels_config__WEBPACK_IMPORTED_MODULE_2__["labels"];
    }
    FormLabelsComponent.prototype.getGenreId = function (genre) {
        this.genreId.emit(genre);
    };
    FormLabelsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormLabelsComponent.prototype, "genreId", void 0);
    FormLabelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-labels',
            template: __webpack_require__(/*! ./form-labels.component.html */ "./src/app/components/form-labels/form-labels.component.html"),
            styles: [__webpack_require__(/*! ./form-labels.component.css */ "./src/app/components/form-labels/form-labels.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormLabelsComponent);
    return FormLabelsComponent;
}());



/***/ }),

/***/ "./src/app/components/form-text-inputs/form-text-inputs.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/form-text-inputs/form-text-inputs.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form-input {\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n}\r\n\r\n.search-form__title-input {\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-size: 0.7em;\r\n  margin-bottom: 0.6em;\r\n}\r\n\r\n.search-form__overview-input {\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-size: 0.7em;\r\n}\r\n\r\n.search-form__title-label {\r\n  font-size: 0.7em;\r\n}\r\n\r\n.search-form__overview-label {\r\n  font-size: 0.7em;\r\n}\r\n\r\n.search-form__validation-text {\r\n  color: red;\r\n  font-size: 0.6em;\r\n  position: absolute;\r\n}\r\n\r\n.search-form__overview-container{\r\n  margin-top: 0.7em;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXRleHQtaW5wdXRzL2Zvcm0tdGV4dC1pbnB1dHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFvQjtFQUFwQix5QkFBb0I7RUFBcEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS10ZXh0LWlucHV0cy9mb3JtLXRleHQtaW5wdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0taW5wdXQge1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybV9fdGl0bGUtaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybV9fb3ZlcnZpZXctaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybV9fdGl0bGUtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybV9fb3ZlcnZpZXctbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybV9fdmFsaWRhdGlvbi10ZXh0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm1fX292ZXJ2aWV3LWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/form-text-inputs/form-text-inputs.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/form-text-inputs/form-text-inputs.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-form-input\">\n\n  <div class=\"search-form__title-container\">\n      <label class=\"search-form__title-label\">Title</label>\n      <input type=\"text\" [(ngModel)]=\"title\" \n                         name=\"title\"  \n                         class=\"search-form__title-input\" \n                         placeholder=\"title\"\n                         (keyup) = 'getTitleVal(title)'>\n                         <p class=\"search-form__validation-text\" *ngIf = \"!titleIsValid\">Title is required</p>\n    </div>\n    <div class=\"search-form__overview-container\">\n      <label class=\"search-form__overview-label\">Overview</label>\n      <textarea rows=\"4\" \n                placeholder = \"Overview\"\n                [(ngModel)] = \"overview\"\n                (keyup) = \"getOverviewVal(overview)\"\n                name=\"overview\"  \n                class=\"search-form__overview-input\">\n      </textarea>\n      <p class=\"search-form__validation-text\" *ngIf = \"!overviewIsValid\">Overview is required</p>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/components/form-text-inputs/form-text-inputs.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/form-text-inputs/form-text-inputs.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormTextInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTextInputsComponent", function() { return FormTextInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormTextInputsComponent = /** @class */ (function () {
    function FormTextInputsComponent() {
        this.titleValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.overviewValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormTextInputsComponent.prototype.getTitleVal = function (title) {
        this.titleValue.emit(title);
    };
    FormTextInputsComponent.prototype.getOverviewVal = function (overview) {
        this.overviewValue.emit(overview);
    };
    FormTextInputsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormTextInputsComponent.prototype, "titleIsValid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormTextInputsComponent.prototype, "overviewIsValid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormTextInputsComponent.prototype, "titleValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormTextInputsComponent.prototype, "overviewValue", void 0);
    FormTextInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-text-inputs',
            template: __webpack_require__(/*! ./form-text-inputs.component.html */ "./src/app/components/form-text-inputs/form-text-inputs.component.html"),
            styles: [__webpack_require__(/*! ./form-text-inputs.component.css */ "./src/app/components/form-text-inputs/form-text-inputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormTextInputsComponent);
    return FormTextInputsComponent;
}());



/***/ }),

/***/ "./src/app/components/header-navigation/header-navigation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/header-navigation/header-navigation.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-navigation__item {\n    color: rgb(0, 136, 204);\n    border-right: 2px rgb(92, 92, 92) solid;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    padding-right: 0.5em;\n    padding-left: 0.5em;\n    font-size: 1em;\n    text-decoration: underline;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.active-header__link{\n    color: red;\n}\n\n.header-navigation__item--without-border {\n    border-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItbmF2aWdhdGlvbi9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHdDQUF3QztJQUN4Qyw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyLW5hdmlnYXRpb24vaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbmF2aWdhdGlvbl9faXRlbSB7XG4gICAgY29sb3I6IHJnYigwLCAxMzYsIDIwNCk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggcmdiKDkyLCA5MiwgOTIpIHNvbGlkO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hY3RpdmUtaGVhZGVyX19saW5re1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5oZWFkZXItbmF2aWdhdGlvbl9faXRlbS0td2l0aG91dC1ib3JkZXIge1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header-navigation/header-navigation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/header-navigation/header-navigation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <a routerLink = 'movie' [style.color] = \"(showAddMovie$ | async) ? 'red' : 'rgb(0, 136, 204)'\" (click) = \"showMovie()\" class=\"header-navigation__item\">{{items[0].text}}</a>\n  <a [routerLink] = \"routerLink[4].path\" routerLinkActive = \"active-header__link\" class=\"header-navigation__item\">{{items[1].text}}</a>\n  <a class=\"header-navigation__item\">{{items[2].text}}</a>\n  <a class=\"header-navigation__item header-navigation__item--without-border\">{{items[3].text}}</a>"

/***/ }),

/***/ "./src/app/components/header-navigation/header-navigation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/header-navigation/header-navigation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigationComponent", function() { return HeaderNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _services_routings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/routings */ "./src/app/services/routings.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");






var HeaderNavigationComponent = /** @class */ (function () {
    function HeaderNavigationComponent(_navigationService, store) {
        this._navigationService = _navigationService;
        this.store = store;
        this.routerLink = _services_routings__WEBPACK_IMPORTED_MODULE_3__["appRoutes"];
        this.showAddMovie$ = this.store.select(function (s) { return s.movieDb.ShowAddMovie; });
    }
    HeaderNavigationComponent.prototype.showMovie = function () {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["ToggleAddMovie"]());
    };
    HeaderNavigationComponent.prototype.ngOnInit = function () {
        this.items = this._navigationService.headerNavItems;
    };
    HeaderNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-navigation',
            template: __webpack_require__(/*! ./header-navigation.component.html */ "./src/app/components/header-navigation/header-navigation.component.html"),
            styles: [__webpack_require__(/*! ./header-navigation.component.css */ "./src/app/components/header-navigation/header-navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], HeaderNavigationComponent);
    return HeaderNavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__container {\n  background-color: rgb(38, 33, 38);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1em;\n  padding-right: 2em;\n  height: 100%;\n  flex-wrap: wrap;\n}\n\n.search-item {\n  border: 2px;\n  border-color: rgb(71, 93, 121);\n  border-style: solid;\n}\n\n.header-navigation {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzMsIDM4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNlYXJjaC1pdGVtIHtcbiAgYm9yZGVyOiAycHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDcxLCA5MywgMTIxKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmhlYWRlci1uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header__container\">\n  <div class=\"search-item\">\n    <app-search-item></app-search-item>\n  </div>\n  <div class=\"header-navigation\">\n    <app-header-navigation></app-header-navigation>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/library/library.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/library/library.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".library{\n    display: flex;\n    color: white;\n    background-color: rgb(38, 33, 38);\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-between;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.library__container {\n    width: 90%;\n    height: 90vh;\n    padding: 0 5% 0 5%;\n    overflow-y: auto;\n}\n\n.library-movie__header{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.list-item__container {\n    width: 15vh;\n    height:22.5vh;\n    margin-bottom: 1em;\n    box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.71);\n    margin-right: 1em;\n}\n\n.library_items-container {\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.library-movie__container{\n    border: 1px solid rgba(82, 78, 82, 0.8);\n    border-radius: 5px;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0.5em;\n    background-color: rgb(26, 23, 26);\n    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.71);\n}\n\n.library-movie__header {\n    margin-bottom: 1em;\n    font-family: sans-serif;\n    border-bottom: 1px solid rgba(122, 122, 122, 0.8);\n    color: rgb(82, 78, 82);\n}\n\n.library__icon{\n    color: rgb(92, 92, 92);\n    font-size: 10em;\n    margin-top: 25vh;\n}\n\n.library__background-text {\n    color: rgb(92, 92, 92);\n    font-size: 5em;\n}\n\n.library__icon-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyw2Q0FBNkM7Q0FDaEQ7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtEQUFrRDtJQUNsRCx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWJyYXJ5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzMsIDM4KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmxpYnJhcnlfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgcGFkZGluZzogMCA1JSAwIDUlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5saWJyYXJ5LW1vdmllX19oZWFkZXJ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW1fX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE1dmg7XG4gICAgaGVpZ2h0OjIyLjV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggNHB4IHJnYmEoMCwwLDAsMC43MSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5saWJyYXJ5X2l0ZW1zLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubGlicmFyeS1tb3ZpZV9fY29udGFpbmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODIsIDc4LCA4MiwgMC44KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDIzLCAyNik7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4IHJnYmEoMCwwLDAsMC43MSk7XG59XG5cbi5saWJyYXJ5LW1vdmllX19oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjgpO1xuICAgIGNvbG9yOiByZ2IoODIsIDc4LCA4Mik7XG59XG5cbi5saWJyYXJ5X19pY29ue1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgZm9udC1zaXplOiAxMGVtO1xuICAgIG1hcmdpbi10b3A6IDI1dmg7XG59XG5cbi5saWJyYXJ5X19iYWNrZ3JvdW5kLXRleHQge1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgZm9udC1zaXplOiA1ZW07XG59XG5cbi5saWJyYXJ5X19pY29uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/library/library.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/library/library.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"library library__container\">\n  <div class=\"library-movie__container\" *ngIf = \"(filmsList$ | async).length; else false\">\n    <p class=\"library-movie__header\">\n      Movies\n    </p>\n    <div class=\"library_items-container\">\n      <app-list-item class=\"list-item list-item__container\"\n                     *ngFor = 'let i of (filmsList$ | async); trackBy: trackByMovie'\n                     [itemTitle]='i.original_title'\n                     [imgUrl] = 'i.poster_path'\n                     (click) = \"subscribeItem(i)\"\n                     (contextmenu) = \"removeMovie(i)\"\n                     routerLink = \"/myLibrary/details\"\n                     (deleteCurItem) = 'deleteCurItem($event, i)'\n                     [fontSize] = \"fontSize\">\n      </app-list-item>\n    </div>\n  </div>\n  <div *ngIf = '!(tvShowList$ | async).length && !(filmsList$ | async).length' class=\"library__icon-container\">\n    <fa-icon [icon] = 'faBook' class=\"library__icon\"></fa-icon>\n    <span class=\"library__background-text\">Library</span>\n  </div>\n  <div class=\"library-movie__container\" *ngIf = \"(tvShowList$ | async).length; else false\">\n    <p class=\"library-movie__header\">\n      TV Show\n    </p>\n    <div class=\"library_items-container\">\n      <app-list-item class=\"list-item list-item__container\"\n                     *ngFor = 'let y of (tvShowList$ | async); trackBy: trackByTvShow'\n                     [itemTitle]='y.original_name'\n                     [imgUrl] = 'y.poster_path'\n                     (click) = \"subscribeItem(y)\"\n                     (contextmenu) = \"removeTvShow(y)\"\n                     routerLink = \"/myLibrary/details\"\n                     (deleteCurItem) = 'deleteCurItem($event, y)'\n                     [fontSize] = 'fontSize'>\n      </app-list-item>\n    </div>\n  </div>\n  To remove item from library click mouse context menu button !!!\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/library/library.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/library/library.component.ts ***!
  \*********************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(store) {
        this.store = store;
        this.fontSize = '0.7em';
        this.faBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBook"];
        this.apiImgUrl = _services_api_config__WEBPACK_IMPORTED_MODULE_4__["apiUrl"].imageUrl;
        this.tvShowList$ = this.store.select(function (s) { return s.movieDb.localTvShowList; });
        this.filmsList$ = this.store.select(function (s) { return s.movieDb.localMovieList; });
    }
    LibraryComponent.prototype.removeMovie = function (item) {
        this.store.dispatch(new src_app_store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveMovie"](item));
        return false;
    };
    LibraryComponent.prototype.removeTvShow = function (item) {
        this.store.dispatch(new src_app_store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveTvShow"](item));
        return false;
    };
    LibraryComponent.prototype.subscribeItem = function (item) {
        this.store.dispatch(new src_app_store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["LibrarySubscribe"](item));
    };
    LibraryComponent.prototype.trackByMovie = function (index, item) {
        return item.id;
    };
    LibraryComponent.prototype.trackByTvShow = function (index, item) {
        return item.id;
    };
    LibraryComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new src_app_store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["GetMovieListFromLocalStorage"]());
        this.store.dispatch(new src_app_store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["GetTvShowListFromLocalStorage"]());
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/components/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/components/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/list-item/list-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-list__item {\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-bottom: 1em;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n}\n\n.movie-list__bg {\n    background-color: rgb(26, 101, 132);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    box-sizing: border-box;\n    opacity: 0.9;\n}\n\n.movie-list__title{\n    text-align: center;\n    font-family: sans-serif;\n    font-weight: bold;\n    color: white;\n}\n\n.movie-list__in-library {\n    font-size: 3em;\n}\n\n.item__button-delete {\n    position: relative;\n    bottom:2em;\n    left: 1.5em;\n    width: 0.5em;\n    height: 0.5em;\n}\n\n.item__button-delete:hover {\n    color: rgb(92, 92, 92);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLWxpc3RfX2l0ZW0ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1vdmllLWxpc3RfX2JnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDEwMSwgMTMyKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG4ubW92aWUtbGlzdF9fdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vdmllLWxpc3RfX2luLWxpYnJhcnkge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uaXRlbV9fYnV0dG9uLWRlbGV0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbToyZW07XG4gICAgbGVmdDogMS41ZW07XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG59XG5cbi5pdGVtX19idXR0b24tZGVsZXRlOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/list-item/list-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  [style.backgroundImage]=\"img\"\n      class=\"movie-list__item\"\n      (mouseleave) = \"backGround = false\"\n      (mouseenter) = \"backGround = true\"> \n      <div class=\"movie-list__bg\" \n       *ngIf = \"backGround\">\n    <div class=\"movie-list__title\" [style.fontSize] = \"fontSize\">\n      {{itemTitle}} <br>\n      <fa-icon [icon] = \"faBook\" class=\"movie-list__in-library\" *ngIf = \"isInLibrary\"></fa-icon>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/list-item/list-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");




var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.faBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBook"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
    }
    ListItemComponent.prototype.ngOnInit = function () {
        this.img = "url(" + _services_api_config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"].imageUrl + this.imgUrl + ")";
        if (String(this.imgUrl) === "null") {
            this.img = _services_api_config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"].xTraImg;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListItemComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ListItemComponent.prototype, "isInLibrary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListItemComponent.prototype, "itemTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListItemComponent.prototype, "fontSize", void 0);
    ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/components/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.css */ "./src/app/components/list-item/list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-list__container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: space-around;\n    width: 100%;\n    overflow-y: scroll;\n    background-color: rgb(38, 33, 38);\n}\n\n.scroll-top__container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color:  rgb(38, 33, 38);\n    color: white;\n}\n\n.list-item__container {\n    width: 13.33em;\n    height:20em;\n    margin-bottom: 1em;\n}\n\n.warning-message {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: rgb(92, 92, 92); \n}\n\n.warning-message__text{\n    font-size: 3em;\n}\n\n.warning-message__icon{\n    font-size: 7em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7Q0FDckM7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLWxpc3RfX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzMsIDM4KTtcbn1cblxuLnNjcm9sbC10b3BfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigzOCwgMzMsIDM4KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5saXN0LWl0ZW1fX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEzLjMzZW07XG4gICAgaGVpZ2h0OjIwZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ud2FybmluZy1tZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTsgXG59XG5cbi53YXJuaW5nLW1lc3NhZ2VfX3RleHR7XG4gICAgZm9udC1zaXplOiAzZW07XG59XG5cbi53YXJuaW5nLW1lc3NhZ2VfX2ljb257XG4gICAgZm9udC1zaXplOiA3ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-top__container\">\n  <app-scroll-top (click) = \"scrollContainer.scrollTop = 0\"></app-scroll-top>\n  <div class=\"movie-list__container\"  [style.height] = \"(showAddMovie$ | async) ? '60vh' : '90vh'\"\n                                      #scrollContainer \n                                      infiniteScroll \n                                      [infiniteScrollDistance]=\"2\" \n                                      [infiniteScrollThrottle]=\"50\"\n                                      [scrollWindow]=\"false\" \n                                      (scrolled)=\"onScroll()\">\n    <app-list-item  *ngFor=\"let i of (filmsList$ | async).movieResults; let l = index\"\n                    [itemTitle]='i.original_title'\n                    [imgUrl]=\"i.poster_path\"\n                    class=\"list-item list-item__container\"\n                    (click) = \"getItem(i)\"\n                    routerLink = \"/movie/details\"\n                    [isInLibrary] = \"(isInLibrary$ | async)[l]\"\n                    >                 \n    </app-list-item>\n    <div *ngIf = '!(filmsList$ | async).movieResults.length' class=\"warning-message\">\n      <fa-icon [icon] = \"faSearch\" class=\"warning-message__icon\"></fa-icon>\n      <span class=\"warning-message__text\">NO RESULTS</span>\n    </div>\n    <router-outlet class=\"subscribe-item subscribe-item-container\">\n    </router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_search_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/search-form.service */ "./src/app/services/search-form.service.ts");
/* harmony import */ var _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/film-list.actions */ "./src/app/store/actions/film-list.actions.ts");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");








var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(store, _searchFormService) {
        this.store = store;
        this._searchFormService = _searchFormService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
        this.getTargetDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showAddMovie$ = this.store.select(function (s) { return s.movieDb.ShowAddMovie; });
        this.apiImgUrl = _services_api_config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"].imageUrl;
        this.isInLibrary$ = this.store.select(function (s) { return s.filmsList.isInLib; });
        this.filmsList$ = this.store.select(function (s) { return s.filmsList; });
    }
    MovieListComponent.prototype.onScroll = function () {
        if (this._searchFormService.submitted) {
            this.store.dispatch(new _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_6__["LoadNextSearchPage"]());
        }
        else {
            this.store.dispatch(new _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_6__["LoadNextPage"]());
        }
    };
    MovieListComponent.prototype.getItem = function (i) {
        this._searchFormService.showForm = false;
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_7__["SubscribeMovie"](i));
    };
    MovieListComponent.prototype.ngOnInit = function () {
        this._searchFormService.submitted = false;
        this.store.dispatch(new _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_6__["LoadFilmLists"]());
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_7__["GetMovieListFromLocalStorage"]());
    };
    MovieListComponent.prototype.ngOnDestroy = function () {
        this._searchFormService.showForm = false;
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_7__["HideAddMovie"]());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MovieListComponent.prototype, "getTargetDescription", void 0);
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/components/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/components/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_search_form_service__WEBPACK_IMPORTED_MODULE_5__["SearchFormService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/progressbar/progressBar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/progressbar/progressBar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar {\n    height: 25px;\n    background-color: rgb(38, 33, 38);\n    width: 200px;\n    border: 1px solid rgb(92, 92, 92);\n    border-radius: 4px;\n    display: flex;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n\n.progress-bar__value {\n    height: 100%;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\n.progress-bar__label {\n    font-size: 0.95em;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc0Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NCYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDMzLCAzOCk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MiwgOTIsIDkyKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnByb2dyZXNzLWJhcl9fdmFsdWUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnByb2dyZXNzLWJhcl9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/progressbar/progressBar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/progressbar/progressBar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"progress-bar__label\">{{label}}</span>\n<div class=\"progress-bar\" (click) = 'changeValue($event); getValue($event)'>\n  <div class=\"progress-bar__value\" [style.backgroundColor] = \"color\"  [style.width] = \"value\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/progressbar/progressbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/progressbar/progressbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.getCurValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProgressBarComponent.prototype.getValue = function (evt) {
        this.getCurValue.emit((evt.offsetX) / 2);
    };
    ProgressBarComponent.prototype.changeValue = function (evt) {
        this.value = String((evt.offsetX) / 2) + '%';
        if (evt.offsetX <= 100) {
            this.color = 'rgb(' + evt.offsetX * 2.55 + ', 255, 0)';
        }
        if (evt.offsetX > 100) {
            this.color = 'rgb(255, ' + (255 - ((evt.offsetX - 100) * 2.55)) + ', 0)';
        }
        return evt.offsetX / 20;
    };
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProgressBarComponent.prototype, "getCurValue", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progressBar',
            template: __webpack_require__(/*! ./progressBar.component.html */ "./src/app/components/progressbar/progressBar.component.html"),
            styles: [__webpack_require__(/*! ./progressBar.component.css */ "./src/app/components/progressbar/progressBar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/components/scroll-top/scroll-top.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/scroll-top/scroll-top.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll__top-container {\n   width: 2em;\n   height: 88vh;\n   border: 2px black solid;\n   margin:0 0 0 0.25em ;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n}\n\n.scroll__top-container:hover{\n   border-color: rgb(81, 81, 81);\n   cursor: pointer;\n}\n\n.scroll__top-icon{\n   font-size: 1em;\n   color: rgb(81, 81, 81);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxhQUFhO0dBQ2Isd0JBQXdCO0dBQ3hCLHFCQUFxQjtHQUNyQixjQUFjO0dBQ2Qsb0JBQW9CO0dBQ3BCLHdCQUF3QjtDQUMxQjs7QUFFRDtHQUNHLDhCQUE4QjtHQUM5QixnQkFBZ0I7Q0FDbEI7O0FBRUQ7R0FDRyxlQUFlO0dBQ2YsdUJBQXVCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxfX3RvcC1jb250YWluZXIge1xuICAgd2lkdGg6IDJlbTtcbiAgIGhlaWdodDogODh2aDtcbiAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xuICAgbWFyZ2luOjAgMCAwIDAuMjVlbSA7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2Nyb2xsX190b3AtY29udGFpbmVyOmhvdmVye1xuICAgYm9yZGVyLWNvbG9yOiByZ2IoODEsIDgxLCA4MSk7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY3JvbGxfX3RvcC1pY29ue1xuICAgZm9udC1zaXplOiAxZW07XG4gICBjb2xvcjogcmdiKDgxLCA4MSwgODEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/scroll-top/scroll-top.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/scroll-top/scroll-top.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll__top-container scroll__top\" [style.height]=\"(showAddMovie$ | async) ? '58vh' : '88vh'\">\n  <fa-icon [icon] = \"faArrowUp\" class=\"scroll__top-icon\"></fa-icon>\n</div>\n"

/***/ }),

/***/ "./src/app/components/scroll-top/scroll-top.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-top/scroll-top.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent(store) {
        this.store = store;
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowUp"];
        this.showAddMovie$ = this.store.select(function (s) { return s.movieDb.ShowAddMovie; });
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scroll-top',
            template: __webpack_require__(/*! ./scroll-top.component.html */ "./src/app/components/scroll-top/scroll-top.component.html"),
            styles: [__webpack_require__(/*! ./scroll-top.component.css */ "./src/app/components/scroll-top/scroll-top.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/components/search-form/search-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/search-form/search-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-size: 0.95em;\n  z-index: 2;\n}\n\n.search_form__container {\n  border: 2px solid rgb(58, 60, 90);\n  width: 26em;\n  height: 20em;\n  right: 30%;\n  top: 1em;\n}\n\n.search-form {\n  background-color: rgb(38, 33, 38);\n  color: rgb(92, 92, 92);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search_form__content-container {\n  width: 95%;\n  height: 95%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.search_form__header {\n  border-bottom: 2px solid rgb(92, 92, 92);\n  padding-bottom: 0.5em;\n  width: 100%;\n  height: 1.5em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.search-form__progress-container {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: 9em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-top: 0.5em;\n}\n\n.search-form__button-container {\n  align-items: flex-end;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding-bottom: 0.5em;\n}\n\n.search-form__button {\n  width: 100%;\n  height: 2em;\n  border-radius: 0.5em;\n  border: 0px;\n}\n\n.search-form__labels-button-container{\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n.search-form__title-container {\n  margin-top: 0.5em;\n}\n\n.search-form__title-label{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.search-form__overview-label{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.search-form-inputs__container{\n  width: 45%;\n}\n\n.search-form-labels__container{\n  width: 65%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7Q0FDbkI7O0FBR0Q7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zZWFyY2hfZm9ybV9fY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDU4LCA2MCwgOTApO1xuICB3aWR0aDogMjZlbTtcbiAgaGVpZ2h0OiAyMGVtO1xuICByaWdodDogMzAlO1xuICB0b3A6IDFlbTtcbn1cblxuLnNlYXJjaC1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCAzMywgMzgpO1xuICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoX2Zvcm1fX2NvbnRlbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNlYXJjaF9mb3JtX19oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDkyLCA5MiwgOTIpO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNlYXJjaC1mb3JtX19wcm9ncmVzcy1jb250YWluZXIge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogOWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4uc2VhcmNoLWZvcm1fX2J1dHRvbi1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuXG4uc2VhcmNoLWZvcm1fX2J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc2VhcmNoLWZvcm1fX2xhYmVscy1idXR0b24tY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWFyY2gtZm9ybV9fdGl0bGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5zZWFyY2gtZm9ybV9fdGl0bGUtbGFiZWx7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VhcmNoLWZvcm1fX292ZXJ2aWV3LWxhYmVse1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4uc2VhcmNoLWZvcm0taW5wdXRzX19jb250YWluZXJ7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5zZWFyY2gtZm9ybS1sYWJlbHNfX2NvbnRhaW5lcntcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search-form/search-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-form/search-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form cdkDrag appClickOutside (clickOutside) = \"clickOutside($event)\" class=\"search-form search_form__container\">\n  <div class=\"search_form__content-container\">\n\n    <h2 class=\"search_form__header\">\n      Advanced search\n    </h2>\n\n    <app-form-text-inputs class=\"search-form-inputs__container\"\n                         (titleValue) = \"titleValue($event)\"\n                         (overviewValue) = \"overviewValue($event)\"\n                         [titleIsValid] = \"isValid\"\n                         [overviewIsValid] = \"isValid\"></app-form-text-inputs>\n\n    <div class=\"search-form__progress-container\">\n      <app-checkbox [label]=\"'Adult'\" (boolValue)='adultValue($event)'></app-checkbox>\n      <app-progressBar [label]=\"'Popularity'\" (getCurValue)=\"popularity($event)\"></app-progressBar>\n      <app-progressBar [label]=\"'Vote average'\" (getCurValue)=\"voteAverage($event)\"></app-progressBar>\n    </div>\n\n    <div class=\"search-form__labels-button-container\">\n     \n      <app-form-labels (genreId) = \"getGenreIds($event)\" class=\"search-form-labels__container\"></app-form-labels>\n\n      <div class=\"search-form__button-container\">\n        <app-checkbox [label]=\"'Remember inputs'\" (boolValue) = rememberInputs($event)></app-checkbox>\n        <input type=\"submit\" value=\"Search\" class=\"search-form__button\" (click)=\"submit()\">\n      </div>\n    </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/search-form/search-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-form/search-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search-form.service */ "./src/app/services/search-form.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/film-list.actions */ "./src/app/store/actions/film-list.actions.ts");
/* harmony import */ var _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/tv-shows-list.actions */ "./src/app/store/actions/tv-shows-list.actions.ts");






var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(_searchFormService, store) {
        this._searchFormService = _searchFormService;
        this.store = store;
        this.isValid = true;
    }
    SearchFormComponent.prototype.clickOutside = function () {
        this._searchFormService.toggle();
    };
    SearchFormComponent.prototype.titleValue = function (title) {
        this._searchFormService.title = title;
    };
    SearchFormComponent.prototype.overviewValue = function (overview) {
        this._searchFormService.overview = overview;
    };
    SearchFormComponent.prototype.adultValue = function (val) {
        this._searchFormService.adult = val;
    };
    SearchFormComponent.prototype.getGenreIds = function (id) {
        this._searchFormService.getGenreId(id);
    };
    SearchFormComponent.prototype.popularity = function (popVal) {
        this._searchFormService.popularity = popVal;
    };
    SearchFormComponent.prototype.voteAverage = function (voteVal) {
        this._searchFormService.vote_average = voteVal;
    };
    SearchFormComponent.prototype.rememberInputs = function (remVal) {
        this._searchFormService.remember_inputs = remVal;
    };
    SearchFormComponent.prototype.submit = function () {
        this._searchFormService.submitted = true;
        if (window.location.pathname === "/movie") {
            this.store.dispatch(new _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_4__["SearchFilms"](this._searchFormService));
        }
        if (window.location.pathname === "/tvShows") {
            this.store.dispatch(new _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_5__["SearchTvShow"](this._searchFormService));
        }
        this._searchFormService.toggle();
    };
    SearchFormComponent.prototype.ngOnInit = function () {
        this._searchFormService.setDefault();
    };
    SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/components/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/components/search-form/search-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_form_service__WEBPACK_IMPORTED_MODULE_2__["SearchFormService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/components/search-item/search-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/search-item/search-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-item {\n    border: 2px;\n    border-color: rgb(71, 93, 121);\n    border-style: solid;\n}\n\n.search-item__input {\n    background-color: rgb(49, 64, 82);\n    border: 0;\n    color: rgb(92, 92, 92);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.search-item__button {\n    background-color: rgb(229, 229, 229);\n    color: rgb(92, 92, 92);\n    padding-left: 2px;\n    padding-right: 2px;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtaXRlbS9zZWFyY2gtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QiwwQkFBa0I7T0FBbEIsdUJBQWtCO1FBQWxCLHNCQUFrQjtZQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtaXRlbS9zZWFyY2gtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1pdGVtIHtcbiAgICBib3JkZXI6IDJweDtcbiAgICBib3JkZXItY29sb3I6IHJnYig3MSwgOTMsIDEyMSk7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnNlYXJjaC1pdGVtX19pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA2NCwgODIpO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VhcmNoLWl0ZW1fX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI5LCAyMjkpO1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search-item/search-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-item/search-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input    type=\"text\" \n          class=\"search-item__input\" \n          placeholder=\"Search...\"\n          [(ngModel)] = \"inputValue\"\n          (input) = \"getValue()\"\n          (keyup.enter) = \"searchItems()\"\n          (focusout) = \"inputValue = ''\"\n          >\n<fa-icon  [icon] = \"faSearch\" \n          class=\"search-item__button\" \n          (click) = \"toggle()\">\n</fa-icon>\n<app-search-form  *ngIf = \"_searchFormService.showForm\" \n                  [style.display] = \"_searchFormService.displayForm\">\n</app-search-form>"

/***/ }),

/***/ "./src/app/components/search-item/search-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-item/search-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_search_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search-form.service */ "./src/app/services/search-form.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/film-list.actions */ "./src/app/store/actions/film-list.actions.ts");
/* harmony import */ var _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/tv-shows-list.actions */ "./src/app/store/actions/tv-shows-list.actions.ts");







var SearchItemComponent = /** @class */ (function () {
    function SearchItemComponent(_searchFormService, store) {
        this._searchFormService = _searchFormService;
        this.store = store;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
        this.displayForm = this._searchFormService.displayForm;
    }
    SearchItemComponent.prototype.getValue = function () {
        this._searchFormService.title = this.inputValue;
    };
    SearchItemComponent.prototype.searchItems = function () {
        this._searchFormService.submitted = true;
        if (window.location.pathname === "/movie") {
            this.store.dispatch(new _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_5__["SearchFilms"](this._searchFormService));
        }
        if (window.location.pathname === "/tvShows") {
            this.store.dispatch(new _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_6__["SearchTvShow"](this._searchFormService));
        }
    };
    SearchItemComponent.prototype.toggle = function () {
        this._searchFormService.toggle();
    };
    SearchItemComponent.prototype.ngOnInit = function () {
    };
    SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-item',
            template: __webpack_require__(/*! ./search-item.component.html */ "./src/app/components/search-item/search-item.component.html"),
            styles: [__webpack_require__(/*! ./search-item.component.css */ "./src/app/components/search-item/search-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_form_service__WEBPACK_IMPORTED_MODULE_3__["SearchFormService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SearchItemComponent);
    return SearchItemComponent;
}());



/***/ }),

/***/ "./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-navigation-bar-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n}\n\n.side-navigation-bar-item:hover {\nbox-shadow: 0px 0px 1px 1px white;\n}\n\n.side-navigation-bar-item__icon {\n    width: 3em;\n    height: 3em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.side-navigation-bar-item__text {\n    padding-top: 0.25em;\n    width: 10em;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW5hdmlnYXRpb24tYmFyLWl0ZW0vc2lkZS1uYXZpZ2F0aW9uLWJhci1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7QUFDQSxrQ0FBa0M7Q0FDakM7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwwQkFBa0I7T0FBbEIsdUJBQWtCO1FBQWxCLHNCQUFrQjtZQUFsQixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2aWdhdGlvbi1iYXItaXRlbS9zaWRlLW5hdmlnYXRpb24tYmFyLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLW5hdmlnYXRpb24tYmFyLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGUtbmF2aWdhdGlvbi1iYXItaXRlbTpob3ZlciB7XG5ib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggd2hpdGU7XG59XG5cbi5zaWRlLW5hdmlnYXRpb24tYmFyLWl0ZW1fX2ljb24ge1xuICAgIHdpZHRoOiAzZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZS1uYXZpZ2F0aW9uLWJhci1pdGVtX190ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-navigation-bar-item\">\n  <fa-icon [icon]=\"navIcon\" class=\"side-navigation-bar-item__icon\"></fa-icon>\n  <span *ngIf = \"showText\" class=\"side-navigation-bar-item__text\">\n      {{navItemText}}\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SideNavigationBarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationBarItemComponent", function() { return SideNavigationBarItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavigationBarItemComponent = /** @class */ (function () {
    function SideNavigationBarItemComponent() {
    }
    SideNavigationBarItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SideNavigationBarItemComponent.prototype, "navIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SideNavigationBarItemComponent.prototype, "showText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SideNavigationBarItemComponent.prototype, "navItemText", void 0);
    SideNavigationBarItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation-bar-item',
            template: __webpack_require__(/*! ./side-navigation-bar-item.component.html */ "./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation-bar-item.component.css */ "./src/app/components/side-navigation-bar-item/side-navigation-bar-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavigationBarItemComponent);
    return SideNavigationBarItemComponent;
}());



/***/ }),

/***/ "./src/app/components/side-navigation-bar/side-navigation-bar.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/side-navigation-bar/side-navigation-bar.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-bar-header {\n    display: flex;\n    align-items: center;\n}\n\n.logo {\n    display: flex;\n    flex-direction: row;\n}\n\n.navigation-bar-header__button {\n    box-sizing: border-box;\n    font-size: 1.5em;\n    height: 1.5em;\n    width: 1.5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0.25em;\n    border-radius: 3px;\n}\n\n.navigation-bar-header__button:hover {\n    box-shadow: 0px 0px 1px 1px white;\n    cursor: pointer;\n}\n\n.logo__icon {\n    font-size: 2.5em;\n    width: 1.5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo__text{\n    font-size: 1.5em;\n    padding-top: 0.25em;\n    color: rgb(92, 92, 92);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.navigation-bar__items-mobile {\n    display: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW5hdmlnYXRpb24tYmFyL3NpZGUtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7O0FBR0Q7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2aWdhdGlvbi1iYXIvc2lkZS1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tYmFyLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubmF2aWdhdGlvbi1iYXItaGVhZGVyX19idXR0b24ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwLjI1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5cbi5uYXZpZ2F0aW9uLWJhci1oZWFkZXJfX2J1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ29fX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ29fX3RleHR7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLWJhcl9faXRlbXMtbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/side-navigation-bar/side-navigation-bar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/side-navigation-bar/side-navigation-bar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-bar-header\">\n    <fa-icon [icon] = 'iconBars' \n             class=\"navigation-bar-header__button\" \n             (click)=isCollapsed()></fa-icon>\n    <div class=\"logo\" *ngIf = \"collapseBar\">\n        <fa-icon [icon] = 'iconClose' class=\"logo__icon\"></fa-icon>\n        <span class=\"logo__text\">Logo</span>\n    </div>\n</div>\n<app-side-navigation-bar-item \n                                [navIcon]='i.icon'\n                                [showText]='collapseBar'\n                                [navItemText]='i.text'\n                                *ngFor=\"let i of _navigationService.items; let l = index\"\n                                [routerLink]=\"routerLink[l].path\">\n</app-side-navigation-bar-item>"

/***/ }),

/***/ "./src/app/components/side-navigation-bar/side-navigation-bar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/side-navigation-bar/side-navigation-bar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SideNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationBarComponent", function() { return SideNavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _services_routings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/routings */ "./src/app/services/routings.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");






var SideNavigationBarComponent = /** @class */ (function () {
    function SideNavigationBarComponent(_navigationService, store) {
        this._navigationService = _navigationService;
        this.store = store;
        this.iconBars = this._navigationService.faBars;
        this.iconClose = this._navigationService.faWindowClose;
        this.collapseBar = true;
        this.routerLink = _services_routings__WEBPACK_IMPORTED_MODULE_3__["appRoutes"];
    }
    SideNavigationBarComponent.prototype.isCollapsed = function () {
        this.collapseBar = this._navigationService.isCollapse();
    };
    SideNavigationBarComponent.prototype.showAddMovie = function () {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["ToggleAddMovie"]());
    };
    SideNavigationBarComponent.prototype.ngOnInit = function () {
    };
    SideNavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation-bar',
            template: __webpack_require__(/*! ./side-navigation-bar.component.html */ "./src/app/components/side-navigation-bar/side-navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation-bar.component.css */ "./src/app/components/side-navigation-bar/side-navigation-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SideNavigationBarComponent);
    return SideNavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/subscribe-item-window/subscribe-item-window.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/subscribe-item-window/subscribe-item-window.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe-item__img {\n  background: rgba(82, 78, 82, 0.7);\n  width: 40vw;\n  height: 25vw;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.subscribe-item {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 3;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.subscribe-item-container {\n  position: absolute;\n  background: rgba(38, 33, 38, 0.95);\n  width: 100vw;\n  height: 100vh;\n  bottom: 0;\n  right: 0;\n  color: white;\n}\n\n.subscribe-item__title {\n  font-family: sans-serif;\n  font-size: 1.5em;\n  border: 2px solid rgb(82, 78, 82);\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 0.5em;\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin-top: 0.25em;\n}\n\n.subscribe-item__overview {\n  font-family: sans-serif;\n  font-size: 0.9em;\n  border: 2px solid rgb(82, 78, 82);\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 0.5em;\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin-top: 0.25em;\n}\n\n.subscribe-item__release-date {\n  font-family: sans-serif;\n  font-size: 0.7em;\n  width: 90%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 0.25em 0 0.25em 0.25em;\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin-top: 0.25em;\n}\n\n.subscribe-item__rating-label {\n  font-family: sans-serif;\n  font-size: 0.7em;\n  width: 90%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 0.25em 0 0.25em 0.25em;\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin-top: 0.5em;\n}\n\n.subscribe-item__rating {\n  height: 1em;\n  width: 90%;\n  border-radius: 5px;\n  box-sizing: border-box;\n  border: 2px solid rgb(82, 78, 82);\n}\n\n.subscribe-item__average {\n  height: 100%;\n  background-color: white;\n  border-radius: 5px;\n  border: 2px solid rgba(38, 33, 38, 0.95);\n  box-sizing: border-box;\n}\n\n.subscribe-item__img-btn-close:hover {\n  background-color: rgba(38, 33, 38, 0.95);\n  color: rgba(82, 78, 82, 0.7);\n}\n\n.subscribe-item__header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 90%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.subscribe-item__title-container {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n.subscribe-item__button {\n  width: 9em;\n  height: 2em;\n  margin-bottom: 2em;\n  border-radius: 5px;\n  border: 0;\n}\n\n.subscribe-item__release-date-container {\n  width: 90%;\n  height: 20%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  border-radius: 5px;\n  border: 2px solid rgb(82, 78, 82);\n  box-sizing: border-box;\n  padding-left: 1em;\n}\n\n.subscribe-item__icon-close-container {\n  width: 90%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.subscribe-item__icon-close {\n  width: 2em;\n  height: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.subscribe-item__icon-close:hover {\n  color:rgba(82, 78, 82, 0.7);\n  cursor: pointer;\n  background-color: rgba(65, 62, 62, 0.7);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJzY3JpYmUtaXRlbS13aW5kb3cvc3Vic2NyaWJlLWl0ZW0td2luZG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLCtCQUErQjtFQUMvQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDBCQUFrQjtLQUFsQix1QkFBa0I7TUFBbEIsc0JBQWtCO1VBQWxCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztDQUNuQzs7QUFFRDtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSx5Q0FBeUM7RUFDekMsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHdDQUF3QztDQUN6QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaWJlLWl0ZW0td2luZG93L3N1YnNjcmliZS1pdGVtLXdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnNjcmliZS1pdGVtX19pbWcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCA3OCwgODIsIDAuNyk7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDI1dnc7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zdWJzY3JpYmUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnN1YnNjcmliZS1pdGVtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMzMsIDM4LCAwLjk1KTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9fdGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDgyLCA3OCwgODIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xufVxuXG4uc3Vic2NyaWJlLWl0ZW1fX292ZXJ2aWV3IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4MiwgNzgsIDgyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDAuMjVlbTtcbn1cblxuLnN1YnNjcmliZS1pdGVtX19yZWxlYXNlLWRhdGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMC4yNWVtIDAgMC4yNWVtIDAuMjVlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAwLjI1ZW07XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9fcmF0aW5nLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuMjVlbSAwLjI1ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9fcmF0aW5nIHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDgyLCA3OCwgODIpO1xufVxuXG4uc3Vic2NyaWJlLWl0ZW1fX2F2ZXJhZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzgsIDMzLCAzOCwgMC45NSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9faW1nLWJ0bi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDMzLCAzOCwgMC45NSk7XG4gIGNvbG9yOiByZ2JhKDgyLCA3OCwgODIsIDAuNyk7XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogOTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9fdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnN1YnNjcmliZS1pdGVtX19idXR0b24ge1xuICB3aWR0aDogOWVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMDtcbn1cblxuLnN1YnNjcmliZS1pdGVtX19yZWxlYXNlLWRhdGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4MiwgNzgsIDgyKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbi5zdWJzY3JpYmUtaXRlbV9faWNvbi1jbG9zZS1jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3Vic2NyaWJlLWl0ZW1fX2ljb24tY2xvc2Uge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnN1YnNjcmliZS1pdGVtX19pY29uLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6cmdiYSg4MiwgNzgsIDgyLCAwLjcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjUsIDYyLCA2MiwgMC43KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/subscribe-item-window/subscribe-item-window.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/subscribe-item-window/subscribe-item-window.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subscribe-item subscribe-item-container\">\n  <div class=\"subscribe-item__icon-close-container\">\n    <fa-icon [icon]=\"faTimes\" (click)='goBack()' class=\"subscribe-item__icon-close\"></fa-icon>\n  </div>\n  <div class=\"subscribe-item__header\">\n    <div [style.backgroundImage]=\"imgUrl\" class=\"subscribe-item__img\">\n    </div>\n    <div class=\"subscribe-item__title-container\">\n      <input type=\"button\"  [value]=\"buttonValue\"\n                            (click)='setToLocal(); button.value = \"Added\"' \n                            #button\n                            *ngIf = \"showButton\" \n                            class=\"subscribe-item__button\">\n      <p class=\"subscribe-item__title\">\n        {{itemDescription.original_title || itemDescription.original_name}}\n      </p>\n      <p class=\"subscribe-item__overview\">\n        {{itemDescription.overview}}\n      </p>\n    </div>\n  </div>\n  <div class=\"subscribe-item__release-date-container\">\n    <p class=\"subscribe-item__release-date\">\n      Release date: {{itemDescription.release_date || itemDescription.first_air_date}}\n    </p>\n    <label for=\"\" class=\"subscribe-item__rating-label\">Rating: {{itemDescription.vote_average}}</label>\n    <div class=\"subscribe-item__rating\">\n      <div class=\"subscribe-item__average\" [style.width]=\"voteWidth\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subscribe-item-window/subscribe-item-window.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/subscribe-item-window/subscribe-item-window.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SubscribeItemWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeItemWindowComponent", function() { return SubscribeItemWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var SubscribeItemWindowComponent = /** @class */ (function () {
    function SubscribeItemWindowComponent(location) {
        this.location = location;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.setItemToLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.apiImgUrl = _services_api_config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"].imageUrl;
    }
    SubscribeItemWindowComponent.prototype.goBack = function () {
        this.location.back();
    };
    SubscribeItemWindowComponent.prototype.setToLocal = function () {
        this.setItemToLocal.emit(this.itemDescription);
    };
    SubscribeItemWindowComponent.prototype.ngOnInit = function () {
        if (this.isItemInLibrary == true) {
            this.buttonValue = "In Library";
        }
        else {
            this.buttonValue = "Add To Library";
        }
        this.voteWidth = this.itemDescription.vote_average * 10 + '%';
        this.imgUrl = 'url(' + this.apiImgUrl + this.itemDescription.backdrop_path + ')';
        if (String(this.itemDescription.backdrop_path) === "null") {
            this.imgUrl = _services_api_config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"].xTraImg;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubscribeItemWindowComponent.prototype, "itemDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SubscribeItemWindowComponent.prototype, "isItemInLibrary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SubscribeItemWindowComponent.prototype, "showButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SubscribeItemWindowComponent.prototype, "setItemToLocal", void 0);
    SubscribeItemWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe-item-window',
            template: __webpack_require__(/*! ./subscribe-item-window.component.html */ "./src/app/components/subscribe-item-window/subscribe-item-window.component.html"),
            styles: [__webpack_require__(/*! ./subscribe-item-window.component.css */ "./src/app/components/subscribe-item-window/subscribe-item-window.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SubscribeItemWindowComponent);
    return SubscribeItemWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/subscribe-library/subscribe-library.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/subscribe-library/subscribe-library.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaWJlLWxpYnJhcnkvc3Vic2NyaWJlLWxpYnJhcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/subscribe-library/subscribe-library.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/subscribe-library/subscribe-library.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-subscribe-item-window [itemDescription] = 'itemSubscription$ | async'\r\n                           [showButton] = 'showButton'\r\n                           ></app-subscribe-item-window>"

/***/ }),

/***/ "./src/app/components/subscribe-library/subscribe-library.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/subscribe-library/subscribe-library.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SubscribeLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeLibraryComponent", function() { return SubscribeLibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var SubscribeLibraryComponent = /** @class */ (function () {
    function SubscribeLibraryComponent(store) {
        this.store = store;
        this.showButton = false;
        this.itemSubscription$ = this.store.select(function (s) { return s.movieDb.librarySubscribe; });
    }
    SubscribeLibraryComponent.prototype.ngOnInit = function () {
    };
    SubscribeLibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe-library',
            template: __webpack_require__(/*! ./subscribe-library.component.html */ "./src/app/components/subscribe-library/subscribe-library.component.html"),
            styles: [__webpack_require__(/*! ./subscribe-library.component.css */ "./src/app/components/subscribe-library/subscribe-library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SubscribeLibraryComponent);
    return SubscribeLibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/subscribe-movie/subscribe-movie.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/subscribe-movie/subscribe-movie.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaWJlLW1vdmllL3N1YnNjcmliZS1tb3ZpZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/subscribe-movie/subscribe-movie.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/subscribe-movie/subscribe-movie.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-subscribe-item-window [itemDescription] = 'itemDescription$ | async'\n                            [isItemInLibrary] = 'isMovieInLibrary$ | async'\n                            (setItemToLocal) = 'setMovieToLocal($event)'\n                            [showButton] = 'showButton'\n                            ></app-subscribe-item-window>\n"

/***/ }),

/***/ "./src/app/components/subscribe-movie/subscribe-movie.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/subscribe-movie/subscribe-movie.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubscribeMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeMovieComponent", function() { return SubscribeMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");
/* harmony import */ var _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/film-list.actions */ "./src/app/store/actions/film-list.actions.ts");





var SubscribeMovieComponent = /** @class */ (function () {
    function SubscribeMovieComponent(store) {
        this.store = store;
        this.itemDescription$ = this.store.select(function (s) { return s.movieDb.movieToSubscribe; });
        this.isMovieInLibrary$ = this.store.select(function (s) { return s.movieDb.isMovieInLib; });
        this.showButton = true;
    }
    SubscribeMovieComponent.prototype.setMovieToLocal = function (itemDesc) {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["SetMovieListToLocalStorage"](itemDesc));
        this.store.dispatch(new _store_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateIsInLocal"](itemDesc));
    };
    SubscribeMovieComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["IsMovieInLibrary"]());
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["GetMovieListFromLocalStorage"]());
    };
    SubscribeMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe-movie',
            template: __webpack_require__(/*! ./subscribe-movie.component.html */ "./src/app/components/subscribe-movie/subscribe-movie.component.html"),
            styles: [__webpack_require__(/*! ./subscribe-movie.component.css */ "./src/app/components/subscribe-movie/subscribe-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SubscribeMovieComponent);
    return SubscribeMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/subscribe-tv-show/subscribe-tv-show.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaWJlLXR2LXNob3cvc3Vic2NyaWJlLXR2LXNob3cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/subscribe-tv-show/subscribe-tv-show.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-subscribe-item-window [itemDescription] = 'itemDescription$ | async'\n                           (setItemToLocal) = 'setMovieToLocal($event)'\n                           [isItemInLibrary] = 'isTvShowInLibrary$ | async'\n                           [showButton] = 'showButton'>\n                            </app-subscribe-item-window>"

/***/ }),

/***/ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/subscribe-tv-show/subscribe-tv-show.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SubscribeTvShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeTvShowComponent", function() { return SubscribeTvShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");
/* harmony import */ var _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/tv-shows-list.actions */ "./src/app/store/actions/tv-shows-list.actions.ts");





var SubscribeTvShowComponent = /** @class */ (function () {
    function SubscribeTvShowComponent(store) {
        this.store = store;
        this.itemDescription$ = this.store.select(function (s) { return s.movieDb.tvShowToSubscribe; });
        this.isTvShowInLibrary$ = this.store.select(function (s) { return s.movieDb.isTvShowInLib; });
        this.showButton = true;
    }
    SubscribeTvShowComponent.prototype.setMovieToLocal = function (itemDesc) {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["SetTvShowListToLocalStorage"](itemDesc));
        this.store.dispatch(new _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateIsInLocal"](itemDesc));
    };
    SubscribeTvShowComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["IsTvShowInLibrary"]());
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_3__["GetTvShowListFromLocalStorage"]());
    };
    SubscribeTvShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe-tv-show',
            template: __webpack_require__(/*! ./subscribe-tv-show.component.html */ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.html"),
            styles: [__webpack_require__(/*! ./subscribe-tv-show.component.css */ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SubscribeTvShowComponent);
    return SubscribeTvShowComponent;
}());



/***/ }),

/***/ "./src/app/components/support/support.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/support/support.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".support__container{\r\n    background-color: rgb(38, 33, 38);\r\n    width: 100%;\r\n    height: 90%;\r\n    color: rgb(92, 92, 92);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.support__icon {\r\n    font-size: 10em;\r\n}\r\n\r\n.support__text {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.support__link {\r\n    -webkit-user-select: all;\r\n       -moz-user-select: all;\r\n        -ms-user-select: all;\r\n            user-select: all;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSwwQkFBa0I7T0FBbEIsdUJBQWtCO1FBQWxCLHNCQUFrQjtZQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cHBvcnRfX2NvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzMsIDM4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdXBwb3J0X19pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxufVxyXG5cclxuLnN1cHBvcnRfX3RleHQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zdXBwb3J0X19saW5rIHtcclxuICAgIHVzZXItc2VsZWN0OiBhbGw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/support/support.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/support/support.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"support__container support\">\n  <fa-icon [icon] = 'faUserCircle' class=\"support__icon\"></fa-icon>\n  <span class=\"support__text\">Email: <a class=\"support__link\" href=\"#\">mail@mail.com</a></span>\n  <span class=\"support__text\">Phone <a class=\"support__link\" href=\"#\">+7-965-437-65-64</a></span>\n</div>"

/***/ }),

/***/ "./src/app/components/support/support.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/support/support.component.ts ***!
  \*********************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/components/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/components/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-shows-list/tv-shows-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/tv-shows-list/tv-shows-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-list__container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: space-between;\n  width: 100%;\n  height: 90vh;\n  overflow-y: scroll;\n  background-color: rgb(38, 33, 38);\n}\n\n.scroll-top__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgb(38, 33, 38);\n  color: white;\n}\n\n.list-item__container {\n  width: 13.33em;\n  height:20em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90di1zaG93cy1saXN0L3R2LXNob3dzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0NBQWtDO0NBQ25DOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90di1zaG93cy1saXN0L3R2LXNob3dzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1saXN0X19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDMzLCAzOCk7XG59XG5cbi5zY3JvbGwtdG9wX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDMzLCAzOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3QtaXRlbV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEzLjMzZW07XG4gIGhlaWdodDoyMGVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/tv-shows-list/tv-shows-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/tv-shows-list/tv-shows-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-top__container\">\n  <app-scroll-top (click)=\"scrollContainer.scrollTop = 0\">\n  </app-scroll-top>\n  <div class=\"movie-list__container\" [style.height] = \"(showAddMovie$ | async) ? '60vh' : '90vh'\"\n                                     #scrollContainer \n                                     infiniteScroll [infiniteScrollDistance]=\"2\"\n                                     [infiniteScrollThrottle]=\"50\" \n                                     [scrollWindow]=\"false\" \n                                     (scrolled)=\"onScroll()\">\n    <app-list-item *ngFor=\"let i of (tvShowList$ | async).tvShowResults; let l = index\" \n                   [itemTitle]='i.original_name'\n                   [imgUrl]=\"i.poster_path\" \n                   class=\"list-item list-item__container\"\n                   (click) = \"getItem(i)\"\n                   routerLink = \"/tvShows/details\"\n                   [isInLibrary] = \"(isInLibrary$ | async)[l]\">\n    </app-list-item>\n    <router-outlet class=\"subscribe-item subscribe-item-container\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tv-shows-list/tv-shows-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tv-shows-list/tv-shows-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: TvShowsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsListComponent", function() { return TvShowsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");
/* harmony import */ var _services_search_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search-form.service */ "./src/app/services/search-form.service.ts");
/* harmony import */ var _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/tv-shows-list.actions */ "./src/app/store/actions/tv-shows-list.actions.ts");
/* harmony import */ var _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");







var TvShowsListComponent = /** @class */ (function () {
    function TvShowsListComponent(store, _searchFormService) {
        this.store = store;
        this._searchFormService = _searchFormService;
        this.apiImgUrl = _services_api_config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"].imageUrl;
        this.isInLibrary$ = this.store.select(function (s) { return s.tvShowList.isInLib; });
        this.tvShowList$ = this.store.select((function (s) { return s.tvShowList; }));
        this.showAddMovie$ = this.store.select(function (s) { return s.movieDb.ShowAddMovie; });
    }
    TvShowsListComponent.prototype.onScroll = function () {
        if (this._searchFormService.submitted) {
            this.store.dispatch(new _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_5__["LoadNextSearchPage"]());
        }
        else {
            this.store.dispatch(new _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_5__["LoadNextPage"]());
        }
    };
    TvShowsListComponent.prototype.getItem = function (i) {
        this._searchFormService.showForm = false;
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_6__["SubscribeTvShow"](i));
    };
    TvShowsListComponent.prototype.ngOnInit = function () {
        this._searchFormService.submitted = false;
        this.store.dispatch(new _store_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTvShowList"]());
        this.store.dispatch(new _store_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_6__["GetTvShowListFromLocalStorage"]());
    };
    TvShowsListComponent.prototype.ngOnDestroy = function () {
        this._searchFormService.showForm = false;
    };
    TvShowsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-shows-list',
            template: __webpack_require__(/*! ./tv-shows-list.component.html */ "./src/app/components/tv-shows-list/tv-shows-list.component.html"),
            styles: [__webpack_require__(/*! ./tv-shows-list.component.css */ "./src/app/components/tv-shows-list/tv-shows-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_search_form_service__WEBPACK_IMPORTED_MODULE_4__["SearchFormService"]])
    ], TvShowsListComponent);
    return TvShowsListComponent;
}());



/***/ }),

/***/ "./src/app/directives/click-outside.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/click-outside.directive.ts ***!
  \*******************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search-form.service */ "./src/app/services/search-form.service.ts");



var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef, _searchFormService) {
        this._elementRef = _elementRef;
        this._searchFormService = _searchFormService;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.count = 0;
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        if (this._searchFormService.displayForm === "none") {
            this.count = 0;
        }
        else {
            this.count++;
            if (this.count >= 2) {
                var clickedInside = this._elementRef.nativeElement.contains(targetElement);
                if (!clickedInside) {
                    this.clickOutside.emit(null);
                    this.count = 0;
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [EventTarget]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClickOutside]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_search_form_service__WEBPACK_IMPORTED_MODULE_2__["SearchFormService"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/services/api.config.ts":
/*!****************************************!*\
  !*** ./src/app/services/api.config.ts ***!
  \****************************************/
/*! exports provided: apiUrl, getMovieSearchLink, getTvShowSearchLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieSearchLink", function() { return getMovieSearchLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTvShowSearchLink", function() { return getTvShowSearchLink; });
var apiUrl = {
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=7b4fdbd696ddc786e777b7dea10a4b36&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
    showUrl: "https://api.themoviedb.org/3/tv/popular?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US&page=",
    imageUrl: "https://image.tmdb.org/t/p/w500",
    xTraImg: "url(https://www.themoviedb.org/assets/1/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png)"
};
function getMovieSearchLink(adult, title, overview, page) {
    return "https://api.themoviedb.org/3/search/movie?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US&query=" + title.replace(/\s/g, "%20").toLocaleLowerCase() + "%20" + overview.replace(/\s/g, "%20").toLocaleLowerCase() + "&page=" + String(page) + "&include_adult=" + adult;
}
function getTvShowSearchLink(title, overview, page) {
    return "https://api.themoviedb.org/3/search/tv?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US&query=" + title.replace(/\s/g, "%20").toLocaleLowerCase() + "%20" + overview.replace(/\s/g, "%20").toLocaleLowerCase() + "&page=" + String(page);
}


/***/ }),

/***/ "./src/app/services/axios-dmitry.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/axios-dmitry.service.ts ***!
  \**************************************************/
/*! exports provided: AxiosDmitryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxiosDmitryService", function() { return AxiosDmitryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AxiosDmitryService = /** @class */ (function () {
    function AxiosDmitryService() {
    }
    AxiosDmitryService.prototype.getRequest = function (url) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.requestHandler(url, 'GET').then(function (response) { return resolve(response); }).catch(function (err) { return reject(err); });
        });
    };
    AxiosDmitryService.prototype.requestHandler = function (url, method, payload) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onload = function () {
                if (this.status === 200 || this.status === 201) {
                    resolve(JSON.parse(this.response));
                }
                else {
                    var error = new Error(this.statusText);
                    error.name = String(this.status);
                    reject(error);
                }
            };
            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };
            if (payload) {
                xhr.send(payload);
            }
            else {
                xhr.send();
            }
        });
    };
    AxiosDmitryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AxiosDmitryService);
    return AxiosDmitryService;
}());



/***/ }),

/***/ "./src/app/services/labels.config.ts":
/*!*******************************************!*\
  !*** ./src/app/services/labels.config.ts ***!
  \*******************************************/
/*! exports provided: labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
var labels = [
    { text: "Action", genre_id: 28 },
    { text: "Adventure", genre_id: 12 },
    { text: "Thriller", genre_id: 53 },
    { text: "Comedy", genre_id: 35 },
    { text: "Fantasy", genre_id: 14 },
    { text: "Drama", genre_id: 18 },
    { text: "Horror", genre_id: 27 },
    { text: "Criminal", genre_id: 80 },
    { text: "War", genre_id: 10752 },
    { text: "Documentary", genre_id: 99 },
];


/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.movieList = [];
        this.tvShowList = [];
    }
    LocalStorageService.prototype.getMovieListFromLocalStorage = function () {
        this.movieList = JSON.parse(localStorage.getItem('movieList'));
        if (this.movieList === null) {
            return [];
        }
        else {
            return this.movieList;
        }
    };
    LocalStorageService.prototype.setMovieToLocalStorage = function (movieItem) {
        this.updatedMovieList = this.getMovieListFromLocalStorage().concat([movieItem]);
        localStorage.setItem('movieList', JSON.stringify(this.updatedMovieList));
        return this.updatedMovieList;
    };
    LocalStorageService.prototype.removeMovieFromLocalStorage = function (movieItem) {
        this.updatedMovieList = this.getMovieListFromLocalStorage().filter(function (movItem) { return JSON.stringify(movItem) != JSON.stringify(movieItem); });
        localStorage.setItem('movieList', JSON.stringify(this.updatedMovieList));
    };
    LocalStorageService.prototype.getTvShowListFromLocalStorage = function () {
        this.tvShowList = JSON.parse(localStorage.getItem('tvShowList'));
        if (this.tvShowList === null) {
            return [];
        }
        else {
            return this.tvShowList;
        }
    };
    LocalStorageService.prototype.setTvShowToLocalStorage = function (tvShowItem) {
        this.updatedTvShowList = this.getTvShowListFromLocalStorage().concat([tvShowItem]);
        localStorage.setItem('tvShowList', JSON.stringify(this.updatedTvShowList));
        return this.updatedTvShowList;
    };
    LocalStorageService.prototype.removeTvShowFromLocalStorage = function (tvShowItem) {
        this.updatedTvShowList = this.getTvShowListFromLocalStorage().filter(function (showItem) { return JSON.stringify(showItem) != JSON.stringify(tvShowItem); });
        localStorage.setItem('tvShowList', JSON.stringify(this.updatedTvShowList));
    };
    LocalStorageService.prototype.addNewFilesToLocal = function (action) {
        localStorage.setItem(action.payload.title, action.file);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.showMenu = true;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWindowClose"];
        this.items = [
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFilm"], text: "Movies" },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTv"], text: "TV Shows" },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBook"], text: "My Library" },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"], text: "Support" }
        ];
        this.headerNavItems = [
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"], text: "Add movie" },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"], text: "About" },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDollarSign"], text: "Pricing" },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBlog"], text: "Blog" },
        ];
    }
    NavigationService.prototype.isCollapse = function () {
        if (this.showMenu) {
            this.showMenu = false;
        }
        else {
            this.showMenu = true;
        }
        return this.showMenu;
    };
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/services/routings.ts":
/*!**************************************!*\
  !*** ./src/app/services/routings.ts ***!
  \**************************************/
/*! exports provided: movieListRoutes, tvShowListRoutes, libraryRoutes, appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieListRoutes", function() { return movieListRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tvShowListRoutes", function() { return tvShowListRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libraryRoutes", function() { return libraryRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _components_tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tv-shows-list/tv-shows-list.component */ "./src/app/components/tv-shows-list/tv-shows-list.component.ts");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/library/library.component */ "./src/app/components/library/library.component.ts");
/* harmony import */ var _components_subscribe_movie_subscribe_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/subscribe-movie/subscribe-movie.component */ "./src/app/components/subscribe-movie/subscribe-movie.component.ts");
/* harmony import */ var _components_subscribe_tv_show_subscribe_tv_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/subscribe-tv-show/subscribe-tv-show.component */ "./src/app/components/subscribe-tv-show/subscribe-tv-show.component.ts");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/support/support.component */ "./src/app/components/support/support.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_subscribe_library_subscribe_library_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/subscribe-library/subscribe-library.component */ "./src/app/components/subscribe-library/subscribe-library.component.ts");








var movieListRoutes = [
    { path: 'details', component: _components_subscribe_movie_subscribe_movie_component__WEBPACK_IMPORTED_MODULE_3__["SubscribeMovieComponent"] },
];
var tvShowListRoutes = [
    { path: 'details', component: _components_subscribe_tv_show_subscribe_tv_show_component__WEBPACK_IMPORTED_MODULE_4__["SubscribeTvShowComponent"] },
];
var libraryRoutes = [
    { path: 'details', component: _components_subscribe_library_subscribe_library_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeLibraryComponent"] }
];
var appRoutes = [
    { path: 'movie', component: _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_0__["MovieListComponent"], children: movieListRoutes },
    { path: 'tvShows', component: _components_tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_1__["TvShowsListComponent"], children: tvShowListRoutes },
    { path: 'myLibrary', component: _components_library_library_component__WEBPACK_IMPORTED_MODULE_2__["LibraryComponent"], children: libraryRoutes },
    { path: 'support', component: _components_support_support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: '**', redirectTo: 'movie', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/services/search-form.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/search-form.service.ts ***!
  \*************************************************/
/*! exports provided: SearchFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormService", function() { return SearchFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchFormService = /** @class */ (function () {
    function SearchFormService() {
        this.title = '';
        this.overview = '';
        this.genres_ids = [];
        this.adult = false;
        this.popularity = null;
        this.vote_average = null;
        this.remember_inputs = false;
        this.showForm = false;
        this.displayForm = "flex";
        this.submitted = false;
    }
    SearchFormService.prototype.getGenreId = function (val) {
        for (var i = 0; i < this.genres_ids.length; i++) {
            if (this.genres_ids[i] === val) {
                this.genres_ids.splice(i, 1);
                return;
            }
        }
        this.genres_ids.push(val);
    };
    SearchFormService.prototype.setDefault = function () {
        this.adult = false;
        this.genres_ids = [];
        this.overview = "";
        this.popularity = null;
        this.title = "";
        this.vote_average = null;
        this.remember_inputs = false;
    };
    SearchFormService.prototype.toggle = function () {
        if (window.location.pathname === "/movie" || window.location.pathname === "/tvShows") {
            if (this.remember_inputs === false) {
                if (this.showForm) {
                    this.showForm = false;
                }
                else {
                    this.showForm = true;
                }
            }
            else {
                if (this.displayForm === "flex") {
                    this.displayForm = "none";
                }
                else {
                    this.displayForm = "flex";
                }
            }
        }
    };
    SearchFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchFormService);
    return SearchFormService;
}());



/***/ }),

/***/ "./src/app/store/actions/film-list.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/store/actions/film-list.actions.ts ***!
  \****************************************************/
/*! exports provided: FilmListActionTypes, LoadFilmLists, LoadFilmListsSuccess, LoadFilmListsError, UpdateIsInLocal, LoadNextPage, LoadNextPageSuccess, LoadNextPageError, SearchFilms, SearchFilmsSuccess, SearchFilmsError, LoadNextSearchPage, LoadNextSearchPageSuccess, LoadNextSearchPageError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmListActionTypes", function() { return FilmListActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFilmLists", function() { return LoadFilmLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFilmListsSuccess", function() { return LoadFilmListsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFilmListsError", function() { return LoadFilmListsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIsInLocal", function() { return UpdateIsInLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPage", function() { return LoadNextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPageSuccess", function() { return LoadNextPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPageError", function() { return LoadNextPageError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilms", function() { return SearchFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsSuccess", function() { return SearchFilmsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsError", function() { return SearchFilmsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextSearchPage", function() { return LoadNextSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextSearchPageSuccess", function() { return LoadNextSearchPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextSearchPageError", function() { return LoadNextSearchPageError; });
var FilmListActionTypes;
(function (FilmListActionTypes) {
    FilmListActionTypes["LoadFilmLists"] = "[FilmList] LoadFilmLists";
    FilmListActionTypes["LoadFilmListsSuccess"] = "[FilmList] LoadFilmListsSuccess";
    FilmListActionTypes["LoadFilmListsError"] = "[FilmList] LoadFilmListsError";
    FilmListActionTypes["UpdateIsInLocal"] = "[FilmList] UpdateIsInLocal";
    FilmListActionTypes["LoadNextPage"] = "[FilmList] LoadNextPage";
    FilmListActionTypes["LoadNextPageSuccess"] = "[FilmList] LoadNextPageSuccess";
    FilmListActionTypes["LoadNextPageError"] = "[FilmList] LoadNextPageError";
    FilmListActionTypes["SearchFilms"] = "[FilmList] SearchFilms";
    FilmListActionTypes["SearchFilmsSuccess"] = "[FilmList] SearchFilmsSuccess";
    FilmListActionTypes["SearchFilmsError"] = "[FilmList] SearchFilmsError";
    FilmListActionTypes["LoadNextSearchPage"] = "[FilmList] LoadNextSearchPage";
    FilmListActionTypes["LoadNextSearchPageSuccess"] = "[FilmList] LoadNextSearchPageSuccess";
    FilmListActionTypes["LoadNextSearchPageError"] = "[FilmList] LoadNextSearchPageError";
})(FilmListActionTypes || (FilmListActionTypes = {}));
var LoadFilmLists = /** @class */ (function () {
    function LoadFilmLists() {
        this.type = FilmListActionTypes.LoadFilmLists;
    }
    return LoadFilmLists;
}());

var LoadFilmListsSuccess = /** @class */ (function () {
    function LoadFilmListsSuccess(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.LoadFilmListsSuccess;
    }
    return LoadFilmListsSuccess;
}());

var LoadFilmListsError = /** @class */ (function () {
    function LoadFilmListsError(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.LoadFilmListsError;
    }
    return LoadFilmListsError;
}());

var UpdateIsInLocal = /** @class */ (function () {
    function UpdateIsInLocal(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.UpdateIsInLocal;
    }
    return UpdateIsInLocal;
}());

var LoadNextPage = /** @class */ (function () {
    function LoadNextPage() {
        this.type = FilmListActionTypes.LoadNextPage;
    }
    return LoadNextPage;
}());

var LoadNextPageSuccess = /** @class */ (function () {
    function LoadNextPageSuccess(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.LoadNextPageSuccess;
    }
    return LoadNextPageSuccess;
}());

var LoadNextPageError = /** @class */ (function () {
    function LoadNextPageError(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.LoadNextPageError;
    }
    return LoadNextPageError;
}());

var SearchFilms = /** @class */ (function () {
    function SearchFilms(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.SearchFilms;
    }
    return SearchFilms;
}());

var SearchFilmsSuccess = /** @class */ (function () {
    function SearchFilmsSuccess(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.SearchFilmsSuccess;
    }
    return SearchFilmsSuccess;
}());

var SearchFilmsError = /** @class */ (function () {
    function SearchFilmsError(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.SearchFilms;
    }
    return SearchFilmsError;
}());

var LoadNextSearchPage = /** @class */ (function () {
    function LoadNextSearchPage() {
        this.type = FilmListActionTypes.LoadNextSearchPage;
    }
    return LoadNextSearchPage;
}());

var LoadNextSearchPageSuccess = /** @class */ (function () {
    function LoadNextSearchPageSuccess(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.LoadNextSearchPageSuccess;
    }
    return LoadNextSearchPageSuccess;
}());

var LoadNextSearchPageError = /** @class */ (function () {
    function LoadNextSearchPageError(payload) {
        this.payload = payload;
        this.type = FilmListActionTypes.LoadNextSearchPageError;
    }
    return LoadNextSearchPageError;
}());



/***/ }),

/***/ "./src/app/store/actions/movieDB.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/movieDB.actions.ts ***!
  \**************************************************/
/*! exports provided: MovieDbActionTypes, SubscribeMovie, SubscribeTvShow, SetMovieListToLocalStorage, SetMovieListToLocalStorageSuccess, GetMovieListFromLocalStorage, GetMovieListFromLocalStorageSuccess, SetTvShowListToLocalStorage, SetTvShowListToLocalStorageSuccess, GetTvShowListFromLocalStorage, GetTvShowListFromLocalStorageSuccess, RemoveMovie, RemoveTvShow, IsMovieInLibrary, IsTvShowInLibrary, LibrarySubscribe, ToggleAddMovie, HideAddMovie, AddMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDbActionTypes", function() { return MovieDbActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeMovie", function() { return SubscribeMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeTvShow", function() { return SubscribeTvShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMovieListToLocalStorage", function() { return SetMovieListToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMovieListToLocalStorageSuccess", function() { return SetMovieListToLocalStorageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovieListFromLocalStorage", function() { return GetMovieListFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovieListFromLocalStorageSuccess", function() { return GetMovieListFromLocalStorageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTvShowListToLocalStorage", function() { return SetTvShowListToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTvShowListToLocalStorageSuccess", function() { return SetTvShowListToLocalStorageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTvShowListFromLocalStorage", function() { return GetTvShowListFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTvShowListFromLocalStorageSuccess", function() { return GetTvShowListFromLocalStorageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveMovie", function() { return RemoveMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTvShow", function() { return RemoveTvShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsMovieInLibrary", function() { return IsMovieInLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTvShowInLibrary", function() { return IsTvShowInLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrarySubscribe", function() { return LibrarySubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAddMovie", function() { return ToggleAddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideAddMovie", function() { return HideAddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
var MovieDbActionTypes;
(function (MovieDbActionTypes) {
    MovieDbActionTypes["SubscribeMovie"] = "[MovieDb] SubscribeMovie";
    MovieDbActionTypes["SubscribeTvShow"] = "[MovieDb] SubscribeTvShow";
    MovieDbActionTypes["SetMovieListToLocalStorage"] = "[MovieDb] SetMovieListToLocalStorage";
    MovieDbActionTypes["SetMovieListToLocalStorageSuccess"] = "[MovieDb] SetMovieListToLocalStorageSuccess";
    MovieDbActionTypes["GetMovieListFromLocalStorage"] = "[MovieDb] GetMovieListFromLocalStorage";
    MovieDbActionTypes["GetMovieListFromLocalStorageSuccess"] = "[MovieDb] GetMovieListFromLocalStorageSuccess";
    MovieDbActionTypes["SetTvShowListToLocalStorage"] = "[MovieDb] SetTvShowListToLocalStorage";
    MovieDbActionTypes["SetTvShowListToLocalStorageSuccess"] = "[MovieDb] SetTvShowListToLocalStorageSuccess";
    MovieDbActionTypes["GetTvShowListFromLocalStorage"] = "[MovieDb] GetTvShowListFromLocalStorage";
    MovieDbActionTypes["GetTvShowListFromLocalStorageSuccess"] = "[MovieDb] GetTvShowListFromLocalStorageSuccess";
    MovieDbActionTypes["RemoveMovie"] = "[MovieDb] RemoveMovie";
    MovieDbActionTypes["RemoveTvShow"] = "[MovieDb] RemoveTvShow";
    MovieDbActionTypes["IsMovieInLibrary"] = "[MovieDb] IsMovieInLibrary";
    MovieDbActionTypes["IsTvShowInLibrary"] = "[MovieDb] IsTvShowInLibrary";
    MovieDbActionTypes["LibrarySubscribe"] = "[MovieDb] LibrarySubscribe";
    MovieDbActionTypes["ToggleAddMovie"] = "[MovieDb] ToggleAddMovie";
    MovieDbActionTypes["HideAddMovie"] = "[MovieDb] HideAddMovie";
    MovieDbActionTypes["AddMovie"] = "[MovieDb] AddMovie";
})(MovieDbActionTypes || (MovieDbActionTypes = {}));
var SubscribeMovie = /** @class */ (function () {
    function SubscribeMovie(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.SubscribeMovie;
    }
    return SubscribeMovie;
}());

var SubscribeTvShow = /** @class */ (function () {
    function SubscribeTvShow(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.SubscribeTvShow;
    }
    return SubscribeTvShow;
}());

var SetMovieListToLocalStorage = /** @class */ (function () {
    function SetMovieListToLocalStorage(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.SetMovieListToLocalStorage;
    }
    return SetMovieListToLocalStorage;
}());

var SetMovieListToLocalStorageSuccess = /** @class */ (function () {
    function SetMovieListToLocalStorageSuccess(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.SetMovieListToLocalStorageSuccess;
    }
    return SetMovieListToLocalStorageSuccess;
}());

var GetMovieListFromLocalStorage = /** @class */ (function () {
    function GetMovieListFromLocalStorage() {
        this.type = MovieDbActionTypes.GetMovieListFromLocalStorage;
    }
    return GetMovieListFromLocalStorage;
}());

var GetMovieListFromLocalStorageSuccess = /** @class */ (function () {
    function GetMovieListFromLocalStorageSuccess(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.GetMovieListFromLocalStorageSuccess;
    }
    return GetMovieListFromLocalStorageSuccess;
}());

var SetTvShowListToLocalStorage = /** @class */ (function () {
    function SetTvShowListToLocalStorage(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.SetTvShowListToLocalStorage;
    }
    return SetTvShowListToLocalStorage;
}());

var SetTvShowListToLocalStorageSuccess = /** @class */ (function () {
    function SetTvShowListToLocalStorageSuccess(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.SetTvShowListToLocalStorageSuccess;
    }
    return SetTvShowListToLocalStorageSuccess;
}());

var GetTvShowListFromLocalStorage = /** @class */ (function () {
    function GetTvShowListFromLocalStorage() {
        this.type = MovieDbActionTypes.GetTvShowListFromLocalStorage;
    }
    return GetTvShowListFromLocalStorage;
}());

var GetTvShowListFromLocalStorageSuccess = /** @class */ (function () {
    function GetTvShowListFromLocalStorageSuccess(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.GetTvShowListFromLocalStorageSuccess;
    }
    return GetTvShowListFromLocalStorageSuccess;
}());

var RemoveMovie = /** @class */ (function () {
    function RemoveMovie(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.RemoveMovie;
    }
    return RemoveMovie;
}());

var RemoveTvShow = /** @class */ (function () {
    function RemoveTvShow(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.RemoveTvShow;
    }
    return RemoveTvShow;
}());

var IsMovieInLibrary = /** @class */ (function () {
    function IsMovieInLibrary() {
        this.type = MovieDbActionTypes.IsMovieInLibrary;
    }
    return IsMovieInLibrary;
}());

var IsTvShowInLibrary = /** @class */ (function () {
    function IsTvShowInLibrary() {
        this.type = MovieDbActionTypes.IsTvShowInLibrary;
    }
    return IsTvShowInLibrary;
}());

var LibrarySubscribe = /** @class */ (function () {
    function LibrarySubscribe(payload) {
        this.payload = payload;
        this.type = MovieDbActionTypes.LibrarySubscribe;
    }
    return LibrarySubscribe;
}());

var ToggleAddMovie = /** @class */ (function () {
    function ToggleAddMovie() {
        this.type = MovieDbActionTypes.ToggleAddMovie;
    }
    return ToggleAddMovie;
}());

var HideAddMovie = /** @class */ (function () {
    function HideAddMovie() {
        this.type = MovieDbActionTypes.HideAddMovie;
    }
    return HideAddMovie;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie(payload, file) {
        this.payload = payload;
        this.file = file;
        this.type = MovieDbActionTypes.AddMovie;
    }
    return AddMovie;
}());



/***/ }),

/***/ "./src/app/store/actions/tv-shows-list.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/store/actions/tv-shows-list.actions.ts ***!
  \********************************************************/
/*! exports provided: TvShowListActionTypes, LoadTvShowList, LoadTvShowListSuccess, LoadTvShowListError, UpdateIsInLocal, LoadNextPage, LoadNextPageSuccess, LoadNextPageError, SearchTvShow, SearchTvShowSuccess, SearchTvShowError, LoadNextSearchPage, LoadNextSearchPageSuccess, LoadNextSearchPageError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowListActionTypes", function() { return TvShowListActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTvShowList", function() { return LoadTvShowList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTvShowListSuccess", function() { return LoadTvShowListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTvShowListError", function() { return LoadTvShowListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIsInLocal", function() { return UpdateIsInLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPage", function() { return LoadNextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPageSuccess", function() { return LoadNextPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPageError", function() { return LoadNextPageError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTvShow", function() { return SearchTvShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTvShowSuccess", function() { return SearchTvShowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTvShowError", function() { return SearchTvShowError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextSearchPage", function() { return LoadNextSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextSearchPageSuccess", function() { return LoadNextSearchPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextSearchPageError", function() { return LoadNextSearchPageError; });
var TvShowListActionTypes;
(function (TvShowListActionTypes) {
    TvShowListActionTypes["LoadTvShowList"] = "[TvShowList] LoadTvShowList";
    TvShowListActionTypes["LoadTvShowListSuccess"] = "[TvShowList] LoadTvShowListSuccess";
    TvShowListActionTypes["LoadTvShowListError"] = "[TvShowList] LoadTvShowListError";
    TvShowListActionTypes["UpdateIsInLocal"] = "[TvShowList] UpdateIsInLocal";
    TvShowListActionTypes["LoadNextPage"] = "[TvShowList] LoadNextPage";
    TvShowListActionTypes["LoadNextPageSuccess"] = "[TvShowList] LoadNextPageSuccess";
    TvShowListActionTypes["LoadNextPageError"] = "[TvShowList] LoadNextPageError";
    TvShowListActionTypes["SearchTvShow"] = "[TvShowList] SearchTvShow";
    TvShowListActionTypes["SearchTvShowSuccess"] = "[TvShowList] SearchTvShowSuccess";
    TvShowListActionTypes["SearchTvShowError"] = "[TvShowList] SearchTvShowError";
    TvShowListActionTypes["LoadNextSearchPage"] = "[TvShowList] LoadNextSearchPage";
    TvShowListActionTypes["LoadNextSearchPageSuccess"] = "[TvShowList] LoadNextSearchPageSuccess";
    TvShowListActionTypes["LoadNextSearchPageError"] = "[TvShowList] LoadNextSearchPageError";
})(TvShowListActionTypes || (TvShowListActionTypes = {}));
var LoadTvShowList = /** @class */ (function () {
    function LoadTvShowList() {
        this.type = TvShowListActionTypes.LoadTvShowList;
    }
    return LoadTvShowList;
}());

var LoadTvShowListSuccess = /** @class */ (function () {
    function LoadTvShowListSuccess(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.LoadTvShowListSuccess;
    }
    return LoadTvShowListSuccess;
}());

var LoadTvShowListError = /** @class */ (function () {
    function LoadTvShowListError(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.LoadTvShowListError;
    }
    return LoadTvShowListError;
}());

var UpdateIsInLocal = /** @class */ (function () {
    function UpdateIsInLocal(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.UpdateIsInLocal;
    }
    return UpdateIsInLocal;
}());

var LoadNextPage = /** @class */ (function () {
    function LoadNextPage() {
        this.type = TvShowListActionTypes.LoadNextPage;
    }
    return LoadNextPage;
}());

var LoadNextPageSuccess = /** @class */ (function () {
    function LoadNextPageSuccess(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.LoadNextPageSuccess;
    }
    return LoadNextPageSuccess;
}());

var LoadNextPageError = /** @class */ (function () {
    function LoadNextPageError(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.LoadNextPageError;
    }
    return LoadNextPageError;
}());

var SearchTvShow = /** @class */ (function () {
    function SearchTvShow(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.SearchTvShow;
    }
    return SearchTvShow;
}());

var SearchTvShowSuccess = /** @class */ (function () {
    function SearchTvShowSuccess(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.SearchTvShowSuccess;
    }
    return SearchTvShowSuccess;
}());

var SearchTvShowError = /** @class */ (function () {
    function SearchTvShowError(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.SearchTvShowError;
    }
    return SearchTvShowError;
}());

var LoadNextSearchPage = /** @class */ (function () {
    function LoadNextSearchPage() {
        this.type = TvShowListActionTypes.LoadNextSearchPage;
    }
    return LoadNextSearchPage;
}());

var LoadNextSearchPageSuccess = /** @class */ (function () {
    function LoadNextSearchPageSuccess(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.LoadNextSearchPageSuccess;
    }
    return LoadNextSearchPageSuccess;
}());

var LoadNextSearchPageError = /** @class */ (function () {
    function LoadNextSearchPageError(payload) {
        this.payload = payload;
        this.type = TvShowListActionTypes.LoadNextSearchPageError;
    }
    return LoadNextSearchPageError;
}());



/***/ }),

/***/ "./src/app/store/effects/films-list.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/effects/films-list.effects.ts ***!
  \*****************************************************/
/*! exports provided: FilmsListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsListEffects", function() { return FilmsListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_axios_dmitry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios-dmitry.service */ "./src/app/services/axios-dmitry.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/film-list.actions */ "./src/app/store/actions/film-list.actions.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");









var FilmsListEffects = /** @class */ (function () {
    function FilmsListEffects(actions$, axiosDmitryService, _localStorageService) {
        var _this = this;
        this.actions$ = actions$;
        this.axiosDmitryService = axiosDmitryService;
        this._localStorageService = _localStorageService;
        this.n = 1;
        this.loadFilmsList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["FilmListActionTypes"].LoadFilmLists), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.getFilmList()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (moviePageData) { return new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadFilmListsSuccess"](_this.sort(moviePageData)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadFilmListsError"]("Can't load(((")); })); }));
        this.loadNextPage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["FilmListActionTypes"].LoadNextPage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.loadNextPage()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (moviePageData) { return new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextPageSuccess"](_this.sort(moviePageData)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextPageError"]("Can't load(((")); })); }));
        this.getSearchResults$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["FilmListActionTypes"].SearchFilms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.getSearchResults(payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchData) { return new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["SearchFilmsSuccess"](searchData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["SearchFilmsError"]("Can't load(((")); })); }));
        this.getNextSearchResults$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["FilmListActionTypes"].LoadNextSearchPage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.getNextSearchResults()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchData) { return new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextSearchPageSuccess"](searchData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextSearchPageError"]("Can't load(((")); })); }));
    }
    FilmsListEffects.prototype.getMovieFromLocal = function () {
        return this._localStorageService.getMovieListFromLocalStorage();
    };
    FilmsListEffects.prototype.sort = function (items) {
        var isInLib = [];
        for (var i = 0; i < items.results.length; i++) {
            for (var y = 0; y < this.getMovieFromLocal().length; y++) {
                if (items.results[i].id === this.getMovieFromLocal()[y].id) {
                    isInLib[i] = true;
                }
                else {
                    if (isInLib[i] == true) {
                        continue;
                    }
                    isInLib[i] = false;
                }
            }
        }
        return {
            isInLib: isInLib,
            items: items,
        };
    };
    FilmsListEffects.prototype.getFilmList = function () {
        this.n = 1;
        return this.axiosDmitryService.getRequest(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["apiUrl"].movieUrl + String(this.n)).then(function (resp) { return resp; }).catch(function (err) { return err; });
    };
    FilmsListEffects.prototype.loadNextPage = function () {
        this.n++;
        return this.axiosDmitryService.getRequest(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["apiUrl"].movieUrl + String(this.n)).then(function (resp) { return resp; }).catch(function (err) { return err; });
    };
    FilmsListEffects.prototype.getSearchResults = function (action) {
        this.formState = action.payload;
        this.n = 1;
        var link = Object(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["getMovieSearchLink"])(this.formState.adult, this.formState.title, this.formState.overview, this.n);
        var data = this.axiosDmitryService.getRequest(link).then(function (resp) { return resp; }).catch(function (err) { return err; });
        return data;
    };
    FilmsListEffects.prototype.getNextSearchResults = function () {
        this.n++;
        var link = Object(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["getMovieSearchLink"])(this.formState.adult, this.formState.title, this.formState.overview, this.n);
        var data = this.axiosDmitryService.getRequest(link).then(function (resp) { return resp; }).catch(function (err) { return err; });
        return data;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsListEffects.prototype, "loadFilmsList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsListEffects.prototype, "loadNextPage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsListEffects.prototype, "getSearchResults$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsListEffects.prototype, "getNextSearchResults$", void 0);
    FilmsListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_axios_dmitry_service__WEBPACK_IMPORTED_MODULE_3__["AxiosDmitryService"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]])
    ], FilmsListEffects);
    return FilmsListEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/movieDB.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/store/effects/movieDB.effects.ts ***!
  \**************************************************/
/*! exports provided: MovieDbEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDbEffects", function() { return MovieDbEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var MovieDbEffects = /** @class */ (function () {
    function MovieDbEffects(actions$, _localStorageService, store) {
        var _this = this;
        this.actions$ = actions$;
        this._localStorageService = _localStorageService;
        this.store = store;
        this.setMovieToLocalStorage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].SetMovieListToLocalStorage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.setMovieToLocal(action)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["SetMovieListToLocalStorageSuccess"](resultArray); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
        this.getMovieFromLocalStorage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].GetMovieListFromLocalStorage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.getMovieFromLocal()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["GetMovieListFromLocalStorageSuccess"](resultArray); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
        this.setTvShowToLocalStorage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].SetTvShowListToLocalStorage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.setTvShowToLocal(action)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["SetTvShowListToLocalStorageSuccess"](resultArray); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
        this.getTvShowFromLocalStorage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].GetTvShowListFromLocalStorage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.getTvShowFromLocal()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["GetTvShowListFromLocalStorageSuccess"](resultArray); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
        this.removeMovieItem$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].RemoveMovie), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.removeMovieFromLocal(action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["GetMovieListFromLocalStorageSuccess"](resultArray); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
        this.removeTvShowItem$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].RemoveTvShow), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.removeTvShowFromLocal(action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["GetTvShowListFromLocalStorageSuccess"](resultArray); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
        this.addMovie$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["MovieDbActionTypes"].AddMovie), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.setNewItemToLocalStorage(action)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultArray) { return new _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_5__["GetMovieListFromLocalStorage"](); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return err; }))); }));
    }
    MovieDbEffects.prototype.setMovieToLocal = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (i = 0; i < this._localStorageService.getMovieListFromLocalStorage().length; i++) {
                    if (this._localStorageService.getMovieListFromLocalStorage()[i].id == action.payload.id) {
                        return [2 /*return*/];
                    }
                }
                return [2 /*return*/, this._localStorageService.setMovieToLocalStorage(action.payload)];
            });
        });
    };
    MovieDbEffects.prototype.getMovieFromLocal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this._localStorageService.getMovieListFromLocalStorage()];
            });
        });
    };
    MovieDbEffects.prototype.setTvShowToLocal = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var y;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (y = 0; y < this._localStorageService.getTvShowListFromLocalStorage().length; y++) {
                    if (Number(this._localStorageService.getTvShowListFromLocalStorage()[y].id) == Number(action.payload.id)) {
                        return [2 /*return*/];
                    }
                }
                return [2 /*return*/, this._localStorageService.setTvShowToLocalStorage(action.payload)];
            });
        });
    };
    MovieDbEffects.prototype.getTvShowFromLocal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this._localStorageService.getTvShowListFromLocalStorage()];
            });
        });
    };
    MovieDbEffects.prototype.removeMovieFromLocal = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._localStorageService.removeMovieFromLocalStorage(action);
                return [2 /*return*/, this._localStorageService.getMovieListFromLocalStorage()];
            });
        });
    };
    MovieDbEffects.prototype.removeTvShowFromLocal = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._localStorageService.removeTvShowFromLocalStorage(action);
                return [2 /*return*/, this._localStorageService.getTvShowListFromLocalStorage()];
            });
        });
    };
    MovieDbEffects.prototype.setNewItemToLocalStorage = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._localStorageService.setMovieToLocalStorage(action.payload);
                this._localStorageService.addNewFilesToLocal(action);
                return [2 /*return*/, this.getMovieFromLocal()];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "setMovieToLocalStorage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "getMovieFromLocalStorage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "setTvShowToLocalStorage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "getTvShowFromLocalStorage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "removeMovieItem$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "removeTvShowItem$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDbEffects.prototype, "addMovie$", void 0);
    MovieDbEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], MovieDbEffects);
    return MovieDbEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/tv-shows-list.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/store/effects/tv-shows-list.effects.ts ***!
  \********************************************************/
/*! exports provided: TvShowListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowListEffects", function() { return TvShowListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_axios_dmitry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios-dmitry.service */ "./src/app/services/axios-dmitry.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.config */ "./src/app/services/api.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/tv-shows-list.actions */ "./src/app/store/actions/tv-shows-list.actions.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");









var TvShowListEffects = /** @class */ (function () {
    function TvShowListEffects(actions$, axiosDmitryService, _localStorageService) {
        var _this = this;
        this.actions$ = actions$;
        this.axiosDmitryService = axiosDmitryService;
        this._localStorageService = _localStorageService;
        this.n = 1;
        this.loadTvShowList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["TvShowListActionTypes"].LoadTvShowList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.getShowList()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tvShowList) { return new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadTvShowListSuccess"](_this.sort(tvShowList)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadTvShowListError"]("Can't load(((")); })); }));
        this.loadNextPage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["TvShowListActionTypes"].LoadNextPage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.loadNextPage()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tvShowList) { return new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextPageSuccess"](_this.sort(tvShowList)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextPageError"]("Can't load(((")); })); }));
        this.getSearchResults$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["TvShowListActionTypes"].SearchTvShow), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.getSearchResults(payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchData) { return new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["SearchTvShowSuccess"](searchData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["SearchTvShowError"]("Can't load(((")); })); }));
        this.getNextSearchResults$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["TvShowListActionTypes"].LoadNextSearchPage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.getNextSearchResults()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchData) { return new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextSearchPageSuccess"](searchData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadNextSearchPageError"]("Can't load(((")); })); }));
    }
    TvShowListEffects.prototype.getTvShowFromLocal = function () {
        return this._localStorageService.getTvShowListFromLocalStorage();
    };
    TvShowListEffects.prototype.sort = function (items) {
        var isInLib = [];
        for (var i = 0; i < items.results.length; i++) {
            for (var y = 0; y < this.getTvShowFromLocal().length; y++) {
                if (items.results[i].id === this.getTvShowFromLocal()[y].id) {
                    isInLib[i] = true;
                }
                else {
                    if (isInLib[i] == true) {
                        continue;
                    }
                    isInLib[i] = false;
                }
            }
        }
        return {
            isInLib: isInLib,
            items: items,
        };
    };
    TvShowListEffects.prototype.getShowList = function () {
        this.n = 1;
        return this.axiosDmitryService.getRequest(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["apiUrl"].showUrl + String(this.n)).then(function (resp) { return resp; }).catch(function (err) { return err; });
    };
    TvShowListEffects.prototype.loadNextPage = function () {
        this.n++;
        return this.axiosDmitryService.getRequest(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["apiUrl"].showUrl + String(this.n)).then(function (resp) { return resp; }).catch(function (err) { return err; });
    };
    TvShowListEffects.prototype.getSearchResults = function (action) {
        this.formState = action.payload;
        this.n = 1;
        var link = Object(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["getTvShowSearchLink"])(this.formState.title, this.formState.overview, this.n);
        var data = this.axiosDmitryService.getRequest(link).then(function (resp) { return resp; }).catch(function (err) { return err; });
        return data;
    };
    TvShowListEffects.prototype.getNextSearchResults = function () {
        this.n++;
        var link = Object(_services_api_config__WEBPACK_IMPORTED_MODULE_5__["getTvShowSearchLink"])(this.formState.title, this.formState.overview, this.n);
        var data = this.axiosDmitryService.getRequest(link).then(function (resp) { return resp; }).catch(function (err) { return err; });
        return data;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TvShowListEffects.prototype, "loadTvShowList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TvShowListEffects.prototype, "loadNextPage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TvShowListEffects.prototype, "getSearchResults$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TvShowListEffects.prototype, "getNextSearchResults$", void 0);
    TvShowListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_axios_dmitry_service__WEBPACK_IMPORTED_MODULE_3__["AxiosDmitryService"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]])
    ], TvShowListEffects);
    return TvShowListEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/films-list.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/reducers/films-list.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/film-list.actions */ "./src/app/store/actions/film-list.actions.ts");


var initialState = {
    movieResults: [],
    isInLib: [],
    isItemInLib: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadFilmLists:
            return state;
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadFilmListsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movieResults: action.payload.items.results, isInLib: action.payload.isInLib });
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadFilmListsError:
            return action.payload;
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadNextPage:
            return state;
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadNextPageSuccess:
            var itemsList = action.payload.items.results;
            var updatedList = state.movieResults.concat(itemsList);
            var isInLibItems = action.payload.isInLib;
            var updIsInLib = state.isInLib.concat(isInLibItems);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movieResults: updatedList, isInLib: updIsInLib });
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].UpdateIsInLocal:
            var item = action.payload;
            var changeVal = state.movieResults.indexOf(item);
            state.isInLib[changeVal] = true;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].SearchFilms:
            return state;
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].SearchFilmsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movieResults: action.payload.results });
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadNextSearchPage:
            return state;
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadNextSearchPageSuccess:
            var itemList = action.payload.results;
            var updatedItemList = state.movieResults.concat(itemList);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movieResults: updatedItemList });
        case _actions_film_list_actions__WEBPACK_IMPORTED_MODULE_1__["FilmListActionTypes"].LoadNextSearchPageError:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        default:
            return state;
    }
    ;
}


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _films_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./films-list.reducer */ "./src/app/store/reducers/films-list.reducer.ts");
/* harmony import */ var _tv_shows_list_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tv-shows-list.reducer */ "./src/app/store/reducers/tv-shows-list.reducer.ts");
/* harmony import */ var _movieDB_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movieDB.reducer */ "./src/app/store/reducers/movieDB.reducer.ts");




var reducers = {
    filmsList: _films_list_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    tvShowList: _tv_shows_list_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    movieDb: _movieDB_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/store/reducers/movieDB.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/movieDB.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/movieDB.actions */ "./src/app/store/actions/movieDB.actions.ts");


var initialState = {
    movieToSubscribe: null,
    tvShowToSubscribe: null,
    localMovieList: [],
    localTvShowList: [],
    isMovieInLib: null,
    isTvShowInLib: null,
    librarySubscribe: null,
    ShowAddMovie: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].SubscribeMovie:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { movieToSubscribe: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].SubscribeTvShow:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tvShowToSubscribe: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].SetMovieListToLocalStorage:
            return state;
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].SetMovieListToLocalStorageSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { localMovieList: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].GetMovieListFromLocalStorage:
            return state;
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].GetMovieListFromLocalStorageSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { localMovieList: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].SetTvShowListToLocalStorage:
            return state;
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].SetTvShowListToLocalStorageSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { localTvShowList: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].GetTvShowListFromLocalStorage:
            return state;
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].GetTvShowListFromLocalStorageSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { localTvShowList: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].RemoveMovie:
            return state;
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].RemoveTvShow:
            return state;
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].IsMovieInLibrary:
            var movieVal = false;
            for (var l = 0; l < state.localMovieList.length; l++) {
                if (Number(state.localMovieList[l].id) === Number(state.movieToSubscribe.id)) {
                    movieVal = true;
                }
                continue;
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isMovieInLib: movieVal });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].IsTvShowInLibrary:
            var tvShowVal = false;
            for (var i = 0; i < state.localTvShowList.length; i++) {
                if (Number(state.localTvShowList[i].id) === Number(state.tvShowToSubscribe.id)) {
                    tvShowVal = true;
                }
                continue;
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isTvShowInLib: tvShowVal });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].LibrarySubscribe:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { librarySubscribe: action.payload });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].ToggleAddMovie:
            var updRes = void 0;
            if (state.ShowAddMovie === false) {
                updRes = true;
            }
            else {
                updRes = false;
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ShowAddMovie: updRes });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].HideAddMovie:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ShowAddMovie: false });
        case _actions_movieDB_actions__WEBPACK_IMPORTED_MODULE_1__["MovieDbActionTypes"].AddMovie:
            return state;
        default:
            return state;
    }
    ;
}


/***/ }),

/***/ "./src/app/store/reducers/tv-shows-list.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/reducers/tv-shows-list.reducer.ts ***!
  \*********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/tv-shows-list.actions */ "./src/app/store/actions/tv-shows-list.actions.ts");


var initialState = {
    tvShowResults: [],
    isInLib: [],
    isItemInLib: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadTvShowList:
            return state;
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadTvShowListSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tvShowResults: action.payload.items.results, isInLib: action.payload.isInLib });
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadTvShowListError:
            return action.payload;
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadNextPage:
            return state;
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadNextPageSuccess:
            var itemsList = action.payload.items.results;
            var updatedList = state.tvShowResults.concat(itemsList);
            var isInLibItems = action.payload.isInLib;
            var updIsInLib = state.isInLib.concat(isInLibItems);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tvShowResults: updatedList, isInLib: updIsInLib });
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadTvShowListError:
            return action.payload;
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].UpdateIsInLocal:
            var item = action.payload;
            var changeVal = state.tvShowResults.indexOf(item);
            state.isInLib[changeVal] = true;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].SearchTvShow:
            return state;
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].SearchTvShowSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tvShowResults: action.payload.results });
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadNextSearchPage:
            return state;
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadNextSearchPageSuccess:
            var itemList = action.payload.results;
            var updatedItemList = state.tvShowResults.concat(itemList);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tvShowResults: updatedItemList });
        case _actions_tv_shows_list_actions__WEBPACK_IMPORTED_MODULE_1__["TvShowListActionTypes"].LoadNextSearchPageError:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        default:
            return state;
    }
    ;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\EPAM_FE_Project\movieDB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map