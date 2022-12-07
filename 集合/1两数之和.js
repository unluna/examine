/*
* 给定一个整数数组 nums 和一个整数目标值 target，
* 请你在该数组中找出 和为目标值 target 的那 两个整数，并返回它们的数组下标。
* 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
* */

/*
* 输入：nums = [2,7,11,15], target = 9
* 输出：[0,1]
* 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
* */

const arr = [2, 7, 11, 15];
const fn = (arr, target) => {
	const gather = {};
	for (let i = 0; i < arr.length; i++) {
		const num = target - arr[i]; // 7 2
		if ((gather[arr[i]] ?? "") !== "") {
			return [gather[arr[i]], i];
		} else {
			// key是差，value是索引
			gather[num] = i;
		}
	}
};
console.log(fn(arr, 9));
