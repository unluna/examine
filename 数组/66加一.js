/*
* 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一
* 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字
* 你可以假设除了整数 0 之外，这个整数不会以零开头
* */

/*
* 输入：digits = [1,2,3]
* 输出：[1,2,4]
* 解释：输入数组表示数字 123。
* */


const fn = (arr) => {
	const res = [];
	let flag = 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		// 如果当前位 + 1 得 10了，这个位置就是0，flag不用变
		if (arr[i] + flag > 9) {
			res.push(0);
		} else {
			res.push(arr[i] + flag);
			// 没有进位，flag 得 0
			flag = 0;
		}
	}
	// 如果最后flag还有，证明还得进一
	if (flag) {
		res.push(1);
	}
	const _res = [];
	// 数组反转顺序
	while (res.length){
		_res.push(res.pop());
	}
	return _res;
};
// [1,0,0,0]
console.log(fn([9, 9, 9]));













