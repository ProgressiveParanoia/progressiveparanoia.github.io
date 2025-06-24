"use strict";
exports.id = 293;
exports.ids = [293,370];
exports.modules = {

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3380);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const UNMOUNTED="unmounted";const EXITED="exited";const ENTERING="entering";const ENTERED="entered";const EXITING="exiting";const transitionStyles={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};class FadeInOut extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.state={status:UNMOUNTED};}componentDidMount(){const{show}=this.props;if(show){this.performEnter();}}componentDidUpdate(prevProps){let nextStatus=null;if(prevProps!==this.props){const{status}=this.state;if(this.props.show){if(status!==ENTERING&&status!==ENTERED){nextStatus=ENTERING;}}else{if(status===ENTERING||status===ENTERED){nextStatus=EXITING;}}}this.updateStatus(nextStatus);}updateStatus(nextStatus){if(nextStatus!==null){if(nextStatus===ENTERING){this.performEnter();}else{this.performExit();}}else if(this.state.status===EXITED){this.setState({status:UNMOUNTED});}}performEnter(){this.setState({status:ENTERING},()=>{setTimeout(()=>{this.setState({status:ENTERED},()=>{});},0);});}performExit(){const{duration}=this.props;this.setState({status:EXITING},()=>{setTimeout(()=>{this.setState({status:EXITED},()=>{});},duration);});}render(){const{status}=this.state;if(status===UNMOUNTED){return null;}const{children,duration,className,style}=this.props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:className,style:{...style,transition:`opacity ${duration}ms ease-in-out`,opacity:0.1,...transitionStyles[status]}},children);}}FadeInOut.defaultProps={show:false,duration:300};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeInOut);

/***/ }),

/***/ 9639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3380);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FadeInOut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);
/* harmony import */ var gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7385);
function RenderEverythingElse({scrolledPassedIntro,scrolledPassedIntroFirst}){console.log("QQQ render everything else?..."+scrolledPassedIntro);return/*#__PURE__*/React.createElement(FadeInOut,{show:scrolledPassedIntro,duration:500},/*#__PURE__*/React.createElement(AboutSection,{sectionId:"about",heading:"About Me"}),/*#__PURE__*/React.createElement(InterestsSection,{sectionId:"details",heading:"Skills"}),/*#__PURE__*/React.createElement(ProjectsSection,{sectionId:"projects",heading:"Projects"}));}function IndexPage(){const{0:scrollY,1:setScrollY}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const{0:scrolledPassedIntro,1:setScrolledPassedIntro}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:scrolledPassedIntroFirst,1:setScrolledPassedIntroFirst}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function onScroll(){setScrollY(window.scrollY);console.log("scroll val:"+scrollY);if(scrollY>=50){setScrolledPassedIntro(true);if(!scrolledPassedIntroFirst){setScrolledPassedIntroFirst(true);}console.log("but it was set?...");}else{setScrolledPassedIntro(false);}}window.addEventListener("scroll",onScroll);return()=>{window.removeEventListener("scroll",onScroll);};});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__/* .Seo */ .G$,{title:"Jed's Portfolio"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__/* .Page */ .YW,{useSplashScreenAnimation:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__/* .HeroSection */ .KE,{sectionId:"hero"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{height:'20em'}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__/* .AboutSection */ .nr,{sectionId:"about",heading:"About Me"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__/* .InterestsSection */ .fW,{sectionId:"details",heading:"Skills"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_theme_portfolio_minimal__WEBPACK_IMPORTED_MODULE_2__/* .ProjectsSection */ .YE,{sectionId:"projects",heading:"Projects"})));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map