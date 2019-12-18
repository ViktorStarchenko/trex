<?php get_header(); ?>

<section id="container" class="app-wrapper__flex">
    <div class="article-news-box">
        <div class="app-container">
            <div class="app-page-searchbox">
                <div class="article__search-form-item">
                    <form action="/" id="search-form">
                        <input type="text" placeholder="" name="s" class="no-autocomplete"/>
                        <button type="submit"><i class="app-svg search"></i></button>
                    </form>
                </div>

                <div id="notEmptyHits" style="display: none;">
                    <div class="page-h2" id="nbHits"></div>
                    <div class="_bottom-tools" id="facets"></div>
                </div>

                <div id="emptyHits" style="display: none;">
                    <div class="_searchbox-content">
                        <div class="page-h2">Sorry, your search did not match any results.</div>
                        <p>Did you mean <a href="" class="_link">Miracoil?</a></p>
                    </div>
                    <div class="_searchbox-content">
                        <div class="page-h3">Other suggestions</div>
                        <ul class="app-list">
                            <li>Make sure that all words are spelled correctly.</li>
                            <li>Try different keywords.</li>
                            <li>Try more generic keywords.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="app-container" id="topResultTitle" style="display: none;">
        <div class="app-page-searchbox">
            <div class="page-h2 app-page-searchbox-h2">Top result &mdash;</div>
        </div>
    </div>

    <div class="article-luxury-box" id="topResultBox" style="display: none;">
    </div>

    <div class="article-news-box" id="searchResultsBox" style="display: none;">
        <div class="app-container">
            <div class="app-page-searchbox" id="search-results">
            </div>
        </div>
    </div>
</section>

<script type="text/html" id="hits-with-image">
    <div class="app-sr-item clearfix">
        <% if(images.thumbnail){ %>
        <div class="app-sr-item__img"><img src="<%= images.thumbnail.url %>" alt=""/></div>
        <% } %>
        <div class="app-sr-item__content">
            <div class="app-sr-item__title"><%= post_title %>
                <% if(taxonomies_hierarchical.category){ %>
                <span class="app-sr-item__product"><%= taxonomies_hierarchical.category.lvl0 %></span>
                <% } %>
            </div>
            <p><% if(_snippetResult.content){ %>
                <%= _snippetResult.content.value %>
                <% } else { %>
                <%= post_content %>
                <% } %>
            </p>
            <a href="<%= permalink %>" class="app-button-reserve _inline">Read more<i class="app-svg button-reserve _icon-right"></i></a>
        </div>
    </div>
</script>

<script type="text/html" id="hits-no-image">
    <div class="app-sr-link">
        <a href="<%= permalink %>">
            <div class="app-sr-item__title">
                <%= post_title %>
                <% if(taxonomies_hierarchical.category){ %>
                <span class="app-sr-item__product"><%= taxonomies_hierarchical.category.lvl0 %></span>
                <% } %>
                <i class="app-svg button-reserve _icon-right"></i>
            </div>
        </a>
    </div>
</script>

<script type="text/html" id="load-more-btn-tmpl">
    <div class="app-field-bottom" id="load-more-btn-wrapper">
        <a href="" class="app-button-reserve _inline" id="load-more-btn">Load more</i></a>
    </div>
</script>

<script type="text/html" id="facet-tmpl">
    <a href="#" class="app-button-reserve _inline facet-refine-category" data-value="<%= name %>"><%= name %> (<%= value %>)</a>
</script>

<script type="text/html" id="nbHits-tmpl">
    Your search returned <%= number %> results:
</script>

<script type="text/html" id="nbHits-empty-tmpl">
    Sorry, your search did not match any results.
</script>

<script type="text/html" id="top-result-tmpl">
    <div class="app-container">
        <div class="article-luxury-flex" color-thief style="background-color: <%= product_details['widget_background_color'] %>">
            <div class="_img">
                <img src="<%= product_details['home_page_image'] %>" alt="" class="image-loading"/>
                <div class="_absolute-bg app-inline-bg" style="background-image: url(<%= product_details['home_page_image'] %>)"></div>
            </div>
            <div class="app-centered-box article-luxury-box__content">

                <div class="_content-inner">
                    <div class="_content-inner-custom-box">
                        <div class="_uphead"><span><%= product_details['home_page_top_text'] %></span></div>
                        <div class="_title"><%= post_title %></div>
                        <div class="_subtitle"><%= product_details['home_page_description'] %></div>
                        <a href="<%= permalink %>" class="app-button-white _inline"><%= product_details['home_page_button_text'] %>
                            <i class="app-svg button-explore _icon-right"></i></a>
                    </div>
                    <div class="_rating-group">
                    <% for(var i in product_details['features']) { %>
                        <div class="_rating-group-item">
                            <i class="app-svg <%= product_details['features'][i]['icon_class'] %>"></i>
                            <div class="_rating-group-stars">
                                <% for (var k = 0 ; k < product_details['features'][i]['stars_count']; k++) { %>
                                    <i class="app-svg white-star"></i>
                                <% } %>
                            </div>
                            <div><%= product_details['features'][i]['title'] %></div>
                        </div>
                    <% } %>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

