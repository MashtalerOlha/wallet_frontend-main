"use strict";(self.webpackChunkwallet_frontend=self.webpackChunkwallet_frontend||[]).push([[388],{521:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a,r,s,l,c,i,o,u,d,m,g,p,b,h=t(3433),f=t(9439),x=t(168),Z=t(6031),y=(t(7158),Z.ZP.div(a||(a=(0,x.Z)(["\n    font-family: var(--baseFont);\n    font-style: normal;\n    font-weight: var(--regular);\n    margin: 0 auto;\n\n\n    & ul {\n        list-style: none;\n    }    \n"])))),v=Z.ZP.div(r||(r=(0,x.Z)(["\n    background-color: var(--white);\n    border-radius: 30px;\n    padding: 15px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),j=Z.ZP.button(s||(s=(0,x.Z)(["\n    border: none;\n    background: none;\n    font-size: 18px;\n    line-height: 1.47;\n    font-weight: var(--bold);\n"]))),N=Z.ZP.ul(l||(l=(0,x.Z)(["\n    margin: 0;\n    padding: 0 20px;\n"]))),k=Z.ZP.li(c||(c=(0,x.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 13px 0;\n    border-bottom: 1px solid var(--transaction-underline-color);\n    margin-bottom: 1px;\n    \n\n    & span {\n        display: block;\n    }\n"]))),w=Z.ZP.div(i||(i=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n"]))),P=Z.ZP.span(o||(o=(0,x.Z)(["\n    width: 24px;\n    height: 24px;\n    margin-right: 16px;\n    background-color:",";\n"])),(function(e){return e.background||"var(--black)"})),S=Z.ZP.span(u||(u=(0,x.Z)(["\n\n"]))),C=Z.ZP.span(d||(d=(0,x.Z)([""]))),A=Z.ZP.ul(m||(m=(0,x.Z)(["\n    margin: 16px 0 0 0;\n    padding: 0 20px;\n    \n"]))),F=Z.ZP.li(g||(g=(0,x.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &:not(:last-child) {\n        margin-bottom: 14px;\n    }\n    & span {\n        display: block;\n    }\n"]))),E=Z.ZP.span(p||(p=(0,x.Z)(["\n    font-weight: var(--bold);\n"]))),_=Z.ZP.span(b||(b=(0,x.Z)(["\n    color: ",";\n"])),(function(e){return e.color||"var(--black)"})),z=t(2791),I=t(3168),$=t(184),q=function(e){var n=e.tableCategories,t=void 0===n?[]:n,a=e.tableExpenseSum,r=void 0===a?0:a,s=e.tableIncomeSum,l=void 0===s?0:s,c=(0,z.useState)(""),i=(0,f.Z)(c,2),o=i[0],u=i[1],d=(0,z.useState)(""),m=(0,f.Z)(d,2),g=m[0],p=m[1],b=(0,z.useState)(""),x=(0,f.Z)(b,2),Z=x[0],q=x[1],B=(0,I.$)().t;function D(e){switch(e){case"ascending":return(0,h.Z)(o).sort((function(e,n){return e.categorySum-n.categorySum}));case"descending":return(0,h.Z)(o).sort((function(e,n){return n.categorySum-e.categorySum}));default:console.log("incorrect method")}}function G(e){var n=e.toFixed(2).toString();switch(n.length){case 7:return n[0]+" "+n.slice(1,n.length);case 8:return n[0]+n[1]+" "+n.slice(2,n.length);case 9:return n[0]+n[1]+n[2]+" "+n.slice(3,n.length);case 10:return n[0]+" "+n[1]+n[2]+n[3]+" "+n.slice(4,n.length);case 11:return n[0]+n[1]+" "+n[2]+n[3]+n[4]+" "+n.slice(5,n.length);case 12:return n[0]+n[1]+n[2]+" "+n[3]+n[4]+n[5]+" "+n.slice(6,n.length);case 13:return n[0]+" "+n[1]+n[2]+n[3]+" "+n[4]+n[5]+n[6]+" "+n.slice(7,n.length);default:return n}}return(0,z.useEffect)((function(){t!==[]&&u(t)}),[t]),(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(y,{className:"table-wrapper",children:[(0,$.jsxs)(v,{className:"table-tittle",children:[(0,$.jsx)(j,{className:"table-tittle-btn",onClick:function(){if(""===g||"ZA"===g){var e=(0,h.Z)(t).sort((function(e,n){return e.categoryName.localeCompare(n.categoryName)}));p("AZ"),q(""),u(e)}if("AZ"===g){var n=(0,h.Z)(t).sort((function(e,n){return n.categoryName.localeCompare(e.categoryName)}));p("ZA"),u(n)}},children:B("table.category")}),(0,$.jsx)(j,{className:"table-tittle-btn",onClick:function(){var e=null;switch(Z){case"":case"decrement":e=D("ascending"),q("increment"),p("");break;case"increment":e=D("descending"),q("decrement");break;default:console.log("error")}u(e)},children:B("table.sum")})]}),(0,$.jsx)(N,{className:"table-content-list",children:""!==o&&o.map((function(e){var n=e.categoryColor,t=e.categoryName,a=e.categorySum;return(0,$.jsxs)(k,{className:"table-content-item",children:[(0,$.jsxs)(w,{className:"item-category-wrapper",children:[(0,$.jsx)(P,{background:n}),(0,$.jsx)(S,{className:"category-name",children:B("addtransaction.options.".concat(t))})]}),(0,$.jsx)(C,{children:G(a)})]},t)}))}),(0,$.jsxs)(A,{className:"table-result-list",children:[(0,$.jsxs)(F,{className:"table-result-item",children:[(0,$.jsxs)(E,{className:"result-item-tittle",children:[B("table.expenses"),":"]}),(0,$.jsx)(_,{className:"result-item-value",color:"var(--pink)",children:G(r)})]}),(0,$.jsxs)(F,{className:"table-result-item",children:[(0,$.jsxs)(E,{className:"result-item-tittle",children:[B("table.income"),":"]}),(0,$.jsx)(_,{className:"result-item-value",color:"var(--green)",children:G(l)})]})]})]})})}}}]);
//# sourceMappingURL=Table.729a8357.chunk.js.map