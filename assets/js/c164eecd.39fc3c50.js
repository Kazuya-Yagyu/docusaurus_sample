"use strict";(self.webpackChunkdocusaurus_sample=self.webpackChunkdocusaurus_sample||[]).push([[2686],{87876:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(74848),t=n(28453);const o={},a="\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u56f3",i={id:"Sample/Mermaid/flowChart",title:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u56f3",description:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u56f3\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3059\u3002",source:"@site/docs/Sample/Mermaid/flowChart.mdx",sourceDirName:"Sample/Mermaid",slug:"/Sample/Mermaid/flowChart",permalink:"/docusaurus_sample/docs/Sample/Mermaid/flowChart",draft:!1,unlisted:!1,editUrl:"https://github.com/Kazuya-Yagyu/docusaurus_sample/edit/main/docs/Sample/Mermaid/flowChart.mdx",tags:[],version:"current",lastUpdatedBy:"Kazuya Yagyu",lastUpdatedAt:173486999e4,frontMatter:{},sidebar:"sampleSidebar",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/docusaurus_sample/docs/Sample/"},next:{title:"ER\u56f3",permalink:"/docusaurus_sample/docs/Sample/Mermaid/erDiagram"}},c={},d=[{value:"\u30b3\u30fc\u30c9",id:"\u30b3\u30fc\u30c9",level:4}];function l(e){const s={br:"br",code:"code",h1:"h1",h4:"h4",header:"header",hr:"hr",mermaid:"mermaid",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u56f3",children:"\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u56f3"})}),"\n",(0,r.jsxs)(s.p,{children:["\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u56f3\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3059\u3002",(0,r.jsx)(s.br,{}),"\n","\u203b\u4e2d\u8eab\u306f\u67b6\u7a7a\u306e\u30e2\u30ce\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.mermaid,{value:'%%{init: {"flowchart": {"htmlLabels": false}} }%%\nflowchart TD\n    classDef start_end fill:#f96,stroke:#333,stroke-width:2px;\n    classDef process fill:#0f9,stroke:#333,stroke-width:2px;\n    classDef decision fill:#ff9,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5;\n    classDef subprocess fill:#9cf,stroke:#333,stroke-width:2px;\n\n    A[Start]:::start_end --\x3e B[User Authentication]:::process\n    B --\x3e C{Is User Registered?}:::decision\n    C --\x3e|Yes| D[Log In]:::process\n    C --\x3e|No| E[Sign Up Process]:::subprocess\n    E --\x3e F[Verify Email]:::process\n    F --\x3e G[Complete Registration]:::process\n\n    D & G --\x3e H[Dashboard]:::process\n\n    H --\x3e I{User Action}:::decision\n    I --\x3e|View Profile| J[Profile Page]:::process\n    I --\x3e|Edit Settings| K[Settings Page]:::process\n    I --\x3e|Log Out| L[Log Out Process]:::process\n\n    K --\x3e M{Save Changes?}:::decision\n    M --\x3e|Yes| N[Update Settings]:::process\n    M --\x3e|No| O[Cancel Changes]:::process\n    N & O --\x3e H\n\n    J --\x3e P{Edit Profile?}:::decision\n    P --\x3e|Yes| Q[Update Profile Info]:::process\n    P --\x3e|No| H\n\n    L --\x3e R[Goodbye Page]:::process\n    R --\x3e S[End]:::start_end\n\n    subgraph Sign Up Details\n        E1[Input Information]:::process --\x3e E2[Set Password]:::process\n        E2 --\x3e E3[Submit Registration]:::process\n    end\n    E --\x3e E1\n\n    J -.->|Optional Edit| Q\n    F --\x3e|Resend Email?| F\n'}),"\n",(0,r.jsx)(s.h4,{id:"\u30b3\u30fc\u30c9",children:"\u30b3\u30fc\u30c9"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'%%{init: {"flowchart": {"htmlLabels": false}} }%%\nflowchart TD\n    classDef start_end fill:#f96,stroke:#333,stroke-width:2px;\n    classDef process fill:#0f9,stroke:#333,stroke-width:2px;\n    classDef decision fill:#ff9,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5;\n    classDef subprocess fill:#9cf,stroke:#333,stroke-width:2px;\n\n    A[Start]:::start_end --\x3e B[User Authentication]:::process\n    B --\x3e C{Is User Registered?}:::decision\n    C --\x3e|Yes| D[Log In]:::process\n    C --\x3e|No| E[Sign Up Process]:::subprocess\n    E --\x3e F[Verify Email]:::process\n    F --\x3e G[Complete Registration]:::process\n\n    D & G --\x3e H[Dashboard]:::process\n\n    H --\x3e I{User Action}:::decision\n    I --\x3e|View Profile| J[Profile Page]:::process\n    I --\x3e|Edit Settings| K[Settings Page]:::process\n    I --\x3e|Log Out| L[Log Out Process]:::process\n\n    K --\x3e M{Save Changes?}:::decision\n    M --\x3e|Yes| N[Update Settings]:::process\n    M --\x3e|No| O[Cancel Changes]:::process\n    N & O --\x3e H\n\n    J --\x3e P{Edit Profile?}:::decision\n    P --\x3e|Yes| Q[Update Profile Info]:::process\n    P --\x3e|No| H\n\n    L --\x3e R[Goodbye Page]:::process\n    R --\x3e S[End]:::start_end\n\n    subgraph Sign Up Details\n        E1[Input Information]:::process --\x3e E2[Set Password]:::process\n        E2 --\x3e E3[Submit Registration]:::process\n    end\n    E --\x3e E1\n\n    J -.->|Optional Edit| Q\n    F --\x3e|Resend Email?| F\n\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var r=n(96540);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);