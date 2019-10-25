// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
import { Link } from '../_modules/link/link';


new Link(); // Activate Link modules logic
console.log('你来审计源代码啦！有没有兴趣来团队工作呢？email: i@linux.dog');
let nameList = [
  '兔子',
  '白墨',
  '缳淩',
  '阿月',
  '羽衣',
  '伍殿下',
  '海螺',
  '严严',
  '艾艾苡',
  '婉婉',
  '小佳',
  '祈鹿',
  '蓝泽',
  '花花',
  '慎也',
  '鸢球',
  '夜雨',
  '杨三岁',
  '琟茄',
  '556',
  '张梦蝶',
  '六道',
  '夏生',
  '橘酒',
  '静静',
  '魅臣',
  '流云',
  '东華',
  '三花',
  '清酒',
  '璃玥玥',
  '八十一',
  '倾蘼',
  '莉央',
  '颖子',
  '鼠标',
  '李元宵',
  '壳壳',
  '依依',
  '靥桦',
  '奶包',
  '二哥的女朋友',
  '张佳琪',
  '陈萌',
  '路藜',
  '诗诺',
  '天受',
  '茗柚',
  '炎之爱',
  '阿雨',
  '莯兮',
  '魏未雨辰',
  '夙轩',
  '赫映',
  '蚊子',
  '京昭',
  '午夜微薰',
  '料料',
  '妍然',
  '喵喵',
  '楼漓禹',
  '阮阮',
  '白逸尘',
  '梨子',
  '烟澜',
  '夜娘',
  '伪男',
  '冰澜',
  '熊熊']

let startButton = document.getElementById('start-button')
let luckDog = document.getElementById('lucky-dog')

startButton.onclick = () => {

  nameList.sort(function () {
    return (0.5 - Math.random());
  });

  if (nameList.length == 0) {
    luckDog.innerHTML = 'End!'
  } else {
    nameList = nameList.slice(1, nameList.length)
    luckDog.innerHTML = nameList[0]
  }



  

  console.log(`${nameList.length}`)
  console.log(luckDog)
  console.log(nameList)

}


