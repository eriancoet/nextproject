"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
;// CONCATENATED MODULE: ./components/Header.js



const linkStyle = {
    marginRight: 15
};
const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-396aad19556e57cd",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-396aad19556e57cd" + " " + "nav",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: linkStyle,
                            className: "jsx-396aad19556e57cd",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: linkStyle,
                            className: "jsx-396aad19556e57cd",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/projects",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: linkStyle,
                            className: "jsx-396aad19556e57cd",
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: linkStyle,
                            className: "jsx-396aad19556e57cd",
                            children: "Contact"
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "396aad19556e57cd",
                children: ".nav{text-indent:60px;width:100%;margin:5px;padding:0;color:white;background:#61a4d0}h1{text-align:center;margin:7px}p{text-align:center}a:link{color:#ccc}a:visited{color:#095484}a:hover{color:#8ebf42}a:active{color:#800000}"
            })
        ]
    })
;
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/MyLayout.js




const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                    crossorigin: "anonymous"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    props.children
                ]
            })
        ]
    })
;
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;