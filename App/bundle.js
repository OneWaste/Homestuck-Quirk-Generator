(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Alternia = void 0;
var Category_1 = require("./Category");
var Aradia_1 = require("../Quirks/Alternia/Aradia");
var Tavros_1 = require("../Quirks/Alternia/Tavros");
var Sollux_1 = require("../Quirks/Alternia/Sollux");
var Karkat_1 = require("../Quirks/Alternia/Karkat");
var Nepeta_1 = require("../Quirks/Alternia/Nepeta");
var Kanaya_1 = require("../Quirks/Alternia/Kanaya");
var Terezi_1 = require("../Quirks/Alternia/Terezi");
var Vriska_1 = require("../Quirks/Alternia/Vriska");
var Equius_1 = require("../Quirks/Alternia/Equius");
var Gamzee_1 = require("../Quirks/Alternia/Gamzee");
var Eridan_1 = require("../Quirks/Alternia/Eridan");
var Feferi_1 = require("../Quirks/Alternia/Feferi");
var Alternia = /** @class */ (function (_super) {
    __extends(Alternia, _super);
    function Alternia() {
        var _this = _super.call(this, "Alternia", "Alternian Trolls only") || this;
        _this.quirks.push(new Aradia_1.Aradia());
        _this.quirks.push(new Tavros_1.Tavros());
        _this.quirks.push(new Sollux_1.Sollux());
        _this.quirks.push(new Karkat_1.Karkat());
        _this.quirks.push(new Nepeta_1.Nepeta());
        _this.quirks.push(new Kanaya_1.Kanaya());
        _this.quirks.push(new Terezi_1.Terezi());
        _this.quirks.push(new Vriska_1.Vriska());
        _this.quirks.push(new Equius_1.Equius());
        _this.quirks.push(new Gamzee_1.Gamzee());
        _this.quirks.push(new Eridan_1.Eridan());
        _this.quirks.push(new Feferi_1.Feferi());
        return _this;
    }
    return Alternia;
}(Category_1.Category));
exports.Alternia = Alternia;

},{"../Quirks/Alternia/Aradia":9,"../Quirks/Alternia/Equius":10,"../Quirks/Alternia/Eridan":11,"../Quirks/Alternia/Feferi":12,"../Quirks/Alternia/Gamzee":13,"../Quirks/Alternia/Kanaya":14,"../Quirks/Alternia/Karkat":15,"../Quirks/Alternia/Nepeta":16,"../Quirks/Alternia/Sollux":17,"../Quirks/Alternia/Tavros":18,"../Quirks/Alternia/Terezi":19,"../Quirks/Alternia/Vriska":20,"./Category":3}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Beforus = void 0;
var Category_1 = require("./Category");
var Rufioh_1 = require("../Quirks/Beforus/Rufioh");
var Mituna_1 = require("../Quirks/Beforus/Mituna");
var Cronus_1 = require("../Quirks/Beforus/Cronus");
var Horuss_1 = require("../Quirks/Beforus/Horuss");
var Aranea_1 = require("../Quirks/Beforus/Aranea");
var Porrim_1 = require("../Quirks/Beforus/Porrim");
var Latula_1 = require("../Quirks/Beforus/Latula");
var Meenah_1 = require("../Quirks/Beforus/Meenah");
var Kurloz_1 = require("../Quirks/Beforus/Kurloz");
var Kankri_1 = require("../Quirks/Beforus/Kankri");
var Meulin_1 = require("../Quirks/Beforus/Meulin");
var Beforus = /** @class */ (function (_super) {
    __extends(Beforus, _super);
    function Beforus() {
        var _this = _super.call(this, "Beforus", "Beforus Trolls only") || this;
        _this.quirks.push(new Rufioh_1.Rufioh());
        _this.quirks.push(new Mituna_1.Mituna());
        _this.quirks.push(new Kankri_1.Kankri());
        _this.quirks.push(new Meulin_1.Meulin());
        _this.quirks.push(new Porrim_1.Porrim());
        _this.quirks.push(new Latula_1.Latula());
        _this.quirks.push(new Aranea_1.Aranea());
        _this.quirks.push(new Horuss_1.Horuss());
        _this.quirks.push(new Kurloz_1.Kurloz());
        _this.quirks.push(new Cronus_1.Cronus());
        _this.quirks.push(new Meenah_1.Meenah());
        return _this;
    }
    return Beforus;
}(Category_1.Category));
exports.Beforus = Beforus;

},{"../Quirks/Beforus/Aranea":21,"../Quirks/Beforus/Cronus":22,"../Quirks/Beforus/Horuss":23,"../Quirks/Beforus/Kankri":24,"../Quirks/Beforus/Kurloz":25,"../Quirks/Beforus/Latula":26,"../Quirks/Beforus/Meenah":27,"../Quirks/Beforus/Meulin":28,"../Quirks/Beforus/Mituna":29,"../Quirks/Beforus/Porrim":30,"../Quirks/Beforus/Rufioh":31,"./Category":3}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.list = exports.Category = void 0;
var CookieManager_1 = require("../CookieManager");
var Tab_1 = require("../Templates/Tab");
var TabAnchor_1 = require("../Templates/TabAnchor");
var Category = /** @class */ (function () {
    function Category(tabName, onlyBtnName) {
        this.tabName = tabName;
        this.onlyButtonName = onlyBtnName;
        this.quirks = new Array();
        this.optionalCheckboxes = new Array();
    }
    Category.prototype.render = function () {
        var _this = this;
        var low = this.tabName.toLocaleLowerCase();
        // The tab anchor.
        document.getElementById("tab-anchors").insertAdjacentHTML("beforeend", TabAnchor_1.renderHTML(this.tabName));
        // Add event to anchor.
        document.getElementById(this.tabName.toLocaleLowerCase() + "-tab-anchor").onclick = Category.openTabCallback;
        // The tab's content.
        document.getElementById("tab-section").insertAdjacentHTML('beforeend', Tab_1.renderHTML(this.tabName));
        // Button to select this category only.
        var btn = document.createElement("a");
        btn.classList.add("center-align", "col", "s12", "btn-flat", "waves-effect", "waves-light");
        btn.innerText = "Enable this category only";
        btn.onclick = function (e) { return _this.toggleCat(true, low); };
        document.getElementById(this.tabName.toLocaleLowerCase() + "-tab").insertAdjacentElement('afterbegin', btn);
        for (var i = 0; i < this.quirks.length; i++) {
            this.quirks[i].render(this);
        }
    };
    Category.prototype.getMainCheckboxSetElement = function () {
        return document.getElementById(this.tabName.toLocaleLowerCase() + "-checkboxes");
    };
    Category.prototype.getOptionalCheckboxSetElement = function () {
        return document.getElementById(this.tabName.toLocaleLowerCase() + "-optional-table");
    };
    Category.openTabCallback = function (event) {
        var id = event.currentTarget.id;
        CookieManager_1.setCookieStr("currentTab", id, 31);
    };
    Category.prototype.toggleCat = function (finalState, tabName, disableOthers) {
        if (disableOthers === void 0) { disableOthers = true; }
        if (disableOthers) {
            Category.toggleAll(false);
            document.getElementById(tabName + "-tab").click();
        }
        for (var i = 0; i < this.quirks.length; i++) {
            // Don't just set the checked boolean directly because that prevents event firing.
            if (this.quirks[i].activeCheckbox.checked != finalState) {
                this.quirks[i].activeCheckbox.click();
            }
        }
    };
    Category.toggleAll = function (finalState) {
        for (var i = 0; i < exports.list.length; i++) {
            exports.list[i].toggleCat(finalState, exports.list[i].tabName.toLocaleLowerCase(), false);
        }
    };
    return Category;
}());
exports.Category = Category;
exports.list = new Array();

},{"../CookieManager":7,"../Templates/Tab":75,"../Templates/TabAnchor":76}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cherubs = void 0;
var Category_1 = require("./Category");
var Caliborn_1 = require("../Quirks/Cherubs/Caliborn");
var Calliope_1 = require("../Quirks/Cherubs/Calliope");
var Cherubs = /** @class */ (function (_super) {
    __extends(Cherubs, _super);
    function Cherubs() {
        var _this = _super.call(this, "Cherubs", "Cherubs only") || this;
        _this.quirks.push(new Caliborn_1.Caliborn());
        _this.quirks.push(new Calliope_1.Calliope());
        return _this;
    }
    return Cherubs;
}(Category_1.Category));
exports.Cherubs = Cherubs;

},{"../Quirks/Cherubs/Caliborn":32,"../Quirks/Cherubs/Calliope":33,"./Category":3}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Hiveswap = void 0;
var Category_1 = require("./Category");
var Daraya_1 = require("../Quirks/Hiveswap/Daraya");
var Stelsa_1 = require("../Quirks/Hiveswap/Stelsa");
var Kuprum_1 = require("../Quirks/Hiveswap/Kuprum");
var Baizil_1 = require("../Quirks/Hiveswap/Baizil");
var Remele_1 = require("../Quirks/Hiveswap/Remele");
var Bronya_1 = require("../Quirks/Hiveswap/Bronya");
var Karako_1 = require("../Quirks/Hiveswap/Karako");
var Polypa_1 = require("../Quirks/Hiveswap/Polypa");
var Tirona_1 = require("../Quirks/Hiveswap/Tirona");
var Amisia_1 = require("../Quirks/Hiveswap/Amisia");
var Lanque_1 = require("../Quirks/Hiveswap/Lanque");
var Barzum_1 = require("../Quirks/Hiveswap/Barzum");
var Xefros_1 = require("../Quirks/Hiveswap/Xefros");
var Folykl_1 = require("../Quirks/Hiveswap/Folykl");
var Ardata_1 = require("../Quirks/Hiveswap/Ardata");
var Marsti_1 = require("../Quirks/Hiveswap/Marsti");
var Azdaja_1 = require("../Quirks/Hiveswap/Azdaja");
var Zebede_1 = require("../Quirks/Hiveswap/Zebede");
var Fozzer_1 = require("../Quirks/Hiveswap/Fozzer");
var Lynera_1 = require("../Quirks/Hiveswap/Lynera");
var Boldir_1 = require("../Quirks/Hiveswap/Boldir");
var Vikare_1 = require("../Quirks/Hiveswap/Vikare");
var Nihkee_1 = require("../Quirks/Hiveswap/Nihkee");
var Chixie_1 = require("../Quirks/Hiveswap/Chixie");
var Chahut_1 = require("../Quirks/Hiveswap/Chahut");
var Wanshi_1 = require("../Quirks/Hiveswap/Wanshi");
var Mallek_1 = require("../Quirks/Hiveswap/Mallek");
var Diemen_1 = require("../Quirks/Hiveswap/Diemen");
var Trizza_1 = require("../Quirks/Hiveswap/Trizza");
var Tagora_1 = require("../Quirks/Hiveswap/Tagora");
var Tegiri_1 = require("../Quirks/Hiveswap/Tegiri");
var Skylla_1 = require("../Quirks/Hiveswap/Skylla");
var Zebruh_1 = require("../Quirks/Hiveswap/Zebruh");
var Elwurd_1 = require("../Quirks/Hiveswap/Elwurd");
var Tyzias_1 = require("../Quirks/Hiveswap/Tyzias");
var Hiveswap = /** @class */ (function (_super) {
    __extends(Hiveswap, _super);
    function Hiveswap() {
        var _this = _super.call(this, "Hiveswap", "Hiveswap Trolls only") || this;
        _this.quirks.push(new Xefros_1.Xefros());
        _this.quirks.push(new Trizza_1.Trizza());
        _this.quirks.push(new Diemen_1.Diemen());
        _this.quirks.push(new Ardata_1.Ardata());
        _this.quirks.push(new Amisia_1.Amisia());
        _this.quirks.push(new Skylla_1.Skylla());
        _this.quirks.push(new Bronya_1.Bronya());
        _this.quirks.push(new Tagora_1.Tagora());
        _this.quirks.push(new Vikare_1.Vikare());
        _this.quirks.push(new Polypa_1.Polypa());
        _this.quirks.push(new Zebruh_1.Zebruh());
        _this.quirks.push(new Elwurd_1.Elwurd());
        _this.quirks.push(new Kuprum_1.Kuprum());
        _this.quirks.push(new Folykl_1.Folykl());
        _this.quirks.push(new Remele_1.Remele());
        _this.quirks.push(new Tyzias_1.Tyzias());
        _this.quirks.push(new Chixie_1.Chixie());
        _this.quirks.push(new Azdaja_1.Azdaja());
        _this.quirks.push(new Chahut_1.Chahut());
        _this.quirks.push(new Zebede_1.Zebede());
        _this.quirks.push(new Tegiri_1.Tegiri());
        _this.quirks.push(new Mallek_1.Mallek());
        _this.quirks.push(new Lynera_1.Lynera());
        _this.quirks.push(new Tirona_1.Tirona());
        _this.quirks.push(new Boldir_1.Boldir());
        _this.quirks.push(new Stelsa_1.Stelsa());
        _this.quirks.push(new Marsti_1.Marsti());
        _this.quirks.push(new Karako_1.Karako());
        _this.quirks.push(new Wanshi_1.Wanshi());
        _this.quirks.push(new Fozzer_1.Fozzer());
        _this.quirks.push(new Daraya_1.Daraya());
        _this.quirks.push(new Nihkee_1.Nihkee());
        _this.quirks.push(new Lanque_1.Lanque());
        _this.quirks.push(new Barzum_1.Barzum());
        _this.quirks.push(new Baizil_1.Baisil());
        return _this;
    }
    return Hiveswap;
}(Category_1.Category));
exports.Hiveswap = Hiveswap;

},{"../Quirks/Hiveswap/Amisia":34,"../Quirks/Hiveswap/Ardata":35,"../Quirks/Hiveswap/Azdaja":36,"../Quirks/Hiveswap/Baizil":37,"../Quirks/Hiveswap/Barzum":38,"../Quirks/Hiveswap/Boldir":39,"../Quirks/Hiveswap/Bronya":40,"../Quirks/Hiveswap/Chahut":41,"../Quirks/Hiveswap/Chixie":42,"../Quirks/Hiveswap/Daraya":43,"../Quirks/Hiveswap/Diemen":44,"../Quirks/Hiveswap/Elwurd":45,"../Quirks/Hiveswap/Folykl":46,"../Quirks/Hiveswap/Fozzer":47,"../Quirks/Hiveswap/Karako":48,"../Quirks/Hiveswap/Kuprum":49,"../Quirks/Hiveswap/Lanque":50,"../Quirks/Hiveswap/Lynera":51,"../Quirks/Hiveswap/Mallek":52,"../Quirks/Hiveswap/Marsti":53,"../Quirks/Hiveswap/Nihkee":54,"../Quirks/Hiveswap/Polypa":55,"../Quirks/Hiveswap/Remele":56,"../Quirks/Hiveswap/Skylla":57,"../Quirks/Hiveswap/Stelsa":58,"../Quirks/Hiveswap/Tagora":59,"../Quirks/Hiveswap/Tegiri":60,"../Quirks/Hiveswap/Tirona":61,"../Quirks/Hiveswap/Trizza":62,"../Quirks/Hiveswap/Tyzias":63,"../Quirks/Hiveswap/Vikare":64,"../Quirks/Hiveswap/Wanshi":65,"../Quirks/Hiveswap/Xefros":66,"../Quirks/Hiveswap/Zebede":67,"../Quirks/Hiveswap/Zebruh":68,"./Category":3}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sprites = void 0;
var Category_1 = require("./Category");
var Tavrisprite_1 = require("../Quirks/Sprites/Tavrisprite");
var Erisolsprite_1 = require("../Quirks/Sprites/Erisolsprite");
var Sprites = /** @class */ (function (_super) {
    __extends(Sprites, _super);
    function Sprites() {
        var _this = _super.call(this, "Sprites", "Sprites only") || this;
        _this.quirks.push(new Tavrisprite_1.Tavrisprite());
        _this.quirks.push(new Erisolsprite_1.Erisolsprite());
        return _this;
    }
    return Sprites;
}(Category_1.Category));
exports.Sprites = Sprites;

},{"../Quirks/Sprites/Erisolsprite":72,"../Quirks/Sprites/Tavrisprite":73,"./Category":3}],7:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.setCookieStr = exports.setCookieBool = exports.loadCookiesData = void 0;
var Category_1 = require("./QuirkSet/Category");
function loadCookiesData() {
    // Enabled/disabled checkboxes.
    for (var i = 0; i < Category_1.list.length; i++) {
        for (var j = 0; j < Category_1.list[i].quirks.length; j++) {
            var id = Category_1.list[i].quirks[j].getID();
            if (getCookie(id, "true") != "true") {
                Category_1.list[i].quirks[j].activeCheckbox.click();
            }
            for (var k = 0; k < Category_1.list[i].quirks[j].optionalCheckboxes.length; k++) {
                var cookieName = id + Category_1.list[i].quirks[j].optionalCheckboxes[k].getID();
                var defVal = Category_1.list[i].quirks[j].optionalCheckboxes[k].isChecked().toString();
                if (getCookie(cookieName, defVal) != defVal) {
                    Category_1.list[i].quirks[j].optionalCheckboxes[k].click();
                }
            }
        }
    }
    // Selected tab.
    var tabId = getCookie("currentTab", "alternia-tab-anchor");
    document.getElementById(tabId).click();
}
exports.loadCookiesData = loadCookiesData;
function setCookieBool(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
exports.setCookieBool = setCookieBool;
function setCookieStr(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
exports.setCookieStr = setCookieStr;
function getCookie(cname, defaultValue) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return defaultValue;
}

},{"./Categories/Category":3}],8:[function(require,module,exports){
"use strict";
/* Cool Javascript Copy to Clipboard Crossbrowser
Written by Jeff Baker on March 18, 2016, modified by me.
Copyright 2016 by Jeff Baker -
http://www.seabreezecomputers.com/tips/copy2clipboard.htm
*/
exports.__esModule = true;
exports.selectAllAndCopy = void 0;
var toastTip = null;
function tooltip(el, message) {
    if (toastTip == null || toastTip.options.html != message) {
        toastTip = M.toast({
            html: message,
            completeCallback: tooltipCompleteCallback
        });
    }
}
function tooltipCompleteCallback() {
    toastTip = null;
}
function selectAllAndCopy(evt) {
    var el = evt.currentTarget;
    if (!document.getElementById("toggleCopyToClipboard").checked || el.value.length < 1) {
        return;
    }
    if (window.getSelection && document.createRange) {
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
        el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
        el.readOnly = false; // iOS will not select in a read only form element
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.addRange(range);
        // Does not work for Firefox if a textarea or input
        // Firefox will only select a form element with select()
        if (el.nodeName === "TEXTAREA" || el.nodeName === "INPUT") {
            el.select();
        }
        // iOS only selects "form" elements with SelectionRange
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            el.setSelectionRange(0, 999999);
        }
        // Restore previous contentEditable and readOnly states.
        el.contentEditable = editable;
        el.readOnly = readOnly;
        if (document.queryCommandSupported("copy")) {
            var successful = document.execCommand("copy");
            if (successful) {
                tooltip(el, "Copied to clipboard.");
            }
            else {
                tooltip(el, "Press CTRL+C to copy");
            }
        }
        else {
            if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i)) {
                tooltip(el, "Press CTRL+C to copy");
            }
        }
    }
}
exports.selectAllAndCopy = selectAllAndCopy;

},{}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Aradia = void 0;
var Quirk_1 = require("../Quirk");
var Aradia = /** @class */ (function (_super) {
    __extends(Aradia, _super);
    function Aradia() {
        var _this = _super.call(this, "Aradia Medigo") || this;
        _this.dead = _this.addCheckbox("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
        return _this;
    }
    Aradia.prototype.quirkify = function () {
        this.lowerCase();
        if (this.dead.isChecked()) {
            this.replaceString("o", "0");
            if (Math.random() <= 0.1) {
                this.suffix(" ribbit");
            }
        }
    };
    return Aradia;
}(Quirk_1.Quirk));
exports.Aradia = Aradia;

},{"../Quirk":70}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Equius = void 0;
var Quirk_1 = require("../Quirk");
var Equius = /** @class */ (function (_super) {
    __extends(Equius, _super);
    function Equius() {
        return _super.call(this, "Equius Zahhak") || this;
    }
    Equius.prototype.quirkify = function () {
        this.replaceString("x", "%");
        this.replaceMatchCase("nay", "neigh");
        this.replaceCaseInsensitive("loo", "100");
        this.replaceCaseInsensitive("loo", "100");
        this.upperCase("STRONG");
        this.prefix("D --> ");
    };
    return Equius;
}(Quirk_1.Quirk));
exports.Equius = Equius;

},{"../Quirk":70}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Eridan = void 0;
var Quirk_1 = require("../Quirk");
var Eridan = /** @class */ (function (_super) {
    __extends(Eridan, _super);
    function Eridan() {
        return _super.call(this, "Eridan Ampora") || this;
    }
    Eridan.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
    };
    return Eridan;
}(Quirk_1.Quirk));
exports.Eridan = Eridan;

},{"../Quirk":70}],12:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Feferi = void 0;
var Quirk_1 = require("../Quirk");
var Feferi = /** @class */ (function (_super) {
    __extends(Feferi, _super);
    function Feferi() {
        var _this = _super.call(this, "Feferi Peixes") || this;
        _this.puns = _this.addCheckbox("Fish Puns", "Shellf-explanatory!", true);
        return _this;
    }
    Feferi.prototype.quirkify = function () {
        if (this.puns.isChecked()) {
            this.applyFishPuns();
        }
        this.replaceString("[Hh]", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    };
    return Feferi;
}(Quirk_1.Quirk));
exports.Feferi = Feferi;

},{"../Quirk":70}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Gamzee = void 0;
var Quirk_1 = require("../Quirk");
var Gamzee = /** @class */ (function (_super) {
    __extends(Gamzee, _super);
    function Gamzee() {
        return _super.call(this, "Gamzee Makara") || this;
    }
    Gamzee.prototype.quirkify = function () {
        this.applyAlternatingCaps();
        this.replaceEmotes("$1o$2");
    };
    Gamzee.prototype.applyAlternatingCaps = function () {
        var result = "";
        var cap = true;
        for (var i = 0; i < this.input.length; i++) {
            var c = this.input.charAt(i);
            if (c.match(/\w/i)) {
                result += cap ? c.toLocaleUpperCase() : c.toLocaleLowerCase();
                cap = !cap;
            }
            else {
                result += c;
            }
        }
        this.input = result;
    };
    return Gamzee;
}(Quirk_1.Quirk));
exports.Gamzee = Gamzee;

},{"../Quirk":70}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Kanaya = void 0;
var Quirk_1 = require("../Quirk");
var Kanaya = /** @class */ (function (_super) {
    __extends(Kanaya, _super);
    function Kanaya() {
        return _super.call(this, "Kanaya Maryam") || this;
    }
    Kanaya.prototype.quirkify = function () {
        // Any letter with whitespace preceding.
        var cap1 = "\\s";
        // Any letter at the start of the string.
        var cap2 = "^";
        // Any letter preceded by punctuation (except ' and `).
        var cap3 = "[.,!?\\/\\\|]";
        // Any of the above succeeded by a ' or `.
        // All of this is to distinguish between a word wrapped in single quotes and a contraction.
        var cap4 = cap1 + "['`]";
        var cap5 = cap2 + "['`]";
        var cap6 = cap3 + "['`]";
        cap1 += "\\w";
        cap2 += "\\w";
        cap3 += "\\w";
        cap4 += "\\w";
        cap5 += "\\w";
        cap6 += "\\w";
        this.upperCase("(" + cap1 + "|" + cap2 + "|" + cap3 + "|" + cap4 + "|" + cap5 + "|" + cap6 + ")");
    };
    return Kanaya;
}(Quirk_1.Quirk));
exports.Kanaya = Kanaya;

},{"../Quirk":70}],15:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Karkat = void 0;
var Quirk_1 = require("../Quirk");
var Karkat = /** @class */ (function (_super) {
    __extends(Karkat, _super);
    function Karkat() {
        return _super.call(this, "Karkat Vantas") || this;
    }
    Karkat.prototype.quirkify = function () {
        this.upperCase();
    };
    return Karkat;
}(Quirk_1.Quirk));
exports.Karkat = Karkat;

},{"../Quirk":70}],16:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Nepeta = void 0;
var Quirk_1 = require("../Quirk");
var Nepeta = /** @class */ (function (_super) {
    __extends(Nepeta, _super);
    function Nepeta() {
        var _this = _super.call(this, "Nepeta Leijon") || this;
        _this.puns = _this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
        return _this;
    }
    Nepeta.prototype.quirkify = function () {
        this.lowerCase();
        if (this.puns.isChecked()) {
            this.applyCatPuns();
        }
        this.replaceString("ee", "33");
        this.prefix(":33 < ");
    };
    return Nepeta;
}(Quirk_1.Quirk));
exports.Nepeta = Nepeta;

},{"../Quirk":70}],17:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sollux = void 0;
var Quirk_1 = require("../Quirk");
var Sollux = /** @class */ (function (_super) {
    __extends(Sollux, _super);
    function Sollux() {
        var _this = _super.call(this, "Sollux Captor") || this;
        _this.dead = _this.addCheckbox("Dead Quirk", "Sollux's typing quirk used when he is dead (o --> 0).");
        return _this;
    }
    Sollux.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
        this.replaceWord("(too|to)", "two");
        if (this.dead.isChecked()) {
            this.replaceString("o", "0");
        }
    };
    return Sollux;
}(Quirk_1.Quirk));
exports.Sollux = Sollux;

},{"../Quirk":70}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tavros = void 0;
var Quirk_1 = require("../Quirk");
var Tavros = /** @class */ (function (_super) {
    __extends(Tavros, _super);
    function Tavros() {
        return _super.call(this, "Tavros Nitram") || this;
    }
    Tavros.prototype.quirkify = function () {
        this.upperCase();
        var arr = this.input.split(/[,.?!]/g);
        for (var i = 0; i < arr.length; i++) {
            // Only replace the first instance of a match.
            arr[i] = arr[i].replace(/(\s|^)(\w)/, function (chr) { return chr.toLocaleLowerCase(); });
        }
        this.input = arr.join(",");
        this.replaceEmotes("}$1$2");
    };
    return Tavros;
}(Quirk_1.Quirk));
exports.Tavros = Tavros;

},{"../Quirk":70}],19:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Terezi = void 0;
var Quirk_1 = require("../Quirk");
var Terezi = /** @class */ (function (_super) {
    __extends(Terezi, _super);
    function Terezi() {
        return _super.call(this, "Terezi Pyrope") || this;
    }
    Terezi.prototype.quirkify = function () {
        this.upperCase();
        this.replaceEmotes(">$1]");
        this.replaceString("A", "4");
        this.replaceString("I", "1");
        this.replaceString("E", "3");
    };
    return Terezi;
}(Quirk_1.Quirk));
exports.Terezi = Terezi;

},{"../Quirk":70}],20:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Vriska = void 0;
var Quirk_1 = require("../Quirk");
var Vriska = /** @class */ (function (_super) {
    __extends(Vriska, _super);
    function Vriska() {
        var _this = _super.call(this, "Vriska Serket") || this;
        _this.words = _this.addCheckbox("Syllables to '8'", "Vriska's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", true);
        _this.vowels = _this.addCheckbox("Random Vowel Swaps", "Vriska's arbitrary conversion of vowels to the number '8'.", false);
        return _this;
    }
    Vriska.prototype.quirkify = function () {
        this.replaceString("[Bb]", "8");
        this.replaceEmotes(":::$1$2");
        if (this.words.isChecked()) {
            this.replaceCaseInsensitive("ate", "8");
            this.replaceCaseInsensitive("ait", "8");
            this.replaceWordMatchCase("great", "gr8");
        }
        if (this.vowels.isChecked()) {
            this.randomReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    };
    return Vriska;
}(Quirk_1.Quirk));
exports.Vriska = Vriska;

},{"../Quirk":70}],21:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Aranea = void 0;
var Quirk_1 = require("../Quirk");
var Aranea = /** @class */ (function (_super) {
    __extends(Aranea, _super);
    function Aranea() {
        var _this = _super.call(this, "Aranea Serket", "vriska") || this;
        _this.words = _this.addCheckbox("Syllables to '8'", "Aranea's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", true);
        _this.vowels = _this.addCheckbox("Random Vowel Swaps", "Aranea's arbitrary conversion of vowels to the number '8'.", false);
        return _this;
    }
    Aranea.prototype.quirkify = function () {
        this.replaceString("[Bb]", "8");
        if (this.words.isChecked()) {
            this.replaceCaseInsensitive("ate", "8");
            this.replaceWordMatchCase("great", "gr8");
        }
        if (this.vowels.isChecked()) {
            this.randomReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    };
    return Aranea;
}(Quirk_1.Quirk));
exports.Aranea = Aranea;

},{"../Quirk":70}],22:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cronus = void 0;
var Quirk_1 = require("../Quirk");
var Cronus = /** @class */ (function (_super) {
    __extends(Cronus, _super);
    function Cronus() {
        return _super.call(this, "Cronus Ampora", "eridan") || this;
    }
    Cronus.prototype.quirkify = function () {
        var reg = new RegExp("[wv]", "g");
        this.input = this.input.replace(reg, function (match) {
            if (Math.random() <= 0.5) {
                return "wv";
            }
            return "vw";
        });
        this.replaceString("B", "8");
    };
    return Cronus;
}(Quirk_1.Quirk));
exports.Cronus = Cronus;

},{"../Quirk":70}],23:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Horuss = void 0;
var Quirk_1 = require("../Quirk");
var Horuss = /** @class */ (function (_super) {
    __extends(Horuss, _super);
    function Horuss() {
        var _this = _super.call(this, "Horuss Zahhak", "equius") || this;
        _this.censor = _this.addCheckbox("Censor", "Censors f*cking swear words.", false);
        return _this;
    }
    Horuss.prototype.quirkify = function () {
        if (this.censor.isChecked()) {
            this.censorSwears(true);
        }
        this.replaceString("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    };
    return Horuss;
}(Quirk_1.Quirk));
exports.Horuss = Horuss;

},{"../Quirk":70}],24:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Kankri = void 0;
var Quirk_1 = require("../Quirk");
var Kankri = /** @class */ (function (_super) {
    __extends(Kankri, _super);
    function Kankri() {
        return _super.call(this, "Kankri Vantas") || this;
    }
    Kankri.prototype.quirkify = function () {
        this.replaceString("[Bb]", "6");
        this.replaceString("[Oo]", "9");
    };
    return Kankri;
}(Quirk_1.Quirk));
exports.Kankri = Kankri;

},{"../Quirk":70}],25:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Kurloz = void 0;
var Quirk_1 = require("../Quirk");
var Kurloz = /** @class */ (function (_super) {
    __extends(Kurloz, _super);
    function Kurloz() {
        return _super.call(this, "Kurloz Makara", "gamzee") || this;
    }
    Kurloz.prototype.quirkify = function () {
        this.upperCase();
    };
    return Kurloz;
}(Quirk_1.Quirk));
exports.Kurloz = Kurloz;

},{"../Quirk":70}],26:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Latula = void 0;
var Quirk_1 = require("../Quirk");
var Latula = /** @class */ (function (_super) {
    __extends(Latula, _super);
    function Latula() {
        return _super.call(this, "Latula Pyrope", "terezi") || this;
    }
    Latula.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("a", "4");
        this.replaceString("i", "1");
        this.replaceString("e", "3");
    };
    return Latula;
}(Quirk_1.Quirk));
exports.Latula = Latula;

},{"../Quirk":70}],27:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Meenah = void 0;
var Quirk_1 = require("../Quirk");
var Meenah = /** @class */ (function (_super) {
    __extends(Meenah, _super);
    function Meenah() {
        var _this = _super.call(this, "Meenah Peixes", "feferi") || this;
        _this.puns = _this.addCheckbox("Fish Puns", "Shellf-explanatory!", true);
        return _this;
    }
    Meenah.prototype.quirkify = function () {
        if (this.puns.isChecked()) {
            this.applyFishPuns();
        }
        this.replaceString("H", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    };
    return Meenah;
}(Quirk_1.Quirk));
exports.Meenah = Meenah;

},{"../Quirk":70}],28:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Meulin = void 0;
var Quirk_1 = require("../Quirk");
var Meulin = /** @class */ (function (_super) {
    __extends(Meulin, _super);
    function Meulin() {
        var _this = _super.call(this, "Meulin Leijon", "nepeta") || this;
        _this.puns = _this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
        return _this;
    }
    Meulin.prototype.quirkify = function () {
        this.upperCase();
        if (this.puns.isChecked()) {
            this.applyCatPuns();
        }
        this.replaceString("EE", "33");
        this.replaceString("OMG", "MOG");
    };
    return Meulin;
}(Quirk_1.Quirk));
exports.Meulin = Meulin;

},{"../Quirk":70}],29:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Mituna = void 0;
var Quirk_1 = require("../Quirk");
var Mituna = /** @class */ (function (_super) {
    __extends(Mituna, _super);
    function Mituna() {
        var _this = _super.call(this, "Mituna Captor", "sollux") || this;
        _this.sub = _this.addCheckbox("Random S/7 -> 7H", "Mituna's arbitrary conversion of 'S' and '7' to '7H'.", true);
        return _this;
    }
    Mituna.prototype.quirkify = function () {
        this.upperCase();
        if (this.sub.isChecked()) {
            this.randomReplace("[S7]", "7H", 0.1);
        }
        this.replaceString("A", "4");
        this.replaceString("B", "8");
        this.replaceString("E", "3");
        this.replaceString("I", "1");
        this.replaceString("O", "0");
        this.replaceString("S", "5");
        this.replaceString("T", "7");
    };
    return Mituna;
}(Quirk_1.Quirk));
exports.Mituna = Mituna;

},{"../Quirk":70}],30:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Porrim = void 0;
var Quirk_1 = require("../Quirk");
var Porrim = /** @class */ (function (_super) {
    __extends(Porrim, _super);
    function Porrim() {
        return _super.call(this, "Porrim Maryam", "kanaya") || this;
    }
    Porrim.prototype.quirkify = function () {
        this.replaceString("([0Oo])", "$1+");
        this.replaceCaseInsensitive("plus", "+");
    };
    return Porrim;
}(Quirk_1.Quirk));
exports.Porrim = Porrim;

},{"../Quirk":70}],31:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rufioh = void 0;
var Quirk_1 = require("../Quirk");
var Rufioh = /** @class */ (function (_super) {
    __extends(Rufioh, _super);
    function Rufioh() {
        var _this = _super.call(this, "Rufioh Nitram", "tavros") || this;
        _this.censor = _this.addCheckbox("Censor", "Censors f*cking swear words.", false);
        return _this;
    }
    Rufioh.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");
        if (this.censor.isChecked()) {
            this.censorSwears();
        }
        this.replaceString("i", "1");
        this.replaceEmotes("}$1$2");
    };
    return Rufioh;
}(Quirk_1.Quirk));
exports.Rufioh = Rufioh;

},{"../Quirk":70}],32:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Caliborn = void 0;
var Quirk_1 = require("../Quirk");
var Caliborn = /** @class */ (function (_super) {
    __extends(Caliborn, _super);
    function Caliborn() {
        return _super.call(this, "Caliborn") || this;
    }
    Caliborn.prototype.quirkify = function () {
        this.upperCase();
        this.replaceString("U", "u");
    };
    return Caliborn;
}(Quirk_1.Quirk));
exports.Caliborn = Caliborn;

},{"../Quirk":70}],33:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Calliope = void 0;
var Quirk_1 = require("../Quirk");
var Calliope = /** @class */ (function (_super) {
    __extends(Calliope, _super);
    function Calliope() {
        return _super.call(this, "Calliope") || this;
    }
    Calliope.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("u", "U");
    };
    return Calliope;
}(Quirk_1.Quirk));
exports.Calliope = Calliope;

},{"../Quirk":70}],34:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Amisia = void 0;
var Quirk_1 = require("../Quirk");
var Amisia = /** @class */ (function (_super) {
    __extends(Amisia, _super);
    function Amisia() {
        return _super.call(this, "Amisia Erdehn") || this;
    }
    Amisia.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("u", "uu");
    };
    return Amisia;
}(Quirk_1.Quirk));
exports.Amisia = Amisia;

},{"../Quirk":70}],35:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Ardata = void 0;
var Quirk_1 = require("../Quirk");
var Ardata = /** @class */ (function (_super) {
    __extends(Ardata, _super);
    function Ardata() {
        return _super.call(this, "Ardata Carmia", "vriska") || this;
    }
    Ardata.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("i", "iii");
    };
    return Ardata;
}(Quirk_1.Quirk));
exports.Ardata = Ardata;

},{"../Quirk":70}],36:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Azdaja = void 0;
var Quirk_1 = require("../Quirk");
var Azdaja = /** @class */ (function (_super) {
    __extends(Azdaja, _super);
    function Azdaja() {
        return _super.call(this, "Azdaja Knelax", "kuprum") || this;
    }
    Azdaja.prototype.quirkify = function () {
        this.prefix("||| ");
        this.suffix(" |||");
    };
    return Azdaja;
}(Quirk_1.Quirk));
exports.Azdaja = Azdaja;

},{"../Quirk":70}],37:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Baisil = void 0;
var Quirk_1 = require("../Quirk");
var Baisil = /** @class */ (function (_super) {
    __extends(Baisil, _super);
    function Baisil() {
        return _super.call(this, "Baisil Soleil", "chahut") || this;
    }
    Baisil.prototype.quirkify = function () {
        this.lowerCase();
    };
    return Baisil;
}(Quirk_1.Quirk));
exports.Baisil = Baisil;

},{"../Quirk":70}],38:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Barzum = void 0;
var Quirk_1 = require("../Quirk");
var Barzum = /** @class */ (function (_super) {
    __extends(Barzum, _super);
    function Barzum() {
        return _super.call(this, "Barzum Soleil", "chahut") || this;
    }
    Barzum.prototype.quirkify = function () {
        this.upperCase();
    };
    return Barzum;
}(Quirk_1.Quirk));
exports.Barzum = Barzum;

},{"../Quirk":70}],39:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Boldir = void 0;
var Quirk_1 = require("../Quirk");
var Boldir = /** @class */ (function (_super) {
    __extends(Boldir, _super);
    function Boldir() {
        return _super.call(this, "Boldir Lamati", "polypa") || this;
    }
    Boldir.prototype.quirkify = function () {
        this.lowerCase();
        this.prefix("(");
        this.suffix(")");
    };
    return Boldir;
}(Quirk_1.Quirk));
exports.Boldir = Boldir;

},{"../Quirk":70}],40:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Bronya = void 0;
var Quirk_1 = require("../Quirk");
var Bronya = /** @class */ (function (_super) {
    __extends(Bronya, _super);
    function Bronya() {
        return _super.call(this, "Bronya Ursama") || this;
    }
    Bronya.prototype.quirkify = function () {
        this.prefix("vV ");
        this.suffix(" Vv");
    };
    return Bronya;
}(Quirk_1.Quirk));
exports.Bronya = Bronya;

},{"../Quirk":70}],41:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Chahut = void 0;
var Quirk_1 = require("../Quirk");
var Chahut = /** @class */ (function (_super) {
    __extends(Chahut, _super);
    function Chahut() {
        return _super.call(this, "Chahut Maenad") || this;
    }
    Chahut.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("t", "T");
    };
    return Chahut;
}(Quirk_1.Quirk));
exports.Chahut = Chahut;

},{"../Quirk":70}],42:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Chixie = void 0;
var Quirk_1 = require("../Quirk");
var Chixie = /** @class */ (function (_super) {
    __extends(Chixie, _super);
    function Chixie() {
        return _super.call(this, "Chixie Roixmr", "skylla") || this;
    }
    Chixie.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("\\.", " /");
    };
    return Chixie;
}(Quirk_1.Quirk));
exports.Chixie = Chixie;

},{"../Quirk":70}],43:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Daraya = void 0;
var Quirk_1 = require("../Quirk");
var Daraya = /** @class */ (function (_super) {
    __extends(Daraya, _super);
    function Daraya() {
        var _this = _super.call(this, "Daraya Jonjet", "bronya") || this;
        _this.emphasis = _this.addCheckbox("Emphasis", "Surrounds Daraya's text with triple the amount of triangles for emphasis.");
        return _this;
    }
    Daraya.prototype.quirkify = function () {
        this.lowerCase();
        if (!this.emphasis.isChecked()) {
            this.prefix("▲");
            this.suffix("▼");
        }
        else {
            this.prefix("▲▲▲");
            this.suffix("▼▼▼");
        }
    };
    return Daraya;
}(Quirk_1.Quirk));
exports.Daraya = Daraya;

},{"../Quirk":70}],44:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Diemen = void 0;
var Quirk_1 = require("../Quirk");
var Diemen = /** @class */ (function (_super) {
    __extends(Diemen, _super);
    function Diemen() {
        return _super.call(this, "Diemen Xicali") || this;
    }
    Diemen.prototype.quirkify = function () {
        this.lowerCase();
        this.prefix("(| ");
        this.suffix(" |)");
    };
    return Diemen;
}(Quirk_1.Quirk));
exports.Diemen = Diemen;

},{"../Quirk":70}],45:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Elwurd = void 0;
var Quirk_1 = require("../Quirk");
var Elwurd = /** @class */ (function (_super) {
    __extends(Elwurd, _super);
    function Elwurd() {
        var _this = _super.call(this, "?????? Elwurd", "vriska") || this;
        _this.setShortName("Elwurd");
        return _this;
    }
    Elwurd.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("l", "L");
    };
    return Elwurd;
}(Quirk_1.Quirk));
exports.Elwurd = Elwurd;

},{"../Quirk":70}],46:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Folykl = void 0;
var Quirk_1 = require("../Quirk");
var Folykl = /** @class */ (function (_super) {
    __extends(Folykl, _super);
    function Folykl() {
        return _super.call(this, "Folykl Darane", "kuprum") || this;
    }
    Folykl.prototype.quirkify = function () {
        this.lowerCase();
        var reg = new RegExp("\\s", "g");
        this.input = this.input.replace(reg, function (match) {
            if (Math.random() <= 0.1) {
                var MIN_LENGTH = 1;
                var MAX_LENGTH = 5;
                var length_1 = Math.random() * (MAX_LENGTH + 1 - MIN_LENGTH) + MIN_LENGTH;
                var retVal = "";
                for (var i = 0; i < length_1; i++) {
                    retVal += " ";
                }
                return retVal;
            }
            return match;
        });
    };
    return Folykl;
}(Quirk_1.Quirk));
exports.Folykl = Folykl;

},{"../Quirk":70}],47:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Fozzer = void 0;
var Quirk_1 = require("../Quirk");
var Fozzer = /** @class */ (function (_super) {
    __extends(Fozzer, _super);
    function Fozzer() {
        return _super.call(this, "Fozzer Velyes", "diemen") || this;
    }
    Fozzer.prototype.quirkify = function () {
        this.replaceString("\\s", "_");
    };
    return Fozzer;
}(Quirk_1.Quirk));
exports.Fozzer = Fozzer;

},{"../Quirk":70}],48:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Karako = void 0;
var Quirk_1 = require("../Quirk");
var Karako = /** @class */ (function (_super) {
    __extends(Karako, _super);
    function Karako() {
        return _super.call(this, "Karako Pierot", "chahut") || this;
    }
    Karako.prototype.quirkify = function () {
        this.replaceMatchCase("\\w+", "honk");
    };
    return Karako;
}(Quirk_1.Quirk));
exports.Karako = Karako;

},{"../Quirk":70}],49:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Kuprum = void 0;
var Quirk_1 = require("../Quirk");
var Kuprum = /** @class */ (function (_super) {
    __extends(Kuprum, _super);
    function Kuprum() {
        return _super.call(this, "Kuprum Maxlol") || this;
    }
    Kuprum.prototype.quirkify = function () {
        this.lowerCase();
        this.upperCase("\\bl+o[ol]*l\\b");
        this.prefix(">");
    };
    return Kuprum;
}(Quirk_1.Quirk));
exports.Kuprum = Kuprum;

},{"../Quirk":70}],50:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Lanque = void 0;
var Quirk_1 = require("../Quirk");
var Lanque = /** @class */ (function (_super) {
    __extends(Lanque, _super);
    function Lanque() {
        return _super.call(this, "Lanque Bombyx", "bronya") || this;
    }
    Lanque.prototype.quirkify = function () {
        this.replaceString("w", "W");
        this.replaceString("v", "V");
    };
    return Lanque;
}(Quirk_1.Quirk));
exports.Lanque = Lanque;

},{"../Quirk":70}],51:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Lynera = void 0;
var Quirk_1 = require("../Quirk");
var Lynera = /** @class */ (function (_super) {
    __extends(Lynera, _super);
    function Lynera() {
        return _super.call(this, "Lynera Skalbi", "bronya") || this;
    }
    Lynera.prototype.quirkify = function () {
        this.prefix("-");
    };
    return Lynera;
}(Quirk_1.Quirk));
exports.Lynera = Lynera;

},{"../Quirk":70}],52:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Mallek = void 0;
var Quirk_1 = require("../Quirk");
var Mallek = /** @class */ (function (_super) {
    __extends(Mallek, _super);
    function Mallek() {
        return _super.call(this, "Mallek Adalov", "vriska") || this;
    }
    Mallek.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("\\.", ";");
        this.replaceWord("is not", "!=");
        this.replaceWord("is", "=");
    };
    return Mallek;
}(Quirk_1.Quirk));
exports.Mallek = Mallek;

},{"../Quirk":70}],53:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Marsti = void 0;
var Quirk_1 = require("../Quirk");
var Marsti = /** @class */ (function (_super) {
    __extends(Marsti, _super);
    function Marsti() {
        return _super.call(this, "Marsti Houtek", "diemen") || this;
    }
    Marsti.prototype.quirkify = function () {
        this.suffix(" -_-");
    };
    return Marsti;
}(Quirk_1.Quirk));
exports.Marsti = Marsti;

},{"../Quirk":70}],54:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Nihkee = void 0;
var Quirk_1 = require("../Quirk");
var Nihkee = /** @class */ (function (_super) {
    __extends(Nihkee, _super);
    function Nihkee() {
        return _super.call(this, "Nihkee Moolah", "amisia") || this;
    }
    Nihkee.prototype.quirkify = function () {
        this.prefix("[()] ");
    };
    return Nihkee;
}(Quirk_1.Quirk));
exports.Nihkee = Nihkee;

},{"../Quirk":70}],55:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Polypa = void 0;
var Quirk_1 = require("../Quirk");
var Polypa = /** @class */ (function (_super) {
    __extends(Polypa, _super);
    function Polypa() {
        return _super.call(this, "Polypa Goezee") || this;
    }
    Polypa.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("\\.", " *");
        this.suffix(" *|");
    };
    return Polypa;
}(Quirk_1.Quirk));
exports.Polypa = Polypa;

},{"../Quirk":70}],56:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Remele = void 0;
var Quirk_1 = require("../Quirk");
var Remele = /** @class */ (function (_super) {
    __extends(Remele, _super);
    function Remele() {
        return _super.call(this, "Remele Namaaq", "vriska") || this;
    }
    Remele.prototype.quirkify = function () {
        var reg = new RegExp("(\\w+)", "g");
        this.input = this.input.replace(reg, function (match) {
            if (Math.random() <= 0.5) {
                return match + "e";
            }
            return match;
        });
    };
    return Remele;
}(Quirk_1.Quirk));
exports.Remele = Remele;

},{"../Quirk":70}],57:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Skylla = void 0;
var Quirk_1 = require("../Quirk");
var Skylla = /** @class */ (function (_super) {
    __extends(Skylla, _super);
    function Skylla() {
        return _super.call(this, "Skylla Koriga") || this;
    }
    Skylla.prototype.quirkify = function () {
        this.replaceString("y", "yy");
        this.replaceString("Y", "YY");
    };
    return Skylla;
}(Quirk_1.Quirk));
exports.Skylla = Skylla;

},{"../Quirk":70}],58:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Stelsa = void 0;
var Quirk_1 = require("../Quirk");
var Stelsa = /** @class */ (function (_super) {
    __extends(Stelsa, _super);
    function Stelsa() {
        return _super.call(this, "Stelsa Lamati", "tagora") || this;
    }
    Stelsa.prototype.quirkify = function () {
        this.upperCase();
    };
    return Stelsa;
}(Quirk_1.Quirk));
exports.Stelsa = Stelsa;

},{"../Quirk":70}],59:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tagora = void 0;
var Quirk_1 = require("../Quirk");
var Tagora = /** @class */ (function (_super) {
    __extends(Tagora, _super);
    function Tagora() {
        return _super.call(this, "Tagora Gorjek") || this;
    }
    Tagora.prototype.quirkify = function () {
        this.suffix(" *_________");
    };
    return Tagora;
}(Quirk_1.Quirk));
exports.Tagora = Tagora;

},{"../Quirk":70}],60:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tegiri = void 0;
var Quirk_1 = require("../Quirk");
var Tegiri = /** @class */ (function (_super) {
    __extends(Tegiri, _super);
    function Tegiri() {
        return _super.call(this, "Tegiri Kalbur", "tagora") || this;
    }
    Tegiri.prototype.quirkify = function () {
        this.replaceString("[Ll]", "/");
    };
    return Tegiri;
}(Quirk_1.Quirk));
exports.Tegiri = Tegiri;

},{"../Quirk":70}],61:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tirona = void 0;
var Quirk_1 = require("../Quirk");
var Tirona = /** @class */ (function (_super) {
    __extends(Tirona, _super);
    function Tirona() {
        return _super.call(this, "Tirona Kasund", "tagora") || this;
    }
    Tirona.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("e", "33");
    };
    return Tirona;
}(Quirk_1.Quirk));
exports.Tirona = Tirona;

},{"../Quirk":70}],62:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Trizza = void 0;
var Quirk_1 = require("../Quirk");
var Trizza = /** @class */ (function (_super) {
    __extends(Trizza, _super);
    function Trizza() {
        return _super.call(this, "Trizza Tethis") || this;
    }
    Trizza.prototype.quirkify = function () {
        this.replaceString("[Ww]", "ψ");
    };
    return Trizza;
}(Quirk_1.Quirk));
exports.Trizza = Trizza;

},{"../Quirk":70}],63:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tyzias = void 0;
var Quirk_1 = require("../Quirk");
var Tyzias = /** @class */ (function (_super) {
    __extends(Tyzias, _super);
    function Tyzias() {
        return _super.call(this, "Tyzias Entykk", "tagora") || this;
    }
    Tyzias.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("m", "mmmm");
        this.replaceString("w", "wwww");
    };
    return Tyzias;
}(Quirk_1.Quirk));
exports.Tyzias = Tyzias;

},{"../Quirk":70}],64:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Vikare = void 0;
var Quirk_1 = require("../Quirk");
var Vikare = /** @class */ (function (_super) {
    __extends(Vikare, _super);
    function Vikare() {
        return _super.call(this, "Vikare Ratite", "skylla") || this;
    }
    Vikare.prototype.quirkify = function () {
        this.prefix("~");
        this.suffix("~");
    };
    return Vikare;
}(Quirk_1.Quirk));
exports.Vikare = Vikare;

},{"../Quirk":70}],65:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Wanshi = void 0;
var Quirk_1 = require("../Quirk");
var Wanshi = /** @class */ (function (_super) {
    __extends(Wanshi, _super);
    function Wanshi() {
        return _super.call(this, "Wanshi Adyata", "bronya") || this;
    }
    Wanshi.prototype.quirkify = function () {
        this.replaceString("w", "W");
        this.prefix("[]");
        this.suffix("[]");
    };
    return Wanshi;
}(Quirk_1.Quirk));
exports.Wanshi = Wanshi;

},{"../Quirk":70}],66:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Xefros = void 0;
var Quirk_1 = require("../Quirk");
var Xefros = /** @class */ (function (_super) {
    __extends(Xefros, _super);
    function Xefros() {
        return _super.call(this, "Xefros Tritoh") || this;
    }
    Xefros.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceWord("ten", "X");
        this.replaceString("cross", "X");
        this.replaceString("trans", "X");
        this.replaceEmotes("X$1$2");
        this.replaceString("x", "X");
    };
    return Xefros;
}(Quirk_1.Quirk));
exports.Xefros = Xefros;

},{"../Quirk":70}],67:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Zebede = void 0;
var Quirk_1 = require("../Quirk");
var Zebede = /** @class */ (function (_super) {
    __extends(Zebede, _super);
    function Zebede() {
        return _super.call(this, "Zebede Tongva", "kuprum") || this;
    }
    Zebede.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("s\\b", "z");
        this.replaceEmotes("z$1$2");
    };
    return Zebede;
}(Quirk_1.Quirk));
exports.Zebede = Zebede;

},{"../Quirk":70}],68:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Zebruh = void 0;
var Quirk_1 = require("../Quirk");
var Zebruh = /** @class */ (function (_super) {
    __extends(Zebruh, _super);
    function Zebruh() {
        var _this = _super.call(this, "Zebruh Codakk", "amisia") || this;
        _this.black = _this.addCheckbox("Black Romance", "Replaces the quadrant in Zebruh's quirk with the black romance variation.", false);
        _this.concupiscent = _this.addCheckbox("Concupiscent", "Replaces the quadrant in Zebruh's quirk with the concupiscent variation.", false);
        return _this;
    }
    Zebruh.prototype.quirkify = function () {
        var wrapper = "♢";
        if (this.black.isChecked() && !this.concupiscent.isChecked()) {
            wrapper = "♧";
        }
        else if (!this.black.isChecked() && this.concupiscent.isChecked()) {
            wrapper = "♡";
        }
        else if (this.black.isChecked() && this.concupiscent.isChecked()) {
            wrapper = "♤";
        }
        this.prefix(wrapper);
        this.suffix(wrapper);
    };
    return Zebruh;
}(Quirk_1.Quirk));
exports.Zebruh = Zebruh;

},{"../Quirk":70}],69:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.OptionalCheckbox = void 0;
var CookieManager_1 = require("../CookieManager");
var Quirk_1 = require("./Quirk");
var OptionalCheckbox = /** @class */ (function () {
    function OptionalCheckbox(label, title, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        this.label = label;
        this.hoverHint = title;
        this.defaultValue = defaultValue;
    }
    OptionalCheckbox.prototype.render = function (category, id, quirk) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = this.label;
        checkbox.classList.add("filled-in");
        checkbox.classList.add("checkbox-" + quirk.getColorClass());
        checkbox.checked = this.defaultValue;
        checkbox.onchange = function () {
            CookieManager_1.setCookieBool(id + checkbox.id, checkbox.checked, 31);
            quirk.update(Quirk_1.Quirk.inputField.value);
        };
        var td = document.createElement("td");
        td.insertAdjacentElement('beforeend', checkbox);
        // Checkbox requires a span element adjacent to it for Materialize's theme to work.
        var span = document.createElement("span");
        span.insertAdjacentText('beforeend', quirk.getShortName() + " ~ " + this.label + ":");
        td.insertAdjacentElement('beforeend', span);
        var tr = document.createElement("tr");
        tr.classList.add(id + "-optional");
        tr.classList.add("waves-effect");
        tr.classList.add("waves-" + quirk.getColorClass());
        tr.classList.add("tooltipped");
        tr.setAttribute("data-position", "left");
        tr.setAttribute("data-tooltip", this.hoverHint);
        tr.onclick = function () { return checkbox.click(); };
        tr.title = this.hoverHint;
        tr.insertAdjacentElement('beforeend', td);
        category.getOptionalCheckboxSetElement().insertAdjacentElement('beforeend', tr);
        this.innerCheckbox = checkbox;
        category.optionalCheckboxes.push(tr);
    };
    OptionalCheckbox.prototype.isChecked = function () {
        return this.innerCheckbox.checked;
    };
    OptionalCheckbox.prototype.getID = function () {
        return this.innerCheckbox.id;
    };
    OptionalCheckbox.prototype.click = function () {
        this.innerCheckbox.click();
    };
    return OptionalCheckbox;
}());
exports.OptionalCheckbox = OptionalCheckbox;

},{"../CookieManager":7,"./Quirk":70}],70:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.Quirk = void 0;
var QuirkField_1 = require("../Templates/QuirkField");
var CookieManager_1 = require("../CookieManager");
var OptionalCheckbox_1 = require("./OptionalCheckbox");
var Copy2Clipboard_1 = require("../Copy2Clipboard");
var Quirk = /** @class */ (function () {
    function Quirk(name, colorClass) {
        if (colorClass === void 0) { colorClass = ""; }
        this.name = name;
        var spaceIndex = this.name.indexOf(" ");
        this.shortName = spaceIndex > 0 ? this.name.substr(0, spaceIndex) : name;
        this.id = this.shortName.toLocaleLowerCase();
        this.optionalCheckboxes = new Array();
        this.colorClass = colorClass.length < 1 ? this.id : colorClass;
    }
    Quirk.prototype.render = function (category) {
        var _this = this;
        Quirk.textFields.insertAdjacentHTML('beforeend', QuirkField_1.renderHTML(this.name, this.id, this.colorClass));
        this.row = document.getElementById(this.id + "-row");
        this.textArea = this.row.getElementsByTagName("textarea")[0];
        this.textArea.onclick = Copy2Clipboard_1.selectAllAndCopy;
        // Create toggle checkbox.
        this.activeCheckbox = document.createElement("input");
        this.activeCheckbox.classList.add("filled-in");
        this.activeCheckbox.classList.add("checkbox-" + this.getColorClass());
        this.activeCheckbox.type = "checkbox";
        this.activeCheckbox.checked = true;
        this.activeCheckbox.onchange = function () { return _this.updateVisibility(category); };
        var td = document.createElement("td");
        td.insertAdjacentElement('beforeend', this.activeCheckbox);
        // Checkbox requires a span element adjacent to it for Materialize's theme to work.
        var span = document.createElement("span");
        span.insertAdjacentText('beforeend', this.name);
        td.insertAdjacentElement('beforeend', span);
        var tr = document.createElement("tr");
        tr.classList.add("waves-effect");
        tr.classList.add("waves-" + this.getColorClass());
        tr.onclick = function () { return _this.activeCheckbox.click(); };
        tr.insertAdjacentElement('beforeend', td);
        var toggleCheckboxSet = category.getMainCheckboxSetElement();
        toggleCheckboxSet.insertAdjacentElement('beforeend', tr);
        for (var i = 0; i < this.optionalCheckboxes.length; i++) {
            this.optionalCheckboxes[i].render(category, this.getID(), this);
        }
    };
    Quirk.prototype.getID = function () {
        return this.id;
    };
    Quirk.prototype.setShortName = function (bruh) {
        this.shortName = bruh;
        this.id = bruh.toLocaleLowerCase();
    };
    Quirk.prototype.getShortName = function () {
        return this.shortName;
    };
    Quirk.prototype.getColorClass = function () {
        return this.colorClass;
    };
    Quirk.prototype.getTextAreaElement = function () {
        return this.textArea;
    };
    Quirk.prototype.updateVisibility = function (category) {
        this.row.hidden = !this.activeCheckbox.checked;
        var optionals = document.getElementsByClassName(this.id + "-optional");
        for (var i = 0; i < optionals.length; i++) {
            optionals[i].hidden = !this.activeCheckbox.checked;
        }
        var visible = !this.row.hidden;
        // Save setting to cookies.
        CookieManager_1.setCookieBool(this.id, visible, 31);
        var optionalCheckboxSet = document.getElementById(category.tabName.toLocaleLowerCase() + "-optional-checkboxes");
        if (visible) {
            this.update(Quirk.inputField.value);
            if (optionalCheckboxSet.hidden && optionals.length > 0) {
                optionalCheckboxSet.hidden = false;
            }
        }
        else {
            // Check if any other optional checkboxes are visible.
            for (var i = 0; i < category.optionalCheckboxes.length; i++) {
                if (!category.optionalCheckboxes[i].hidden) {
                    return;
                }
            }
            // Hide the table.
            optionalCheckboxSet.hidden = true;
        }
    };
    Quirk.prototype.update = function (str) {
        if (!this.activeCheckbox.checked || str.length < 1) {
            return;
        }
        this.input = str;
        this.quirkify();
        this.updateTextField();
    };
    Quirk.prototype.updateTextField = function () {
        this.textArea.value = this.input;
        // Auto resize.
        Quirk.autoSize(this.textArea);
    };
    // Dynamically increase the height of a textarea.
    Quirk.autoSize = function (element) {
        var minHeight = parseInt(window.getComputedStyle(element).getPropertyValue("min-height"));
        element.style.height = "auto"; // Lets the element shrink size.
        element.style.height = Math.max(minHeight, element.scrollHeight) + "px";
    };
    Quirk.prototype.addCheckbox = function (label, title, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        var checkbox = new OptionalCheckbox_1.OptionalCheckbox(label, title, defaultValue);
        this.optionalCheckboxes.push(checkbox);
        return checkbox;
    };
    Quirk.prototype.lowerCase = function (pattern) {
        if (pattern === void 0) { pattern = ""; }
        if (pattern.length < 1) {
            this.input = this.input.toLocaleLowerCase();
        }
        else {
            var reg = new RegExp(pattern, "gi");
            this.input = this.input.replace(reg, function (match) {
                return match.toLocaleLowerCase();
            });
        }
    };
    Quirk.prototype.upperCase = function (pattern) {
        if (pattern === void 0) { pattern = ""; }
        if (pattern.length < 1) {
            this.input = this.input.toLocaleUpperCase();
        }
        else {
            var reg = new RegExp(pattern, "gi");
            this.input = this.input.replace(reg, function (match) {
                return match.toLocaleUpperCase();
            });
        }
    };
    Quirk.prototype.prefix = function (str) {
        this.input = str + this.input;
    };
    Quirk.prototype.suffix = function (str) {
        this.input += str;
    };
    Quirk.prototype.replaceString = function (pattern, replace) {
        var reg = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, replace);
    };
    Quirk.prototype.replaceCaseInsensitive = function (pattern, replace) {
        var reg = new RegExp(pattern, "gi");
        this.input = this.input.replace(reg, replace);
    };
    Quirk.prototype.replaceMatchCase = function (pattern, replace) {
        var reg = new RegExp(pattern, "gi");
        this.input = this.input.replace(reg, function (match) {
            return Quirk.matchCase(replace, match);
        });
    };
    Quirk.prototype.replaceWord = function (pattern, replace) {
        this.replaceString("\\b" + pattern + "\\b", replace);
    };
    Quirk.prototype.replaceWordMatchCase = function (pattern, replace) {
        this.replaceMatchCase("\\b" + pattern + "\\b", replace);
    };
    // Function taken from https://stackoverflow.com/a/17265031/6446221.
    Quirk.matchCase = function (text, pattern) {
        // If the entire text is uppercase then uppercase the whole pattern regardless of lengths.
        if (pattern.toUpperCase() === pattern) {
            return text.toUpperCase();
        }
        var result = '';
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);
            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            }
            else {
                result += c.toLowerCase();
            }
        }
        return result;
    };
    Quirk.prototype.randomReplace = function (pattern, replace, prob) {
        var reg = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, function (match) {
            if (Math.random() <= prob) {
                return replace;
            }
            return match;
        });
    };
    // Troll-specific stuff below.
    // $1 - capture group for eyes.
    // $2 - capture group for mouth.
    Quirk.prototype.replaceEmotes = function (replace) {
        var eyes = "[:;]";
        var mouth = "[\\)\\(Dd]";
        this.upperCase("(" + eyes + ")(" + mouth + ")");
        var reg = new RegExp("(" + eyes + ")(" + mouth + ")", "gi");
        this.input = this.input.replace(reg, replace);
    };
    Quirk.prototype.applyCatPuns = function () {
        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("for", "fur");
        this.replaceMatchCase("pause", "paws");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("(per|pre)", "pur");
    };
    Quirk.prototype.applyFishPuns = function () {
        this.replaceMatchCase("kill", "krill");
        this.replaceMatchCase("well", "whale");
        this.replaceMatchCase("fine", "fin");
        this.replaceMatchCase("see", "sea");
        this.replaceMatchCase("should", "shoald");
        this.replaceMatchCase("kid", "squid");
        this.replaceMatchCase("sure", "shore");
        this.replaceMatchCase("crap", "carp");
        this.replaceMatchCase("(what are|what do)", "water");
    };
    Quirk.prototype.applyTiaraEmotes = function () {
        this.replaceEmotes("38$2");
    };
    Quirk.prototype.censorSwears = function (extreme) {
        if (extreme === void 0) { extreme = false; }
        this.replaceWordMatchCase("fuck", "f*ck");
        this.replaceWordMatchCase("bitch", "b*tch");
        this.replaceWordMatchCase("shit", "sh*t");
        this.replaceWordMatchCase("damn", "d*mn");
        this.replaceWordMatchCase("crap", "cr*p");
        if (extreme) {
            this.replaceMatchCase("whoops", "wh**ps");
            this.replaceMatchCase("silly", "s*lly");
            this.replaceMatchCase("shoot", "sh**t");
            this.replaceMatchCase("fidging", "f*dging");
        }
    };
    return Quirk;
}());
exports.Quirk = Quirk;

},{"../CookieManager":7,"../Copy2Clipboard":8,"../Templates/QuirkField":74,"./OptionalCheckbox":69}],71:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.populateTabs = void 0;
var Quirk_1 = require("./Quirk");
var Category_1 = require("../QuirkSet/Category");
var Alternia_1 = require("../QuirkSet/Alternia");
var Beforus_1 = require("../QuirkSet/Beforus");
var Cherubs_1 = require("../QuirkSet/Cherubs");
var Sprites_1 = require("../QuirkSet/Sprites");
var Hiveswap_1 = require("../QuirkSet/Hiveswap");
function populateTabs() {
    Quirk_1.Quirk.inputField = document.getElementById("text-input");
    Quirk_1.Quirk.inputField.oninput = updateText;
    Quirk_1.Quirk.textFields = document.getElementById("output-fields");
    Category_1.list.push(new Alternia_1.Alternia());
    Category_1.list.push(new Beforus_1.Beforus());
    Category_1.list.push(new Cherubs_1.Cherubs());
    Category_1.list.push(new Sprites_1.Sprites());
    Category_1.list.push(new Hiveswap_1.Hiveswap());
    for (var i = 0; i < Category_1.list.length; i++) {
        Category_1.list[i].render();
    }
    // Make optional checkboxes table visible from the start if there are entries.
    for (var i = 0; i < Category_1.list.length; i++) {
        if (Category_1.list[i].optionalCheckboxes.length > 0) {
            var id = Category_1.list[i].tabName.toLocaleLowerCase() + "-optional-checkboxes";
            document.getElementById(id).hidden = false;
        }
    }
    // Add in debug text.
    Quirk_1.Quirk.inputField.dispatchEvent(new Event("input"));
    // Remove the debug text when the element's selected for the first time.
    var inputHandler = function () {
        Quirk_1.Quirk.inputField.value = "";
        Quirk_1.Quirk.inputField.dispatchEvent(new Event("input"));
        Quirk_1.Quirk.inputField.removeEventListener('focus', inputHandler);
    };
    Quirk_1.Quirk.inputField.addEventListener('focus', inputHandler);
    // Run autosize on elements when window is resized.
    window.addEventListener("resize", function () {
        Quirk_1.Quirk.autoSize(Quirk_1.Quirk.inputField);
        for (var i = 0; i < Category_1.list.length; i++) {
            for (var j = 0; j < Category_1.list[i].quirks.length; j++) {
                Quirk_1.Quirk.autoSize(Category_1.list[i].quirks[j].getTextAreaElement());
            }
        }
    });
}
exports.populateTabs = populateTabs;
function updateText(event) {
    var input = event.currentTarget;
    var inputStr = input.value;
    // Wipe all inputs if empty. (stops deleted text from not updating the outputs)
    if (inputStr.length < 1) {
        var outputFields = document.getElementsByClassName("text-output");
        for (var i = 0; i < outputFields.length; i++) {
            outputFields[i].value = "";
            Quirk_1.Quirk.autoSize(outputFields[i]);
        }
        return;
    }
    else {
        for (var i = 0; i < Category_1.list.length; i++) {
            for (var j = 0; j < Category_1.list[i].quirks.length; j++) {
                Category_1.list[i].quirks[j].update(inputStr);
            }
        }
    }
}

},{"../Categories/Alternia":1,"../Categories/Beforus":2,"../Categories/Category":3,"../Categories/Cherubs":4,"../Categories/Hiveswap":5,"../Categories/Sprites":6,"./Quirk":70}],72:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Erisolsprite = void 0;
var Quirk_1 = require("../Quirk");
var Erisolsprite = /** @class */ (function (_super) {
    __extends(Erisolsprite, _super);
    function Erisolsprite() {
        return _super.call(this, "Erisolsprite") || this;
    }
    Erisolsprite.prototype.quirkify = function () {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
    };
    return Erisolsprite;
}(Quirk_1.Quirk));
exports.Erisolsprite = Erisolsprite;

},{"../Quirk":70}],73:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tavrisprite = void 0;
var Quirk_1 = require("../Quirk");
var Tavrisprite = /** @class */ (function (_super) {
    __extends(Tavrisprite, _super);
    function Tavrisprite() {
        var _this = _super.call(this, "Tavrisprite") || this;
        _this.vriskaPriority = _this.addCheckbox("Vriska Priority", "Toggles between normal case (Vriska) and rEVERSE CAPS (Tavros).");
        return _this;
    }
    Tavrisprite.prototype.quirkify = function () {
        this.replaceEmotes("}:::$1$2");
        if (!this.vriskaPriority.isChecked()) {
            // Use Tavros quirk.
            this.upperCase();
            var arr = this.input.split(/[,.?!]/g);
            for (var i = 0; i < arr.length; i++) {
                // Only replace the first instance of a match.
                arr[i] = arr[i].replace(/(\s|^)(\w)/, function (chr) { return chr.toLocaleLowerCase(); });
            }
            this.input = arr.join(",");
        }
        this.replaceString("[Bb]", "8");
    };
    return Tavrisprite;
}(Quirk_1.Quirk));
exports.Tavrisprite = Tavrisprite;

},{"../Quirk":70}],74:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.renderHTML = void 0;
var elements = require("typed-html");
function renderHTML(label, id, colorClass) {
    if (id === void 0) { id = ""; }
    if (id.length < 1) {
        id = label.substr(0, label.indexOf(" "));
    }
    return elements.createElement("tr", { id: id + "-row" },
        elements.createElement("td", null,
            elements.createElement("span", { "class": "text-output-title" },
                label,
                ":"),
            elements.createElement("textarea", { "class": colorClass + "-color text-output", readonly: "readonly", style: "height: 23px;" })));
}
exports.renderHTML = renderHTML;

},{"typed-html":78}],75:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.renderHTML = void 0;
var elements = require("typed-html");
function renderHTML(label) {
    var low = label.toLocaleLowerCase();
    return elements.createElement("div", { id: low + "-tab", "class": "tab-content col s12", style: "display: none" },
        elements.createElement("span", { "class": "set-header" }, "Select Quirks to Display:"),
        elements.createElement("table", { id: low + "-checkboxes" }),
        elements.createElement("br", null),
        elements.createElement("div", { id: low + "-optional-checkboxes", hidden: "" },
            elements.createElement("span", { "class": "set-header" }, "Optional Quirks:"),
            elements.createElement("table", { id: low + "-optional-table" })));
}
exports.renderHTML = renderHTML;

},{"typed-html":78}],76:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.renderHTML = void 0;
var elements = require("typed-html");
function renderHTML(label) {
    return elements.createElement("li", { "class": "tab col m5ths s6" },
        elements.createElement("a", { id: label.toLocaleLowerCase() + "-tab-anchor", draggable: "false", href: "#" + label.toLocaleLowerCase() + "-tab" }, label));
}
exports.renderHTML = renderHTML;

},{"typed-html":78}],77:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Category_1 = require("./QuirkSet/Category");
var QuirkLoader_1 = require("./Quirks/QuirkLoader");
var CookieManager_1 = require("./CookieManager");
document.addEventListener('DOMContentLoaded', function () {
    QuirkLoader_1.populateTabs();
    M.AutoInit();
    CookieManager_1.loadCookiesData(); // Tab pressing requires Materialize loaded first.
    addButtonListeners();
});
function toggleTheme(evt) {
    var darkText = "Dark Mode";
    var lightText = "Light Mode";
    // Light or dark?
    var btn = document.getElementById("btnThemeToggle");
    var prevDark = btn.innerText.toLocaleUpperCase() == lightText.toLocaleUpperCase();
    var body = document.getElementsByTagName("body")[0]; // Get main body.
    if (!prevDark) {
        body.className = "t-dark";
        btn.innerText = lightText;
    }
    else {
        body.className = "";
        btn.innerText = darkText;
    }
}
function addButtonListeners() {
    // When the sidebar is below the main content the tooltips look better above their respective element.
    // So change that dynamically here.
    window.addEventListener("resize", function () {
        var sidebar = document.getElementsByClassName("sidebar")[0];
        var width = sidebar.clientWidth / window.innerWidth;
        repositionTooltips(width < 0.5);
    });
    window.dispatchEvent(new Event("resize")); // Run it on load.
    document.getElementById("btnThemeToggle").onclick = toggleTheme;
    document.getElementById("btnAll").onclick = function () { return Category_1.Category.toggleAll(true); };
    document.getElementById("btnNone").onclick = function () { return Category_1.Category.toggleAll(false); };
    document.getElementById("toggleLabels").onchange = function (e) {
        var enable = e.target;
        var elements = document.getElementsByClassName("text-output-title");
        for (var i = 0; i < elements.length; i++) {
            elements[i].hidden = enable.checked;
        }
    };
}
function repositionTooltips(sidebarIsActuallyOnRightSide) {
    var tooltipElements = document.querySelectorAll("[data-position]");
    for (var i = 0; i < tooltipElements.length; i++) {
        if (sidebarIsActuallyOnRightSide) {
            tooltipElements[i].setAttribute("data-position", "left");
        }
        else {
            tooltipElements[i].setAttribute("data-position", "top");
        }
    }
}

},{"./Categories/Category":3,"./CookieManager":7,"./Quirks/QuirkLoader":71}],78:[function(require,module,exports){
"use strict";
/// <reference path="./jsx/element-types.d.ts" />
/// <reference path="./jsx/events.d.ts" />
/// <reference path="./jsx/intrinsic-elements.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const capitalACharCode = 'A'.charCodeAt(0);
const capitalZCharCode = 'Z'.charCodeAt(0);
const isUpper = (input, index) => {
    const charCode = input.charCodeAt(index);
    return capitalACharCode <= charCode && capitalZCharCode >= charCode;
};
const toKebabCase = (camelCased) => {
    let kebabCased = '';
    for (let i = 0; i < camelCased.length; i++) {
        const prevUpperCased = i > 0 ? isUpper(camelCased, i - 1) : true;
        const currentUpperCased = isUpper(camelCased, i);
        const nextUpperCased = i < camelCased.length - 1 ? isUpper(camelCased, i + 1) : true;
        if (!prevUpperCased && currentUpperCased || currentUpperCased && !nextUpperCased) {
            kebabCased += '-';
            kebabCased += camelCased[i].toLowerCase();
        }
        else {
            kebabCased += camelCased[i];
        }
    }
    return kebabCased;
};
const escapeAttrNodeValue = (value) => {
    return value.replace(/(&)|(")|(\u00A0)/g, function (_, amp, quote) {
        if (amp)
            return '&amp;';
        if (quote)
            return '&quot;';
        return '&nbsp;';
    });
};
const attributeToString = (attributes) => (name) => {
    const value = attributes[name];
    const formattedName = toKebabCase(name);
    const makeAttribute = (value) => `${formattedName}="${value}"`;
    if (value instanceof Date) {
        return makeAttribute(value.toISOString());
    }
    else
        switch (typeof value) {
            case 'boolean':
                // https://www.w3.org/TR/2008/WD-html5-20080610/semantics.html#boolean
                if (value) {
                    return formattedName;
                }
                else {
                    return '';
                }
            default:
                return makeAttribute(escapeAttrNodeValue(value.toString()));
        }
};
const attributesToString = (attributes) => {
    if (attributes) {
        return ' ' + Object.keys(attributes)
            .map(attributeToString(attributes))
            .filter(attribute => attribute.length) // filter out negative boolean attributes
            .join(' ');
    }
    else {
        return '';
    }
};
const contentsToString = (contents) => {
    if (contents) {
        return contents
            .map(elements => Array.isArray(elements) ? elements.join('\n') : elements)
            .join('\n');
    }
    else {
        return '';
    }
};
const isVoidElement = (tagName) => {
    return [
        'area',
        'base',
        'br',
        'col',
        'command',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
    ].indexOf(tagName) > -1;
};
function createElement(name, attributes, ...contents) {
    if (typeof name === 'function') {
        return name(attributes, contents);
    }
    else {
        const tagName = toKebabCase(name);
        if (isVoidElement(tagName) && !contents.length) {
            return `<${tagName}${attributesToString(attributes)}>`;
        }
        else {
            return `<${tagName}${attributesToString(attributes)}>${contentsToString(contents)}</${tagName}>`;
        }
    }
}
exports.createElement = createElement;

},{}]},{},[77]);
