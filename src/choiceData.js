const choiceData = [
  {
    id: 1,
    text: {
      question: '얼마나 오래 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '저는 오랫동안 꾸준히 먹을 여유가 없어요. 짧은 시간을 투자해서 즐거움을 얻고 싶어요!'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 오랜 기간을 갖고 비타민을 먹는 것을 좋아해요. 장기적인 목표를 가지고 비타민을 꾸준히 먹고 싶어요.'
          ,
        },
      ],
    },
  },
  {
    id: 2,
    text: {
      question: '특별한 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '늘 똑같은 건 지루해요. 특별한 비타민을 주세요! 따분한 일상을 탈피해서 신선한 비타민을 먹고 싶어요.'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '굳이 특별한 비타민을 먹어야 하나요? 그러다 탈나요! 익숙함이 주는 편안함이 더 좋아요.'
          ,
        },
      ],
    },
  },
  {
    id: 3,
    text: {
      question: '어떻게 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '저는 보거나 들으면서 외부세계를 받아들이거나 내면을 성찰하는 시간을 갖는 것을 좋아해요. 내적인 비타민은 없나요?'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 몸으로 표출하고 행동하는 외적인 비타민을 좋아해요. 직접 경험하는 것들에서 큰 즐거움을 느껴요!'
          ,
        },
      ],
    },
  },
  {
    id: 4,
    text: {
      question: '쉬지 않고 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '저는 여유롭게 비타민을 먹고 싶어요. 쉬었다 먹어도 괜찮은 비타민이 좋겠어요.'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 일정 시간을 투자해서 규칙적으로 비타민을 먹고싶어요! 나의 열정을 쏟아낼 수 있는 비타민을 원해요.'
          ,
        },
      ],
    },
  },
  {
    id: 5,
    text: {
      question: '어떤 효과의 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '비타민을 먹으면 무언가 얻는 것이 있어야하지 않겠어요!? 나를 대표하는 비타민을 갖거나 성취감을 얻고 싶어요!'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 비타민을 먹음으로써 얻을 수 있는 성과를 꼭 필요로 하진 않아요. 저의 감정을 다스려주는 비타민을 먹고 싶어요.'
          ,
        },
      ],
    },
  },
  {
    id: 6,
    text: {
      question: '비타민을 나눠먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '저는 많은 사람들과 함께일때보다 혼자일 때 에너지가 충전돼요. 저만의 시간을 갖고 비타민을 먹을 수 있으면 좋겠어요.'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 사람들과 함께 있을 때 편안함을 느껴요. 누군가를 만나는 것은 언제나 즐겁답니다!'
          ,
        },
      ],
    },
  },
  {
    id: 7,
    text: {
      question: '얼마짜리 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '저는 돈이 많이 들지 않는 비타민을 먹고 싶어요. 주머니가 가벼워도 즐길 수 있어야 언제든 즐길 수 있잖아요?'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 행복을 위해서라면 얼마든 투자할 수 있어요! 제가 먹고싶은 비타민을 먹을 수 있다면 가격은 중요하지 않아요.'
          ,
        },
      ],
    },
  },
  {
    id: 8,
    text: {
      question: '어디서 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '저는 실내에서 먹는 비타민을 좋아해요. 집안에서도 얼마든지 재밌게 놀 수 있어요. 이불 밖은 위험해!'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '저는 햇빛을 받아야 기분이 좋아져요. 이렇게 좋은 날 집에만 있을 수는 없어요!'
          ,
        },
      ],
    },
  },
  {
    id: 9,
    text: {
      question: '새로운 방식으로 비타민을 먹을까요?',
      choices: [
        {
          choiceId: 1,
          choiceText:
            '인생은 도전의 연속이죠! 한번도 먹어보지 못한 방법도 두렵지 않아요. 모르면 배우면 되죠. 어디 한번 먹어볼게요.'
          ,
        },
        {
          choiceId: 2,
          choiceText:
            '네? 먹는 방법을 배우라고요? 머리 쓰고 싶지 않은데.. 배우는 과정이 즐겁지많은 않아요. 저는 제가 알고있는대로 먹을래요.'
          ,
        },
      ],
    },
  },
];

export default choiceData;
