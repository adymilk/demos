var Toast = {};
(function (){
  var showToast = false,
    showLoad = false,
    toastNode = null,
    loadNode = null;

  Toast.install = function(Vue, options) {
    var opt = {
      position: 'top',
      duration: '1500'
    }

    for (var property in options) {
      opt[property] = options[property]
    }
      
    Vue.prototype.$toast = function(message, position) {

      var currentPosition = position ? position : opt.position; // center or top or bottom
      // toast在显示中，禁止重复显示
      if (showToast) {
        return;
      }
      // 首次触发时，创建一个节点并追加到body
      if (!toastNode) {

        var toastTpl = Vue.extend({
          data: function() {
            return {
              show: showToast,
              tip: message,
              position: 'top-toast-' + currentPosition
            }
          },
          template: '<div v-show="show" :class="position" class="top-toast">{{tip}}</div>'
        });
        toastNode = new toastTpl()
        var tpl = toastNode.$mount().$el;
        document.body.appendChild(tpl);
      }
      // 二次触发，节点已存在，只需要改变class和message
      toastNode.position = 'top-toast-' + currentPosition;
      toastNode.tip = message;

      // 显示提示框
      toastNode.show = showToast = true;

      // 显示结束
      setTimeout(function() {
        toastNode.show = showToast = false;
      }, opt.duration)
    };


    // 为toast添加方法 eg:this.$toast.top(message,position)
    ['bottom', 'center', 'top'].forEach(function(position) {
      Vue.prototype.$toast[position] = function(message) {
        return Vue.prototype.$toast(message, position)
      }
    });

    Vue.prototype.$loading = function(message, status) {
      var message = message || ''
      if (status === 'end') {
        loadNode.show = showLoad = false;
      } else {
        if (showLoad) {
          // 如果loading还在，则不再执行
          return;
        }
        var loadTpl = Vue.extend({
          data: function() {
            return {
              show: showLoad,
              tip: message
            }
          },
          template: '<div v-show="show" class="top-load-mark"><div class="top-load-box"><div class="top-loading"><div class="loading_leaf loading_leaf_0"></div><div class="loading_leaf loading_leaf_1"></div><div class="loading_leaf loading_leaf_2"></div><div class="loading_leaf loading_leaf_3"></div><div class="loading_leaf loading_leaf_4"></div><div class="loading_leaf loading_leaf_5"></div><div class="loading_leaf loading_leaf_6"></div><div class="loading_leaf loading_leaf_7"></div><div class="loading_leaf loading_leaf_8"></div><div class="loading_leaf loading_leaf_9"></div><div class="loading_leaf loading_leaf_10"></div><div class="loading_leaf loading_leaf_11"></div></div><div class="top-load-content">{{ tip }}</div></div></div>'
        });
        loadNode = new loadTpl();
        var tpl = loadNode.$mount().$el;

        document.body.appendChild(tpl);
        loadNode.show = showLoad = true;
      }
    };

    ['start', 'end'].forEach(function(status) {
      Vue.prototype.$loading[status] = function(message) {
        return Vue.prototype.$loading(message, status)
      }
    });
  }
}())