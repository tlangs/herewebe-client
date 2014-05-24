/**
 * Created by trevyn on 4/19/14.
 */

App.Router = Backbone.Router.extend({

    routes: {
        '': 'homeView',
        'home': 'homeView',
        'about': 'aboutView',
        'blog': 'blogView'
    },

    views: {
        'homeView': new App.HomeView(),
        'aboutView': new App.AboutView(),
        'blogView': new App.BlogView()
    },

    initialize: function() {
        $.when(
            $.get('templates/homeTemplate.html').done(_.bind(function (response) {
                this.views.homeView.template = _.template(response);
            }, this)),
            $.get('templates/aboutTemplate.html').done(_.bind(function (response) {
                this.views.aboutView.template = _.template(response);
            }, this)),
            $.get('templates/blogTemplate.html').done(_.bind(function (response) {
                this.views.blogView.template = _.template(response);
            }, this))

        ).done(_.bind(function () {
                Backbone.history.start();

            }, this));
        return this;
    },

    homeView: function() {
        clearNavButtons();
        $('#home-nav').addClass('active');
        this.views.homeView.render();
    },

    aboutView: function() {
        clearNavButtons();
        $('#about-nav').addClass('active');
        this.views.aboutView.render();
    },

    blogView: function() {
        clearNavButtons();
        $('#blog-nav').addClass('active');
        this.views.blogView.render();
    }
});

App.router = new App.Router();