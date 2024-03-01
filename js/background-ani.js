(function () {
  function snow (options) {
      var $flake = document.createElement('div');
      $flake.setAttribute('id', 'snowBox');
      $flake.style.cssText = "'position': 'absolute'; 'z-index': '9999'; 'top': '-50px';"
      $flake.append(document.createTextNode('&#10052;'));
      var documentHeight = document.body.clientHeight;
      var documentWidth = document.body.clientWidth;
      var defaults = {
          minSize: 10,
          maxSize: 20,
          newOn: 1000,
          flakeColor: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
      },
      options = Object.assign({}, defaults, options);
      var interval = setInterval(function () {
          var startPositionLeft = Math.random() * documentWidth - 100,
              startOpacity = 0.5 + Math.random(),
              sizeFlake = options.minSize + Math.random() * options.maxSize,
              endPositionTop = documentHeight - 200,
              endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
              durationFall = documentHeight * 10 + Math.random() * 5000;
        var $flakeClone = $flake.cloneNode(true);
        $flakeClone.style.cssText = `
          left: ${startPositionLeft};
          opacity: ${startOpacity};
          font-size: ${sizeFlake};
          color: ${options.flakeColor};
          `;
        $flakeClone.animate([
          {
            top: endPositionTop + 'px',
            left: endPositionLeft + 'px',
            opacity: 0.2
          }
        ], {
          duration: durationFall,
          easing: 'linear'
        });
        document.body.append($flakeClone);
        setTimeout(() => {
          $flakeClone.parentElement.removeChild($flakeClone);
        }, durationFall);
        // document.body.append($flakeClone);
        //   $flake.cloneNode().appendTo('body').css({
        //       left: startPositionLeft,
        //       opacity: startOpacity,
        //       'font-size': sizeFlake,
        //       color: options.flakeColor
        //   }).animate();
      }, options.newOn);
  };
  snow({
    minSize: 5, /* 定义雪花最小尺寸 */
    maxSize: 50,/* 定义雪花最大尺寸 */
    newOn: 800  /* 定义密集程度，数字越小越密集 */
  })
})();
