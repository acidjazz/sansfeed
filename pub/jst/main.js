var _;

_ = {
  off: function(el) {
    var i, len;
    i = 0;
    len = arguments.length;
    while (i !== len) {
      if (arguments[i] instanceof jQuery) {
        arguments[i].removeClass("on").addClass("off");
      } else {
        $(arguments[i]).removeClass("on").addClass("off");
      }
      i++;
    }
  },
  on: function(el) {
    var i, len;
    i = 0;
    len = arguments.length;
    while (i !== len) {
      if (arguments[i] instanceof jQuery) {
        arguments[i].removeClass("off").addClass("on");
      } else {
        $(arguments[i]).removeClass("off").addClass("on");
      }
      i++;
    }
  },
  swap: function(el) {
    var i, len;
    i = 0;
    len = arguments.length;
    while (i !== len) {
      if (arguments[i] instanceof jQuery) {
        if (arguments[i].hasClass('off')) {
          _.on(arguments[i]);
        } else {
          _.off(arguments[i]);
        }
      } else {
        if ($(arguments[i]).hasClass('off')) {
          _.on($(arguments[i]));
        } else {
          _.off($(arguments[i]));
        }
      }
      i++;
    }
  },
  encode: function(str) {
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
  },
  t: function(category, action, label, value) {
    return _gaq.push(['_trackEvent', category, action, label, value]);
  },
  rand: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
};

//# sourceMappingURL=data:application/json;base64,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QyxDQW5ESDtFQXFEQSxJQUFBLEVBQU0sU0FBQyxHQUFELEVBQU0sR0FBTjtBQUNKLFdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsR0FBM0IsQ0FBQSxHQUFrQztFQURyQyxDQXJETiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgb2ZmOiAoZWwpIC0+XG4gICAgaSA9IDBcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cbiAgICB3aGlsZSBpIGlzbnQgbGVuXG4gICAgICBpZiBhcmd1bWVudHNbaV0gaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgICAgYXJndW1lbnRzW2ldLnJlbW92ZUNsYXNzKFwib25cIikuYWRkQ2xhc3MgXCJvZmZcIlxuICAgICAgZWxzZVxuICAgICAgICAkKGFyZ3VtZW50c1tpXSkucmVtb3ZlQ2xhc3MoXCJvblwiKS5hZGRDbGFzcyBcIm9mZlwiXG4gICAgICBpKytcbiAgICByZXR1cm5cblxuICBvbjogKGVsKSAtPlxuICAgIGkgPSAwXG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgaSBpc250IGxlblxuICAgICAgaWYgYXJndW1lbnRzW2ldIGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICAgIGFyZ3VtZW50c1tpXS5yZW1vdmVDbGFzcyhcIm9mZlwiKS5hZGRDbGFzcyBcIm9uXCJcbiAgICAgIGVsc2VcbiAgICAgICAgJChhcmd1bWVudHNbaV0pLnJlbW92ZUNsYXNzKFwib2ZmXCIpLmFkZENsYXNzIFwib25cIlxuICAgICAgaSsrXG4gICAgcmV0dXJuXG5cbiAgc3dhcDogKGVsKSAtPlxuICAgIGkgPSAwXG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgaSBpc250IGxlblxuICAgICAgaWYgYXJndW1lbnRzW2ldIGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICAgIGlmIGFyZ3VtZW50c1tpXS5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gYXJndW1lbnRzW2ldXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBfLm9mZiBhcmd1bWVudHNbaV1cbiAgICAgIGVsc2VcbiAgICAgICAgaWYgJChhcmd1bWVudHNbaV0pLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiAkKGFyZ3VtZW50c1tpXSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIF8ub2ZmICQoYXJndW1lbnRzW2ldKVxuICAgICAgaSsrXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIFxuIl19
