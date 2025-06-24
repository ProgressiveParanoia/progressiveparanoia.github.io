"use strict";
exports.id = 370;
exports.ids = [370];
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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-fade-in-out-js.js.map