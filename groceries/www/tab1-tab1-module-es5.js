(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!--<ion-item-sliding *ngFor=\"let item of items\">\n      <ion-item>\n        <ion-label>\n          <h2>{{item.name}}</h2>\n          <p>{{item.quantity}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <button (click)=\"removeItem(item)\" ion-button color=\"secondary\" icon-start>\n          <ion-icon name=\"trash\"></ion-icon>\n            Done\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>-->\n    <ion-item-sliding>\n        <ion-item>\n          <ion-label>\n            <h2>Bread</h2>\n            <p>2</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <button ion-button color=\"secondary\" icon-start>\n            <ion-icon name=\"trash\"></ion-icon>\n            Done\n          </button>\n        </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n          <ion-label>\n              <h2>Apples</h2>\n              <p>3</p>\n            </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color=\"secondary\" icon-start>\n          <ion-icon name=\"trash\"></ion-icon>\n            Done\n        </button>\n      </ion-item-options>\n    </ion-item-sliding><ion-item-sliding>\n      <ion-item>\n          <ion-label>\n              <h2>Pork Chops</h2>\n              <p>2</p>\n            </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color=\"secondary\" icon-start>\n          <ion-icon name=\"trash\"></ion-icon>\n            Done\n        </button>\n      </ion-item-options>\n    </ion-item-sliding><ion-item-sliding>\n      <ion-item>\n          <ion-label>\n              <h2>Chips</h2>\n              <p>5</p>\n            </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color=\"secondary\" icon-start>\n          <ion-icon name=\"trash\"></ion-icon>\n            Done\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teW1hYy9Eb2N1bWVudHMvc3dkdjY2NS9ncm9jZXJpZXMvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

/*import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  title = "Grocery"
  
  items = [
    {
      name: 'Milk',
      quantity: 1
    },
    {
      name: 'Bread',
      quantity: 2
    },
    {
      name: 'Apples',
      quantity: 3
    },
    {
      name: 'Pork chops',
      quantity: 2
    },
    {
      name: 'Chips',
      quantity: 5
    },
  ];
  
  constructor(public toastCtrl: ToastController) {

  }

  // Remove Item
  /*async removeItem(item) {
    console.log("Removing Item - ", item);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
      });
    toast.present();
  } */




var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [
            {
                itemName: 'Almond Milk',
                qty: 1
            },
            {
                itemName: 'Whole Grain Bread',
                qty: 2
            },
            {
                itemName: 'Eggs',
                qty: 1
            },
            {
                itemName: 'Asparagus',
                qty: 3
            },
            {
                itemName: 'Turkey Bacon',
                qty: 2
            },
        ];
    }
    Tab1Page.prototype.addItem = function () {
        console.log('Adding Item...');
        this.presentAlert();
    };
    Tab1Page.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Add Item to the List',
                            message: 'Specify the item and quantity',
                            inputs: [
                                {
                                    name: 'itemName',
                                    placeholder: 'Item Name'
                                },
                                {
                                    name: 'qty',
                                    placeholder: 'Quantity'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Save',
                                    handler: function (item) {
                                        console.log('Saved clicked', item);
                                        _this.items.push(item);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.removeItem = function (n, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Remove Item - ', n, index);
                        toast = this.toastCtrl.create({
                            message: 'Deleting Item - ' + n.itemName + ' ...',
                            duration: 3000
                        });
                        return [4 /*yield*/, toast];
                    case 1:
                        (_a.sent()).present();
                        this.items.splice(index, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map