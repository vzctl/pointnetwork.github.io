(self.webpackChunk=self.webpackChunk||[]).push([[647],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27899:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"learn-websockets",title:"Web Sockets",sidebar_label:"Web Sockets",slug:"../learn-websockets"},l=void 0,c={unversionedId:"learn/learn-websockets",id:"learn/learn-websockets",isDocsHomePage:!1,title:"Web Sockets",description:"WebSocket Endpoints",source:"@site/docs/learn/learn-websockets.md",sourceDirName:"learn",slug:"/learn-websockets",permalink:"/docs/learn-websockets",version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1629885904,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"learn-websockets",title:"Web Sockets",sidebar_label:"Web Sockets",slug:"../learn-websockets"},sidebar:"pnSidebar",previous:{title:"Point Deployer",permalink:"/docs/learn-point-deployer"},next:{title:"Filecoin vs Point Network",permalink:"/docs/filecoin-vs-pointnetwork"}},p=[{value:"WebSocket Endpoints",id:"websocket-endpoints",children:[{value:"Connecting to the NodeSocketController",id:"connecting-to-the-nodesocketcontroller",children:[]},{value:"Connecting to the ZProxySocketController",id:"connecting-to-the-zproxysocketcontroller",children:[]},{value:"WebSocket Request Messages",id:"websocket-request-messages",children:[]},{value:"WebSocket Response Messages",id:"websocket-response-messages",children:[]},{value:"SUBSCRIBED_EVENT payload",id:"subscribed_event-payload",children:[]},{value:"UNSUBSCRIBED_EVENT payload",id:"unsubscribed_event-payload",children:[]},{value:"DATA_EVENT payload",id:"data_event-payload",children:[]}]}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"websocket-endpoints"},"WebSocket Endpoints"),(0,i.kt)("p",null,"The Point Network node has two WebSocket endpoints defined:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NodeSocketController")," which is used for internal socket connections and is exposed on the Nodes internal API port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZProxySocketController")," which is used for for handling ZApp websocket connections via the ZProxy API port.")),(0,i.kt)("h3",{id:"connecting-to-the-nodesocketcontroller"},"Connecting to the NodeSocketController"),(0,i.kt)("p",null,"This is exposed on the Nodes internal API port. The routes are defined in ",(0,i.kt)("a",{parentName:"p",href:"../ws_routes.js"},"ws_routes.js")," and the endpoint is served using Fastify WebSockets. Its possible to try out this socket using the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebSocket Test client")," (see below for details)."),(0,i.kt)("h4",{id:"using-the-websocket-test-client"},"Using the WebSocket Test client"),(0,i.kt)("p",null,"You can start the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebSocket Test client")," using the following at the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"node scripts/ws/clientTest.js\n")),(0,i.kt)("p",null,"Check out the terminal for details."),(0,i.kt)("h3",{id:"connecting-to-the-zproxysocketcontroller"},"Connecting to the ZProxySocketController"),(0,i.kt)("p",null,"This is exposed on the ZProxy API port. The connection is made via the ZApp domain root. For example, if the ZApp domain is ",(0,i.kt)("inlineCode",{parentName:"p"},"example.z")," then the WebSocket connection can be made at ",(0,i.kt)("inlineCode",{parentName:"p"},"wss://example.z"),". See the ",(0,i.kt)("a",{parentName:"p",href:"./example/hello.z"},"hello.z")," demo app for examples."),(0,i.kt)("h3",{id:"websocket-request-messages"},"WebSocket Request Messages"),(0,i.kt)("p",null,"To issue a command via a WebSocket, send a payload request in this form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{type: '', params: ''}\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is the command type and ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," are the command parameters."),(0,i.kt)("p",null,"For example, to subscribe to a Smart Contract event via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZProxySocketController")," send the following payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{type: 'subscribeContractEvent', params: {contract: '', event: ''}}\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribeContractEvent")," is the command type for subscribing to Smart Contract events and the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," contains an object with the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"contract")," that specifies the contract name and ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," that specifies the name of the event to subscribe to."),(0,i.kt)("p",null,"For example, to subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductSoldEvent")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," Smart Contract of the ",(0,i.kt)("inlineCode",{parentName:"p"},"store.z")," app, you would issue the following command to the already connected websocket (via ",(0,i.kt)("inlineCode",{parentName:"p"},"wss://store.z"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{ type: 'subscribeContractEvent',\n  params: {\n    contract: 'Store',\n    event: 'ProductSoldEvent'}\n  }\n")),(0,i.kt)("h3",{id:"websocket-response-messages"},"WebSocket Response Messages"),(0,i.kt)("p",null,"Messages sent from the Node socket to the client will always echo the original command object (containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," keys) that was used to initiate the call or the subscripton. The payload will also contain three other keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," (containing the acutal response data from the call or subscription), ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," (denotes if this is data from the call or a message from the socket related to the command) and ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," (the hostname / domain of the app that requested this message)."),(0,i.kt)("p",null,"Essentially there will be three event types of response message to handle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SUBSCRIBED_EVENT")," - sent when a subscription command has successfully SUBSCRIBED"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNSUBSCRIBED_EVENT")," - sent when a subscription command has successfully UNSUBSCRIBED"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATA_EVENT")," - sent when there is an event emitted on the subscribed subscription or a call is returning data")),(0,i.kt)("h3",{id:"subscribed_event-payload"},"SUBSCRIBED_EVENT payload"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"SUBSCRIBED_EVENT")," occurs when subscription command has successfully subscribed, for example to a specific event on a smart contract. When this happens a message is returned to the client of event type ",(0,i.kt)("inlineCode",{parentName:"p"},"SUBSCRIBED_EVENT")," so that the client application knows the subscription is sucessful."),(0,i.kt)("p",null,"For example, the response from subsribing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductSoldEvent")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," smart contract would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "hostname": "store.z",\n  "type": "subscribeContractEvent",\n  "params": {\n    "contract": "Store",\n    "event": "ProductSoldEvent"\n  },\n  "data": {\n    "subscriptionId": "0xa",\n    "message": "Subscribed to Store contract ProductSoldEvent events"\n  },\n  "event": "SUBSCRIBED_EVENT"\n}\n')),(0,i.kt)("p",null,"Note that the original command payload is echod back (",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," is set to that of the caller app domain (store.z) and that the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," key contains an object with the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionId")," associated with the subscription (keep that for unsubscribing later!) and a ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," key. The ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"SUBSCRIBED_EVENT"),"."),(0,i.kt)("p",null,"The client app can filter for its own hostname and for this type of event to react accordingly when the subscription is successfully established."),(0,i.kt)("h3",{id:"unsubscribed_event-payload"},"UNSUBSCRIBED_EVENT payload"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBED_EVENT")," occurs when a subscription command has successfully unsubscribed to a specific subscription by id.  When this happens a message is returned to the client of event type ",(0,i.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBED_EVENT")," so that the client application knows the subscription has been sucessfully removed."),(0,i.kt)("p",null,"For example, the response from unsubsribing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductSoldEvent")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," Smart Contract via the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionId")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0xa")," would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "hostname": "store.z",\n  "type": "removeSubscriptionById",\n  "params": {\n    "contract": "Store",\n    "event": "ProductSoldEvent",\n    "subscriptionId": "0xa"\n  },\n  "data": {\n    "message": "Unsubscribed from Store contract ProductSoldEvent events using subscription id 0xa"\n  },\n  "event": "UNSUBSCRIBED_EVENT"\n}\n')),(0,i.kt)("p",null,"Note that the original command payload is echod back (",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," is set to that of the caller app domain (store.z) and that the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," key contains an object with a single ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," key. The ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBED_EVENT"),"."),(0,i.kt)("p",null,"The client app can filter for its own hostname and for this type of event to react accordingly when the subscription is successfully removed."),(0,i.kt)("h3",{id:"data_event-payload"},"DATA_EVENT payload"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA_EVENT")," is sent when there is an event emitted on the subscribed subscription or a call is returning data. So this is the most common event type since its emitted when an event is emiited on the subsription."),(0,i.kt)("p",null,"For example, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello.z")," example app, the client subscribes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdatedValue")," event in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," Smart Contract. Since that event is defined in the Smart Contract as ",(0,i.kt)("inlineCode",{parentName:"p"},"event UpdatedValue(string oldValue, string newValue);")," then the ",(0,i.kt)("inlineCode",{parentName:"p"},"data.returnValues")," key of the message will contain an object with the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"oldValue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"newValue"),". See an example payload message from the socket below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "hostname": \'hello.z\',\n  "type": "subscribeContractEvent",\n  "params": {\n    "contract": "Hello",\n    "event": "UpdatedValue"\n  },\n  "data": {\n    "logIndex": 0,\n    "transactionIndex": 0,\n    "transactionHash": "0xf525ddb1069d66855137878c66fc66092005b1731557119880c0e552880fc3d8",\n    "blockHash": "0x53d60db399b1d85e529d64f901729b5840230abdb9c01233db5bbc97bf4a6e75",\n    "blockNumber": 38,\n    "address": "0xC986038239801F079336e6F69438aABC0eE46487",\n    "type": "mined",\n    "removed": false,\n    "id": "log_14c3a8ce",\n    "returnValues": {\n      "0": "Hello from the Blockchain!",\n      "1": "I will update the value now",\n      "oldValue": "Hello from the Blockchain!",\n      "newValue": "I will update the value now"\n    },\n    "event": "UpdatedValue",\n    "signature": "0x4ccb6d79c8056228aebdc79cd2e1894d9b4c61edabcac2abe454385b06302384",\n    "raw": {\n      "data": "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000008434f5649442d31390000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008434f5649442d3139000000000000000000000000000000000000000000000000",\n      "topics": [\n        "0x4ccb6d79c8056228aebdc79cd2e1894d9b4c61edabcac2abe454385b06302384"\n      ]\n    }\n  },\n  "event": "DATA_EVENT"\n}\n')),(0,i.kt)("p",null,"Note that the original command payload is echod back (",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," is set to that of the caller app domain (hello.z) and that the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," key contains an object with the full smart contract event payload so that the client can use any of this available data. Mostly, in this case, the client will be interestedin the ",(0,i.kt)("inlineCode",{parentName:"p"},"returnValues")," key which contains the keys of the event as defined in the smart contract (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"oldValue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"newValue"),"). Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," key is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA_EVENT")," to denote that this message contains actual data from the subscriotion or call that was made via the WebSocket."),(0,i.kt)("p",null,"The client app can filter for this type of event to react accordingly when the subscription or call returns data that the client is interested in. See the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.z")," demo application for examples of this."))}h.isMDXComponent=!0}}]);