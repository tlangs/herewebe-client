/**
 * Created by trevyn on 4/19/14.
 */

App.BlogView = Backbone.View.extend({

    el: $('#view-main'),

    initialize: function() {
        return this;
    },

    render: function() {
        this.$el.html(this.template());
    }
})