<!--<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js"></script>-->
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script type="text/javascript">

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name        = name.replace(/[\[\]]/g, "\\$&");
        var regex   = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function updateQueryStringParameter(key, value, uri) {
        if (!uri) uri = window.location.href;

        var re        = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";

        if (uri.match(re)) {
            uri = uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            uri = uri + separator + key + "=" + value;
        }
        history.pushState(null, null, uri);
    }

    jQuery(function () {
        var search = (function (application_id, search_api_key, index) {
            var client = algoliasearch(application_id, search_api_key);
            var index  = client.initIndex(index);

            var params = {
                query: null,
                facets: ['taxonomies_hierarchical.category.lvl0'],
                hitsPerPage: 10,
                page: 0,
                facetFilters: [],
                distinct: true,
                facetingAfterDistinct: true,
            };

            // Templates
            var hitsWithImgCompiledTemplate = _.template(jQuery('#hits-with-image').text());
            var hitsNoImgCompiledTemplate   = _.template(jQuery('#hits-no-image').text());
            var loadMoreBtnTemplate         = _.template(jQuery('#load-more-btn-tmpl').text());
            var facetTemplate               = _.template(jQuery('#facet-tmpl').text());
            var nbHitsTemplate              = _.template(jQuery('#nbHits-tmpl').text());
            var nbHitsEmptyTemplate         = _.template(jQuery('#nbHits-empty-tmpl').text());
            var topResultTemplate           = _.template(jQuery('#top-result-tmpl').text());

            // Document elements
            var $searchResults    = jQuery('#search-results');
            var $facets           = jQuery('#facets');
            var $nbHits           = jQuery('#nbHits');
            var $topResultTitle   = jQuery('#topResultTitle');
            var $topResultBox     = jQuery('#topResultBox');
            var $searchResultsBox = jQuery('#searchResultsBox');
            var $notEmptyHits     = jQuery('#notEmptyHits');
            var $emptyHits        = jQuery('#emptyHits');

            var search = function (query) {
                if (query) {
                    params.query = query;
                }
                params.facetFilters = [];
                params.page         = 0;

                index.search(params).then(function (res) {
                    displayResults(res);
                    displayNumberResults(res);
                    displayFacets(res);
                });
            };

            var refine = function () {
                params.page = 0;
                index.search(params).then(function (res) {
                    displayResults(res);
                    displayNumberResults(res);
                });
            };

            var displayFacets = function (res) {
                var categories = res.facets['taxonomies_hierarchical.category.lvl0'];
                $facets.empty();
                for (var i in categories) {
                    $facets.append(facetTemplate({name: i, value: categories[i]}));
                }
            }

            var displayNumberResults = function (res) {
                if (res.nbHits > 0) {
                    $nbHits.text(nbHitsTemplate({number: res.nbHits}));

                    $searchResultsBox.show();
                    $notEmptyHits.show();
                    $emptyHits.hide();
                } else {
                    // empty
                    $nbHits.text(nbHitsEmptyTemplate());

                    $searchResultsBox.hide();
                    $notEmptyHits.hide();
                    $emptyHits.show();
                }
            };

            var getNoImageContainer = function () {
                var $noImageContainer = $searchResults.find('#noImageContainer');

                if (!$noImageContainer.length) {
                    $noImageContainer = jQuery('<div>', {class: 'app-sr-list', id: 'noImageContainer'});
                    $searchResults.append($noImageContainer);
                }

                return $noImageContainer;
            }

            var displayResults = function (res) {
                var hits = res.hits;
                $searchResults.empty();

                var $noImageContainer = getNoImageContainer();

                $topResultTitle.hide();
                $topResultBox.hide();

                for (var i = 0; i < hits.length; i++) {
                    if (i == 0 && hits[i].is_mattress) {
                        $topResultBox.empty();
                        $topResultBox.append(topResultTemplate(hits[i]));

                        $topResultTitle.show();
                        $topResultBox.show();
                        continue;
                    }

                    if (i < 4) {
                        $noImageContainer.before(hitsWithImgCompiledTemplate(hits[i]));
                    } else {
                        $noImageContainer.append(hitsNoImgCompiledTemplate(hits[i]));
                    }
                }

                if ((res.page + 1) < res.nbPages) {
                    $searchResults.append(loadMoreBtnTemplate());
                }
            }

            var displayLoadMoreResults = function (res) {
                var hits = res.hits;

                if ((res.page + 1) >= res.nbPages) {
                    $searchResults.find('#load-more-btn-wrapper').remove();
                }

                var $noImageContainer = getNoImageContainer();
                for (var i = 0; i < hits.length; i++) {
                    $noImageContainer.append(hitsNoImgCompiledTemplate(hits[i]));
                }
            }

            // Load More Button
            jQuery(document).on('click', '#load-more-btn', function (e) {
                e.preventDefault();
                params.page += 1;
                index.search(params).then(function (res) {
                    displayLoadMoreResults(res);
                });
            });

            // Search Form
            jQuery(document).on('submit', '#search-form', function (e) {
                e.preventDefault();
                var query = jQuery(this).find('input[name="s"]').val();
                updateQueryStringParameter('s', query);
                search(query);
            });

            // Category Filter
            jQuery(document).on('click', '.facet-refine-category', function (e) {
                e.preventDefault();

                var $self = jQuery(this);

                if ($self.is('.active')) {
                    jQuery('.facet-refine-category').removeClass('active');
                    params.facetFilters = [];
                } else {
                    jQuery('.facet-refine-category').removeClass('active');
                    var value = $self.data('value');
                    $self.addClass('active');
                    params.facetFilters = ['taxonomies_hierarchical.category.lvl0:' + value];
                }

                refine();
            });

            return {
                'init': function () {
                    var s = getParameterByName('s');

                    if (s) {
                        params.query = s;
                        jQuery('input[name="s"]').val(s);
                        search();
                    }
                },
                'search': search,

            };

        })(algolia.application_id, algolia.search_api_key, algolia.indices.searchable_posts.name);

        search.init();
    });

</script>

<style>
    .facet-refine-category.active {
        background-color: #472E8C;
        color: #fff;
    }
</style>

<?php get_footer(); ?>
