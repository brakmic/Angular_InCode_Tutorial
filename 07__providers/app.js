(function(){
    "use strict";
    //get angular :)
    var app = angular.module('app', []);
    //We define a "provider" to be used for service-delivery. Unlike services and
    //factories, providers can be configured via the angular.config-Call. In this
    //case we define a provider that'll create a service that returns a list of entries
    //whose content depends on the current configuration. Here we configure the provider
    //by using it's setType-method. We send no value that indicated that'll be using the
    //defaults. The provider accepts two types called "sport" & "fashion". If neither provided
    //a third, "unnamed" set of values will be returned.
    app.provider('companies', CompaniesProvider);

    app.config(function(companiesProvider) {
        companiesProvider.setType('')
    });

    //we let angular know about our controller
    app.controller('AdvaricsCtrl', AdvaricsCtrl);

    function AdvaricsCtrl(companies){
        var vm = this;
        vm.companies = companies; //as soon as we utilize the provider it's internal $get-method will
                                  //be called and we get the pre-configured service returned. Every provider
                                  //MUST implement the $get method. Also, it is important to know that there
                                  //exists a "hierarchy" between providers, factories and services.
                                  //Providers are the most complex, but also the most flexible ones. Every
                                  //Provider can create a factory or a service, while factories only create services
                                  //and services are, well, just services.
    }

    //Provider-Definition
    function CompaniesProvider() {
            var type = 'fashion';
              return {
                setType: function (value) {
                  type = value;
                },
                //Angular expects us to define a $get method. Without it no provider can exist.
                $get: function () {  //a providers behavior is actually the behavior of it's $get method

                      if(type == 'fashion'){  //three simple arrays to get selected/returned
                          return [
                              {
                                  id: '1',
                                  name: 'Versace',
                                  url: 'www.versace.com'
                              },
                              {
                                  id: '2',
                                  name: 'Prada',
                                  url: 'www.prada.com'
                              },
                              {
                                  id: '3',
                                  name: 'Armani',
                                  url: 'www.armani.com'
                              }
                          ];
                      } else if (type == 'sport'){
                          return [
                                  {
                                      id: '1',
                                      name: 'ODLO',
                                      url: 'www.odlo.com'
                                  },
                                  {
                                      id: '2',
                                      name: 'Sperk',
                                      url: 'www.sport-sperk.de'
                                  },
                                  {
                                      id: '3',
                                      name: 'Sport 2000',
                                      url: 'www.sport2000.de'
                                  }
                              ];
                     } else {
                          return [
                              {
                                  id: '1',
                                  name: 'C&A',
                                  url: 'www.c-and-a.com'
                              },
                              {
                                  id: '2',
                                  name: 'H&M',
                                  url: 'www.hm.com'
                              },
                              {
                                  id: '3',
                                  name: 'New Yorker',
                                  url: 'www.newyorker.de'
                              }
                          ];
                      }
                }
            };
        }

}());
