(function ($) {
	AlertMsgStore = function (state) {
		var me = this;
		
		this.state = state;
		
		this.show = function (msg_name) {
			this.state[msg_name] = true;
		}
		
		this.hide = function (msg_name) {
			this.state[msg_name] = false;
		}
		
		this.showOnly = function (msg_name) {
			this.show(msg_name);
			
			$.each(this.state, function (key) {
				if (key != msg_name)
					me.hide(key);
			});
		}
		
		this.hideAll = function () {
			$.each(this.state, function (key) {
				me.hide(key);
			});
		}
	};
	
	Vue.component('alert', {
		props: {
			type: { required: true },
			show: { default: false }
		},
		template: '<div class="alert" :class="[\'alert-\' + type, { hidden: !show }]"><slot></slot></div>'
	});
	
})(jQuery);