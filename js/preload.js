$(function() {
            var imgs = ['http://weitu-650-water.bj.bcebos.com/233108461067.jpg',
                'http://weitu-650-water.bj.bcebos.com/233108463064.jpg',
                'http://weitu-650-water.bj.bcebos.com/233108452068.jpg',
                'http://weitu-650-water.bj.bcebos.com/233108458481.jpg',
                'http://weitu-650-water.bj.bcebos.com/233109176490.jpg',
                'http://weitu-650-water.bj.bcebos.com/233108462513.jpg',
                'http://mpic.tiankong.com/dfc/d2c/dfcd2cd564b4ce410e4caf40fdc5227c/F81187414782ED33684240A42F5442EA.jpg',
                'http://mpic.tiankong.com/b48/a52/b48a5247a3b635504c9537c6498111a2/F81187414782ED33684240A42F5442EA.jpg',
                'http://imglf2.ph.126.net/vGfzzl1KGNJS4C9mdVU_-w==/6631994654004786254.gif',
                'http://imglf.nosdn.127.net/img/RStjRGIvcGhlM1FMRkxiaTM2RUNlUFB6Qkw0WkJ6b3RuLy9zdlNQNzkrRy9XZWlIUVFadkh3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'],
                index = 0,
                len = imgs.length,
                $inner = $(".inner")

                // 调用无序加载插件

                $.preload(imgs, {
                    each: function(count) {
                        var b = Math.round((count + 1) / len * 100) + '%';
                        $inner.html(b).css('width', b);
                    },
                    all: function() {
                        $(".loadDiv").hide();
                    }
                })
                //左右点击事件
                $(".btn").on("click", function() {
                    if ('prev' === $(this).data('control')) { //上一张
                        index = Math.max(0, --index)
                    } else { //下一张
                        index = Math.min(++index, len - 1)
                    }
                    $("img").attr("src", imgs[index])
                })
            })
