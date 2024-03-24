 sap.ui.define([
                    "sap/ui/core/mvc/Controller",
                    "sap/m/MessageToast",
                    'sap/ui/model/json/JSONModel'
                ],
                    /**
                     * @param {typeof sap.ui.core.mvc.Controller} Controller
                     */
                    function (Controller,MessageToast,JSONModel) {
                        "use strict";
                
                        return Controller.extend("com.project1.controller.View", {
                            onInit: function () {
                                this.oModel = new JSONModel({
                                    name: "",
                                    email: "",
                                    date: "",
                                    domains:[
                                        { key: "1", text: "Frontend" },
                                        { key: "2", text: "Backend" },
                                    ],
                                    selectedDomain: ""
                                });
                                this.getView().setModel(this.oModel);
                            },
                            onSubmit: function() {
                                MessageToast.show("Survey submitted successfully!");
                                this.getView().byId("thankYouText").setVisible(true);
                            }
                        });
                    })