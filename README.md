# React + TypeScript) 초성 게임
React, TypeScript, Tailwind CSS 사용  
초성을 분리하는 코드는 [스크립터님의 네이버 블로그](https://blog.naver.com/tk2rush90/221085154547)를 참고했습니다.  
배포는 netlify를 사용했습니다. [netlify 배포 링크](https://zz1qwop-ts-mini-game.netlify.app/)
## 기능
### 1. 초성 바꾸기
- start 화면입니다.
- 초성 바꾸기 버튼을 눌러 게임할 초성을 변경할 수 있습니다. 하단의 start 버튼을 누르면 게임이 시작됩니다.
<br/>

![초성 바꾸기](https://github.com/zz1qwop/ts-mini-game/assets/84325395/7953a357-c795-47fb-b056-b9cc5455a378)
### 2. 단어 입력하기
#### 2-1. 초성에 맞는 단어
- 폼에 초성에 맞는 단어를 입력합니다. 한 칸에는 한 글자만 입력 가능하며, enter를 눌렀을 때 적절한 단어일 경우 제출이 됩니다.
- 지금까지 제출한 단어는 하단의 리스트에서 볼 수 있습니다.
- 타이머는 한 단어 당 8초가 주어집니다. 단어를 제출하면 8초가 새로 세팅됩니다.
<br/>

![초성 입력하기](https://github.com/zz1qwop/ts-mini-game/assets/84325395/88246807-8ebc-41ec-bd86-fa94133de09e)
#### 2-2. 중복된 단어
- 이미 제출한 단어를 또 제출했을 시 폼이 초기화 되며 하단에 '이미 입력된 단어입니다'라는 알림이 뜹니다.
<br/>

![중복 단어 입력](https://github.com/zz1qwop/ts-mini-game/assets/84325395/68fd8bb5-cd64-4083-85d3-aa4db46b0b0d)
#### 2-3. 초성에 맞지 않는 단어
- 초성에 맞지 않는 단어를 입력했을 경우 Enter를 눌러도 제출되지 않습니다.
<br/>

![다른 초성 입력](https://github.com/zz1qwop/ts-mini-game/assets/84325395/fb59d7e0-b8af-4628-a989-1ae2f9ffa10c)
### 3. 시간 초과 시 게임 종료
- 시간이 초과되면 게임이 자동으로 종료되며 end 페이지로 이동합니다.
- 지금까지 작성한 단어를 확인할 수 있으며 다시 시작하기 버튼을 눌러 start 페이지로 이동할 수 있습니다.
<br/>

![게임 종료](https://github.com/zz1qwop/ts-mini-game/assets/84325395/915d94ba-70ef-47a2-b62d-2d3a857106ea)

---

더 자세한 내용은 [블로그](https://velog.io/@zz1qwop/React-TypeScript-%EC%B4%88%EC%84%B1-%EA%B2%8C%EC%9E%84)에서 보실 수 있습니다.
