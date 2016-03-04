var Index;

Index = {
  i: function() {
    return setInterval(Index.check, 50);
  },
  check: function() {
    return $('.laxin').each(function(i, el) {
      var perc, thresh;
      if (Index.inViewport(el)) {
        perc = Index.viewable(el);
        thresh = $(el).data('thresh');
        if (thresh === void 0) {
          thresh = 50;
        }
        if (perc > thresh && $(el).hasClass('off')) {
          _.on($(el));
        }
        if (perc < thresh && $(el).hasClass('on')) {
          return _.off($(el));
        }
      }
    });
  },
  inViewport: function(el) {
    var rect;
    rect = el.getBoundingClientRect();
    return (rect.top >= 0 || rect.bottom >= 0) && (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight);
  },
  viewable: function(el) {
    var diff, elMiddle, height, max, perc, rect, winMiddle;
    rect = el.getBoundingClientRect();
    height = rect.bottom - rect.top;
    elMiddle = rect.top + height / 2;
    winMiddle = window.innerHeight / 2;
    max = window.innerHeight / 2 + height / 2;
    diff = Math.abs(winMiddle - elMiddle);
    perc = Math.round(100 - diff * 100 / max);
    return perc;
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBRUQsV0FBQSxDQUFZLEtBQUssQ0FBQyxLQUFsQixFQUF5QixFQUF6QjtFQUZDLENBQUg7RUFJQSxLQUFBLEVBQU8sU0FBQTtXQUVMLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxJQUFaLENBQWlCLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFDZixVQUFBO01BQUEsSUFBRyxLQUFLLENBQUMsVUFBTixDQUFpQixFQUFqQixDQUFIO1FBQ0UsSUFBQSxHQUFPLEtBQUssQ0FBQyxRQUFOLENBQWUsRUFBZjtRQUNQLE1BQUEsR0FBUyxDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsSUFBTixDQUFXLFFBQVg7UUFDVCxJQUFlLE1BQUEsS0FBVSxNQUF6QjtVQUFBLE1BQUEsR0FBUyxHQUFUOztRQUNBLElBQUcsSUFBQSxHQUFPLE1BQVAsSUFBa0IsQ0FBQSxDQUFFLEVBQUYsQ0FBSyxDQUFDLFFBQU4sQ0FBZSxLQUFmLENBQXJCO1VBQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxDQUFBLENBQUUsRUFBRixDQUFMLEVBREY7O1FBRUEsSUFBRyxJQUFBLEdBQU8sTUFBUCxJQUFrQixDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsUUFBTixDQUFlLElBQWYsQ0FBckI7aUJBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxDQUFBLENBQUUsRUFBRixDQUFOLEVBREY7U0FORjs7SUFEZSxDQUFqQjtFQUZLLENBSlA7RUFpQkEsVUFBQSxFQUFZLFNBQUMsRUFBRDtBQUVWLFFBQUE7SUFBQSxJQUFBLEdBQU8sRUFBRSxDQUFDLHFCQUFILENBQUE7QUFFUCxXQUNFLENBQUMsSUFBSSxDQUFDLEdBQUwsSUFBWSxDQUFaLElBQWlCLElBQUksQ0FBQyxNQUFMLElBQWUsQ0FBakMsQ0FBQSxJQUNBLENBQUMsSUFBSSxDQUFDLEdBQUwsSUFBWSxNQUFNLENBQUMsV0FBbkIsSUFBa0MsSUFBSSxDQUFDLE1BQUwsSUFBZSxNQUFNLENBQUMsV0FBekQ7RUFOUSxDQWpCWjtFQTBCQSxRQUFBLEVBQVUsU0FBQyxFQUFEO0FBQ1IsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtJQUNQLE1BQUEsR0FBUyxJQUFJLENBQUMsTUFBTCxHQUFZLElBQUksQ0FBQztJQUUxQixRQUFBLEdBQVcsSUFBSSxDQUFDLEdBQUwsR0FBVyxNQUFBLEdBQU87SUFDN0IsU0FBQSxHQUFZLE1BQU0sQ0FBQyxXQUFQLEdBQW1CO0lBQy9CLEdBQUEsR0FBTSxNQUFNLENBQUMsV0FBUCxHQUFtQixDQUFuQixHQUF1QixNQUFBLEdBQU87SUFDcEMsSUFBQSxHQUFPLElBQUksQ0FBQyxHQUFMLENBQVMsU0FBQSxHQUFVLFFBQW5CO0lBQ1AsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBQSxHQUFNLElBQUEsR0FBSyxHQUFMLEdBQVMsR0FBMUI7QUFFUCxXQUFPO0VBVkMsQ0ExQlYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJJbmRleCA9XG5cbiAgaTogLT5cblxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCA1MFxuXG4gIGNoZWNrOiAtPlxuXG4gICAgJCgnLmxheGluJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIHBlcmMgPSBJbmRleC52aWV3YWJsZSBlbFxuICAgICAgICB0aHJlc2ggPSAkKGVsKS5kYXRhICd0aHJlc2gnXG4gICAgICAgIHRocmVzaCA9IDUwIGlmIHRocmVzaCBpcyB1bmRlZmluZWRcbiAgICAgICAgaWYgcGVyYyA+IHRocmVzaCBhbmQgJChlbCkuaGFzQ2xhc3MgJ29mZidcbiAgICAgICAgICBfLm9uICQoZWwpXG4gICAgICAgIGlmIHBlcmMgPCB0aHJlc2ggYW5kICQoZWwpLmhhc0NsYXNzICdvbidcbiAgICAgICAgICBfLm9mZiAkKGVsKVxuXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSBNYXRoLmFicyh3aW5NaWRkbGUtZWxNaWRkbGUpXG4gICAgcGVyYyA9IE1hdGgucm91bmQgMTAwIC0gZGlmZioxMDAvbWF4XG5cbiAgICByZXR1cm4gcGVyY1xuIl19