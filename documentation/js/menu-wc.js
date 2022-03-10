'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projet-magasin-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppCartModule.html" data-type="entity-link" >AppCartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppCartModule-2a02baafa3ac2f6cf853574bd8204277f30c50a20819ca59200e6640bd594bd2683126ee278b7e39728b295331b6b0cf393cdc06c47d426291974026c87ecae2"' : 'data-target="#xs-components-links-module-AppCartModule-2a02baafa3ac2f6cf853574bd8204277f30c50a20819ca59200e6640bd594bd2683126ee278b7e39728b295331b6b0cf393cdc06c47d426291974026c87ecae2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppCartModule-2a02baafa3ac2f6cf853574bd8204277f30c50a20819ca59200e6640bd594bd2683126ee278b7e39728b295331b6b0cf393cdc06c47d426291974026c87ecae2"' :
                                            'id="xs-components-links-module-AppCartModule-2a02baafa3ac2f6cf853574bd8204277f30c50a20819ca59200e6640bd594bd2683126ee278b7e39728b295331b6b0cf393cdc06c47d426291974026c87ecae2"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppLivraisonModule.html" data-type="entity-link" >AppLivraisonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppLivraisonModule-3f545d50f9ae917ff8837fc29a4b116f449640b21ce812d24d68e9374fc026e66158a0852f486009e0c77c4a1863bfe1580d6e820918c9fcec3c4cacd3842a9d"' : 'data-target="#xs-components-links-module-AppLivraisonModule-3f545d50f9ae917ff8837fc29a4b116f449640b21ce812d24d68e9374fc026e66158a0852f486009e0c77c4a1863bfe1580d6e820918c9fcec3c4cacd3842a9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppLivraisonModule-3f545d50f9ae917ff8837fc29a4b116f449640b21ce812d24d68e9374fc026e66158a0852f486009e0c77c4a1863bfe1580d6e820918c9fcec3c4cacd3842a9d"' :
                                            'id="xs-components-links-module-AppLivraisonModule-3f545d50f9ae917ff8837fc29a4b116f449640b21ce812d24d68e9374fc026e66158a0852f486009e0c77c4a1863bfe1580d6e820918c9fcec3c4cacd3842a9d"' }>
                                            <li class="link">
                                                <a href="components/FormLivraisonCheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormLivraisonCheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivraisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivraisonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLivraisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLivraisonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppLivraisonRoutingModule.html" data-type="entity-link" >AppLivraisonRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppLivreurModule.html" data-type="entity-link" >AppLivreurModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppLivreurModule-780e7d61bab7956a572a6e262547997a06d70026b0aea90e2598da3db26dea598c194d51b7a640816700aab6ac3555360de3c0c17aa5cddc5d651e0ae9dca69d"' : 'data-target="#xs-components-links-module-AppLivreurModule-780e7d61bab7956a572a6e262547997a06d70026b0aea90e2598da3db26dea598c194d51b7a640816700aab6ac3555360de3c0c17aa5cddc5d651e0ae9dca69d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppLivreurModule-780e7d61bab7956a572a6e262547997a06d70026b0aea90e2598da3db26dea598c194d51b7a640816700aab6ac3555360de3c0c17aa5cddc5d651e0ae9dca69d"' :
                                            'id="xs-components-links-module-AppLivreurModule-780e7d61bab7956a572a6e262547997a06d70026b0aea90e2598da3db26dea598c194d51b7a640816700aab6ac3555360de3c0c17aa5cddc5d651e0ae9dca69d"' }>
                                            <li class="link">
                                                <a href="components/HireLivreurComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HireLivreurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListLivraisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListLivraisonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivreurComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivreurComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppLivreurRoutingModule.html" data-type="entity-link" >AppLivreurRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0ce80d53933e411925b2e3b05258a506580393475a08e0fcc7343e2cd98cbe399c4af53a9f29e90eebc09ac776fdc64298af79d5f7e41c7c9cd27d34a2c432ff"' : 'data-target="#xs-components-links-module-AppModule-0ce80d53933e411925b2e3b05258a506580393475a08e0fcc7343e2cd98cbe399c4af53a9f29e90eebc09ac776fdc64298af79d5f7e41c7c9cd27d34a2c432ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0ce80d53933e411925b2e3b05258a506580393475a08e0fcc7343e2cd98cbe399c4af53a9f29e90eebc09ac776fdc64298af79d5f7e41c7c9cd27d34a2c432ff"' :
                                            'id="xs-components-links-module-AppModule-0ce80d53933e411925b2e3b05258a506580393475a08e0fcc7343e2cd98cbe399c4af53a9f29e90eebc09ac776fdc64298af79d5f7e41c7c9cd27d34a2c432ff"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppProduitModule.html" data-type="entity-link" >AppProduitModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppProduitModule-a5f4e604241ee4ac9934f3f6a671b130c01a1736869b9b9a39335764f9aaefe6894f205922d0ace0dfc1eb505af49384b1851c74dc6a1e4b38dab811ba59fccd"' : 'data-target="#xs-components-links-module-AppProduitModule-a5f4e604241ee4ac9934f3f6a671b130c01a1736869b9b9a39335764f9aaefe6894f205922d0ace0dfc1eb505af49384b1851c74dc6a1e4b38dab811ba59fccd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppProduitModule-a5f4e604241ee4ac9934f3f6a671b130c01a1736869b9b9a39335764f9aaefe6894f205922d0ace0dfc1eb505af49384b1851c74dc6a1e4b38dab811ba59fccd"' :
                                            'id="xs-components-links-module-AppProduitModule-a5f4e604241ee4ac9934f3f6a671b130c01a1736869b9b9a39335764f9aaefe6894f205922d0ace0dfc1eb505af49384b1851c74dc6a1e4b38dab811ba59fccd"' }>
                                            <li class="link">
                                                <a href="components/MainProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainProduitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProduitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowOneProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowOneProduitComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppProduitRoutingModule.html" data-type="entity-link" >AppProduitRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppProviderModule.html" data-type="entity-link" >AppProviderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppProviderModule-c4b64eddb94531ef842e6bdd0f5d6e9bd22fd07b21f36f67c234ad1b4eaac0c54d4d2c7b87d6f49e9ba542d4eb5d9f46a0e0e1e1c33489ad9b8f99a1b7fba638"' : 'data-target="#xs-components-links-module-AppProviderModule-c4b64eddb94531ef842e6bdd0f5d6e9bd22fd07b21f36f67c234ad1b4eaac0c54d4d2c7b87d6f49e9ba542d4eb5d9f46a0e0e1e1c33489ad9b8f99a1b7fba638"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppProviderModule-c4b64eddb94531ef842e6bdd0f5d6e9bd22fd07b21f36f67c234ad1b4eaac0c54d4d2c7b87d6f49e9ba542d4eb5d9f46a0e0e1e1c33489ad9b8f99a1b7fba638"' :
                                            'id="xs-components-links-module-AppProviderModule-c4b64eddb94531ef842e6bdd0f5d6e9bd22fd07b21f36f67c234ad1b4eaac0c54d4d2c7b87d6f49e9ba542d4eb5d9f46a0e0e1e1c33489ad9b8f99a1b7fba638"' }>
                                            <li class="link">
                                                <a href="components/MainProviderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainProviderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProviderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProviderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowOneProviderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowOneProviderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppProviderRoutingModule.html" data-type="entity-link" >AppProviderRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppSharedRoutingModule.html" data-type="entity-link" >AppSharedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartRoutingModule.html" data-type="entity-link" >CartRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CartProduct.html" data-type="entity-link" >CartProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetailFacture.html" data-type="entity-link" >DetailFacture</a>
                            </li>
                            <li class="link">
                                <a href="classes/Facture.html" data-type="entity-link" >Facture</a>
                            </li>
                            <li class="link">
                                <a href="classes/Livraison.html" data-type="entity-link" >Livraison</a>
                            </li>
                            <li class="link">
                                <a href="classes/Livreur.html" data-type="entity-link" >Livreur</a>
                            </li>
                            <li class="link">
                                <a href="classes/Panier.html" data-type="entity-link" >Panier</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produit.html" data-type="entity-link" >Produit</a>
                            </li>
                            <li class="link">
                                <a href="classes/Provider.html" data-type="entity-link" >Provider</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rayon.html" data-type="entity-link" >Rayon</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stock.html" data-type="entity-link" >Stock</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetailFactureService.html" data-type="entity-link" >DetailFactureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FactureService.html" data-type="entity-link" >FactureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LivraisonService.html" data-type="entity-link" >LivraisonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LivreurService.html" data-type="entity-link" >LivreurService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanierService.html" data-type="entity-link" >PanierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProduitService.html" data-type="entity-link" >ProduitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProviderService.html" data-type="entity-link" >ProviderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StockService.html" data-type="entity-link" >StockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});