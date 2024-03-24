sap.ui.define([
                            "sap/ui/core/mvc/Controller",
                            "sap/m/MessageBox",
                            "sap/ui/model/json/JSONModel"
                        ], function (Controller, MessageBox, JSONModel) {
                            "use strict";
                        
                            return Controller.extend("com.project1.controller.View", {
                        
                                onInit: function () {
                                    var imgData = {
                                        "images": [
                                          { "url": "https://www.hdcarwallpapers.com/walls/toyota_hilux_gr_sport_ii_double_cab_2023_4k-HD.jpg" },
                                          { "url": "https://www.hdcarwallpapers.com/walls/toyota_gr_supra_gt4_evo_2023_5k-HD.jpg" },
                                          { "url": "https://www.hdcarwallpapers.com/walls/toyota_gr_supra_2_0_fuji_speedway_edition_2021_4k_3-HD.jpg" },
                                          { "url": "https://www.hdcarwallpapers.com/walls/toyota_crown_sedan_prototype_2022_4k_8k_2-HD.jpg" }
                                        ]
                                      };
                                      
                                      var oImgModel = new sap.ui.model.json.JSONModel();
                                      oImgModel.setData(imgData);
                                      
                                      this.getView().setModel(oImgModel, "img");
                                      console.log(oImgModel);
                                }
                        
                            });
                        });