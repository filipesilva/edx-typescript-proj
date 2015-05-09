define(["require", "exports"], function (require, exports) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPainterList = function (painterList) {
            var painterSelect = document.getElementById('PainterList');
            painterList.items.forEach(function (painter) {
                var opt = document.createElement('option');
                opt.innerHTML = painter.name;
                painterSelect.appendChild(opt);
            });
        };
        Renderer.prototype.renderPainter = function (painterList) {
            var el = document.getElementById('PainterList');
            try {
                var painter = painterList.items
                    .filter(function (item) { return item.name === el.value; })
                    .reduce(function (item) { return item; });
                var el = document.getElementById('style');
                el.innerHTML = painter.style;
            }
            catch (ex) {
                alert(ex.message);
            }
        };
        Renderer.prototype.renderError = function () {
            var examples = document.getElementById('examples');
            examples.value = 'Unable to load data!';
        };
        return Renderer;
    })();
    exports.Renderer = Renderer;
});
