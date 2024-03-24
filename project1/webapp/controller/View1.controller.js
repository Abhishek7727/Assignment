 sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, JSONModel) {
            "use strict";
    
            return Controller.extend("com.project1.controller.View1", {
                onInit: function () {
                    var oModel = new JSONModel({
                        aSales: [
                            {
                                "ProductName": "Daal Makhani",
                                "Quantity": 20,
                                "UnitPrice":100,
                                "ExtendedPrice": 30,
                                "ShipperName": "Fun Inc.",
                                "ShippedDate": "2024-03-24",
                                "Status": "Delievered"
                            },
                            {
                                "ProductName": "Shaahi Paneer",
                                "Quantity": 4,
                                "UnitPrice":80,
                                "ExtendedPrice": 0,
                                "ShipperName": "Baba",
                                "ShippedDate": "2024-06-10",
                                "Status": "Shipped"
                            },
                            {
                                "ProductName": "Cheese Pizza",
                                "Quantity": 32,
                                "UnitPrice":120,
                                "ExtendedPrice": 9,
                                "ShipperName": "Dominos",
                                "ShippedDate": "2019-01-02",
                                "Status": "Delievered"
                            },
                            {
                                "ProductName": "Sweet",
                                "Quantity": 2,
                                "UnitPrice":90,
                                "ExtendedPrice":7.6,
                                "ShipperName": "Baba",
                                "ShippedDate": "2024-04-12",
                                "Status": "Shipped"
                            },
                            {
                                "ProductName": "Rice",
                                "Quantity": 19,
                                "UnitPrice":50,
                                "ExtendedPrice": 8.71,
                                "ShipperName": "Baba",
                                "ShippedDate": "2024-02-29",
                                "Status": "Delievered"
                            }
                        ]
                    });
                    
                    this.getView().setModel(oModel, "salesModel");
    
                    var oDiscountModel = new JSONModel({
                        discount: 0
                    });
                    this.getView().setModel(oDiscountModel, "discountModel");
        
                },
                
    
            onDiscountChange: function (oEvent) {
                var fDiscount = parseFloat(oEvent.getParameter("value"));
                var oModel = this.getView().getModel("salesModel");
                var aSales = oModel.getProperty("/aSales");
                var aUpdatedSales = aSales.map(function (oSale) {
                    oSale.DiscountedUnitPrice = oSale.UnitPrice - (oSale.UnitPrice * (fDiscount / 100));
                    return oSale;
                });
                oModel.setProperty("/Sales", aUpdatedSales);
            }
            });
        });