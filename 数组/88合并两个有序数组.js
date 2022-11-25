/*
* 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
* 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
* 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
* 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
* */

/*
* 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
* 输出：[1,2,2,3,5,6]
* 解释：需要合并 [1,2,3] 和 [2,5,6] 。
* 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
* */
const arr1 = [2, 0];
const arr2 = [1];

const fn = (arr1, arr1Length, arr2, arr2Length) => {
	let n = arr1Length - 1;
	let m = arr2Length - 1;

	for (let i = arr1Length + arr2Length - 1; i >= 0; i--) {
		if (m < 0 || (n >= 0 && arr1[n] >= arr2[m])) {
			arr1[i] = arr1[n];
			n--;
		} else {
			arr1[i] = arr2[m];
			m--;
		}
	}

	return arr1;
};

console.log(fn(arr1, 1, arr2, 1));
