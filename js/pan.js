
// 搜索引擎的控制
var options = [
	{
		label: '搜索引擎', options: [
			{ value: 'https://www.google.com/search?q=', text: '谷歌' },
			{ value: 'https://www.baidu.com/s?wd=', text: '百度' },
			{ value: 'https://www.yahoo.com/search?q=', text: 'Yahoo' },
			{ value: 'https://www.bing.com/search?q=', text: 'Bing' }
		]
	},
	{
		label: '网盘', options: [
			{ value: 'https://yiso.fun/info?searchKey=', text: 'yiso' },
			{ value: 'https://hunhepan.com/search?q=', text: '混合盘' },
			{ value: 'https://www.cuppaso.com/search?type=1&keyword=', text: '咔帕搜索' },
			{ value: 'https://www.bifangpu.com/resource/search/', text: '资源精灵' },
			{ value: 'https://miaosou.fun/info?searchKey=', text: '秒搜' },
			{ value: 'https://www.yunso.net/index/user/s?wd=', text: '小云搜索' },
			{ value: 'https://www.daysou.com/s?q=', text: 'daysou' },
			{ value: 'https://filepursuit.com/pursuit?q=', text: 'filepursuit' }
		]
	}
];

// 创建`select`元素
var selectElement = document.createElement('select');
selectElement.id = 'searchEngine';

for (var i = 0; i < options.length; i++) {
	var optgroupElement = document.createElement('optgroup');
	optgroupElement.label = options[i].label;

	for (var j = 0; j < options[i].options.length; j++) {
		var optionElement = document.createElement('option');
		optionElement.value = options[i].options[j].value;
		optionElement.textContent = options[i].options[j].text;
		optgroupElement.appendChild(optionElement);
	}

	selectElement.appendChild(optgroupElement);
}

// 将`select`添加到元素后面
var searchInput = document.querySelector('input[name="search"]');
searchInput.parentNode.insertBefore(selectElement, searchInput.nextSibling);
// =================================================================================================
// 网盘搜索按钮
var netDiskButton = document.createElement('button');
netDiskButton.textContent = '网盘';

// 添加点击事件处理程序
netDiskButton.addEventListener('click', function () {
	var input = document.querySelector('input[name="search"]').value; // 获取输入框中的内容
	for (var i = 0; i < options.length; i++) {
		if (options[i].label === '网盘') { // 只遍历标签为"搜索引擎"的选项
			for (var j = 0; j < options[i].options.length; j++) {
				var url = options[i].options[j].value + encodeURIComponent(input); // 构造搜索的URL
				window.open(url, '_blank'); // 在新窗口打开该URL
			}
		}
	}
});

// 将`button`添加到指定位置
selectElement.parentNode.insertBefore(netDiskButton, selectElement.nextSibling);
// =================================================================================================
// 创建搜索按钮
var searchButton = document.createElement('button');
searchButton.textContent = '搜索';

// 添加点击事件处理程序
searchButton.addEventListener('click', function () {
	var input = document.querySelector('input[name="search"]').value; // 获取输入框中的内容
	var selectedOption = document.getElementById('searchEngine').value; // 获取下拉列表中选中的搜索引擎
	var url = selectedOption + encodeURIComponent(input); // 构造搜索的URL
	window.open(url, '_blank'); // 在新窗口打开该URL
});

// 将搜索按钮添加到指定位置
selectElement.parentNode.insertBefore(searchButton, selectElement.nextSibling);

// 使用JS调整样式
// 搜索框外面的样式
var formElement = document.querySelector('form.filter[role="search"]');
formElement.style.maxWidth = '900px';
// 搜索框的样式
var form = document.querySelector('input[name="search"]');
form.style.maxWidth = '50%';
selectElement.style.width = '60px';
selectElement.style.padding = '1px';
selectElement.style.fontSize = '14px';
selectElement.style.height = '33.2px';

// button的样式
netDiskButton.style.marginLeft = '2px';
searchButton.style.marginLeft = '4px';
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
	// button.style.padding = '8px 12px';
	button.style.width = '60px';
	button.style.fontSize = '14px';
	button.style.height = '34.2px';
});
