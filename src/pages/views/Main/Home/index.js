import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../../../../components/Main/Slider'

const Home = props => {
    return (
        <div>
            <Slider />
            {/* Banner */}
            <section className="banner bgwhite p-t-40 p-b-40">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                            {/* block1 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="https://colorlib.com/etc/fashe/images/banner-02.jpg" alt="IMG-BENNER" />
                                <div className="block1-wrapbtn w-size2">
                                    {/* Button */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Dresses
                    </a>
                                </div>
                            </div>
                            {/* block1 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="https://colorlib.com/etc/fashe/images/banner-05.jpg" alt="IMG-BENNER" />
                                <div className="block1-wrapbtn w-size2">
                                    {/* Button */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Sunglasses
                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                            {/* block1 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="https://colorlib.com/etc/fashe/images/banner-03.jpg" alt="IMG-BENNER" />
                                <div className="block1-wrapbtn w-size2">
                                    {/* Button */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Watches
                    </a>
                                </div>
                            </div>
                            {/* block1 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="https://colorlib.com/etc/fashe/images/banner-07.jpg" alt="IMG-BENNER" />
                                <div className="block1-wrapbtn w-size2">
                                    {/* Button */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Footerwear
                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                            {/* block1 */}
                            <div className="block1 hov-img-zoom pos-relative m-b-30">
                                <img src="https://colorlib.com/etc/fashe/images/banner-04.jpg" alt="IMG-BENNER" />
                                <div className="block1-wrapbtn w-size2">
                                    {/* Button */}
                                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                        Bags
                    </a>
                                </div>
                            </div>
                            {/* block2 */}
                            <div className="block2 wrap-pic-w pos-relative m-b-30">
                                <img src="https://colorlib.com/etc/fashe/images/icons/bg-01.jpg" alt="IMG" />
                                <div className="block2-content sizefull ab-t-l flex-col-c-m">
                                    <h4 className="m-text4 t-center w-size3 p-b-8">
                                        Sign up &amp; get 20% off
                    </h4>
                                    <p className="t-center w-size4">
                                        Be the frist to know about the latest fashion news and get exclu-sive offers
                    </p>
                                    <div className="w-size2 p-t-25">
                                        {/* Button */}
                                        <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                            Sign Up
                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* New Product */}
            <section className="newproduct bgwhite p-t-45 p-b-105">
                <div className="container">
                    <div className="sec-title p-b-60">
                        <h3 className="m-text5 t-center">
                            Featured Products
              </h3>
                    </div>
                    {/* Slide2 */}
                    <div className="wrap-slick2">
                        <div className="slick2">
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                        <img src="https://colorlib.com/etc/fashe/images/item-02.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Herschel supply co 25l
                      </a>
                                        <span className="block2-price m-text6 p-r-5">
                                            $75.00
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="https://colorlib.com/etc/fashe/images/item-03.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Denim jacket blue
                      </a>
                                        <span className="block2-price m-text6 p-r-5">
                                            $92.50
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="https://colorlib.com/etc/fashe/images/item-05.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Coach slim easton black
                      </a>
                                        <span className="block2-price m-text6 p-r-5">
                                            $165.90
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                        <img src="https://colorlib.com/etc/fashe/images/item-07.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Frayed denim shorts
                      </a>
                                        <span className="block2-oldprice m-text7 p-r-5">
                                            $29.50
                      </span>
                                        <span className="block2-newprice m-text8 p-r-5">
                                            $15.90
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                        <img src="https://colorlib.com/etc/fashe/images/item-02.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Herschel supply co 25l
                      </a>
                                        <span className="block2-price m-text6 p-r-5">
                                            $75.00
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="https://colorlib.com/etc/fashe/images/item-03.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Denim jacket blue
                      </a>
                                        <span className="block2-price m-text6 p-r-5">
                                            $92.50
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                        <img src="https://colorlib.com/etc/fashe/images/item-05.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Coach slim easton black
                      </a>
                                        <span className="block2-price m-text6 p-r-5">
                                            $165.90
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-slick2 p-l-15 p-r-15">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                        <img src="https://colorlib.com/etc/fashe/images/item-07.jpg" alt="IMG-PRODUCT" />
                                        <div className="block2-overlay trans-0-4">
                                            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                            </a>
                                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                                {/* Button */}
                                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                    Add to Cart
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block2-txt p-t-20">
                                        <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                            Frayed denim shorts
                      </a>
                                        <span className="block2-oldprice m-text7 p-r-5">
                                            $29.50
                      </span>
                                        <span className="block2-newprice m-text8 p-r-5">
                                            $15.90
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner2 */}
            <section className="banner2 bg5 p-t-55 p-b-55">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                            <div className="hov-img-zoom pos-relative">
                                <img src="https://colorlib.com/etc/fashe/images/banner-08.jpg" alt="IMG-BANNER" />
                                <div className="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
                                    <span className="m-text9 p-t-45 fs-20-sm">
                                        The Beauty
                    </span>
                                    <h3 className="l-text1 fs-35-sm">
                                        Lookbook
                    </h3>
                                    <a href="#" className="s-text4 hov2 p-t-20 ">
                                        View Collection
                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                            <div className="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
                                <img src="https://colorlib.com/etc/fashe/images/shop-item-09.jpg" alt="IMG-BANNER" />
                                <div className="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
                                    <div className="t-center">
                                        <a href="product-detail.html" className="dis-block s-text3 p-b-5">
                                            Gafas sol Hawkers one
                      </a>
                                        <span className="block2-oldprice m-text7 p-r-5">
                                            $29.50
                      </span>
                                        <span className="block2-newprice m-text8">
                                            $15.90
                      </span>
                                    </div>
                                    <div className="flex-c-m p-t-44 p-t-30-xl">
                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 days">
                                                69
                        </span>
                                            <span className="s-text5">
                                                days
                        </span>
                                        </div>
                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 hours">
                                                04
                        </span>
                                            <span className="s-text5">
                                                hrs
                        </span>
                                        </div>
                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 minutes">
                                                32
                        </span>
                                            <span className="s-text5">
                                                mins
                        </span>
                                        </div>
                                        <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                            <span className="m-text10 p-b-1 seconds">
                                                05
                        </span>
                                            <span className="s-text5">
                                                secs
                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog */}
            <section className="blog bgwhite p-t-94 p-b-65">
                <div className="container">
                    <div className="sec-title p-b-52">
                        <h3 className="m-text5 t-center">
                            Our Blog
              </h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                            {/* Block3 */}
                            <div className="block3">
                                <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                                    <img src="https://colorlib.com/etc/fashe/images/blog-01.jpg" alt="IMG-BLOG" />
                                </a>
                                <div className="block3-txt p-t-14">
                                    <h4 className="p-b-7">
                                        <a href="blog-detail.html" className="m-text11">
                                            Black Friday Guide: Best Sales &amp; Discount Codes
                      </a>
                                    </h4>
                                    <span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
                                    <span className="s-text6">on</span> <span className="s-text7">July 22, 2017</span>
                                    <p className="s-text8 p-t-16">
                                        Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                            {/* Block3 */}
                            <div className="block3">
                                <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                                    <img src="https://colorlib.com/etc/fashe/images/blog-02.jpg" alt="IMG-BLOG" />
                                </a>
                                <div className="block3-txt p-t-14">
                                    <h4 className="p-b-7">
                                        <a href="blog-detail.html" className="m-text11">
                                            The White Sneakers Nearly Every Fashion Girls Own
                      </a>
                                    </h4>
                                    <span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
                                    <span className="s-text6">on</span> <span className="s-text7">July 18, 2017</span>
                                    <p className="s-text8 p-t-16">
                                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                            {/* Block3 */}
                            <div className="block3">
                                <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                                    <img src="https://colorlib.com/etc/fashe/images/blog-03.jpg" alt="IMG-BLOG" />
                                </a>
                                <div className="block3-txt p-t-14">
                                    <h4 className="p-b-7">
                                        <a href="blog-detail.html" className="m-text11">
                                            New York SS 2018 Street Style: Annina Mislin
                      </a>
                                    </h4>
                                    <span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
                                    <span className="s-text6">on</span> <span className="s-text7">July 2, 2017</span>
                                    <p className="s-text8 p-t-16">
                                        Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Instagram */}
            <section className="instagram p-t-20">
                <div className="sec-title p-b-52 p-l-15 p-r-15">
                    <h3 className="m-text5 t-center">
                        @ follow us on Instagram
            </h3>
                </div>
                <div className="flex-w">
                    {/* Block4 */}
                    <div className="block4 wrap-pic-w">
                        <img src="https://colorlib.com/etc/fashe/images/gallery-03.jpg" alt="IMG-INSTAGRAM" />
                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
                                <span className="p-t-2">39</span>
                            </span>
                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                  </p>
                                <span className="s-text9">
                                    Photo by @nancyward
                  </span>
                            </div>
                        </a>
                    </div>
                    {/* Block4 */}
                    <div className="block4 wrap-pic-w">
                        <img src="https://colorlib.com/etc/fashe/images/gallery-07.jpg" alt="IMG-INSTAGRAM" />
                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
                                <span className="p-t-2">39</span>
                            </span>
                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                  </p>
                                <span className="s-text9">
                                    Photo by @nancyward
                  </span>
                            </div>
                        </a>
                    </div>
                    {/* Block4 */}
                    <div className="block4 wrap-pic-w">
                        <img src="https://colorlib.com/etc/fashe/images/gallery-09.jpg" alt="IMG-INSTAGRAM" />
                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
                                <span className="p-t-2">39</span>
                            </span>
                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                  </p>
                                <span className="s-text9">
                                    Photo by @nancyward
                  </span>
                            </div>
                        </a>
                    </div>
                    {/* Block4 */}
                    <div className="block4 wrap-pic-w">
                        <img src="https://colorlib.com/etc/fashe/images/gallery-13.jpg" alt="IMG-INSTAGRAM" />
                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
                                <span className="p-t-2">39</span>
                            </span>
                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                  </p>
                                <span className="s-text9">
                                    Photo by @nancyward
                  </span>
                            </div>
                        </a>
                    </div>
                    {/* Block4 */}
                    <div className="block4 wrap-pic-w">
                        <img src="https://colorlib.com/etc/fashe/images/gallery-15.jpg" alt="IMG-INSTAGRAM" />
                        <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
                            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                                <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
                                <span className="p-t-2">39</span>
                            </span>
                            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                                <p className="s-text10 m-b-15 h-size1 of-hidden">
                                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                  </p>
                                <span className="s-text9">
                                    Photo by @nancyward
                  </span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            {/* Shipping */}
            <section className="shipping bgwhite p-t-62 p-b-46">
                <div className="flex-w p-l-15 p-r-15">
                    <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                        <h4 className="m-text12 t-center">
                            Free Delivery Worldwide
              </h4>
                        <a href="#" className="s-text11 t-center">
                            Click here for more info
              </a>
                    </div>
                    <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
                        <h4 className="m-text12 t-center">
                            30 Days Return
              </h4>
                        <span className="s-text11 t-center">
                            Simply return it within 30 days for an exchange.
              </span>
                    </div>
                    <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                        <h4 className="m-text12 t-center">
                            Store Opening
              </h4>
                        <span className="s-text11 t-center">
                            Shop open from Monday to Sunday
              </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

Home.propTypes = {

}

export default Home
