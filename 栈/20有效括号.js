/*
* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
* 有效字符串需满足：
* 左括号必须用相同类型的右括号闭合。
* 左括号必须以正确的顺序闭合。
* 每个右括号都有一个对应的相同类型的左括号。
* */
/*
* 输入：s = "()[]{}"
* 输出：true
* */
/*
* 输入：s = "([])"
* 输出：true
* */

const fn = (str) => {
	const arr = [];
	let flag = true;
	const obj = {
		"{": "}",
		"[": "]",
		"(": ")",
	};

	str.split("").forEach((item) => {
		switch (item) {
			case "(":
			case "[":
			case "{": {
				arr.push(item);
				break;
			}
			case ")":
			case "]":
			case "}": {
				const _ = arr.pop();

				if (obj[_] !== item) {
					flag = false;
				}
				break;
			}
		}
	});
	return flag && arr.length === 0;
};

console.log(fn("({}()[])"));
