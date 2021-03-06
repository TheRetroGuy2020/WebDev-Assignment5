(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['twit'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"twit\">\r\n    <div class=\"twit-icon\">\r\n        <i class=\"fa fa-bullhorn\"></i>\r\n    </div>\r\n    <div class=\"twit-content\">\r\n        <p class=\"twit-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"TWIT_TEXT") || (depth0 != null ? lookupProperty(depth0,"TWIT_TEXT") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TWIT_TEXT","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"twit-author\">\r\n            <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"TWIT_AUTHOR") || (depth0 != null ? lookupProperty(depth0,"TWIT_AUTHOR") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TWIT_AUTHOR","hash":{},"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":10,"column":39}}}) : helper)))
    + "</a>\r\n        </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();