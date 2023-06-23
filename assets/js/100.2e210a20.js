(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{280:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Laratrust comes with an events system that works like the Laravel "),s("a",{attrs:{href:"https://laravel.com/docs/eloquent#events",target:"_blank",rel:"noopener noreferrer"}},[t._v("model events"),s("OutboundLink")],1),t._v(". The events that you can listen to are "),s("strong",[t._v("roleAttached")]),t._v(", "),s("strong",[t._v("roleDetached")]),t._v(", "),s("strong",[t._v("permissionAttached")]),t._v(", "),s("strong",[t._v("permissionDetached")]),t._v(", "),s("strong",[t._v("roleSynced")]),t._v(", "),s("strong",[t._v("permissionSynced")]),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[t._v("The eventing system also supports observable classes:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("You may register observers in the boot method of one of your service providers. In this example, we'll register the observer in the AppServiceProvider:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("If you want to flush the observables and events from laratrust you should add the following in your code:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("#")]),this._v(" Events")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Inside the Role model only the "),s("strong",[t._v("permissionAttached")]),t._v(", "),s("strong",[t._v("permissionDetached")]),t._v(" and "),s("strong",[t._v("permissionSynced")]),t._v(" events will be fired.")])])},function(){var t=this._self._c;return t("p",[this._v("If you want to listen to a Laratrust event, inside your "),t("code",[this._v("User")]),this._v(" or "),t("code",[this._v("Role")]),this._v(" models put this:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laratrust"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Traits"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LaratrustUserTrait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("LaratrustUserTrait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("roleAttached")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$team")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("roleSynced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$changes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$team")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("The "),t("code",[this._v("$team")]),this._v(" parameter is optional and if you are not using teams, it will be set to null.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Observers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("UserObserver")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("roleAttached")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$team")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("roleSynced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$changes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$team")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),this._v(" "),t("p",[this._v("To register an observer, use the "),t("code",[this._v("laratrustObserve")]),this._v(" method on the model you wish to observe.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Observers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("UserObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("AppServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("laratrustObserve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UserObserver")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("ul",[s("li",[t._v("Inside your observable classes you can have your normal model events methods alongside Laratrust's events methods.")]),t._v(" "),s("li",[t._v("If you want to register Laratrust events and also eloquent events you should call both "),s("code",[t._v("observe")]),t._v(" and "),s("code",[t._v("laratrustObserve")]),t._v(" methods.")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"flushing-events-and-observables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flushing-events-and-observables"}},[this._v("#")]),this._v(" Flushing events and observables")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("laratrustFlushObservables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushEventListeners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"available-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-events"}},[this._v("#")]),this._v(" Available Events")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"user-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-events"}},[this._v("#")]),this._v(" User Events")])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("p",[s("code",[t._v("roleAttached($user, $role, $team = null)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$user")]),t._v(": The user to whom the role was attached.")]),t._v(" "),s("li",[s("code",[t._v("$role")]),t._v(": The role id that was attached to the "),s("code",[t._v("$user")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("$team")]),t._v(": The team id that was used to attach the role to the "),s("code",[t._v("$user")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("roleDetached($user, $role, $team = null)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$user")]),t._v(": The user to whom the role was detached.")]),t._v(" "),s("li",[s("code",[t._v("$role")]),t._v(": The role id that was detached from the "),s("code",[t._v("$user")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("$team")]),t._v(": The team id that was used to detach the role from the "),s("code",[t._v("$user")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("permissionAttached($user, $permission, $team = null)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$user")]),t._v(": The user to whom the permission was attached.")]),t._v(" "),s("li",[s("code",[t._v("$permission")]),t._v(": The permission id that was attached to the "),s("code",[t._v("$user")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("$team")]),t._v(": The team id that was used to attach the permission to the "),s("code",[t._v("$user")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("permissionDetached($user, $permission, $team = null)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$user")]),t._v(": The user to whom the permission was detached.")]),t._v(" "),s("li",[s("code",[t._v("$permission")]),t._v(": The permission id that was detached from the "),s("code",[t._v("$user")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("$team")]),t._v(": The team id that was used to detach the permission from the "),s("code",[t._v("$user")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("roleSynced($user, $changes, $team)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$user")]),t._v(": The user to whom the roles were synced.")]),t._v(" "),s("li",[s("code",[t._v("$changes")]),t._v(": The value returned by the eloquent "),s("code",[t._v("sync")]),t._v(" method containing the changes made in the database.")]),t._v(" "),s("li",[s("code",[t._v("$team")]),t._v(": The team id that was used to sync the roles to the user.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("permissionSynced()")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$user")]),t._v(": The user to whom the permissions were synced.")]),t._v(" "),s("li",[s("code",[t._v("$changes")]),t._v(": The value returned by the eloquent "),s("code",[t._v("sync")]),t._v(" method containing the changes made in the database.")]),t._v(" "),s("li",[s("code",[t._v("$team")]),t._v(": The team id that was used to sync the permissions to the user.")])])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"role-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role-events"}},[this._v("#")]),this._v(" Role Events")])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("p",[s("code",[t._v("permissionAttached($role, $permission)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$role")]),t._v(": The role to whom the permission was attached.")]),t._v(" "),s("li",[s("code",[t._v("$permission")]),t._v(": The permission id that was attached to the "),s("code",[t._v("$role")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("permissionDetached($role, $permission)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$role")]),t._v(": The role to whom the permission was detached.")]),t._v(" "),s("li",[s("code",[t._v("$permission")]),t._v(": The permission id that was detached from the "),s("code",[t._v("$role")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("permissionSynced()")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$role")]),t._v(": The role to whom the permissions were synced.")]),t._v(" "),s("li",[s("code",[t._v("$changes")]),t._v(": The value returned by the eloquent "),s("code",[t._v("sync")]),t._v(" method containing the changes made in the database.")])])])])}],!1,null,null,null);s.default=n.exports}}]);