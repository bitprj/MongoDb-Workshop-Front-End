(this["webpackJsonpmongo-workshop"] = this["webpackJsonpmongo-workshop"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePage-style.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/HomePage/HomePage-style.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./mongoBanner.jpg */ "./src/components/HomePage/mongoBanner.jpg"));

// Module
exports.push([module.i, "html,body{\n    height: 100%;\n    width:100%;\n    margin:0;\n}\n.masthead{\n    /* display:flex; */\n    \n    height: 600px;\n    width: 100%;\n    position: absolute;\n    text-align: center;\n    left:0;\n    right:0;\n    /* top:0 !important; */\n}\n\n.topMenu{\n    align-self: flex-start;\n}\n\n/* Not Being Used right Now */\n.title{\n    /* margin-bottom: 200px; */\n    font-size: 50px !important;\n    z-index: 1 !important;\n    text-shadow: -1px 0 #2c3e50, 0 1px #2c3e50, 1px 0 #2c3e50, 0 -1px #2c3e50;\n}\n\n.introSegment{\n    margin-top: 50px !important;\n    margin-bottom: 50px !important;\n}\n\n.mongo_background{\n    display:inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    /* background-image: linear-gradient(\n        to right,\n        rgb(126,213,111,.5),\n        rgb(40,180,133, .5)\n    ),\n    url(https://cdn.hipwallpaper.com/i/59/10/TbhF6i.jpg); */\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n\n    background-size: cover;\n}\n.list{\n    margin-top: 10px !important;\n}\n\n.home-container{\n    /* display:flex; */\n    position:absolute;\n    height: 100%;\n    width: 100%;\n    min-height: 100%;\n    left:0;\n    right:0;\n    \n}\n\n.app_container{\n    text-align: center;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Questions/Questions-style.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Questions/Questions-style.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".list{\n    margin-top: 10px !important;\n}\n\n.header{\n    margin-top: 20px !important;\n}\n\n.collapsible_bar_container_closed{\n    cursor: pointer;\n    border: solid 1px #34495e;\n    border-radius: 10px;\n    padding: 15px;\n}\n\n.collapsible_bar_container_open{\n    cursor: pointer;\n    border: solid 1px #34495e;\n    border-radius: 10px 10px 0px 0px;\n    padding: 15px;\n}\n\n.collapsible_bar_content{\n    cursor: pointer;\n    border: solid 1px #34495e;\n    border-top: none;\n    border-radius: 0px 0px 10px 10px;\n    padding: 15px;\n}\n\n.container{\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    height: 100%;\n    width: 100%;\n    position: relative;\n    text-align: center;\n    text-align: center;\n    z-index: 1;\n}\n\n.title{\n    \n    z-index: 1 !important;\n}\n\n.mongoDb{\n    z-index: -1 !important;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(\n        to right,\n        rgb(126,213,111,.5),\n        rgb(40,180,133, .5)\n    ),\n    url(\"https://cdn.hipwallpaper.com/i/59/10/TbhF6i.jpg\");\n\n    background-size: cover;\n}\n\n.box{\n    border-bottom: 1px solid black;\n}\n\n.letter_container{\n    display: inline-block !important;\n    text-align: center !important;\n}\n\n.training_color_open{\n    background-color: #85dcba;\n}\n.training_color_closed{\n    background-color: #41B3A3;\n}", ""]);



/***/ }),

/***/ "./src/apis/database.js":
/*!******************************!*\
  !*** ./src/apis/database.js ***!
  \******************************/
/*! exports provided: backend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backend", function() { return backend; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const backend = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'http://localhost:3000'
});


/***/ }),

/***/ "./src/components/AirBnbPage.js":
/*!**************************************!*\
  !*** ./src/components/AirBnbPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Questions_QuestionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions/QuestionsList */ "./src/components/Questions/QuestionsList.js");
/* harmony import */ var _Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions/Questions-style.css */ "./src/components/Questions/Questions-style.css");
/* harmony import */ var _Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/AirBnbPage.js";





class AirBnbPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'] //answers:[]

    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Lost and Found game"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui list container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Questions_QuestionsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      questions: this.state.questions,
      url: '/airbnb_questions/',
      color: 'red',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " eight column centered row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/mflix_questions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ui positive button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Prev Page"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/training_questions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ui positive button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Next Page")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AirBnbPage);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_HeaderMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage/HeaderMenu */ "./src/components/HomePage/HeaderMenu.js");
