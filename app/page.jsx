import Image from "next/image";
const Home = () => {
  return (
    <div id="page" className="hfeed site">
      <header id="masthead" className="site-header" role="banner">
        <div className="flex col-full">
          <a className="skip-link screen-reader-text" href="#site-navigation">
            Skip to navigation
          </a>
          <a className="skip-link screen-reader-text" href="#content">
            Skip to content
          </a>
          <div className="site-branding">
            <div className="beta site-title">
              <a href="https://scrapeme.live/" rel="home">
                ScrapeMe
              </a>
            </div>
            <p className="site-description">Just another WordPress site</p>
          </div>
          <div className="flex hidden md:flex site-search">
            <div className="widget woocommerce widget_product_search">
              <form
                role="search"
                method="get"
                className="woocommerce-product-search"
                action="https://scrapeme.live/"
              >
                <label
                  className="screen-reader-text"
                  htmlFor="woocommerce-product-search-field-0"
                >
                  Search for:
                </label>
                <input
                  type="search"
                  id="woocommerce-product-search-field-0"
                  className="search-field"
                  placeholder="Search products…"
                  defaultValue=""
                  name="s"
                />
                <button type="submit" value="Search">
                  Search
                </button>
                <input type="hidden" name="post_type" defaultValue="product" />
              </form>
            </div>
          </div>
        </div>
        <div className="storefront-primary-navigation">
          <div className="col-full">
            <nav
              id="site-navigation"
              className="main-navigation"
              role="navigation"
              aria-label="Primary Navigation"
            >
              <button
                className="menu-toggle"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <span>Menu</span>
              </button>
              <div className="mt-8 menu">
                <ul>
                  <li>
                    <a href="https://scrapeme.live/">Home</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* #site-navigation */}
            <ul id="site-header-cart" className="site-header-cart menu">
              <li className="">
                <a
                  className="cart-contents"
                  href="https://scrapeme.live"
                  title="View your shopping basket"
                >
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    0.00
                  </span>
                  <span className="count">0 items</span>
                </a>
              </li>
              <li>
                <div className="widget woocommerce widget_shopping_cart">
                  <div className="widget_shopping_cart_content" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* #masthead */}
      <div className="mt-2 storefront-breadcrumb">
        <div className="col-full">
          <nav className="woocommerce-breadcrumb">
            <a href="https://scrapeme.live">Home</a>
            <span className="breadcrumb-separator"> / </span>Product
          </nav>
        </div>
      </div>
      <div id="content" className="mt-4 site-content" tabIndex={-1}>
        <div className="col-full">
          <div className="woocommerce" />
          <div id="primary" className="content-area">
            <main id="main" className="site-main" role="main">
              <header className="woocommerce-products-header">
                <h1 className="woocommerce-products-header__title page-title"></h1>
              </header>
              <div className="storefront-sorting">
                <form className="woocommerce-ordering" method="get">
                  <select name="orderby" className="orderby">
                    <option value="popularity" selected="selected">
                      Sort by popularity
                    </option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                  <input type="hidden" name="paged" defaultValue={1} />
                </form>
                <p className="woocommerce-result-count">
                  Showing 1–16 of 755 results
                </p>
                <nav className="woocommerce-pagination">
                  <ul className="page-numbers">
                    <li>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                      >
                        1
                      </span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/2/"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/3/"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/4/"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <span className="page-numbers dots">…</span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/46/"
                      >
                        46
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/47/"
                      >
                        47
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/48/"
                      >
                        48
                      </a>
                    </li>
                    <li>
                      <a
                        className="next page-numbers"
                        href="https://scrapeme.live/shop/page/2/"
                      >
                        →
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul className="products columns-4">
                <li className="post-759 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-seed product_tag-bulbasaur product_tag-overgrow product_tag-seed first instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Bulbasaur/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/001-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/001-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/001-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/001-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/001-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/001-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/001.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Bulbasaur
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        63.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=759"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={759}
                    data-product_sku={4391}
                    aria-label="Add “Bulbasaur” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-729 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-seed product_tag-ivysaur product_tag-overgrow product_tag-seed instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Ivysaur/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/002-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/002-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/002-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/002-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/002-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/002-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/002.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">Ivysaur</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        87.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=729"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={729}
                    data-product_sku={7227}
                    aria-label="Add “Ivysaur” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-730 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-seed product_tag-overgrow product_tag-seed product_tag-venusaur instock taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Venusaur/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/003-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/003-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/003-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/003-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/003-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/003-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/003.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Venusaur
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        105.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=730"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={730}
                    data-product_sku={7036}
                    aria-label="Add “Venusaur” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-731 product type-product status-publish has-post-thumbnail product_cat-lizard product_cat-pokemon product_tag-blaze product_tag-charmander product_tag-lizard last instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Charmander/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/004-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/004-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/004-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/004-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/004-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/004-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/004.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Charmander
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        48.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=731"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={731}
                    data-product_sku={9086}
                    aria-label="Add “Charmander” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-732 product type-product status-publish has-post-thumbnail product_cat-flame product_cat-pokemon product_tag-blaze product_tag-charmeleon product_tag-flame first instock taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Charmeleon/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/005-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/005-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/005-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/005-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/005-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/005-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/005.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Charmeleon
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        165.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=732"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={732}
                    data-product_sku={6565}
                    aria-label="Add “Charmeleon” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-733 product type-product status-publish has-post-thumbnail product_cat-flame product_cat-pokemon product_tag-blaze product_tag-charizard product_tag-flame instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Charizard/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/006-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/006-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/006-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/006-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/006-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/006-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/006.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Charizard
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        156.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=733"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={733}
                    data-product_sku={8840}
                    aria-label="Add “Charizard” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-734 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-tiny-turtle product_tag-squirtle product_tag-tiny-turtle product_tag-torrent instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Squirtle/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/007-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/007-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/007-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/007-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/007-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/007-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/007.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Squirtle
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        130.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=734"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={734}
                    data-product_sku={6094}
                    aria-label="Add “Squirtle” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-735 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-turtle product_tag-torrent product_tag-turtle product_tag-wartortle last instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Wartortle/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/008-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/008-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/008-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/008-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/008-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/008-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/008.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Wartortle
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        123.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=735"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={735}
                    data-product_sku={9659}
                    aria-label="Add “Wartortle” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-736 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-shellfish product_tag-blastoise product_tag-shellfish product_tag-torrent first instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Blastoise/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/009-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/009-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/009-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/009-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/009-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/009-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/009.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Blastoise
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        76.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=736"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={736}
                    data-product_sku={5212}
                    aria-label="Add “Blastoise” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-737 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-worm product_tag-caterpie product_tag-shield-dust product_tag-worm instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Caterpie/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/010-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/010-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/010-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/010-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/010-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/010-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/010.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Caterpie
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        73.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=737"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={737}
                    data-product_sku={7492}
                    aria-label="Add “Caterpie” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-738 product type-product status-publish has-post-thumbnail product_cat-cocoon product_cat-pokemon product_tag-cocoon product_tag-metapod product_tag-shed-skin instock taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Metapod/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/011-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/011-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/011-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/011-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/011-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/011-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/011.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">Metapod</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        148.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=738"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={738}
                    data-product_sku={2072}
                    aria-label="Add “Metapod” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-739 product type-product status-publish has-post-thumbnail product_cat-butterfly product_cat-pokemon product_tag-butterfly product_tag-butterfree product_tag-compound-eyes last instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Butterfree/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/012-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/012-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/012-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/012-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/012-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/012-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/012.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Butterfree
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        162.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=739"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={739}
                    data-product_sku={9507}
                    aria-label="Add “Butterfree” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-740 product type-product status-publish has-post-thumbnail product_cat-hairy-bug product_cat-pokemon product_tag-hairy-bug product_tag-shield-dust product_tag-weedle first instock taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Weedle/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/013-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/013-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/013-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/013-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/013-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/013-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/013.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">Weedle</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        25.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=740"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={740}
                    data-product_sku={7525}
                    aria-label="Add “Weedle” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-741 product type-product status-publish has-post-thumbnail product_cat-cocoon product_cat-pokemon product_tag-cocoon product_tag-kakuna product_tag-shed-skin instock taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Kakuna/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/014-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/014-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/014-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/014-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/014-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/014-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/014.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">Kakuna</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        148.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=741"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={741}
                    data-product_sku={1049}
                    aria-label="Add “Kakuna” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-742 product type-product status-publish has-post-thumbnail product_cat-poison-bee product_cat-pokemon product_tag-beedrill product_tag-poison-bee product_tag-swarm instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Beedrill/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/015-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/015-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/015-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/015-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/015-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/015-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/015.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">
                      Beedrill
                    </h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        168.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=742"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={742}
                    data-product_sku={6542}
                    aria-label="Add “Beedrill” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
                <li className="post-743 product type-product status-publish has-post-thumbnail product_cat-pokemon product_cat-tiny-bird product_tag-keen-eye product_tag-pidgey product_tag-tiny-bird last instock sold-individually taxable shipping-taxable purchasable product-type-simple">
                  <a
                    href="https://scrapeme.live/shop/Pidgey/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                  >
                    <img
                      width={324}
                      height={324}
                      src="https://scrapeme.live/wp-content/uploads/2018/08/016-350x350.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                      alt=""
                      srcSet="https://scrapeme.live/wp-content/uploads/2018/08/016-350x350.png 350w, https://scrapeme.live/wp-content/uploads/2018/08/016-150x150.png 150w, https://scrapeme.live/wp-content/uploads/2018/08/016-300x300.png 300w, https://scrapeme.live/wp-content/uploads/2018/08/016-100x100.png 100w, https://scrapeme.live/wp-content/uploads/2018/08/016-250x250.png 250w, https://scrapeme.live/wp-content/uploads/2018/08/016.png 475w"
                      sizes="(max-width: 324px) 100vw, 324px"
                    />
                    <h2 className="woocommerce-loop-product__title">Pidgey</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        159.00
                      </span>
                    </span>
                  </a>
                  <a
                    href="/shop/?add-to-cart=743"
                    data-quantity={1}
                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                    data-product_id={743}
                    data-product_sku={9452}
                    aria-label="Add “Pidgey” to your basket"
                    rel="nofollow"
                  >
                    Add to basket
                  </a>
                </li>
              </ul>
              <div className="storefront-sorting">
                <form className="woocommerce-ordering" method="get">
                  <select name="orderby" className="orderby">
                    <option value="popularity" selected="selected">
                      Sort by popularity
                    </option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                  <input type="hidden" name="paged" defaultValue={1} />
                </form>
                <p className="woocommerce-result-count">
                  Showing 1–16 of 755 results
                </p>
                <nav className="woocommerce-pagination">
                  <ul className="page-numbers">
                    <li>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                      >
                        1
                      </span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/2/"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/3/"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/4/"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <span className="page-numbers dots">…</span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/46/"
                      >
                        46
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/47/"
                      >
                        47
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://scrapeme.live/shop/page/48/"
                      >
                        48
                      </a>
                    </li>
                    <li>
                      <a
                        className="next page-numbers"
                        href="https://scrapeme.live/shop/page/2/"
                      >
                        →
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
          <div id="secondary" className="widget-area" role="complementary">
            <div id="search-2" className="widget widget_search">
              <form
                role="search"
                method="get"
                className="search-form"
                action="https://scrapeme.live/"
              >
                <label>
                  <span className="screen-reader-text">Search for:</span>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Search …"
                    defaultValue=""
                    name="s"
                  />
                </label>
                <input
                  type="submit"
                  className="search-submit"
                  defaultValue="Search"
                />
              </form>
            </div>
            <div
              id="recent-comments-2"
              className="widget widget_recent_comments"
            >
              <span className="gamma widget-title">Recent Comments</span>
              <ul id="recentcomments" />
            </div>
            <div id="archives-2" className="widget widget_archive">
              <span className="gamma widget-title">Archives</span> <ul></ul>
            </div>
            <div id="categories-2" className="widget widget_categories">
              <span className="gamma widget-title">Categories</span>
              <ul>
                <li className="cat-item-none">No categories</li>
              </ul>
            </div>
            <div id="meta-2" className="widget widget_meta">
              <span className="gamma widget-title">Meta</span>
              <ul>
                <li>
                  <a href="https://scrapeme.live/wp-login.php">Log in</a>
                </li>
                <li>
                  <a href="https://scrapeme.live/feed/">
                    Entries <abbr title="Really Simple Syndication">RSS</abbr>
                  </a>
                </li>
                <li>
                  <a href="https://scrapeme.live/comments/feed/">
                    Comments <abbr title="Really Simple Syndication">RSS</abbr>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wordpress.org/"
                    title="Powered by WordPress, state-of-the-art semantic personal publishing platform."
                  >
                    WordPress.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* #secondary */}
        </div>
        {/* .col-full */}
      </div>
      {/* #content */}
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="col-full">
          <div className="site-info">
            © ScrapeMe 2023 <br />
            <a
              href="https://woocommerce.com"
              target="_blank"
              title="WooCommerce - The Best eCommerce Platform for WordPress"
              rel="author"
            >
              Built with Storefront &amp; WooCommerce
            </a>
            .
          </div>
          {/* .site-info */}
          <div className="storefront-handheld-footer-bar">
            <ul className="columns-1">
              <li className="search">
                <a href=""></a>
                <div className="site-search">
                  <div className="widget woocommerce widget_product_search">
                    <form
                      role="search"
                      method="get"
                      className="woocommerce-product-search"
                      action="https://scrapeme.live/"
                    >
                      <label
                        className="screen-reader-text"
                        htmlFor="woocommerce-product-search-field-1"
                      >
                        Search for:
                      </label>
                      <input
                        type="search"
                        id="woocommerce-product-search-field-1"
                        className="search-field"
                        placeholder="Search products…"
                        defaultValue=""
                        name="s"
                      />
                      <button type="submit" value="Search">
                        Search
                      </button>
                      <input
                        type="hidden"
                        name="post_type"
                        defaultValue="product"
                      />
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
