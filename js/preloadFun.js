// 图片预加载
(function($) {

    // 构造函数
    function PreLoad(imgs, options) {
        // 初始化
        // 接受传进的参数 ，并保存为自身属性
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs; //处理传进来的图片不为数组的情况
        this.opts = $.extend({}, PreLoad.DEFAULTS, options); //如果没有传递options则使用默认参数

        if(this.opts.order === 'ordered'){ // 执行有序预先加载的方法
        	this._ordered();
        }else{ // 执行无序预先加载的方法
        	this._unordered();
        }
       
         //只在内部使用 不在外部调用

    }
    //默认参数
    PreLoad.DEFAULTS = {
    		order:"unordered",//默认为无序预加载
            each: null, //每张图片加载完执行
            all: null // 所有图片加载完执行
        }
        //方法 无序
    PreLoad.prototype._unordered = function() { //无序加载
        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;

        $.each(imgs, function(i, src) {
            //判断图片路径是否为字符串 否则不往下执行
            if (typeof src != 'string') return;

            var imgObj = new Image();

            $(imgObj).on("load error", function() {

                opts.each && 　opts.each(count);
                if (count >= len - 1) {
                    opts.all && opts.all();
                }

                count++;
            })
            imgObj.src = src;
        })

    };
    // 有序
    PreLoad.prototype._ordered = function() {
        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;

          load();

          function load() {
            var imgObj = new Image();
            $(imgObj).on('load error', function() {
                opts.each && opts.each(count);
                if (count >= len) {
                  //所有图片已经加载完毕
                  opts.all && opts.all();
                } else {
                  load();
                }
                count++;
            });
            imgObj.src = imgs[count];
          }
    }
    $.extend({
        preload: function(imgs, opts) {
            new PreLoad(imgs, opts)
        }
    });

})(jQuery)