/* harmony import */ var _HomePage_IntroSegment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage/IntroSegment */ "./src/components/HomePage/IntroSegment.js");
/* harmony import */ var _HomePage_HomePage_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage/HomePage-style.css */ "./src/components/HomePage/HomePage-style.css");
/* harmony import */ var _HomePage_HomePage_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HomePage_HomePage_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/App.js";
 // import HiddenMenu from './util/HiddenMenu'





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "masthead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mongo_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomePage_IntroSegment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/HomePage/HeaderMenu.js":
/*!***********************************************!*\
  !*** ./src/components/HomePage/HeaderMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage-style.css */ "./src/components/HomePage/HomePage-style.css");
/* harmony import */ var _HomePage_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HomePage_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/HomePage/HeaderMenu.js";



const HeaderMenu = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masthead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mongo_background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderMenu);

/***/ }),

/***/ "./src/components/HomePage/HomePage-style.css":
/*!****************************************************!*\
  !*** ./src/components/HomePage/HomePage-style.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HomePage-style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePage-style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HomePage-style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePage-style.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HomePage-style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HomePage/HomePage-style.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/HomePage/IntroSegment.js":
/*!*************************************************!*\
  !*** ./src/components/HomePage/IntroSegment.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/HomePage/IntroSegment.js";



const IntroSegment = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introSegment ui vertical stripe segment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ui middle aligned stackable grid container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eight wide column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "ui header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Instructions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Nostrud minim fugiat quis dolore nisi Lorem sint consectetur adipisicing veniam deserunt laborum anim. Commodo consectetur minim culpa aliqua nisi ea ea amet ad do ea eu. Fugiat exercitation veniam ex sit quis incididunt ut irure incididunt consectetur. Est ut cillum consequat qui sint occaecat cupidatat culpa. Nulla ad excepteur pariatur sunt cillum.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "five wide column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://image.shutterstock.com/image-vector/programming-banner-coding-best-languages-260nw-1033853617.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/mflix_questions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "ui button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Start Game")))));
};

/* harmony default export */ __webpack_exports__["default"] = (IntroSegment);

/***/ }),

/***/ "./src/components/HomePage/mongoBanner.jpg":
/*!*************************************************!*\
  !*** ./src/components/HomePage/mongoBanner.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mongoBanner.302cc8de.jpg";

/***/ }),

/***/ "./src/components/MflixPage.js":
/*!*************************************!*\
  !*** ./src/components/MflixPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Questions_QuestionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions/QuestionsList */ "./src/components/Questions/QuestionsList.js");
/* harmony import */ var _Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions/Questions-style.css */ "./src/components/Questions/Questions-style.css");
/* harmony import */ var _Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/database */ "./src/apis/database.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/MflixPage.js";






class QuestionsPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'] //answers:[]

    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui list container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Lost and Found game"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Questions_QuestionsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      questions: this.state.questions,
      url: '/mflix_questions/',
      color: 'red',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " eight column centered row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ui positive button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Prev Page"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/airbnb_questions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ui positive button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Next Page")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuestionsPage);

/***/ }),

/***/ "./src/components/Questions/AnswerBox.js":
/*!***********************************************!*\
  !*** ./src/components/Questions/AnswerBox.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Questions_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions-style.css */ "./src/components/Questions/Questions-style.css");
/* harmony import */ var _Questions_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Questions_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/Questions/AnswerBox.js";



const AnswerBox = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "letter_container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.letter));
};

/* harmony default export */ __webpack_exports__["default"] = (AnswerBox);

/***/ }),

/***/ "./src/components/Questions/QuestionCard.js":
/*!**************************************************!*\
  !*** ./src/components/Questions/QuestionCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/database */ "./src/apis/database.js");
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/Questions/QuestionCard.js";



class QuestionCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.getAnswerMovie = async url => {
      //console.log(url)
      const response = await _apis_database__WEBPACK_IMPORTED_MODULE_1__["backend"].get(url).then(data => {
        this.props.onHandleAnswer(data.data.answer, data.data.order);
        this.setState({
          answer: data.data.answer
        });
      }).catch(error => {
        this.setState({
          answer: 'Fix the Backend!'
        });
      });
    };

    this.state = {
      collapse: false,
      answer: ''
    };
    this.collapseSegment = this.collapseSegment.bind(this);
  }

  componentDidMount() {
    this.getAnswerMovie(this.props.apiLink + this.props.number); //console.log(this.props.apiLink)
  }

  collapseSegment(event) {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    let containerState = !this.state.collapse ? `collapsible_bar_container_closed ${this.props.bar_color_closed}` : `collapsible_bar_container_open ${this.props.bar_color_closed}`;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "twelve wide column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: containerState,
      onClick: this.collapseSegment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `collapsible_bar_title `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Question ", this.props.number)), this.state.collapse ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `collapsible_bar_content ${this.props.bar_color_open}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, this.state.answer) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuestionCard);

/***/ }),

/***/ "./src/components/Questions/Questions-style.css":
/*!******************************************************!*\
  !*** ./src/components/Questions/Questions-style.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Questions-style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Questions/Questions-style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Questions-style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Questions/Questions-style.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Questions-style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Questions/Questions-style.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/Questions/QuestionsList.js":
/*!***************************************************!*\
  !*** ./src/components/Questions/QuestionsList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionCard */ "./src/components/Questions/QuestionCard.js");
/* harmony import */ var _Questions_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions-style.css */ "./src/components/Questions/Questions-style.css");
/* harmony import */ var _Questions_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnswerBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnswerBox */ "./src/components/Questions/AnswerBox.js");
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/Questions/QuestionsList.js";





class QuestionList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.renderList = this.props.questions.map((question, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        question: question,
        apiLink: this.props.url,
        bar_color_open: this.props.bar_color_open,
        bar_color_closed: this.props.bar_color_closed,
        onHandleAnswer: this.handleAnswer.bind(this),
        key: index + 1,
        number: index + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    });
    this.state = {
      answers: ['?', '?', '?', '?', '?']
    }; //console.log(this.props.url)
    //this.answerList = this.answerList.bind(this)
  }

  //answer should be a single letter
  handleAnswer(answer, num) {
    let items = [...this.state.answers];
    items[num - 1] = answer; // console.log(items)

    this.setState({
      answers: items
    }); //console.log(this.state.answers)
  }

  render() {
    const answerList = this.state.answers.map((answer, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnswerBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        letter: answer,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      });
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " center aligned five row centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, answerList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, this.renderList));
  }

} //Probably wont need this, but keeping it just in case for now
// const QuestionList = (props) =>{
//     const renderList = props.questions.map((question, index)=>{
//         return <QuestionCard question={question}  key={index+1} number={index+1} />
//     })
//     return(
//         <div className="list ui container">
//             <div className="ui grid">
//                 {renderList}
//             </div>
//         </div>
//     )
// }


/* harmony default export */ __webpack_exports__["default"] = (QuestionList);

/***/ }),

/***/ "./src/components/TrainingPage.js":
/*!****************************************!*\
  !*** ./src/components/TrainingPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Questions_QuestionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions/QuestionsList */ "./src/components/Questions/QuestionsList.js");
/* harmony import */ var _Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions/Questions-style.css */ "./src/components/Questions/Questions-style.css");
/* harmony import */ var _Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Questions_Questions_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/components/TrainingPage.js";





class TrainingPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'] //answers:[]

    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Lost and Found game"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui list container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Questions_QuestionsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      questions: this.state.questions,
      url: '/training_questions/',
      bar_color_open: 'training_color_open',
      bar_color_closed: 'training_color_closed',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " eight column centered row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/airbnb_questions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "ui positive button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Prev Page"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TrainingPage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_MflixPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MflixPage */ "./src/components/MflixPage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_AirBnbPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AirBnbPage */ "./src/components/AirBnbPage.js");
/* harmony import */ var _components_TrainingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TrainingPage */ "./src/components/TrainingPage.js");
/* harmony import */ var _components_HomePage_HomePage_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/HomePage/HomePage-style.css */ "./src/components/HomePage/HomePage-style.css");
/* harmony import */ var _components_HomePage_HomePage_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_HomePage_HomePage_style_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/index.js";








const routing = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "home-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  exact: true,
  path: "/",
  component: _components_App__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/mflix_questions",
  component: _components_MflixPage__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/airbnb_questions",
  component: _components_AirBnbPage__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/training_questions",
  component: _components_TrainingPage__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(routing, document.querySelector('#root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jr194/Bit Club/MongoDBWorkshop/mongo-workshop/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map